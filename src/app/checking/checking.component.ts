import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordReset, UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checking.component.html',
  styleUrl: './checking.component.css'
})
export class CheckingComponent {
username:string="";
passwordquestion:string="What is your favourite color ?";
password:string="";
show:boolean=false;
message:string="";
passwordanswer:string="";

passwordreset:PasswordReset=new PasswordReset('','','');

constructor(private userservice:UserService, private router:Router){
  
}

updatepassword(){
  this.userservice.updatepassword(this.username, this.password).subscribe(answer=>{this.router.navigateByUrl('login')});
}

checking(){
  this.passwordreset.username=this.username;
  this.passwordreset.passwordanswer=this.passwordanswer;
  this.userservice.checking(this.passwordreset).subscribe(answer=>{
    if(answer){
      this.show=true;
      this.message="";
    }
    else{
      this.message="wrong answer. Try Again";
    }
  })
}

}
