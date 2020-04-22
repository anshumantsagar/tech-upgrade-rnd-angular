import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
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
import { NgxSmoothDnDModule } from 'ngx-smooth-dnd';
import { ClickOutsideModule } from 'ng-click-outside';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';








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
import {Dnd2Component} from './dnd2/dnd2.component';
import {DndthreeComponent} from './dnd3/dnd3.component';
import {ClickoutsideComponent} from './click-outside/click-outside.component';
import {AutocompleteComponent} from './autocomplete/autocomplete.component'


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
  {path:'dnd2', component:Dnd2Component},
  {path:'dnd3', component:DndthreeComponent},
  {path:'clickoutside', component:ClickoutsideComponent},
  {path:'autocomplete', component:AutocompleteComponent}
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
    DndthreeComponent,
    ClickoutsideComponent,
    AutocompleteComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    CommonModule,
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
    DpDatePickerModule,
    NgxSmoothDnDModule,
    ClickOutsideModule,
    AutocompleteLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
