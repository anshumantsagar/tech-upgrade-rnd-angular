import  { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
    selector: 'app-matmap',
    template: `
    <google-map height="400px"
            width="750px"
            [center]="center"
            [zoom]="zoom"
            (mapClick)="addMarker($event)"
            (mapMousemove)="move($event)"
            (mapRightclick)="removeLastMarker()">
  <map-marker #marker
              *ngFor="let markerPosition of markerPositions"
              [position]="markerPosition"
              [options]="markerOptions"
              (mapClick)="openInfoWindow(marker)"></map-marker>
  <map-info-window>Info Window content</map-info-window>
</google-map>

<div>Latitude: {{display?.lat}}</div>
<div>Longitude: {{display?.lng}}</div>
    
    
`,
})

export class MatmapComponent implements OnInit {
    constructor() { }
    @ViewChild(MapInfoWindow, {static: false}) infoWindow: MapInfoWindow;

  center = {lat: 24, lng: 12};
  markerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];
  zoom = 4;
  display?: google.maps.LatLngLiteral;

  addMarker(event: google.maps.MouseEvent) {
    this.markerPositions.push(event.latLng.toJSON());
  }

  move(event: google.maps.MouseEvent) {
    this.display = event.latLng.toJSON();
  }

  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
  }

  removeLastMarker() {
    this.markerPositions.pop();
  }


    ngOnInit() { }
}