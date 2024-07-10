import { Component, Input, OnInit } from '@angular/core';
import { GithubRepository } from '../../_models/github-repository';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-repository-card',
  templateUrl: './repository-card.component.html',
  styleUrls: ['./repository-card.component.scss']
})
export class RepositoryCardComponent implements OnInit {
  
  @Input() githubRepository: GithubRepository | undefined;

  ngOnInit(): void {
    debugger;
    console.log(this.githubRepository);
  }

  bookmark() {
    console.log("bookmarked!");
  }

  sendEmail() {
    console.log("email send!");
  }

  unbookmark() {
    console.log("unbookmarked!");
  }
}
