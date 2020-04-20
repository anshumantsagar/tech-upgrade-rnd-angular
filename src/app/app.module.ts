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
import { RecaptchaModule } from 'ng-recaptcha';
import { DndModule } from 'ngx-drag-drop';
import {ChartModule} from 'angular-highcharts';
// import { DateTimePickerModule} from 'ngx-datetime-picker';
import {DpDatePickerModule} from 'ng2-date-picker';




//components
import { AppComponent } from './app.component';
import { DndComponent } from './dnd/dnd.component';
import {DropdownComponent} from './dropdown/dropdown.component';
import {CkeditorComponent} from './ckEditor/ckeditor.component';
import {GooglemapsComponent} from './google-maps/google-maps.component';
import {MatmapComponent} from './mat-google-maps/mat-google-maps.component';
import {DatetimeComponent} from './date-time-picker/date-time-picker.component';
import {TaginputComponent} from './tag-input/tag-input.component';
import {RecaptchaComponent} from './recaptcha/recaptcha.component';
import {ImagecropperComponent} from './image-cropper/image-cropper.component';
import {ShowimagecropComponent} from './image-cropper/showimage.component';
import {HighchartsComponent} from './highchart/highchart.component';
import {Dnd2Component} from './dnd2/dnd2.component'

//routes
const routes: Routes = [
  {path:'dnd', component:DndComponent},
  {path:'dropdown', component:DropdownComponent},
  {path:'ckeditor', component:CkeditorComponent},
  {path:'googlemaps', component:GooglemapsComponent},
  {path:'matmaps', component:MatmapComponent},
  {path:'datetime', component:DatetimeComponent},
  {path:'taginput', component:TaginputComponent},
  {path:'recaptcha', component:RecaptchaComponent},
  {path:'cropimage', component:ShowimagecropComponent},
  {path:'highchart', component:HighchartsComponent},
  {path:'dnd2', component:Dnd2Component}
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
    TaginputComponent,
    RecaptchaComponent,
    ImagecropperComponent,
    ShowimagecropComponent,
    HighchartsComponent,
    Dnd2Component,
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
    // AgmCoreModule.forRoot(
    //   {apiKey: 'AIzaSyAFgM81Qz-SwfTzUsr4F51AgDj0HdN88CQ'}
    //   ),
    AgmCoreModule.forRoot(
      {apiKey: 'AIzaSyC--hI_zssAP9vxyKjLNhfUYivZghkaf1o',libraries:['places']}
      ),
    MatDatepickerModule,
    BrowserAnimationsModule,
    TagInputModule,
    ReactiveFormsModule,
    MatChipsModule,
    RecaptchaModule,
    ChartModule,
    DndModule,
    // DateTimePickerModule
    DpDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
