import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../interfaces/product';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
    productId: number;
    product: Product;

    constructor(
        private route: ActivatedRoute,
        private _ProductService: ProductService
    ) {}
    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            this.productId = +params.get('id'); // The '+' converts the string to a number
        });
        this.getProductDetails(this.productId);
    }

    getProductDetails(id: number) {
        this._ProductService.GetProductDetails(id).subscribe({
            next: (data) => {
                this.product = data;
            },
        });
    }
}
