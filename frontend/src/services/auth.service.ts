import { Injectable } from '@angular/core';
import { environment } from "../environments/environment";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UrlService } from './url.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private _blockedUrl = "/";

    get blockedUrl() {
        return this._blockedUrl;
    }

    set blockedUrl(url: string) {
        this._blockedUrl = url !== "/login" ? url : "/";
    }

    constructor(
        private http: HttpClient,
        private router: Router,
        private urlS: UrlService
    ) { }

    login() {
        let width = Math.min(window.outerWidth, 500);
        let height = Math.min(window.outerHeight, 500);
        let authWindow = open(environment.backendAddress + this.urlS.auth.login, "", `width=${width},height=${height}`);
        authWindow.moveTo((window.outerWidth - width) / 2, (window.outerHeight - height) / 2);
        window.addEventListener('message', this.onMessage);

        const timer = setInterval(() => {
            if (authWindow.closed) {
                window.removeEventListener("message", this.onMessage);
                clearInterval(timer);
            }
        }, 100);
    }

    private onMessage = (event: MessageEvent) => {
        if (event.origin === environment.backendAddress) {
            localStorage.setItem("token", event.data);
            this.router.navigate([this.blockedUrl]);
        }
    };

    logout() {
        this.http.get(this.urlS.auth.logout).subscribe();
        localStorage.removeItem("token");
        // this.http.get(
        //     "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=" +
        //     environment.backendAddress
        // ).subscribe();
        this.blockedUrl = this.router.url;
        this.router.navigate(['/login']);
    }
}