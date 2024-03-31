import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { Member } from '../../_interfaces/member';
import { MembersService } from '../../_services/members.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  member: Member = {
    _id:"",
    civilite: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    user_type: "",
    status: true,
    profileUrl: "",
    __v: 0
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private memberService: MembersService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.getMember()
      
  }

  getMember(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.memberService.getMember(id).subscribe(member => {
      if (member) {
        this.member = member;
        console.log("*** de mon component", this.member)
      } 
    });
  }

  saveData(editForm:NgForm){
    if (editForm.valid) {
      this.memberService.updateMember(this.member).subscribe(updatedMember => {
        console.log("Membre mis à jour:", updatedMember);
        this.router.navigate(['members']);
        // Vous pouvez ajouter ici une redirection ou un message de confirmation
      });
    } 
    console.log("Les valeurs du formuaire: ",editForm.value);
    
    
  }

}
