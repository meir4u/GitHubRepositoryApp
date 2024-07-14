import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, debounceTime, distinctUntilChanged } from 'rxjs';
import { GithubRepository } from '../../_models/github-repository';
import { GithubRepositoryService } from '../../_services/github-repository.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ESearchType } from '../../_models/search-types';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchControl = new FormControl('');
  searchForm = new FormGroup({
    searchControl: this.searchControl
  });

  githubRepositories$: Observable<GithubRepository[]> | undefined;
  @Output() searchChanged = new EventEmitter<Observable<GithubRepository[]>>();
  @Input() searchType: ESearchType | undefined;

  constructor(
    private githubRepositoryService: GithubRepositoryService
  ) { }

    ngOnInit(): void {
      this.searchControl.valueChanges
        .pipe(
          debounceTime(300), // wait for 300ms pause in events
          distinctUntilChanged() // ignore if next search term is same as previous
        )
        .subscribe(value => {
          if (value !== null && value.trim() !== null) {
            switch (this.searchType) {
              case ESearchType.searchBuUsername:
                this.searchByUsernameRepositories(value);
                break;
              default:
                this.searchRepositories(value);
            }
            
          } else {
            this.githubRepositories$ = undefined;
            this.searchChanged.emit(this.githubRepositories$);
          }
        });
    }

  searchRepositories(toSearch: string) {
    console.log(toSearch);
    this.githubRepositories$ = this.githubRepositoryService.searchRepository(toSearch);
    this.searchChanged.emit(this.githubRepositories$);
  }

  searchByUsernameRepositories(toSearch: string) {
    console.log(toSearch);
    this.githubRepositories$ = this.githubRepositoryService.getAllRepositoriesByUsername(toSearch);
    this.searchChanged.emit(this.githubRepositories$);
  }
}
