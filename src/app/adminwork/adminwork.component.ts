import { Component, OnInit } from '@angular/core';
import { Question, QuestionService } from '../question.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adminwork',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adminwork.component.html',
  styleUrl: './adminwork.component.css'
})
export class AdminworkComponent  implements OnInit{
 message:any="";
 question:Question=new Question(0,'','','','','','','');
 username:any="";

 
 constructor(private questionservice:QuestionService){

 }
  ngOnInit():void{
    this.message=sessionStorage.getItem("message");
  this.username=  sessionStorage.getItem("username");
  }

  qsaveDB(){
      this.questionservice.qsaveDB(this.question).subscribe(message=>{
        if(message)
        this.message="Question Added!From Admin"
      else
      this.message="Something went wrong!"
      });
  }


  deletequestion(){
    this.questionservice.deletequestion(this.question.qno,this.question.subject).subscribe(message=>{
      if(message)
        this.message="Record deleted!From Admin"
      else
      this.message="Date is Not Present!"
    });
  }
}
