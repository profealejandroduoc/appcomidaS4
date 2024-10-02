import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApidatosService } from 'src/app/services/apidatos.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
})
export class RecetasPage implements OnInit {

  titulo:string=""
  constructor(private router:Router, private srv:ApidatosService) { }

  ngOnInit() {
    let nombre_cartegoria=this.router.getCurrentNavigation()?.extras.state
    if(nombre_cartegoria!==undefined){
      this.titulo=nombre_cartegoria["tipofood"];
      this.verComidas(nombre_cartegoria["tipofood"]);
    }
    
  }

  verComidas(tipo:string){
    this.srv.getComidasxCatogoria(tipo).subscribe(datos=>{
      console.log(datos);
    })
  }
}
