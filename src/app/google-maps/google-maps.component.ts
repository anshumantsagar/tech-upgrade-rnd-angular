import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';

@Component({
  selector: 'app-googlemaps',
  template: `
  
  <div class="container">
 
  <h1>Angular Google Maps with Places Search</h1>
 
  <div class="form-group">
    <label>Enter address</label>
    <input type="text" class="form-control" (keydown.enter)="$event.preventDefault()" placeholder="Search Nearest Location" autocorrect="off" autocapitalize="off" spellcheck="off" type="text" #search>
  </div>
 
  <agm-map [latitude]="latitude" [longitude]="longitude" [zoom]="zoom">
    <agm-marker [latitude]="latitude" [longitude]="longitude" [markerDraggable]="true"
      (dragEnd)="markerDragEnd($event)"></agm-marker>
  </agm-map>
 
  <h5>Address: {{address}}</h5>
  <div>Latitude: {{latitude}}</div>
  <div>Longitude: {{longitude}}</div>
</div>
<!--<hr>
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
    </agm-map>-->

  `,
})
export class GooglemapsComponent implements OnInit  { 
  // // initial center position for the map
  // lat: number = 23.0225;
  // lng: number = 72.5714;
  // markers:Array<any>=[
  //   {
  //     lat: 23.0279,
  //     lng: 72.5053,
  //     label: 'Hubilo',
  //     draggable: true
  //   },
  // ]
  // //zoom value
  // zoom: number = 8;
  // constructor(){

  // }
  // //for getting the updated values from the marker
  // markerDragEnd(newValue:any,event:any){
  //   console.log('nothing')
  // }
  // ngOnInit(){}


  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;

  @ViewChild('search')
  public searchElementRef: ElementRef;


  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }


  ngOnInit() {
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }


  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

}
