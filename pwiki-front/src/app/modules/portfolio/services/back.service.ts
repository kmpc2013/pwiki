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

  public deleteDocs(documents: IDocuments): Observable<IDocuments[]> {
    return this.http
      .delete<IDocuments[]>(`${this.SERVER_URL}/pwiki/${documents.id}`)
      .pipe(retry(2));
  }

  public editDocs(documents: IDocuments): Observable<IDocuments[]> {
    return this.http
      .put<IDocuments[]>(`${this.SERVER_URL}/pwiki/${documents.id}`,documents)
      .pipe(retry(2));
  }

  public createDocs(documents: IDocuments): Observable<IDocuments[]> {
    return this.http
      .post<IDocuments[]>(`${this.SERVER_URL}/pwiki`,documents)
      .pipe(retry(2));
  }
}
