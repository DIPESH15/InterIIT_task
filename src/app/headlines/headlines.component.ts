import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../Service/news-api.service';


@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.css']
})
export class HeadlinesComponent implements OnInit {
  constructor(private service: NewsApiService) {

  }
  topHeadlinesResult: any = [];
  ngOnInit(): void {
    this.service.topheadlines().subscribe((result) => {
      // console.log(result.articles);
      this.topHeadlinesResult = result.articles;
    })
  }
}
