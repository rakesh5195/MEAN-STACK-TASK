import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard.routing';
import { RawMaterialComponent } from './raw-material/raw-material.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductService } from './product.service';
import { CommonModule } from '@angular/common';
import { FinishProductComponent } from './finish-product/finish-product.component';

@NgModule({
  declarations: [RawMaterialComponent, DashboardComponent, FinishProductComponent],
  imports: [DashboardRoutingModule, CommonModule],
  providers: [ProductService],

})
export class DashboardModule {}
