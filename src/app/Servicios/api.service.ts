import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  saveCine(name:any,direccion:any ){
    return this.http.post('http://127.0.0.1:8000/api/saveCine',{
      name : name,
      direccion : direccion
    })
  }

  getCine(){
    return this.http.get('http://127.0.0.1:8000/api/obtenerCine')
  }

  saveHabitacion(numeroHabitacion:any,numeroAsientos:any, pelicula:any, cine_id: any ){
    return this.http.post('http://127.0.0.1:8000/api/saveHabitacion',{
      numeroHabitacion : numeroHabitacion,
      numeroAsientos : numeroAsientos,
      pelicula:pelicula,
      cine_id: cine_id
    })
  }

  getHabitaciones(id:any){
    return this.http.get('http://127.0.0.1:8000/api/obtenerAll/'+id)
  }

  getHabitacion(id:any){
    return this.http.get('http://127.0.0.1:8000/api/obtener/'+id)
  }

  reservar(numeroAsientos:any, id:any){
    return this.http.put('http://127.0.0.1:8000/api/reserva/'+id,{
      numeroAsientos: numeroAsientos
    })
  }

  // delete(id:any){
  //   return this.http.delete('http://127.0.0.1:8000/api/delete/'+id)
  // }








}
