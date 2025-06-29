import { Injectable } from '@angular/core';
import { PeriodicElement } from '../table/types/types';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}
  getElements(): Observable<PeriodicElement[]> {
    const url = './assets/data.json';
    return this.httpClient.get<PeriodicElement[]>(url);
  }
}
