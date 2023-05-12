import {Injectable} from '@angular/core';
import {GptBackendService} from "./gpt-backend.service";

@Injectable({
  providedIn: 'root'
})
export class GptService {

  constructor(private readonly gptBackendService: GptBackendService) {
  }


  sendRequest(prompt: string, maxLength: number): Promise<string> {
    return this.gptBackendService.chat(prompt, maxLength).catch(error => {
      throw new Error(error.toString())
    });
  }
}
