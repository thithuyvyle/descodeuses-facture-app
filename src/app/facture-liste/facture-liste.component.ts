import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Facture } from '../facture-model';
import { FactureService } from '../facture.service';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-facture-liste',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
  ],
  templateUrl: './facture-liste.component.html',
  styleUrl: './facture-liste.component.css'
})

export class FactureListeComponent implements OnInit {
  factures: Facture[] = [
    /* { designation: "Achats pros", quantite: 5, prix: 40 },
     { designation: "Hôtels", quantite: 2, prix: 100 },
     { designation: "Restos", quantite: 1, prix: 40 },
     { designation: "Achats persos", quantite: 2, prix: 50 },*/
  ];

  displayedColumns: string[] = ['désignation', 'quantité', 'prix', 'supprimer'];
  totalDesignation: number = 0;
  total: number = 0;

  form!: FormGroup;
  constructor(private fb: FormBuilder, private factureService: FactureService, private activatedRoute: ActivatedRoute,) {
    this.form = this.fb.group({
      id: [''],
      designation: ["", [Validators.required]],
      quantite: ["", [Validators.required]],
      prix: ["", [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.onFetchFactures();
  }

  onCalcul() {
    this.total = 0;
    for (let i = 0; i < this.factures.length; i++) {
      this.totalDesignation = this.factures[i].quantite * this.factures[i].prix;
      this.total += this.totalDesignation;
    };
  }

  onSubmit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.form.valid) {
      const facture: Facture = {
        id: null,
        designation: this.form.value.designation,
        quantite: this.form.value.quantite,
        prix: this.form.value.prix,
      };
      this.factureService.addFacture(facture).subscribe(data => {
        this.onFetchFactures();
      })
    } this.form.reset();
  }

  onFetchFactures() {
    this.factureService.getFactures().subscribe((data) => {
      this.factures = data;
      this.onCalcul();
    });
  }

  onDeleteFacture(id: number){
  this.factureService.deleteFacture(id).subscribe( () =>{
    this.onFetchFactures();
  })
  }

}

