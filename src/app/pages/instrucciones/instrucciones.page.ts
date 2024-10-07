import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Instruccion } from 'src/app/interfaces/icomidas';
import { ApidatosService } from 'src/app/services/apidatos.service';

@Component({
  selector: 'app-instrucciones',
  templateUrl: './instrucciones.page.html',
  styleUrls: ['./instrucciones.page.scss'],
})
export class InstruccionesPage implements OnInit {

  lista:Instruccion[]=[];
  constructor(private router:Router, private srv:ApidatosService) { }

  ngOnInit() {
    let mis_extras=this.router.getCurrentNavigation()?.extras.state
    if(mis_extras!==undefined){
      this.srv.getInstrucciones(mis_extras["id_inst"]).subscribe(datos=>{
        this.lista.push(...datos.meals);
      });
    }
  }

}
