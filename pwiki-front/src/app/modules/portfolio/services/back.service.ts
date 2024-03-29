import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { IDocuments } from '../interface/IDocuments.interface';

@Injectable({
  providedIn: 'root',
})
export class BackService {
  SERVER_URL = '/api';
  constructor(private http: HttpClient) {}

  public getDocs(): Observable<IDocuments[]> {
    return this.http
      .get<IDocuments[]>(`${this.SERVER_URL}/pwiki`)
      .pipe(retry(2));
  }
}
