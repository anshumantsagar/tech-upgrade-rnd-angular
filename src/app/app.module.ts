import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import {CKEditorModule} from 'ng2-ckeditor';
import {AgmCoreModule} from '@agm/core';
import {Routes,RouterModule} from '@angular/router';
import {GoogleMapsModule} from '@angular/google-maps';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TagInputModule } from 'ngx-chips';
import {MatChipsModule} from '@angular/material/chips';





//components
import { AppComponent } from './app.component';
import { DndComponent } from './dnd/dnd.component';
import {DropdownComponent} from './dropdown/dropdown.component';
import {CkeditorComponent} from './ckEditor/ckeditor.component';
import {GooglemapsComponent} from './google-maps/google-maps.component';
import {MatmapComponent} from './mat-google-maps/mat-google-maps.component';
import {DatetimeComponent} from './date-time-picker/date-time-picker.component';
import {TaginputComponent} from './tag-input/tag-input.component'

const routes: Routes = [
  {path:'dnd', component:DndComponent},
  {path:'dropdown', component:DropdownComponent},
  {path:'ckeditor', component:CkeditorComponent},
  {path:'googlemaps', component:GooglemapsComponent},
  {path:'matmaps', component:MatmapComponent},
  {path:'datetime', component:DatetimeComponent},
  {path:'taginput', component:TaginputComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DndComponent,
    DropdownComponent,
    CkeditorComponent,
    GooglemapsComponent,
    MatmapComponent,
    DatetimeComponent,
    TaginputComponent
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
    MatDatepickerModule,
    BrowserAnimationsModule,
    TagInputModule,
    ReactiveFormsModule,
    MatChipsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
