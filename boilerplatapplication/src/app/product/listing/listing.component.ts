import { Product } from './../model/product.model';
import { CommonHttpServiceService } from './../../shared/service/common-http-service.service';
import { ProductCategory } from './../model/product-category.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { pipe, EMPTY, Observable } from 'rxjs';
import { finalize, catchError } from 'rxjs/operators';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  displayedColumns: string[] = ['name', 'category', 'price'];
  spinner: boolean;
  products$: Observable<Array<Product>>;
  categories$: Observable<Array<ProductCategory>>;
  searchFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.setSpinnerValue(true);
    this.createSearchForm();
    this.searchProducts();
  }

  createSearchForm() {
    this.searchFormGroup = this.formBuilder.group({
      name: [''],
      categoryId: [''],
      mobileNumber: [''],
    });
  }

  searchProducts() {
    this.setSpinnerValue(false);
    this.products$ = this.productService.getProduct()
      .pipe(finalize(() => {
        this.setSpinnerValue(false);
      }), catchError((error) => {
        this.setSpinnerValue(false);
        return EMPTY;
      }));
  }

  showSpinner(): boolean {
    return this.spinner;
  }

  setSpinnerValue(show: boolean) {
    this.spinner = show;
  }
}
