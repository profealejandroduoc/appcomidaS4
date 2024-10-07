import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorias, Instrucciones, Recetas } from '../interfaces/icomidas';

@Injectable({
  providedIn: 'root'
})
export class ApidatosService {

  constructor(private httpclient:HttpClient) { }

  getCategorias(){
    return this.httpclient.get<Categorias>(`https://www.themealdb.com/api/json/v1/1/categories.php`);
  }

  getComidasxCatogoria(tipo:string){
    return this.httpclient.get<Recetas>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${tipo}`);
  }

  getInstrucciones(id:string){
    return this.httpclient.get<Instrucciones>(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  }

}
