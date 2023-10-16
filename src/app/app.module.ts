import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { NewsApiService } from './Service/news-api.service';
import {HttpClientModule} from '@angular/common/http';
import { SportsComponent } from './sports/sports.component';
import { FormsModule } from '@angular/forms';
import { SearchResultComponent } from './search-result/search-result.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
@NgModule({
  declarations: [
    AppComponent,
    HeadlinesComponent,
    TechNewsComponent,
    SportsComponent,
    SearchResultComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
