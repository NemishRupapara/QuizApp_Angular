
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-question',
//   templateUrl: './question.component.html',
//   styleUrls: ['./question.component.css']
// })
// export class QuestionComponent implements OnInit {
//   questions: { type: string, text: string, selectedOption: null, options?: { text: string, selected: boolean }[], shortAnswerResponse?: string }[] = [];
//   selectedCategory: any = null;

//   ngOnInit(): void {
//     this.selectedCategory = this.questions[0];
//     const storedquestion = localStorage.getItem('questions');
//     if (storedquestion) {
//       this.questions = JSON.parse(storedquestion);
//     }
//   }
//   addQuestion(): void {
//     this.questions.push({ type: 'multipleChoice', text: '', selectedOption: null, options: [{ text: '', selected: false }] });
//   }

//   addOption(questionIndex: number): void {
//     // const newOption = { text: '', selected: false };
//     this.questions[questionIndex].options.push({ text: '', selected: false });
//     // console.log('Added new option with selected:', newOption.selected);
//   }

//   removeOption(questionIndex: number, optionIndex: number): void {
//     this.questions[questionIndex].options.splice(optionIndex, 1);
//   }
//   // onCategoryChange() {
//   // }
//   onCheckboxChange(option: any): void {
//     console.log('Selected Checkbox Option:', option.text);
//   }
//   onRadioButtonChange(questionIndex: number): void {
//     console.log('Selected Radio Option:', this.questions[questionIndex].selectedOption);
//   }
//   onShortAnswerChange(questionIndex: number): void {
//     console.log('Short Answer Response:', this.questions[questionIndex].shortAnswerResponse);
//   }
//   onquestionChange(questionIndex: number): void {
//     console.log('Question Response:', this.questions[questionIndex].text);

//   }
//   removeQuestion(questionIndex: number): void {
//     this.questions.splice(questionIndex, 1);
//     localStorage.setItem('questions', JSON.stringify(this.questions));

    
//   }
//   saveQuestion() {
//     localStorage.setItem('questions', JSON.stringify(this.questions));

//   }
// }



import { Component, OnInit } from '@angular/core';
import { QueService } from './que.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questions: { type: string, text: string, selectedOption: null, options?: { text: string, selected: boolean }[], shortAnswerResponse?: string }[] = [];
  selectedCategory: any = null;
  constructor(private Que:QueService){}

  ngOnInit(): void {
    this.selectedCategory = this.questions[0];
    const storedquestion = localStorage.getItem('questions');
    if (storedquestion) {
      this.questions = JSON.parse(storedquestion);
    }
    this.sendDataToService()

  }
  addQuestion(): void {
    this.questions.push({ type: 'multipleChoice', text: '', selectedOption: null, options: [{ text: '', selected: false }] });
    this.sendDataToService()

  }

  addOption(questionIndex: number): void {
    // const newOption = { text: '', selected: false };
    this.questions[questionIndex].options.push({ text: '', selected: false });
    this.sendDataToService()

    // console.log('Added new option with selected:', newOption.selected);
  }

  removeOption(questionIndex: number, optionIndex: number): void {
    this.questions[questionIndex].options.splice(optionIndex, 1);
    this.sendDataToService()

  }
  // onCategoryChange() {
  // }
  onCheckboxChange(option: any): void {
    this.sendDataToService()

    console.log('Selected Checkbox Option:', option.text);
  }
  onRadioButtonChange(questionIndex: number): void {
    this.sendDataToService()

    console.log('Selected Radio Option:', this.questions[questionIndex].selectedOption);
  }
  onShortAnswerChange(questionIndex: number): void {
    this.sendDataToService()

    console.log('Short Answer Response:', this.questions[questionIndex].shortAnswerResponse);
  }
  onquestionChange(questionIndex: number): void {
    console.log('Question Response:', this.questions[questionIndex].text);
    this.sendDataToService()

  }
  removeQuestion(questionIndex: number): void {
    this.questions.splice(questionIndex, 1);
    localStorage.setItem('questions', JSON.stringify(this.questions));
    this.sendDataToService()

    
  }
  saveQuestion() {
    localStorage.setItem('questions', JSON.stringify(this.questions));
    this.sendDataToService()

  }
  sendDataToService(){
     this.Que.receiveData(this.questions);
  }
}


