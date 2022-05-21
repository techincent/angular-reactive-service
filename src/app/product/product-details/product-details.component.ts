import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  
  product$!: Observable<any>
  
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    const productSlug$ = this.route.params.pipe(map((params: any) => params?.["slug"]))
    this.product$ = this.productService.getProduct(productSlug$).pipe(map(res => res?.data))
  }

}
