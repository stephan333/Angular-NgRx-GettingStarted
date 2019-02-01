import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Subscription, Observable } from 'rxjs';

import { Product } from '../../product';
import { ProductService } from '../../product.service';
import { Store, select } from '@ngrx/store';

import { dispatch } from 'rxjs/internal/observable/pairs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  pageTitle = 'Products';

  @Input() errorMessage: string;
  @Input() displayCode: boolean;
  @Input() products: Product[];
  @Input() selectedProduct: Product;
  @Output() checked = new EventEmitter<boolean>();
  @Output() initializeNewProduct = new EventEmitter<void>();
  @Output() selected = new EventEmitter<Product>();

  checkChanged(value: boolean) {
    this.checked.emit(value);
  }

  newProduct(): void {
    this.initializeNewProduct.emit();
  }

  productSelected(product: Product) {
    this.selected.emit(product);
  }
}
