import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { Injectable } from '@angular/core';
import { environment } from "../environments/environment"

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let newHeaders = {}
        let newUrl = req.url;
        if (req.url.startsWith("/")) {
            newHeaders["Content-Type"] = "application/json";
            newHeaders["Authorization"] = localStorage.getItem("token") || "";
            newUrl = environment.backendAddress + req.url;
        }

        return next.handle(req.clone({ setHeaders: newHeaders, url: newUrl }));
    }
}
