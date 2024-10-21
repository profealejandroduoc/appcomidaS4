import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Instruccion, Receta } from 'src/app/interfaces/icomidas';
import { ApidatosService } from 'src/app/services/apidatos.service';
import { ServiciodbService } from 'src/app/services/serviciodb.service';
import { Share, SharePlugin } from '@capacitor/share';

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

  async compartir(){
    console.log(this.lista[0].strYoutube);
    await Share.share({
      title: 'Mira esta receta!!!',
      text: 'ComidAPP',
      url: this.lista[0].strYoutube,
      dialogTitle: 'Compartir receta',
    });

  }




  ngOnInit() {
    console.clear();
    let mis_extras=this.router.getCurrentNavigation()?.extras.state
    if(mis_extras!==undefined){
      this.srv.getInstrucciones(mis_extras["id_inst"]).subscribe(datos=>{
        this.lista.push(...datos.meals);
        
      });
      this.id_receta=mis_extras["id_inst"];
      
      let ins=this.db.leer(this.id_receta);
      ins.then(valor=>{
        if(valor!==null){
          this.corazon='heart'
        }
      });
      
    }
  }

  agregarFavorito(id_receta:string){

    let ins=this.db.leer(id_receta);
    console.log("LEYENDO...");
    console.log(ins);
    console.log("FIN LECTURA...");

    ins.then(valores=>{
      if(valores===null){
        this.db.guardar(id_receta,this.lista[0]);
        this.corazon="heart"
      }
      else{
        this.db.eliminar(id_receta);
        this.corazon="heart-outline"
      }
    });
  }

}
