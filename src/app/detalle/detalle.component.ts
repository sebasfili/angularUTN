import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  producto: any

  constructor(
    private productosService: ProductosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.productosService.getOnePost(params['id']).subscribe(resp => {
        this.producto = resp;
      });
    }); 
  }
}
