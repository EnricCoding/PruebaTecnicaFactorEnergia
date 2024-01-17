import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from 'src/app/models/invoice.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultInvoicesService {

  constructor(private http: HttpClient) { }

  getInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>('../../assets/data/data.json');
  }

}
