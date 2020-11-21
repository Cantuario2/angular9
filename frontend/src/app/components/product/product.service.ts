import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL = "http://localhost:3001/products";
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  errorhandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um Erro!", true);
    return EMPTY;
  }
  
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURL, product).pipe(
      map(obj => obj),
      catchError(e => this.errorhandler(e))
    )
  }

  read(): Observable<Product []> {
    return this.http.get<Product []>(this.baseURL).pipe(
      map(obj => obj),
      catchError(e => this.errorhandler(e))
    )
  }

  readById(id: number): Observable<Product []> {
    const url = `${this.baseURL}/${id}`;
    return this.http.get<Product []>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorhandler(e))
    )
  }
  
  update(product: Product): Observable<Product> {
    const url = `${this.baseURL}/${product.id}`;
    return this.http.put<Product>(url, product).pipe(
      map(obj => obj),
      catchError(e => this.errorhandler(e))
    )
  }

  delete(id: number): Observable<Product> {
    const url = `${this.baseURL}/${id}`;
    return this.http.delete<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorhandler(e))
    )
  }

}