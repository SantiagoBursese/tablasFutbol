import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { TABLAS } from 'src/services/mocks/tablas';

@Injectable({
  providedIn: 'root'
})
export class PosicionesService {
  getPosiciones(pais: string): any {
    let subscribe$: Observable<any>;
    if(environment.mocks){
      subscribe$ = of(TABLAS[pais]);
    }else{
      subscribe$ = this.apiService.get('');
    }
    return subscribe$;
  }

  constructor( private apiService:ApiService) { }
}
