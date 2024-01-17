import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './routes/auth/login/login.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { ConsultInvoicesComponent } from './routes/consult-invoices/consult-invoices/consult-invoices.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatIconModule } from '@angular/material/icon';
import { DateFormatPipe } from './pipe/date-format.pipe';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PdfViewerComponent } from './shared/components/pdf-viewer/pdf-viewer.component';
import { UserProfileComponent } from './routes/user-profile/user-profile.component';
import { Storage, IonicStorageModule, StorageConfig } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';

 //Configuración de IonicStorageModule
 const storageConfig: StorageConfig = {
   name: '__mydb',
   driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
 };

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ModalComponent,
    ConsultInvoicesComponent,
    UserProfileComponent,
    DateFormatPipe,
    PdfViewerComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    BrowserAnimationsModule,
    MatTableModule, 
    MatSortModule, 
    MatPaginatorModule,
    MatIconModule,
    NgxExtendedPdfViewerModule,
    IonicStorageModule.forRoot(storageConfig),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Storage],
  bootstrap: [AppComponent],
})
export class AppModule {}
