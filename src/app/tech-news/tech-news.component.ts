import { Component } from '@angular/core';
import { NewsApiService } from '../Service/news-api.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent {
  constructor(private service: NewsApiService) {

  }
  technologyNewsResult: any = [];
  ngOnInit(): void {
    this.service.technologyNews().subscribe((result) => {
      // console.log(result.articles);
      this.technologyNewsResult= result.articles;
    })
  }
}
