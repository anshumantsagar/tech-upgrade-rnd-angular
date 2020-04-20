import  { Component, OnInit } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';


@Component({
    selector: 'dnd2',
    template:`

    <!--a draggable element-->
<div [dndDraggable]="draggable.data"
     [dndEffectAllowed]="draggable.effectAllowed"
     [dndDisableIf]="draggable.disable"
     (dndStart)="onDragStart($event)"
     (dndCopied)="onDraggableCopied($event)"
     (dndLinked)="onDraggableLinked($event)"
     (dndMoved)="onDraggableMoved($event)"
     (dndCanceled)="onDragCanceled($event)"
     (dndEnd)="onDragEnd($event)">
      
    <!--if [dndHandle] is used inside dndDraggable drag can only start from the handle-->
    <div *ngIf="draggable.handle"
         dndHandle>HANDLE
    </div>
    
    draggable ({{draggable.effectAllowed}}) <span [hidden]="!draggable.disable">DISABLED</span>
    
    <!--optionally select a child element as drag image-->
    <div dndDragImageRef>DRAG_IMAGE</div>
    
</div>

<!--a dropzone-->
<!--to allow dropping content that is not [dndDraggable] set dndAllowExternal to true-->
<section dndDropzone
         (dndDragover)="onDragover($event)"
         (dndDrop)="onDrop($event)">
      
    dropzone 
    
    <!--optional placeholder element for dropzone-->
    <!--will be removed from DOM on init-->
    <div style="border: 1px orangered solid; border-radius: 5px; padding: 15px;"
         dndPlaceholderRef>
        placeholder
    </div>

</section>
    `
})

export class Dnd2Component implements OnInit {
    constructor() { }
    draggable = {
        // note that data is handled with JSON.stringify/JSON.parse
        // only set simple data or POJO's as methods will be lost 
        data: "myDragData",
        effectAllowed: "all",
        disable: false,
        handle: false
      };
      
      onDragStart(event:DragEvent) {
    
        console.log("drag started", JSON.stringify(event, null, 2));
      }
      
      onDragEnd(event:DragEvent) {
        
        console.log("drag ended", JSON.stringify(event, null, 2));
      }
      
      onDraggableCopied(event:DragEvent) {
        
        console.log("draggable copied", JSON.stringify(event, null, 2));
      }
      
      onDraggableLinked(event:DragEvent) {
          
        console.log("draggable linked", JSON.stringify(event, null, 2));
      }
        
      onDraggableMoved(event:DragEvent) {
        
        console.log("draggable moved", JSON.stringify(event, null, 2));
      }
          
      onDragCanceled(event:DragEvent) {
        
        console.log("drag cancelled", JSON.stringify(event, null, 2));
      }
      
      onDragover(event:DragEvent) {
        
        console.log("dragover", JSON.stringify(event, null, 2));
      }
      
      onDrop(event:DndDropEvent) {
      
        console.log("dropped", JSON.stringify(event, null, 2));
      }
    

    ngOnInit() { }
}