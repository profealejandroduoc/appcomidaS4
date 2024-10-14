import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Instruccion, Receta } from 'src/app/interfaces/icomidas';
import { ApidatosService } from 'src/app/services/apidatos.service';
import { ServiciodbService } from 'src/app/services/serviciodb.service';

@Component({
  selector: 'app-instrucciones',
  templateUrl: './instrucciones.page.html',
  styleUrls: ['./instrucciones.page.scss'],
})
export class InstruccionesPage implements OnInit {

  id_receta="";
  corazon="heart-outline";

  lista:Instruccion[]=[];
  constructor(private router:Router, 
    private srv:ApidatosService,
    private db:ServiciodbService,
    ) { }

  ngOnInit() {
    console.clear();
    let mis_extras=this.router.getCurrentNavigation()?.extras.state
    if(mis_extras!==undefined){
      this.srv.getInstrucciones(mis_extras["id_inst"]).subscribe(datos=>{
        this.lista.push(...datos.meals);
        
      });
      this.id_receta=mis_extras["id_inst"];
    }
  }

  agregarFavorito(id_receta:string){
    console.log(id_receta);
    this.db.guardar(id_receta,this.lista[0]);
    this.corazon="heart"
    
  }

}
