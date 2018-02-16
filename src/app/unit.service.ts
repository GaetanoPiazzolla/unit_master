import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Unit } from './unit';
import { UnitResponse} from './unitResponse';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable()
export class UnitService {

  baseUrl = 'http://rigel.dedalus.lan:8090/demos/rest/unit/';

  options =  {
      headers: new HttpHeaders().set('Content-Type', 'application/xml; charset=utf-8')
  };

  constructor(private http: HttpClient) { }

  getBaseUrl(): string {
    return this.baseUrl;
  }
  setBaseUrl(arg: string): void{
    this.baseUrl = arg;
  }

  getUnits(): Observable<Unit[]> {
    return this.http.get<Unit[]>(this.baseUrl+'list/all');
  }

  getUnitsEnabled(): Observable<Unit[]> {
    return this.http.get<Unit[]>(this.baseUrl+'list/enabled');
  }
  
  getUnitsDisabled(): Observable<Unit[]> {
    return this.http.get<Unit[]>(this.baseUrl+'list/disabled');
  }

  getUnitsRunning():Observable<Unit[]>{
    return this.http.get<Unit[]>(this.baseUrl+'list/running');
  }
  
  getUnit(id: string): Observable<Unit> {
    return this.http.get<Unit>(this.baseUrl+'get/'+id);
  }

  enableUnit(id:string) : Observable<UnitResponse>{
    return this.http.get<UnitResponse>(this.baseUrl+'enable/'+id);
  }

  disableUnit(id:string) : Observable<UnitResponse>{
    return this.http.get<UnitResponse>(this.baseUrl+'disable/'+id);
  }

  stopUnit(id:string) : Observable<UnitResponse>{
    return this.http.get<UnitResponse>(this.baseUrl+'stop/'+id);
  }

  startUnit(id:string) : Observable<UnitResponse>{
    return this.http.get<UnitResponse>(this.baseUrl+'start/'+id);
  }

  removeUnit(id:string) : Observable<UnitResponse>{
    return this.http.get<UnitResponse>(this.baseUrl+'remove/'+id);
  }

  restartUnit(id:string) : Observable<UnitResponse>{
    return this.http.get<UnitResponse>(this.baseUrl+'restart/'+id);
  }

  updateUnit(id:string,value : string) : Observable<UnitResponse>{
    return this.http.post<UnitResponse>(this.baseUrl+'update/'+id, value, this.options);
  }
  
  insertUnit(value: string): Observable<UnitResponse>{
    return this.http.post<UnitResponse>(this.baseUrl+'insert/', value, this.options);
  }

}