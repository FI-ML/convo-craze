import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

import {Component, Input} from "@angular/core";
import {GptService} from "../../../service/gpt/gpt.service";
import {DataService} from "../../../service/data/data.service";
import {IconService} from "../../../service/icon/icon.service";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {

  @Input() formGroup!: FormGroup;
  @Input() maxLength!: number;
  loading: boolean = false;
  question: string = '';


  constructor(private readonly formBuilder: FormBuilder,
              private readonly gptService: GptService,
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
    const prompt = this.questionControl.value;

    if (prompt.length <= this.maxLength) {
      this.dataService.setQuestion(prompt);
      this.loading = true;

      this.gptService.sendRequest(prompt, this.maxLength).then(answer => {
        this.dataService.setAnswer(answer);
        this.loading = false;
      }).catch(err => {
        this.loading = false;
      });
    }
  }
}
