import { Component, OnInit } from '@angular/core';
import { GithubRepositoryService } from '../_services/github-repository.service';
import { GithubRepository } from '../_models/github-repository';
import { Observable } from 'rxjs';
import { ESearchType } from '../_models/search-types';

@Component({
  selector: 'app-search-by-username',
  templateUrl: './search-by-username.component.html',
  styleUrls: ['./search-by-username.component.scss']
})
export class SearchByUsernameComponent implements OnInit {
  //githubRepositories: GithubRepository[] | undefined;
  githubRepositories$: Observable<GithubRepository[]> | undefined;
  searchType: ESearchType = ESearchType.searchBuUsername;

  constructor(
    private githubRepositoryService: GithubRepositoryService
  ) { }

  ngOnInit(): void {

  }

  onSearchChanged(repositories$: Observable<GithubRepository[]> | undefined) {
    this.githubRepositories$ = repositories$;
  }
}
