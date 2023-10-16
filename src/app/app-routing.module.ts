import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadlinesComponent } from './headlines/headlines.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { SportsComponent } from './sports/sports.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
const routes: Routes = [
  {path:'',component:HeadlinesComponent},
  {path:'technology',component:TechNewsComponent},
  {path:'sports',component:SportsComponent},
  {path:'search-result',component:SearchResultComponent},
  {path:'subs',component:SubscribeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
