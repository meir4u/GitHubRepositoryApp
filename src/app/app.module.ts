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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ListComponent,
    BookmarkComponent,
    RepositoryCardComponent
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
