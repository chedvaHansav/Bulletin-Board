import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 
import { Ad } from '../models/ad.model'; 

@Injectable({ providedIn: 'root' }) 
export class AdService { private apiUrl = 'https://localhost:44322/api/Ad';//'http://localhost:5000/api/ads'; 
constructor(private http: HttpClient) { } 
getAds(): Observable<Ad[]> { return this.http.get<Ad[]>(this.apiUrl); } 
// קבלת מודעה לפי ID 
getAd(id: number): Observable<Ad> { return this.http.get<Ad>(`${this.apiUrl}/${id}`); }
 // הוספת מודעה 
 addAd(ad: Ad): Observable<Ad> { return this.http.post<Ad>(this.apiUrl, ad); } 
 // עדכון מודעה 
 updateAd(id: number, ad: Ad): Observable<void> { return this.http.put<void>(`${this.apiUrl}/${id}`, ad); } 
 // מחיקת מודעה 
 deleteAd(id: number): Observable<void> { return this.http.delete<void>(`${this.apiUrl}/${id}`); } }