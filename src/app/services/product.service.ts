import { Injectable} from '@angular/core';
import { Product } from '../model/Product.model';
import {PRODUCTS} from '../model/products.const';
import { AuthenticationService } from '../auth_module/auth/authentication.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions, Response } from '@angular/http';


@Injectable()
export class ProductService{

	constructor(
		private http: Http,
		private authenticationService: AuthenticationService
	){

	}

	getAll(): Product[] {
		return PRODUCTS;
	}

	getProducts(): Observable<Product[]> {
		   // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': this.authenticationService.token});
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
        let options = new RequestOptions({ headers: headers });
 
        // get users from api
        return this.http.get('//localhost:8082/products', options)
            .map((response: Response) => response.json());
	}
}



