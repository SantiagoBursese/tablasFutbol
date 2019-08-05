import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EquipoService } from '../equipo.service';
import { PosicionesService } from '../posiciones.service';
import { Posicion } from '../posicion';

@Component({
  selector: 'app-posiciones-component',
  templateUrl: './posiciones-component.component.html',
  styleUrls: ['./posiciones-component.component.css']
})
export class PosicionesComponentComponent implements OnInit {
  title:String = 'Posiciones';
  equipos:Posicion[];
  pais:string;
  constructor(
    private activatedRoute:ActivatedRoute,
    private equipoService:EquipoService,
    private posicionesService:PosicionesService
  ) { }

  ngOnInit() {
    const params$ = this.activatedRoute.paramMap;

    params$.subscribe(params =>{
      this.pais = params.get('pais') ? params.get('pais') :"ARG";
      const equipos$ =this.posicionesService.getPosiciones(this.pais).toPromise()

      equipos$.then(equipos => this.equipos = equipos)
      .catch(err => new Error(err))
    })
  }

  detalleEquipo(equipo:Posicion, pais:string){
    this.equipoService.getDetalle(equipo,pais);
  }

}
