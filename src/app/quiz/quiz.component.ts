import { Component, OnInit } from '@angular/core';
import { QuizzService } from '../quizz.service';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit{
   questions: { type: string, text: string, selectedOption: null, options?: { text: string, selected: boolean }[], shortAnswerResponse?: string }[] = [];
   newquestion: { type: string, text: string, selectedOption: null, options?: { text: string, selected: boolean }[], shortAnswerResponse?: string }={ type: '', text: '', selectedOption: null, options: [{ text: '', selected: false }], shortAnswerResponse: ''}
   selectedCategory: any = null;
   constructor(private quizz:QuizzService){}
   ngOnInit(): void {
    this.questions = this.quizz.getquestion();
  }
  addQuestion(){
  this.quizz.addQuestion(this.newquestion);
  this.questions=this.quizz.getquestion();
  this.newquestion={ type: '', text: '', selectedOption: null, options: [{ text: '', selected: false }], shortAnswerResponse: ''}
}
removeQuestion(questionIndex: number){
this.quizz.removeQuestion(questionIndex);
this.quizz.getquestion();
}
addOption(questionIndex: number){
this.quizz.addOption(questionIndex);
this.quizz.getquestion();

}
removeOption(questionIndex: number, optionIndex: number){
this.quizz.removeOption(questionIndex, optionIndex);
}
saveQuestion(){
  this.quizz.savequestion();
}
onquestionChange(i:Number){}
onRadioButtonChange(i:Number){}
onShortAnswerChange(i:Number){}
}
