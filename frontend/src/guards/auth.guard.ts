import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UrlService } from '../services/url.service';



@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private http: HttpClient,
        private authS: AuthService,
        private urlS: UrlService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return new Observable((observer: Observer<boolean>) => {
            this.http.get(this.urlS.auth.checkToken).subscribe(
                value => {
                    console.log(1)
                    observer.next(true);
                    observer.complete();
                },
                error => {
                    console.log(2, error)
                    observer.next(false);
                    observer.complete();
                    this.authS.blockedUrl = state.url;
                    this.router.navigate(['/login']);
                }
            );
        });
    }
}
