import { Injectable } from '@angular/core';
import { Question } from "../models/question";

@Injectable()
export class DataService {
  questions:Question[];

  constructor() {
  }

  // get questions from localstorage
  getQuestions() {
    if(localStorage.getItem('questions') === null) {
     this.questions = [];
    } else {
     this.questions = JSON.parse(localStorage.getItem('questions'));
    }

    return this.questions;
  }

  // add question to localstorage
  addNewQuestion(question: Question) {
    this.questions.unshift(question);

    let questions;

    if(localStorage.getItem('questions') === null) {
      questions = [];
      questions.unshift(question);
      localStorage.setItem('questions', JSON.stringify(questions));
    } else {
      questions = JSON.parse(localStorage.getItem('questions'));
      questions.unshift(question);
      localStorage.setItem('questions', JSON.stringify(questions));
    }
  }

  //remove question from localstorage
  removeQuestionFromData(question:Question) {
    for (let i = 0; i < this.questions.length; i++) {
      if(question === this.questions[i]){
        this.questions.splice(i, 1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
  }
}
