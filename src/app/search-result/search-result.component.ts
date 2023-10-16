import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {

  newsArticles: any[] = [];
  title:string="";

  constructor(private http: HttpClient, private router: Router, private location: Location) {

  }
  ngOnInit(): void {
    try {
      const apiKey = 'd49f71f8b03a4b57a9493135bae63750';
      const data = this.location.getState() as { selectedCategory: string }; // Type assertion here
      console.log(data);
      const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${data.selectedCategory}&apiKey=${apiKey}`;
      this.http.get(apiUrl).subscribe((response: any) => { // Specify the type of response if necessary
        this.newsArticles = response.articles;
        this.title=data.selectedCategory;
      });
    } catch (error) {
      console.log(error);
    }
  }
  
  

}
