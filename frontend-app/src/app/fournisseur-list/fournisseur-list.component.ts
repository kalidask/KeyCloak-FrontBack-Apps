import { Component, OnInit } from '@angular/core';
import { Fournisseur, FournisseurService } from '../fournisseur.service';

@Component({
  selector: 'app-fournisseur-list',
  templateUrl: './fournisseur-list.component.html',
  styleUrls: ['./fournisseur-list.component.css']
})
export class FournisseurListComponent implements OnInit {

  fournisseurs: Fournisseur[] = [];


  constructor(private fournisseurHttpService: FournisseurService) {
  }

  ngOnInit() {
    this.fournisseurHttpService.getFournisseurs().subscribe(
      (res: any) => {

        this.fournisseurs = res;

        console.log('************* ' + this.fournisseurs.length);


      }
    ), (err: any) => {
      alert(err);
    };
  }

}
