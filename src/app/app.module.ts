import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ListComponent } from './list/list.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { RepositoryCardComponent } from './repositories/repository-card/repository-card.component';
import { SharedModule } from './_modules/shared.module';
import { SearchComponent } from './repositories/search/search.component';
import { SearchByUsernameComponent } from './search-by-username/search-by-username.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ListComponent,
    BookmarkComponent,
    RepositoryCardComponent,
    SearchComponent,
    SearchByUsernameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
