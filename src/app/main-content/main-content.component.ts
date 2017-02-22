import {Component, OnInit} from '@angular/core';
import {ProductService} from '../services/product.service';
import { Product } from '../model/Product.model';


@Component({
	selector: 'main-content',
	providers: [ProductService],
	templateUrl: '/app/main-content/main-content.component.html'
})



export class MainContentComponent implements OnInit{

	products: Product[];

	constructor(private _productService: ProductService){

	}

	ngOnInit() {
		this._productService.getProducts().subscribe(products => this.products = products);
	}
}