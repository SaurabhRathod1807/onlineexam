import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpclient:HttpClient) { }

  getFirstQuestion(subject:string){
    return this.httpclient.get<Question>("http://localhost:8080/getFirstQuestion/"+subject);
  }

nextquestion(){
      return this.httpclient.get<Question>("http://localhost:8080/nextquestion");
  }

  previousquestion(){
    return this.httpclient.get<Question>("http://localhost:8080/previousquestion")
  }

  saveAnswer(answer:Answer){
    return this.httpclient.post<void>("http://localhost:8080/saveAnswer", answer);
  }

  calculateScore(){
    return this.httpclient.get<number>("http://localhost:8080/calculateScore");
  }

  getallAnswer(){
    return this.httpclient.get<Answer[]>("http://localhost:8080/getallAnswer");
  }

  qsaveDB(question:Question){
    return this.httpclient.post<boolean>("http://localhost:8080/qsaveDB", question);
  }

  deletequestion(qno:number, subject:string){

    return this.httpclient.delete<boolean>("http://localhost:8080/deletequestion/"+ qno+"/"+ subject);

  }

  getsubject(){
    return this.httpclient.get<string[]>("http://localhost:8080/getsubject");
  }

  getallquestion(subject:string){
    return this.httpclient.get<number[]>("http://localhost:8080/getallquestion/"+subject);

  }

  getquestion(qno:number){
    return this.httpclient.get<Question>("http://localhost:8080/getquestion/"+qno);
  }
}


export class Question{
  qno:number;
  subject:string;
  qtext:string;
  op1:string;
  op2:string;
  op3:string;
  op4:string;
  answer:string;


  constructor(qno:number,subject:string,qtext:string,op1:string,op2:string,op3:string,op4:string,answer:string){

    this.qno=qno;
    this.subject=subject;
    this.qtext=qtext;
    this.op1=op1;
    this.op2=op2;
    this.op3=op3;
    this.op4=op4;
    this.answer=answer;


  }
}

export class Answer{
   qno:number;
   qtext:string ;
   submittedAnswer: string ;
	 correctAnswer:string ;

   constructor(qno:number, qtext:string,submittedAnswer:string,	 correctAnswer:string ){
    this.qno=qno;
    this.qtext=qtext;
    this.submittedAnswer=submittedAnswer;
    this.correctAnswer=correctAnswer;
   }
}