import { TestBed } from '@angular/core/testing';

import { ConsultInvoicesService } from './consult-invoices.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

describe('ConsultInvoicesService', () => {
  let service: ConsultInvoicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule],
      providers: [
        HttpClient,
        HttpHandler
      ]
    });
    service = TestBed.inject(ConsultInvoicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
