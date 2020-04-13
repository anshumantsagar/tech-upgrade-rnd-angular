import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-googlemaps',
  template: `
    <hr>
    <agm-map [latitude]="lat" [longitude]="lng">
      <agm-marker 
      *ngFor="let bunch of markers; let i = index"
      [latitude]="bunch.lat"
      [longitude]="bunch.lng"
      [label]="bunch.label"
      [markerDraggable]="bunch.draggable"
      (dragEnd)="markerDragEnd(bunch, $event)">
        <agm-info-window>
        <strong>InfoWindow content</strong>
        </agm-info-window>
      </agm-marker>

      <agm-circle [latitude]="lat + 0.3" [longitude]="lng" 
        [radius]="5000"
        [fillColor]="'maroon'"
        [circleDraggable]="true"
        [editable]="true">
      </agm-circle>
    </agm-map>
  

  `,
})
export class GooglemapsComponent  { 
    // initial center position for the map
    lat: number = 23.0225;
    lng: number = 72.5714;
    markers:Array<any>=[
      {
        lat: 23.0279,
        lng: 72.5053,
        label: 'Hubilo',
        draggable: true
      },
    ]
    //zoom value
    zoom: number = 8;
    constructor(){

    }
    markerDragEnd(newValue:any,event:any){
      console.log('nothing')
    }
    


}
