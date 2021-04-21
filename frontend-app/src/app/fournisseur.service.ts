import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';




export class Fournisseur {
  id?: number;
  nom?: String;
  reference?: String;
}



@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  envUrl = '';


  constructor(private httpClient: HttpClient) {
    this.envUrl = environment.apiUrl;
  }

  getFournisseurs(): Observable<Fournisseur[]> {
    console.log('---------------- getFournisseurs' + this.envUrl + '/api/fournisseurs');

    return this.httpClient.get<Fournisseur[]>(this.envUrl + '/api/fournisseurs');
  }



  addFournisseur(fournisseur: Fournisseur): Observable<Fournisseur> {
    return this.httpClient.post<Fournisseur>(this.envUrl + '/api/fournisseurs', fournisseur);
  }
}
