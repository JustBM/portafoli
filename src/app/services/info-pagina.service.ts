import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {}; 
  //info: any = {}; //No deberia usarse any
  cargada = false;
  equipo: any = []; 

  constructor( private http: HttpClient) { 

    this.cargarInfo ();
    this.cargarEquipo ();
    // Prueba de donde aparece
    // console.log('Servicio de infoPagina listo')
    //Leer el archivo JSON
    
  }

  //Métodos
  private cargarInfo(); //para leer archivo de JSON interno
    this.http.get('../../assets/data/data-pagina.json')
      subscribe( resp => {
        this.cargada = true;
        this.info = resp;
        console.log( resp );
    })

private cargarEquipo(); //Para leer archivo de JSON externo
  this.http.get('https://portfolio-angular-html-ddb-default-rtdb.europe-west1.firebasedatabase.app/Equip.json')
    subscribe( resp => {
      this.info = resp;
      console.log( resp );
})