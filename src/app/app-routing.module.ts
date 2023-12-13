import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { PreviewComponent } from './question/preview/preview.component';
import { QuizpreviewComponent } from './quizpreview/quizpreview.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  // {path:'',component:QuestionComponent},
  // {
  //   path:'Quiz', component:QuestionComponent,children:[{path:'view',component:PreviewComponent}]
  // },
  // {path:'QuizPreview',component:QuizpreviewComponent}
  
//   {
//   path:'Quiz', component:QuestionComponent
// },
// {path:'Quiz',children:[{path:'view',component:PreviewComponent}]}
{path:'QuestionBuilder',component:QuizComponent},
{path:'Preview',component:QuizpreviewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
