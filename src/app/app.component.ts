import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tech-upgrade-rnd';
  element=document.documentElement;
  fullscreen(){
    if(this.element.requestFullscreen){
      this.element.requestFullscreen()
    }
  }
}
