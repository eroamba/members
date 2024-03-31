import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, map } from 'rxjs';
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

  getMember(id: string | null): Observable<Member | undefined>{
    return this.getAllMembers().pipe(
      map(members => members.data.find((member: Member) => member._id === id))
    );
  }
  updateMember(member:Member):Observable<Member>{
    const url = `${this.url}/${member._id}`;
    return this.http.put<Member>(url,member)  
  }

}
