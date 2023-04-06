import { HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpHeadersInterceptor {
    constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
               // 'x-rapidapi-key' : '6e7b442f36b94137b970f08cd9f5966c',
               // 'x-rapidapi-host' : 'rawg-video-games-database.p.rapidapi.com',
            },
            setParams: {
                key: '6e7b442f36b94137b970f08cd9f5966c',
            }
        });
        return next.handle(req);
    }
}