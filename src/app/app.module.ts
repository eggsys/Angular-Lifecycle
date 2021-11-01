import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { OnewaybindingComponent } from './components/onewaybinding/onewaybinding.component';
import { TwowaybindingComponent } from './components/twowaybinding/twowaybinding.component'



@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ListProductsComponent,
    OnewaybindingComponent,
    TwowaybindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
