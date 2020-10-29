import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})

export class AppComponent {
  title = 'speech-text';
  text = ''

  speak(){
    let utterance = new SpeechSynthesisUtterance(this.text);
    utterance.lang = 'pt-BR'
    speechSynthesis.speak(utterance);
  }
}
