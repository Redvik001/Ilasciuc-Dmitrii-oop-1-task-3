import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UrlService {

    auth = {
        login: "/auth/loginFromGoogleStep1",
        logout: "/auth/logout",
        checkToken: "/auth/checkToken",
    }

    user = {
        getUserTamagotchies: "/user/getUserTamagotchies",
        createTamagotchi: "/user/createTamagotchi",
        deleteTamagotchi: "/user/deleteTamagotchi",
        changeLastWalkingDate: "/user/changeLastWalkingDate",
        changeLastFeedingDate: "/user/changeLastFeedingDate"
    }
}
