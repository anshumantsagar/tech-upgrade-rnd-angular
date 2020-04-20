import {Component,OnInit} from '@angular/core'
import {FormControl} from '@angular/forms'

@Component({
    selector:'app-taginput',
    template:`

    <!--ckEditor Tag-->
    <tag-input [editable]='true' [maxItems]='5' [(ngModel)]='items' [validators]="validator" [errorMessages]="errorMsg"></tag-input>
    <button (click)="thisFunction()" type="button">TEST</button>
    <div *ngFor="let list of items"><h4>{{list.value}}</h4></div>
    
    `,
})

export class TaginputComponent {
    items:Array<any>=[];
    validator:Array<any> = [this.verifyEmail];
    errorMsg = { 'verifyEmail@':'enter a valid email id'}  ;
    
    constructor(){}   
    thisFunction(){//this function is for checking the type of value ckEditor thorws
        console.log(this.items)
    } 
    verifyEmail(control:FormControl){
        let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/); 
        if(!regexp.test(control.value)){
          return {'verifyEmail@':true}
        }
        else {
          return null
        }
      }
}