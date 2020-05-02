import { Product } from './../model/product.model';
import { CommonHttpServiceService } from './../../shared/service/common-http-service.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(private commonHttpServiceService: CommonHttpServiceService) { }

  getProduct(): Observable<Array<Product>> {
    return this.commonHttpServiceService.get<Array<Product>>('product');
  }
}
