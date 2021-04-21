import { NgModule, APP_INITIALIZER } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelModule } from 'primeng/panel';

import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { PanelMenuModule } from 'primeng/panelmenu';
import { FieldsetModule } from 'primeng/fieldset';

import { CardModule } from 'primeng/card';
import { RouterModule } from '@angular/router';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { AddHeaderInterceptor } from './add-header.interceptor';
import { KeycloakSecurityService } from './keycloak-security.service';
import { FournisseurService } from './fournisseur.service';
import { FournisseurListComponent } from './fournisseur-list/fournisseur-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FournisseurComponent,
    FournisseurListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,

    PanelModule,
    InputTextModule,
    TableModule, BrowserAnimationsModule,
    FormsModule,
    PanelMenuModule, FieldsetModule,
    CardModule,
    RouterModule

  ],
  providers: [
    FournisseurService,
    { provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true },
    { provide: APP_INITIALIZER, deps: [KeycloakSecurityService], useFactory: kcFactory, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function kcFactory(kcSecurity: KeycloakSecurityService) {
  return () => kcSecurity.init();
}