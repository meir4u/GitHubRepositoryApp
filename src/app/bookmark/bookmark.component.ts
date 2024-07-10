import { Component } from '@angular/core';
import { GithubRepository } from '../_models/github-repository';
import { GithubRepositoryService } from '../_services/github-repository.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent {

  githubRepositories: GithubRepository[] | undefined;

  constructor(private githubRepositoryService: GithubRepositoryService) { }

  ngOnInit(): void {
    this.githubRepositoryService.searchRepository("m").subscribe({
      next: repositories => {
        if (repositories) {
          this.githubRepositories = repositories;
        }
      },
      error: error => console.log(error)
    })
  }


}
