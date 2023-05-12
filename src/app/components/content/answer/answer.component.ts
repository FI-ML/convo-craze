import {Component, Input} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {DataService} from "../../../service/data/data.service";

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent {

  @Input() answer!: string;


  constructor(private readonly formBuilder: FormBuilder,
              private readonly dataService: DataService) {
  }


}
