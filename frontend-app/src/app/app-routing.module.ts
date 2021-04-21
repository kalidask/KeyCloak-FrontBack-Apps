import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FournisseurListComponent } from './fournisseur-list/fournisseur-list.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';


const routes: Routes = [
  { path: '', redirectTo: "/fournisseur-list", pathMatch: "full" },
  { path: 'fournisseur-list', component: FournisseurListComponent },
  { path: 'fournisseur', component: FournisseurComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
