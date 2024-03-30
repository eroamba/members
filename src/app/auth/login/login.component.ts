import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from '../../_interfaces/auth';
import { Token } from '../../_interfaces/token';
import { AuthService } from '../../_services/auth.service';
import { TokenService } from '../../_services/token.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ){}

  ngOnInit(): void {
      
  }

  saveData(registerForm:NgForm){
    console.log("Les valeurs du formuaire: ",registerForm.value);
    
    this.authService.login(registerForm!.value).subscribe(
      (data:Token) => {
        console.log(data.access_token)
        this.tokenService.saveToken(data.access_token)
      },
      (error:any) => console.log(error)
    );
    
  }

}
