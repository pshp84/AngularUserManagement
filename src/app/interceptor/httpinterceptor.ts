import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable()
export class JwtHttpInterceptor implements HttpInterceptor {
  constructor() { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const data = localStorage.getItem("token");
    if (data) {
      req = req.clone({
        setHeaders: {
          'x-access-token': `${data}`,
        },
      });
    }
    return next.handle(req);
  }
}
