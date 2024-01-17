import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PdfViewerComponent {

  pdfSrc: string = "";

  constructor(
    private route: ActivatedRoute
    ) {
    pdfDefaultOptions.doubleTapZoomFactor = '150%'; 
    pdfDefaultOptions.maxCanvasPixels = 4096 * 4096 * 5;
    
    this.route.queryParams.subscribe((params) => {
      this.pdfSrc = params['pdfUrl']
    })
  }
  
}

  
      
