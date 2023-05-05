import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

import {Component, Input} from "@angular/core";
import {DataService} from "../../../../service/data/data.service";
import {IconService} from "../../../../service/icon/icon.service";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {

  @Input() formGroup!: FormGroup;
  question: string = '';

  constructor(private readonly formBuilder: FormBuilder,
              private readonly domSanitizer: DomSanitizer,
              private readonly matIconRegistry: MatIconRegistry,
              private readonly dataService: DataService,
              private readonly iconsService: IconService) {

    this.iconsService.getIcons().forEach((icon) => {
      this.matIconRegistry.addSvgIcon(
        icon.iconName,
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon.iconPath)
      );
    });
  }


  get questionControl(): FormControl {
    return (<FormControl>this.formGroup.get('question'));
  }

  sendQuestion(): void {
    this.dataService.updateData(this.questionControl.value);
  }
}
