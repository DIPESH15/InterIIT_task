import { Component } from '@angular/core';
import { NewsApiService } from '../Service/news-api.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent {
  constructor(private service: NewsApiService) {

  }
  topSportsResult: any = [];
  ngOnInit(): void {
    this.service.topheadlines().subscribe((result) => {
      // console.log(result.articles);
      this.topSportsResult = result.articles;
    })
  }
}
