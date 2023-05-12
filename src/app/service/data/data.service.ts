import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private answer = new BehaviorSubject<string>('');
  private question = new BehaviorSubject<string>('');

  answerObservable = this.answer.asObservable();
  questionObservable = this.question.asObservable();

  constructor() {
  }

  setAnswer(answer: string): void {
    this.answer.next(answer);
  }

  setQuestion(question: string): void {
    this.question.next(question);
  }
}
