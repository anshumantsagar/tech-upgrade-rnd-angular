import {Component,OnInit} from '@angular/core'


@Component({
    selector:'app-taginput',
    template:`

    <!--ckEditor Tag-->
    <tag-input [editable]='true' [maxItems]='5' [(ngModel)]='items'></tag-input>
    <button (click)="thisFunction()" type="button">TEST</button>
    <div *ngFor="let list of items"><h4>{{list.value}}</h4></div>
    
    `,
})

export class TaginputComponent {
    items:Array<any>=[];
    constructor(){}   
    thisFunction(){//this function is for checking the type of value ckEditor thorws
        console.log(this.items)
    } 
}