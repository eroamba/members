import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from '../_interfaces/member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  url = 'https://preprod-api.wilyz.com/api/members'

  constructor(private http: HttpClient) { }

  getAllMembers(): Observable<any>{
    return this.http.get<any>(this.url)
  }

  getMember(id: string | null): Observable<Member>{
    return this.http.get<any>(this.url+'/'+id)
  }
}
