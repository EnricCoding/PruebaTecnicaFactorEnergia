import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import { Filesystem, Directory }  from '@capacitor/filesystem';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor(
    private router: Router
    ) { }

   async downloadPdf(pdfName: string) {
    const pdfUrl = `./../../../assets/pdf/${pdfName}.pdf`; // Ruta del PDF
    try {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = `${pdfName}.pdf`;
      link.click();
    }
     catch (error) {
      throw(`Error al descargar y abrir el PDF ${error}`);
    }
  }

  openPdf(pdfName: string) {
    const pdfUrl = `./../../../../../assets/pdf/${pdfName}.pdf`; 
    this.router.navigate(['/pdf-viewer'], { queryParams: { pdfUrl } });
  }

}
