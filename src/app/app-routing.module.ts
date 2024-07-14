import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { SearchByUsernameComponent } from './search-by-username/search-by-username.component';
import { BookmarkComponent } from './bookmark/bookmark.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '',
    children: [
      { path: 'list', component: ListComponent },
      { path: 'search-by-username', component: SearchByUsernameComponent },
      { path: 'bookmark', component: BookmarkComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
