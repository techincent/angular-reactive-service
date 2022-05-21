import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  
  getProducts(): Observable<any> {
    return this.http.get('https://api.storerestapi.com/products')
  }
  getProduct(productSlug: Observable<string>): Observable<any> {
    return productSlug.pipe(
      switchMap((slug) => {
        return this.http.get(`https://api.storerestapi.com/products/${slug}`)
      })
    )
  }
}
