import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = environment.apiEndpoint;
  constructor(
    private http:HttpClient
  ) { }
  public get(endpoint:string, headers?):Observable<any>{
    if(headers){
      return this.http.get(this.url + endpoint,{headers});
    }
    return this.http.get(this.url + endpoint);
  }
}
