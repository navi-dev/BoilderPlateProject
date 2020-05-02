import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonHttpServiceService {
  baseURI = 'http://localhost:56141/api/';
  constructor(private http: HttpClient) { }

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(this.getURI(url));
  }

  Post<T>(url: string, data: T): Observable<T> {
    return this.http.post<T>(this.getURI(url), data);
  }

  private getURI(uri: string): string {
    return this.baseURI + uri;
  }
}
