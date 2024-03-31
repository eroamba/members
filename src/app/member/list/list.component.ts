import { Component, OnInit } from '@angular/core';
import { Member } from '../../_interfaces/member';
import { MembersService } from '../../_services/members.service';
import { TokenService } from '../../_services/token.service';
import { AuthService } from '../../_services/auth.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  members?:Member[];
  user?:any;

  constructor(
    private authService: AuthService,
    private memberService: MembersService,
    private tokenService: TokenService
  ){
    this.authService.user$.subscribe(
      (user) =>
      {   console.log(user);
          this.user = user.user;
      }
  )
  }


  ngOnInit(): void {

    this.memberService.getAllMembers().subscribe(
      member => {  
        console.log(member)  
        this.members = member.data
        console.log(this.members)
    })
      
  }

  logout():void{
    this.tokenService.clearToken()
  }

}
