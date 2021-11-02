import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { OnewaybindingComponent } from './components/onewaybinding/onewaybinding.component';
import { TwowaybindingComponent } from './components/twowaybinding/twowaybinding.component'
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ListProducts2Component } from './components/list-products2/list-products2.component';
import { FormComponent } from './components/form/form.component';



@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ListProductsComponent,
    OnewaybindingComponent,
    TwowaybindingComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ListProducts2Component,
    FormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
