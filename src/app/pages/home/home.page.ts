import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/interfaces/icomidas';
import { ApidatosService } from 'src/app/services/apidatos.service';
import { Categorias } from '../../interfaces/icomidas';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  lista:Categoria[]=[];

  constructor(private servicio:ApidatosService) {}

  ngOnInit(){
    this.servicio.getCategorias().subscribe(datos=>{
      console.log(datos);
      this.lista.push(...datos.categories);
      console.log("MI LISTA");
      console.log(this.lista);
    })
  }

}
