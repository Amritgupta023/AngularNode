import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor(private http:HttpClient) {

   }

   getJson(): Observable<any> {
    return this.http.get('/api/json');
    //return this.http.get('http://localhost:3000/json');
    
  }
}
