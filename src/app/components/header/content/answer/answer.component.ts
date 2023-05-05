import {Component, Input, OnDestroy} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {DataService} from "../../../../service/data/data.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnDestroy {

  @Input() formGroup!: FormGroup;
  private destroy$ = new Subject<void>();


  constructor(private readonly formBuilder: FormBuilder,
              private readonly dataService: DataService) {

    this.dataService.data$
      .pipe(takeUntil(this.destroy$)) // use takeUntil to unsubscribe
      .subscribe(value => {
        this.controlAnswer?.setValue(value); // use ? operator for optional chaining
      })
  }

  get controlAnswer(): FormControl {
    return this.formGroup?.get('answer') as FormControl;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
