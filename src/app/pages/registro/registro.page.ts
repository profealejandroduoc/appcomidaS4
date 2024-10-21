import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/iusuario';
import { ServiciodbService } from 'src/app/services/serviciodb.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {


  usr:Usuario={
    username:'',
    password:'',
    nombre:'',
    apellido:''
    }

  constructor(private db:ServiciodbService,
    private router:Router) { }

  ngOnInit() {
  }

  registrar(){
    
  }
}
