import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SpeechTextService {
  private speechSynthesis;
  private utteranceConfig:SpeechSynthesisUtterance;

  constructor() {
    this.speechSynthesis = speechSynthesis;
    this.config()
  }




  config(configuration:Partial<SpeechSynthesisUtterance>  = {}){
    const utterance = new SpeechSynthesisUtterance();
    for(let prop in configuration){
      utterance[prop] = configuration[prop]
    }

    this.utteranceConfig = utterance

    //TODO remove

    this.utteranceConfig.lang = 'pt-BR'
    
  }



  speak(text){
    console.log(text)
    console.log( new SpeechSynthesisUtterance() )
    this.utteranceConfig.text = text
    console.log(this.utteranceConfig)
    speechSynthesis.speak(this.utteranceConfig);
  }
}
