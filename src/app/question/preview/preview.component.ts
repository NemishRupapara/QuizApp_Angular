// import { Component,Input } from '@angular/core';

// @Component({
//   selector: 'app-preview',
//   templateUrl: './preview.component.html',
//   styleUrls: ['./preview.component.css']
// })
// export class PreviewComponent {
//   @Input() questions: { type: string, text: string, selectedOption: null, options?: { text: string, selected: boolean }[], shortAnswerResponse?: string }[] = [];

// }

// // [(ngModel)]="question.selectedOption"
import { Component,Input,OnInit } from '@angular/core';
import { QueService } from '../que.service';


@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
constructor(private ques:QueService){}
   questions: { type: string, text: string, selectedOption: null, options?: { text: string, selected: boolean }[], shortAnswerResponse?: string }[] = [];
   ngOnInit(): void {
    // Call the service method to get the updated questions data
    this.questions = this.ques.getData();
  }
}

// [(ngModel)]="question.selectedOption"