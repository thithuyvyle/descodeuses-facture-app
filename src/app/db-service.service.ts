import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Facture } from './facture-model';
@Injectable({
  providedIn: 'root'
})
export class DBServiceService implements InMemoryDbService{

  constructor() { }

   createDb() {
    const factures: Facture[]=[
    {id:1234, designation: "Achats pros", quantite: 5, prix: 40 },
    {id:3456, designation: "Hôtels", quantite: 2, prix: 100 },
    {id:4567, designation: "Restos", quantite: 1, prix: 40 },
    {id:9876, designation: "Achats persos", quantite: 2, prix: 50 },
    ];
    return {factures};
   }
}
