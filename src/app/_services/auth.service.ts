import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../_interfaces/auth';
import { Token } from '../_interfaces/token';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "http://flp-api.francecentral.cloudapp.azure.com/auth/login"

  constructor(
    private httpClient: HttpClient,
  ) { }


  login(credentials:User):Observable<Token>{
    return this.httpClient.post<Token>(this.url, credentials);
  }
}
