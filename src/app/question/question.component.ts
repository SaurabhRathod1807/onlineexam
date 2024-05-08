import { Component, OnInit } from '@angular/core';
import { Answer, Question, QuestionService } from '../question.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent implements OnInit{


submittedAnswer:string="";
subject:any="";
username:any="";
selected=false;
remaininTime=121;
durationMessage:string="";
allAnswers:Answer[]=[];
maxtime:any="";
settimeinterval:any="";
allqnos:number[]=[];
questionNumber:number=0;

question:Question=new Question(0,'','','','','','','');
answer:Answer=new Answer(0,'','','');
constructor(private questionservice : QuestionService, private router:Router)
{
  this.subject=sessionStorage.getItem("subject");
  this.username=sessionStorage.getItem("username");

}
  
ngOnInit(): void {

  clearInterval(this.settimeinterval);

 
  this.questionservice.getFirstQuestion(this.subject).subscribe(question => this.question = question);
  this.questionservice.getallquestion(this.subject).subscribe(allqnos=>this.allqnos=allqnos);
  this.decesertime();

  setInterval(()=>{

    this.remaininTime=this.remaininTime-1;

    let minute=Math.floor(this.remaininTime/60);

    let seconds=Math.floor(this.remaininTime%60);

    this.durationMessage="Time Remaining is" + minute + ":" + seconds;

    if(this.remaininTime==0){
      this.endexam();
    }

  },1000);
  // this.selected=false;
  // this.questionservice.nextquestion().subscribe(question=>this.question=question);

}

  nextquestion()
  {
    clearInterval(this.settimeinterval);

    this.decesertime();
   
    this.selected=false;
    // this.questionservice.getallAnswer().subscribe(answerarray=>this.allAnswers=answerarray);
    this.questionservice.nextquestion().subscribe(question=> this.question =question);


  }

  previousquestion()
  {
    clearInterval(this.settimeinterval);

    this.decesertime();

    this.selected=false;
    this.questionservice.getallAnswer().subscribe(answerarray=>this.allAnswers=answerarray);

    this.questionservice.previousquestion().subscribe(question=>this.question=question);
  }


  getColor(currentOption:string){
     
    
    for (let index = 0; index < this.allAnswers.length; index++) {
      
      let answer = this.allAnswers[index];
      
      if(this.question.qno==answer.qno && answer.submittedAnswer==currentOption){
        return "green";
      }


     }
     return "red";
  }

  getquestion(eventobject:any){
    clearInterval(this.settimeinterval);
    this.decesertime();
    let questionNumber= eventobject.target.value;
    console.log("selected question number is :" + questionNumber);

    this.questionservice.getquestion(questionNumber).subscribe(question=>this.question=question);
  }

  decesertime(){

    this.maxtime=30;

    this.settimeinterval=setInterval(()=>
    {
      this.maxtime--;

      if(this.maxtime==0){
        this.nextquestion();
      }
    },1000)

  }

  isChecked(currentOption:string){
    for(var i=0; i<this.allAnswers.length; i++){
     let answer = this.allAnswers[i];

      if( answer.submittedAnswer==currentOption)
        return true;
      
    }
    return false;
  }

  saveAnswer(){
    
    
    this.answer.submittedAnswer=this.submittedAnswer;
    this.answer.correctAnswer=this.question.answer;
    this.answer.qno=this.question.qno;
    this.answer.qtext=this.question.qtext;
    
    this.questionservice.saveAnswer(this.answer).subscribe();

    console.log("Answer Submitted");

  }


  endexam(){
      this.router.navigate(['score']);
  }

 

}
