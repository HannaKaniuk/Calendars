// src/app/exhibition.service.ts

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Exhibition } from './exhibition.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class ExhibitionService {
//   private apiUrl = 'http://localhost:3000/exhibitions';

//   constructor(private http: HttpClient) {}

//   getExhibitions(): Observable<Exhibition[]> {
//     return this.http.get<Exhibition[]>(this.apiUrl);
//   }

//   addExhibition(exhibition: Exhibition): Observable<Exhibition> {
//     return this.http.post<Exhibition>(this.apiUrl, exhibition);
//   }

//   updateExhibition(id: string, exhibition: Exhibition): Observable<Exhibition> {
//     const url = `${this.apiUrl}/${id}`;
//     return this.http.put<Exhibition>(url, exhibition);
//   }

//   deleteExhibition(id: string): Observable<any> {
//     const url = `${this.apiUrl}/${id}`;
//     return this.http.delete(url);
//   }
// }
