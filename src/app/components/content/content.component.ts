import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

import {MatSidenav} from "@angular/material/sidenav";
import {IconService} from "../../service/icon/icon.service";
import {Subject, takeUntil} from "rxjs";
import {DataService} from "../../service/data/data.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

//TODO: FORM CONTROL ARRAY
export class ContentComponent implements OnInit, OnDestroy {
  @Input() sidenav!: MatSidenav;

  formGroup!: FormGroup;
  answer!: string;
  question: string = '';
  isAnswerExist = false;
  maxLength: number = 4000;
  loading: boolean = false;
  private destroy$ = new Subject<void>();

  constructor(private readonly formBuilder: FormBuilder,
              private readonly matIconRegistry: MatIconRegistry,
              private readonly domSanitizer: DomSanitizer,
              private readonly iconsService: IconService,
              private readonly dataService: DataService) {

    this.iconsService.getIcons().forEach((icon) => {
      this.matIconRegistry.addSvgIcon(
        icon.iconName,
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon.iconPath)
      );
    });
  }

  ngOnInit() {
    this.formGroup = this.getFormGroup();

    this.dataService.answerObservable
      .pipe(takeUntil(this.destroy$)) // use takeUntil to unsubscribe
      .subscribe(answer => {
        this.addAnswer(answer)
      });

    this.dataService.questionObservable
      .pipe(takeUntil(this.destroy$))
      .subscribe(question => {
        this.addQuestion(question);
      })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getFormGroup(): FormGroup {
    return this.formBuilder.group({
      answers: this.formBuilder.array([]),

      questions: this.formBuilder.array([]),

      question: new FormControl({
        value: this.question,
        disabled: false
      }, [Validators.maxLength(this.maxLength)])
    });
  }


  get answers(): FormArray {
    return this.formGroup.get("answers") as FormArray
  }

  get questions(): FormArray {
    return this.formGroup.get("questions") as FormArray
  }

  addAnswer(answer: string) {
    const answerGroup = this.formBuilder.control({
      value: answer,
      disabled: false
    }, []);
    this.answers.push(answerGroup);
  }

  addQuestion(question: string) {
    const answerGroup = this.formBuilder.control({
      value: question,
      disabled: false
    }, []);
    this.answers.push(answerGroup);
  }
}
