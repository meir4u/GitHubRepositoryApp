import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  baseUrl = environment.apiUrl;
  sessionId: string;

  constructor(
    private http: HttpClient
  ) {
    this.sessionId = this.generateSessionId();
  }

  private generateSessionId(): string {
    var sessionId = 'session-' + Math.random().toString(36).substr(2, 9);
    return sessionId;
  }

  public isSessionExist() {

  }
}
