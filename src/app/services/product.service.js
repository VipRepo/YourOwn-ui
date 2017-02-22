"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var products_const_1 = require('../model/products.const');
var authentication_service_1 = require('../auth_module/auth/authentication.service');
require('rxjs/add/operator/map');
var http_1 = require('@angular/http');
var ProductService = (function () {
    function ProductService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
    }
    ProductService.prototype.getAll = function () {
        return products_const_1.PRODUCTS;
    };
    ProductService.prototype.getProducts = function () {
        // add authorization header with jwt token
        var headers = new http_1.Headers({ 'Authorization': this.authenticationService.token });
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        var options = new http_1.RequestOptions({ headers: headers });
        // get users from api
        return this.http.get('//localhost:8082/products', options)
            .map(function (response) { return response.json(); });
    };
    ProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, authentication_service_1.AuthenticationService])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map