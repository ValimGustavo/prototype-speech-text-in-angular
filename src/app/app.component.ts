import { SpeechTextService } from './services/speech-text/speech-text.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})

export class AppComponent {
  title = 'speech-text';
  text = ''

  constructor(
    private speechTextService:SpeechTextService
  ){}

  speak(){
   this.speechTextService.speak(this.text)
  }
}
