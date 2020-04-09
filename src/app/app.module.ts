import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import {FormsModule} from '@angular/forms';
import {CKEditorModule} from 'ng2-ckeditor'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DndComponent } from './dnd/dnd.component';
import {DropdownComponent} from './dropdown/dropdown.component';
import {CkeditorComponent} from './ckEditor/ckeditor.component'
import {Routes,RouterModule} from '@angular/router'

const routes: Routes = [
  {path:'dnd', component:DndComponent},
  {path:'dropdown', component:DropdownComponent},
  {path:'ckeditor', component:CkeditorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DndComponent,
    DropdownComponent,
    CkeditorComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    SelectDropDownModule,
    FormsModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
