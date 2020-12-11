import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UrlService {

    auth = {
        login: "/client/loginFromGoogleStep1",
        logout: "/client/logout",
        checkToken: "/client/checkToken",
    }

    resources = {

    }

}
