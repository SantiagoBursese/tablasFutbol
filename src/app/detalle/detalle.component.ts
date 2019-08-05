import { Component, OnInit } from '@angular/core';
import { Equipo } from '../equipo';
import { EquipoService } from '../equipo.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  equipo:Equipo;

  constructor(
    private equipoService:EquipoService
  ) { }

  ngOnInit() {
    this.equipoService.equipoActual
    .subscribe(equipo => this.equipo = this.verificarDatos(equipo));
  }

  verificarDatos(equipo: Equipo):Equipo{
    if(!equipo){
      equipo = { nombre: "?", apodo:"?", escudo: "../../assets/nodata.png", estadio:"?", fundacion:"?"}
    }
    else{
      if(!equipo.escudo){
        equipo.escudo = "../../assets/nodata.png";
      }
      
    }
    return equipo;
  }

}
