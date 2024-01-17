import { ComponentFixture, TestBed, waitForAsync, fakeAsync, tick } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ConsultInvoicesComponent } from './consult-invoices.component';
import { Storage } from '@ionic/storage-angular';
import { HttpClientModule } from '@angular/common/http';
import { PdfService } from 'src/app/shared/services/pdf/pdf.service';
import { of } from 'rxjs';

describe('ConsultInvoicesComponent', () => {
  let component: ConsultInvoicesComponent;
  let fixture: ComponentFixture<ConsultInvoicesComponent>;
  let pdfServiceSpy: jasmine.SpyObj<PdfService>;

  beforeEach(
    waitForAsync(() => {
      const pdfServiceMock = jasmine.createSpyObj('PdfService', ['downloadPdf', 'openPdf']);
      TestBed.configureTestingModule({
        declarations: [ConsultInvoicesComponent],
        imports: [IonicModule.forRoot(), HttpClientModule],
        providers: [
          Storage,
          { provide: PdfService, useValue: pdfServiceMock },
        ],
      }).compileComponents();

      pdfServiceSpy = TestBed.inject(PdfService) as jasmine.SpyObj<PdfService>;
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call downloadPdf when downloadPdf is invoked', fakeAsync(() => {
    pdfServiceSpy.downloadPdf.and.stub();
    component.downloadPdf();
    tick();
    expect(pdfServiceSpy.downloadPdf).toHaveBeenCalledOnceWith('FacturaLuz');
  }));

  it('should call openPdf when openPdf is invoked', fakeAsync(() => {
    pdfServiceSpy.openPdf.and.stub();
    component.openPdf();
    tick();
    expect(pdfServiceSpy.openPdf).toHaveBeenCalledOnceWith('FacturaLuz');
  }));

});
