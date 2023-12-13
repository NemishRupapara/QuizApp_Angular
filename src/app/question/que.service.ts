import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueService {
 private questions1: { type: string, text: string, selectedOption: null, options?: { text: string, selected: boolean }[], shortAnswerResponse?: string }[] = [];

  constructor() { }
  receiveData(questions:{ type: string, text: string, selectedOption: null, options?: { text: string, selected: boolean }[], shortAnswerResponse?: string }[]): void {
    this.questions1 = questions;
  }
  
  getData(): any[] {
    return this.questions1;
  }
}
