import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject,tap } from 'rxjs';

import { User } from '../_interfaces/auth';
import { Token } from '../_interfaces/token';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user: BehaviorSubject<any | null> = new BehaviorSubject(null);

  url= "https://preprod-api.wilyz.com/api/auth/login"

  constructor(
    private httpClient: HttpClient,
  ) { }


  get user$(): Observable<any>
    {
        return this._user.asObservable();
    }

  login(credentials:User):Observable<any>{
    return this.httpClient.post<any>(this.url, credentials).pipe(tap((response: any) =>
    {
        this._user.next(response);
        console.log(response);
    }))
  }



}
