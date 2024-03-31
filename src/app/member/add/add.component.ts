import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';

import { CMember } from '../../_interfaces/member';
import { MembersService } from '../../_services/members.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit {


  member: CMember = new CMember();

  constructor(
    private memberService: MembersService,
    private router: Router
  ){}
  ngOnInit(): void {
      
  }
  saveData(editForm: NgForm): void {
    if (editForm.valid) {
      const formData = new FormData();
      formData.append('civilite', this.member.civilite||"");
      formData.append('first_name', this.member.first_name||"");
      formData.append('last_name', this.member.last_name||"");
      formData.append('phone', this.member.phone||"");
      formData.append('status', this.member.status ? 'true' : 'false');  
      formData.append('email', this.member.email||"");
      formData.append('user_type', this.member.user_type||"");
      formData.append('image', this.member.profileUrl||"");

      this.memberService.createMember(formData).subscribe(createMember => {
        console.log("Membre ajouté:", createMember);
        this.router.navigate(['members']);
        
      });
    } 
  }

}
