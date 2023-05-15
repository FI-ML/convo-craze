import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Configuration, OpenAIApi} from "openai";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GptBackendService {

  private api_key = environment.apiKey;
  private endpoint = '/openai-api/completions';

  constructor(private http: HttpClient) {
  }


  chat(prompt: string, maxLength: number): Promise<string> {
    const response = this.getResponseFromOpenAi(prompt, maxLength);
    return new Promise(resolve => {
      response.then(x => x.data.choices.filter(choice => choice !== undefined)
        .forEach(choice => {
          const answer = choice.message!.content;
          resolve(answer); // return the answer as a string
        })
      )
    });
  }


  private getResponseFromOpenAi(prompt: string, maxLength: number) {
    const configuration = new Configuration({
      apiKey: this.api_key,
    });

    const openai = new OpenAIApi(configuration);
    return openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a creative writer."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.8,
      max_tokens: maxLength
    });
  }
}
