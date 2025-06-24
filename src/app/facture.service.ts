import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Facture } from './facture-model';

@Injectable({
  providedIn: 'root'
})


export class FactureService {
  private apiUrl = "api/factures";
  
  constructor( private http: HttpClient) { }

  addFacture(item: Facture){
    return this.http.post<Facture>(this.apiUrl, item);
  }

  getFactures(){
  return this.http.get<Facture[]>(this.apiUrl);
}

  deleteFacture(id: number){
    return this.http.delete(this.apiUrl + '/'+ id)
  }
}