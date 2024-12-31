import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
            {
                path: 'home',
                component: HomeComponent,
            },
            {
                path: 'details/:id',
                component: ProductDetailsComponent,
            },
        ]),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
