import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './routes/auth/login/login.component';
import { ConsultInvoicesComponent } from './routes/consult-invoices/consult-invoices/consult-invoices.component';
import { PdfViewerComponent } from './shared/components/pdf-viewer/pdf-viewer.component';
import { UserProfileComponent } from './routes/user-profile/user-profile.component';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'app-consult-invoices', component: ConsultInvoicesComponent},
  { path: 'pdf-viewer', component: PdfViewerComponent},
  { path: 'app-user-profile', component: UserProfileComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
