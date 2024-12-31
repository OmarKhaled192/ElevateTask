import { Component, signal } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../interfaces/product';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {
    products: Product[];
    searchVal: any | undefined;

    constructor(
        private _ProductService: ProductService,
        private router: Router
    ) {}

    ngOnInit() {
        this.getProducts();
    }
    getProducts() {
        this._ProductService.GetProducts().subscribe({
            next: (data) => {
                this.products = data;
            },
        });
    }
    getProductsFilter(keyword: string) {
        this._ProductService.GetProductsFilter(keyword).subscribe({
            next: (data) => {
                this.products = data;
            },
        });
    }

    viewDetails(productId: number) {
        this.router.navigate(['/details', productId]);
    }
}
