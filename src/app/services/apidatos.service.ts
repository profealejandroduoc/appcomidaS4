import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorias } from '../interfaces/icomidas';

@Injectable({
  providedIn: 'root'
})
export class ApidatosService {

  constructor(private httpclient:HttpClient) { }

  getCategorias(){
    return this.httpclient.get<Categorias>(`https://www.themealdb.com/api/json/v1/1/categories.php`);
  }

  getComidasxCatogoria(tipo:string){
    return this.httpclient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${tipo}`);
  }
}
