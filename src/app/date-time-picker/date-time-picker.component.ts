import {Component,OnInit} from '@angular/core'


@Component({
    selector:'app-datetime',
    template:`

<input [(ngModel)]="date" type="datetime-local">
{{date}}


    `,
})
//date and time picker are not working in angular 9
export class DatetimeComponent {
    date:string
    constructor(){}
    
}