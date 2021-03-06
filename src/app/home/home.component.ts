import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProductosService],
})

export class HomeComponent implements OnInit {
  productos: [];

  constructor(
    private productosService: ProductosService
  ) { }

  ngOnInit(): void {
    this.productosService.getPosts().subscribe(resp => {
      this.productos = resp.listado;
    });
  }

}
