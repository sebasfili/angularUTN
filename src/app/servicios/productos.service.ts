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

  getPosts(): any {
   return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }
}
