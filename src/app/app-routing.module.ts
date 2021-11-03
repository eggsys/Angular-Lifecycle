import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUpdateComponent } from './components/form-update/form-update.component';
import { FormComponent } from './components/form/form.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { TwowaybindingComponent } from './components/twowaybinding/twowaybinding.component';

const routes: Routes = [
  { path: 'List', component: ListProductsComponent },
  { path: '2Way', component: TwowaybindingComponent },
  { path: 'Form', component: FormComponent },
  { path: 'update/:id', component: FormUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
