import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Fournisseur, FournisseurService } from '../fournisseur.service';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {

  fournisseur: Fournisseur = {};

  // action: String;


  constructor(
    private fournisseurHttpService: FournisseurService,
    private activatedRoute: ActivatedRoute,
    private route: Router) { }

  ngOnInit() {

    // this.activatedRoute.paramMap.subscribe(params => {
    //   this.action = this.activatedRoute.snapshot.params.action;
    // });

    // if (this.action == 'edit' || this.action == 'show') {
    //   this.fournisseurHttpService.getFournisseur(this.activatedRoute.snapshot.params.id)
    //     .subscribe((fournisseur: Fournisseur) => {
    //       if (fournisseur.id != null) {
    //         this.fournisseur = fournisseur;
    //       }
    //     }, (err) => {
    //       alert('Faild to load Fournisseur');
    //     });
    // }

  }


  valider(form: NgForm) {

    if (form.valid) {


      // if (this.action == 'add') {
      this.fournisseurHttpService.addFournisseur(this.fournisseur).subscribe(
        (fournisseur: Fournisseur) => {

          if (fournisseur.id != null) {
            this.route.navigate(['/fournisseur', 'edit', fournisseur.id, 'created']);
          }
        });
      // }
    }
  }

  precedent() {

  }

}
