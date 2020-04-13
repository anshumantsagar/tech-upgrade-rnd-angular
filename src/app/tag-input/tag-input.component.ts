import {Component,OnInit} from '@angular/core'


@Component({
    selector:'app-taginput',
    template:`


    <tag-input [editable]='true' [maxItems]='5' (onTagEdited)="onTagEdited($event)" [(ngModel)]='items'></tag-input>
    <button (click)="thisFunction()" type="button">Save</button>
    <div *ngFor="let items of newItems"><h4>{{items}}</h4></div>
    
    `,
})

export class TaginputComponent {
    items:Array<any>
    newItems:Array<any>=[];
    constructor(){}
    onTagEdited(event:any){
        console.log('chala')
        console.log(event.value)
        this.newItems = this.items
    }
    thisFunction(){
        console.log("button clicked")
        console.log(this.items)
        this.newItems.push(this.items)

    }
    
}