import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizpreviewComponent } from './quizpreview.component';

describe('QuizpreviewComponent', () => {
  let component: QuizpreviewComponent;
  let fixture: ComponentFixture<QuizpreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizpreviewComponent]
    });
    fixture = TestBed.createComponent(QuizpreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
