import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { TwowaybindingComponent } from './components/twowaybinding/twowaybinding.component';

const routes: Routes = [
  { path: 'List', component: ListProductsComponent },
  { path: '2Way', component: TwowaybindingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
