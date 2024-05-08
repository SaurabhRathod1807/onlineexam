import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User, UserService } from '../user.service';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit{

subject:string="";

message:any="";

subjects:string[]=[];

user:User= new User('','','','');

constructor(private userservice:UserService, private router:Router, private questionservice:QuestionService){
  
}

ngOnInit(): void {
  this.message=sessionStorage.getItem("message");

  this.questionservice.getsubject().subscribe(subjects=>this.subjects=subjects)
}

  showregister(){
    this.router.navigate(['register']);
  }

  check(){
    this.userservice.check(this.user).subscribe(answer=>{
      if(answer){
        this.router.navigate(['question']);
        sessionStorage.setItem("username", this.user.username);
        sessionStorage.setItem("subject", this.subject);
      }
      else{
        this.router.navigate(['login']);
        this.message="Incorrect Username Or Password ";
      }
    });
  }

}
