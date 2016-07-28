import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {QuestionsPage} from '../questions/questions';

@Component({
  templateUrl: 'build/pages/question/question.html'
})
export class QuestionPage {
  constructor(private nav: NavController) {
  
  }
  GoToQuestionsPage(){
    this.nav.push(QuestionsPage);
  }
}
