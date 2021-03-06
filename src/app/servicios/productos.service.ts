import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantPool } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getPosts(): any {
    return this.httpClient.get('https://my-json-server.typicode.com/sebasfili/reactApi/db');
  }

  getOnePost(id: Int16Array): any {
    return this.httpClient.get(`https://my-json-server.typicode.com/sebasfili/reactApi/listado/${id}`);
  }
}
