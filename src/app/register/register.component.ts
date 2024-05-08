import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordReset, User, UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  passwordreset:PasswordReset=new PasswordReset('','','');
  passwordanswer:string="";
  passwordquestion:string="What is your favourite color ?";
    user:User=new User('','','','');
    constructor(private userservice:UserService, private router:Router){

    }
    loginhere(){
      this.router.navigate(['login']);
    }

    saveDB(){
      this.userservice.saveDB(this.user).subscribe();
      this.passwordreset.username=this.user.username;
      this.passwordreset.passwordquestion=this.passwordquestion;
      this.passwordreset.passwordanswer=this.passwordanswer;

      this.userservice.saveDB2(this.passwordreset).subscribe();
      
      this.router.navigate(['login']);
      sessionStorage.setItem("message", "Registration Successful.Please Login Now ");
    }
}
