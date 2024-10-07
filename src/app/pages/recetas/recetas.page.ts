import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Receta } from 'src/app/interfaces/icomidas';
import { ApidatosService } from 'src/app/services/apidatos.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
})
export class RecetasPage implements OnInit {

  titulo:string=""
  listarecetas:Receta[]=[]
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
      this.listarecetas.push(...datos.meals);
      console.log("*****RECIBIENDO DATOS******");
      console.log(this.listarecetas);
    })
  }

  onClick(id:string){
    let xtra:NavigationExtras={
      state:{
        id_inst:id
      }
    }
    this.router.navigate(['instrucciones/'], xtra)
  }
}
