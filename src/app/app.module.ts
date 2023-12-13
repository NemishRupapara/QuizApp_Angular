import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CardModule } from 'primeng/card';
import { PreviewComponent } from './question/preview/preview.component';
import { QuizpreviewComponent } from './quizpreview/quizpreview.component';
import { QuizComponent } from './quiz/quiz.component';





@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    PreviewComponent,
    QuizpreviewComponent,
    QuizComponent,
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule ,
    ButtonModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    ToastModule ,
    TooltipModule ,
    CalendarModule,
    DropdownModule,
    InputTextareaModule,
    CardModule 
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
