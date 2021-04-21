import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KeycloakInstance } from 'keycloak-js';
import { environment } from 'src/environments/environment';

declare var Keycloak: any;

@Injectable({
    providedIn: 'root'
})
export class KeycloakSecurityService {

    public kc: KeycloakInstance;

    constructor(private http: HttpClient) { }

    public async init() {
        console.log('--------------------------KeycloakSecurityService');

        this.kc = new Keycloak({
            url: environment.keycloak.keycloakUrl,
            realm: environment.keycloak.realm,
            clientId: environment.keycloak.clientId
        });

        await this.kc.init({
            onLoad: 'login-required',
            redirectUri: environment.keycloak.redirectUri
            // onLoad:'check-sso'
            // promiseType:'native',
        });

        console.log('-------> token : ' + this.kc.token);

        this.kc.loadUserProfile().then(profile => {
            console.log('-------> name : ' + profile.username);
            console.log('-------> filiale : ' + profile['attributes']['filiale']);
        })

    }
}
