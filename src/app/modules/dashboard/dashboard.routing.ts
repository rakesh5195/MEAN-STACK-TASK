import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RawMaterialComponent } from './raw-material/raw-material.component';
import { FinishProductComponent } from './finish-product/finish-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'raw-material',
    component: RawMaterialComponent
  },
  {
    path: 'finish-product',
    component: FinishProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
