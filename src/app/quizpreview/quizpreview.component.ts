// import { Component ,OnInit} from '@angular/core';
// import { QuizzService } from '../quizz.service';
// @Component({
//   selector: 'app-quizpreview',
//   templateUrl: './quizpreview.component.html',
//   styleUrls: ['./quizpreview.component.css']
// })
// export class QuizpreviewComponent implements OnInit{

//   questions: { type: string, text: string, selectedOption: null, options?: { text: string, selected: boolean }[], shortAnswerResponse?: string }[] = [];
//   response:{}[]
//   constructor(private quizz:QuizzService){}
//   ngOnInit(): void {
//     this.questions = this.quizz.getquestion();
//   }

// }
import { Component, OnInit } from '@angular/core';
import { QuizzService } from '../quizz.service';

@Component({
  selector: 'app-quizpreview',
  templateUrl: './quizpreview.component.html',
  styleUrls: ['./quizpreview.component.css']
})
export class QuizpreviewComponent implements OnInit {
  questions: { type: string, text: string, selectedOption: null, options?: { text: string, selected: boolean }[], shortAnswerResponse?: string }[] = [];
  userResponses: { questionIndex: number, selectedOption: string }[] = [];

  constructor(private quizz: QuizzService) {}

  ngOnInit(): void {
    this.questions = this.quizz.getquestion();
    // Initialize userResponses with default values
    this.userResponses = this.questions.map((_, index) => ({
      questionIndex: index,
      selectedOption: null
    }));
  }

  submitSurvey() {
    // You can now log the user responses or perform other actions here
    console.log(this.userResponses);
    // this.clearResponses();
  }

  clearResponses() {
    // Reset userResponses to clear selections
    this.userResponses.forEach(response => {
      response.selectedOption = null;
    });
  }
}
