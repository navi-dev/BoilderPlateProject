import { Router } from '@angular/router';
import { Product } from './../model/product.model';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ProductCategory } from '../model/product-category.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  formGroup: FormGroup;
  categories: Array<ProductCategory> = []
  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.createForm();
    this.getFormInitializers();
  }

  createForm() {
    this.formGroup = this.fb.group({
      id: [''],
      name: ['', [Validators.required]],
      description: [''],
      price: ['', [Validators.required]],
      categoryId: ['', [Validators.required]]
    });
  }

  getFormInitializers(): void {

  }

  save(): void {
    const savedValues = this.formGroup.value;
    const product: Product = {
      name: savedValues.name,
      description: savedValues.description,
      price: savedValues.price,
      productCategoryId: savedValues.categoryId
    };

    console.log(product);
  }

  cancel(): void {
    this.router.navigateByUrl('/products');
  }
}
