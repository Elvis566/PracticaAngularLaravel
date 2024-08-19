import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../Servicios/api.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  dataCine: any

  constructor(private api:ApiService, private route:Router) { }

  ngOnInit(){
    this.obtenerCines();
  }

  crearCine(name:any, direccion:any){
    console.log(name.value, direccion.value);
    debugger

    this.api.saveCine(name.value, direccion.value).subscribe({
      next:(data:any)=>{

      },error:(e:any)=>{
        console.log(e);
      }
    })
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

  pasar(id:any){
    localStorage.setItem('idCine', id);
    this.route.navigate(['/cines'])
  }
}
