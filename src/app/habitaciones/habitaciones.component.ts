import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../Servicios/api.service';

@Component({
  selector: 'app-habitaciones',
  standalone: true,
  imports: [NgFor],
  templateUrl: './habitaciones.component.html',
  styleUrl: './habitaciones.component.css'
})
export class HabitacionesComponent {
  dataCine:any

  constructor(private api:ApiService){

  }

  ngOnInit(){
    this.obtenerCines();
  }


  obtenerCines(){
    this.api.getCine().subscribe({
      next:(data:any)=>{
        this.dataCine = data
      },error:(e:any)=>{
        console.log(e);
      }
    })
  }

  crearHabitaciones(numeroHabitacion:any, numeroAsientos:any, pelicula:any, cine_id:any){
    this.api.saveHabitacion(numeroHabitacion.value, numeroAsientos.value, pelicula.value, cine_id.value).subscribe({
      next:(data:any)=>{

      },error:(e:any)=>{
        console.log(e);
      }
    })
  }

}
