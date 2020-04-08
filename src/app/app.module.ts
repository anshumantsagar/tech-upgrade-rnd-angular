import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DndComponent } from './dnd/dnd.component';
import {Routes,RouterModule} from '@angular/router'

const routes: Routes = [
  {path:'dnd', component:DndComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DndComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
