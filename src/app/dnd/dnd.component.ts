import { Component, OnInit } from '@angular/core';
import { ArrayType } from '@angular/compiler';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dnd',
  templateUrl: './dnd.component.html',
  styleUrls: ['./dnd.component.css']
})
export class DndComponent implements OnInit {

  constructor() { }
  //below are the two arrays that are contains data to be dragged and dropped 
  list:Array<number> = [1,2,3,4,5,6,7,8,9,0] 
  list2:Array<number> = []
  bindings:string = 'yes'

  drop(event: CdkDragDrop<number[]>){// function for detecting the drag and dropped
    if(event.previousContainer != event.container){//if condition will check if the data is moving from one list to another
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex) //transferArrayItem used here is from @angular/cdk/drag-drop which transfer data from one array to another
    }
    else{
      moveItemInArray(this.list, event.previousIndex, event.currentIndex);//moveItemArray used here is from @angular/cdk/drag-drop which changes the index of the data within the single list of array
    }
  }

  ngOnInit(): void {
  }

}
