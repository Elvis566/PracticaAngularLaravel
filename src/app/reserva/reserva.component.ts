import { Component } from '@angular/core';
import { ApiService } from '../Servicios/api.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [NgIf],
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.css'
})
export class ReservaComponent {
  id = localStorage.getItem('idHabitacion')
  pase :boolean=false
  message ="No puedes reservar mas asientos de los disponibles"

  constructor(private pos:ApiService, private route : Router){}

  reservar(numeroAsientos:any){
    console.log(numeroAsientos.value);
    this.pos.reservar(numeroAsientos.value, this.id).subscribe({
      next:(data:any)=>{

      },error:(e:any)=>{
        this.pase = true
        console.log(e);
      }
    })
  }

  escape(){
    localStorage.removeItem('idHabitacion');
    this.route.navigate(['/cines'])
  }

}
