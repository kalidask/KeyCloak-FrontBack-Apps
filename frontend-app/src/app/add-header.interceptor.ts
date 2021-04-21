import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { KeycloakSecurityService } from './keycloak-security.service';

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {


    constructor(private securityService: KeycloakSecurityService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {



        console.log('------------ AddHeaderInterceptor');


        let jsonReq: HttpRequest<any> = req.clone({
            setHeaders: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.securityService.kc.token
            }
        });
        return next.handle(jsonReq);
    }

}