import { AddComponent } from './add/add.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing/listing.component';
import { ProductComponent } from './product.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product.routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonMaterialModule } from '../common-material-module';
import { CommonUtilityModule } from '../common-utility/common-utility.module';
import { ProductService } from './service/product.service';



@NgModule({
  declarations: [ListingComponent, ProductComponent, AddComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ProductRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    CommonMaterialModule,
    MatButtonModule,
    CommonUtilityModule
  ],
  providers: [ProductService]
})
export class ProductModule { }
