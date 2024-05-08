import { Component, OnInit } from '@angular/core';
import { Answer, QuestionService } from '../question.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent  implements OnInit{
 
 score:number=0
 allAnswer:Answer[]=[];
 
 constructor(private questionservice:QuestionService){

 }
  ngOnInit(): void {
  
    this.questionservice.getallAnswer().subscribe(answerarry=>this.allAnswer=answerarry);
    this.questionservice.calculateScore().subscribe(score=>this.score=score);
  
  }
  getColor(submittedAnswer:string, correctAnswer:string){

    if(submittedAnswer==correctAnswer)
      return "green"
    else
    return "red";
  }

}
