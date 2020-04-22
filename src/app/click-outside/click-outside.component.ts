import { Component } from '@angular/core';

@Component({
    selector: 'clicloutside',
    template: `
    <div class="myPage">
        <div class="myBox" (clickOutside)="onClickedOutside($event)" *ngIf="showBox">
            Click outside this box to hide
        </div>
    </div>
    `,
styles:[`
.myPage{
    height: 100vh;
    background-color: #dbfff3;
    display: flex;
    justify-content: center;
    align-items: center;
}
 
.myBox{
    display: flex;
    align-items: center;
    height: 200px;
    width: 200px;
    background-color: #36a7ff;
    justify-content: center;
    background: rgb(68,179,198);
    background: linear-gradient(160deg, rgba(68,179,198,1) 0%, rgba(159,241,178,1) 50%, rgb(129, 221, 185) 100%);
}
`]
})

export class ClickoutsideComponent {
    
  showBox:boolean = true;
 
  constructor() {}
 
  onClickedOutside(e: Event) {
    this.showBox = false;
  }
}