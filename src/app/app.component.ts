import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NewsWebsite';
  selectedCategory: string = '';
  
  constructor(private http:HttpClient,private router: Router) {
   }
   searchNews(selectedCategory: string) {
    // After fetching data, navigate to the search result component
    this.router.navigate(['/search-result'], {state : {selectedCategory : selectedCategory}} );
  }
} 
