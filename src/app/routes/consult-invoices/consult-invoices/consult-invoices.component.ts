import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { ConsultInvoicesService } from './services/consult-invoices.service';
import { Invoice } from 'src/app/models/invoice.model';
import { MatTableDataSource } from '@angular/material/table';
import { PdfService } from 'src/app/shared/services/pdf/pdf.service';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-consult-invoices',
  templateUrl: './consult-invoices.component.html',
  styleUrls: ['./consult-invoices.component.scss'],
})
export class ConsultInvoicesComponent  implements OnInit {

  userCredentials: User = { userName: "", password: "", email: "", address: "", registrationDate: new Date(), photoUrl: "" };
  invoices: Invoice[] = [];

  displayedColumns: (keyof Invoice)[] = ['invoiceName', 'invoiceDate', 'invoiceAmount', 'invoiceAddress', 'invoicePdfUrl'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  constructor(
    private authService: AuthService,
    private consultInvoiceService: ConsultInvoicesService,
    private pdfService: PdfService
  ) { }

  ngOnInit() {
    this.authService.getUserCredentials().then((credentials: User) => {
      if (credentials) this.userCredentials = credentials;
    })
    this.loadInvoices();
  }

  loadInvoices() {
    this.consultInvoiceService.getInvoices().subscribe({
      next: (invoices: Invoice[]) => {
        if (invoices) {
          this.invoices = invoices
          this.dataSource.data = invoices
        }
      },
      error: (e) => {
        throw(`Se ha producido un error ${e}` )
      }
    })
  }

  downloadPdf() {
    let pdfName = 'FacturaLuz'
    this.pdfService.downloadPdf(pdfName);
  }

  openPdf() {
    let pdfName = 'FacturaLuz'
    this.pdfService.openPdf(pdfName);
  }

  isMobile() {
    if (Capacitor.isNativePlatform())  {
      return true;
    } else {
      return false;
    }
  }

}
