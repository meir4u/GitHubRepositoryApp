import { Component, OnInit } from '@angular/core';
import { GithubRepository } from '../_models/github-repository';
import { GithubRepositoryService } from '../_services/github-repository.service';
import { Observable } from 'rxjs';
import { ESearchType } from '../_models/search-types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  //githubRepositories: GithubRepository[] | undefined;
  githubRepositories$: Observable<GithubRepository[]> | undefined;
  searchType: ESearchType = ESearchType.search;
  constructor(
    private githubRepositoryService: GithubRepositoryService
  ) { }

  ngOnInit(): void {
  }

  onSearchChanged(repositories$: Observable<GithubRepository[]> | undefined) {
    this.githubRepositories$ = repositories$;
  }

  
}
