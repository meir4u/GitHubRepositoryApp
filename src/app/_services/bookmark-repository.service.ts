import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GithubRepository } from '../_models/github-repository';
import { SessionService } from './session.service';
import { environment } from '../../environments/environment';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookmarkRepositoryService {
  baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private sessionService: SessionService
  ) { }

  addBookmark(bookmarkedRepository: GithubRepository) {
    //this.http.post
  }

  getBookmarks() {
    return this.http.get<GithubRepository[]>(this.baseUrl + `Bookmark/GetAll/${this.sessionService.sessionId}`).pipe(take(1));
  }

  deleteBookmark(bookmarkedRepositoryId: number) {
    return this.http.delete<boolean>(this.baseUrl + `Bookmark/edit/${this.sessionService.sessionId}/${bookmarkedRepositoryId}`);
  }
}
