import { Component } from '@angular/core';
import { ApiService } from '../Servicios/api.service';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cine',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cine.component.html',
  styleUrl: './cine.component.css'
})
export class CineComponent {
  dataHabitaciones:any
  idCine = localStorage.getItem('idCine')

  constructor(private api:ApiService, private route:Router){

  }

  ngOnInit(){
    this.getHabitaciones();
  }

  getHabitaciones(){
    this.api.getHabitaciones(this.idCine).subscribe({
      next:(data:any)=>{
        this.dataHabitaciones = data
      },error:(e:any)=>{
        console.log(e);
      }
    })
  }

  reservar(id:any){
    localStorage.setItem('idHabitacion', id)
    this.route.navigate(['/reserva'])
  }

  salir(){
    localStorage.removeItem('idCine')
    this.route.navigate(['/home'])
  }

}
