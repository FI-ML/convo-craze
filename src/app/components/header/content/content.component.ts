import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {IconService} from "../../../service/icon/icon.service";
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input() sidenav!: MatSidenav;

  formGroup!: FormGroup;
  answer!: string;
  question: string = '';
  isAnswerExist = false;

  constructor(private readonly formBuilder: FormBuilder,
              private readonly matIconRegistry: MatIconRegistry,
              private readonly domSanitizer: DomSanitizer,
              private readonly iconsService: IconService) {

    this.iconsService.getIcons().forEach((icon) => {
      this.matIconRegistry.addSvgIcon(
        icon.iconName,
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon.iconPath)
      );

    });
  }

  ngOnInit() {
    this.formGroup = this.getFormGroup();
  }


  getFormGroup(): FormGroup {
    return this.formBuilder.group({
      answer: new FormControl({
        value: this.answer,
        disabled: true
      }, []),

      question: new FormControl({
        value: this.question,
        disabled: false
      }, [])
    });
  }

}
