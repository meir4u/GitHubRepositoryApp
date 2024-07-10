import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BehaviorSubject, map } from 'rxjs';
import { GithubRepository } from '../_models/github-repository';

@Injectable({
  providedIn: 'root'
})
export class GithubRepositoryService {
  baseUrl = environment.apiUrl;
  private githubRepositorySourse = new BehaviorSubject<GithubRepository | null>(null);
  githubRepository$ = this.githubRepositorySourse.asObservable();

  constructor(
    private http: HttpClient,
  ) { }

  searchRepository(search: string) {
    return this.http.get<GithubRepository[]>(this.baseUrl + 'GithubRepository/search?toSearch=s')
  }

  bookmarkRepository(bookmarkedRepository: GithubRepository) {

  }
}
