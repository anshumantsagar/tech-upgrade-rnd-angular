import {Component,OnInit} from '@angular/core'


@Component({
    selector:'app-datetime',
    template:`

<input [(ngModel)]="date" type="datetime-local">
{{date}}


    `,
})

export class DatetimeComponent {
    date:string
    constructor(){}
    
}