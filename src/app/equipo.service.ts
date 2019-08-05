import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment.prod';
import { EQUIPOS } from 'src/services/mocks/equipos';
import { Posicion } from './posicion';
import { Equipo } from './equipo';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  private equipo = new BehaviorSubject<Equipo> (null);

  equipoActual:Observable<any> = this.equipo.asObservable();

  constructor(
    private apiService:ApiService
  ) {}

  getDetalle(posicion:Posicion, pais:string){
    let subscribe$:Observable<any>
    if(environment.mocks){
      if(EQUIPOS[pais])
        subscribe$ = of(EQUIPOS[pais][posicion.cod]);
      else
        subscribe$ = of(null);
    }else{
      subscribe$ = this.apiService.get('');
    }

    subscribe$.subscribe(
      (detalleEquipo:Equipo) => this.equipo.next(detalleEquipo),
      (error:any) => this.equipo.next(null)
    )
  }
}

