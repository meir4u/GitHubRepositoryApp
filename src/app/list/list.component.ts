import { Component, OnInit } from '@angular/core';
import { GithubRepository } from '../_models/github-repository';
import { GithubRepositoryService } from '../_services/github-repository.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  githubRepositories: GithubRepository[] | undefined;
  githubRepositories$: Observable<GithubRepository[]> | undefined;

  constructor(private githubRepositoryService: GithubRepositoryService) { }

  ngOnInit(): void {
    this.githubRepositoryService.searchRepository("m").subscribe({
      next: repositories => {
        if (repositories) {
          this.githubRepositories = repositories;
        }
      },
      error: error => console.log(error)
    });

    this.githubRepositories$ = this.githubRepositoryService.searchRepository("m");
    this.githubRepositories$.subscribe(data => console.log(data));
  }

  
}
