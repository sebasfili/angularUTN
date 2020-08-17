import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ConstantPool } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getProductos(): any {
   return this.httpClient.get('https://jsonfy.com/items');
  }
}
