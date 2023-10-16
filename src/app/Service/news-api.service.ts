import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  
  constructor(private http:HttpClient) {
   
   }
   topSportsApiUrl='https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=d49f71f8b03a4b57a9493135bae63750'
   topHeadLinesApiUrl='https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=d49f71f8b03a4b57a9493135bae63750';
   techNewsApiUrl='https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=d49f71f8b03a4b57a9493135bae63750';
   sportsNews():Observable<any>{
    return this.http.get(this.topSportsApiUrl);
   }
   topheadlines():Observable<any>{
    return this.http.get(this.topHeadLinesApiUrl);
   }
   technologyNews():Observable<any>{
    return this.http.get(this.techNewsApiUrl);
   }
   
}
