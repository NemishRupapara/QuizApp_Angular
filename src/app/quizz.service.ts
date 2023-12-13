import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {
private question: { type: string, text: string, selectedOption: null, options?: { text: string, selected: boolean }[], shortAnswerResponse?: string }[] = [];
  constructor() {
    const storedquestion = localStorage.getItem('questions');
    if (storedquestion) {
      this.question = JSON.parse(storedquestion);
    }
  }
getquestion(): { type: string, text: string, selectedOption: null, options?: { text: string, selected: boolean }[], shortAnswerResponse?: string }[]{
return this.question
}
addQuestion(question: { type: string, text: string, selectedOption: null, options?: { text: string, selected: boolean }[], shortAnswerResponse?: string }){
  this.question.push(question);
 this.savequestion()
}
removeQuestion(questionIndex: number): void {
  this.question.splice(questionIndex, 1);
  this.savequestion()

  
}
savequestion(): void{
  localStorage.setItem('questions', JSON.stringify(this.question));
}
addOption(questionIndex: number): void {
  // const newOption = { text: '', selected: false };
  this.question[questionIndex].options.push({ text: '', selected: false });
  this.savequestion()

  // console.log('Added new option with selected:', newOption.selected);
}
removeOption(questionIndex: number, optionIndex: number): void {
  this.question[questionIndex].options.splice(optionIndex, 1);
  this.savequestion()

}

}
