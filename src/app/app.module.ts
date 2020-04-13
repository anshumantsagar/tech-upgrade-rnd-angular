import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import {FormsModule} from '@angular/forms';
import {CKEditorModule} from 'ng2-ckeditor';
import {AgmCoreModule} from '@agm/core';
import {Routes,RouterModule} from '@angular/router';
import {GoogleMapsModule} from '@angular/google-maps';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DndComponent } from './dnd/dnd.component';
import {DropdownComponent} from './dropdown/dropdown.component';
import {CkeditorComponent} from './ckEditor/ckeditor.component';
import {GooglemapsComponent} from './google-maps/google-maps.component';
import {MatmapComponent} from './mat-google-maps/mat-google-maps.component'

const routes: Routes = [
  {path:'dnd', component:DndComponent},
  {path:'dropdown', component:DropdownComponent},
  {path:'ckeditor', component:CkeditorComponent},
  {path:'googlemaps', component:GooglemapsComponent},
  {path:'matmaps', component:MatmapComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DndComponent,
    DropdownComponent,
    CkeditorComponent,
    GooglemapsComponent,
    MatmapComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    SelectDropDownModule,
    FormsModule,
    CKEditorModule,
    GoogleMapsModule,
    AgmCoreModule.forRoot(
      {apiKey: 'AIzaSyAFgM81Qz-SwfTzUsr4F51AgDj0HdN88CQ'}
      ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
