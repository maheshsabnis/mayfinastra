import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// Import the service for which teh requets will be intercepted
import { HttpSecureService } from './app.httpsecure.service';
@Injectable()
export class SecurityTokenInterceptorService implements HttpInterceptor {
  // 1: Inject the service which MUST be intercepted
  constructor(private serv: HttpSecureService) {}
   // 2: The intercept method will intercept the Received Response and Request
  intercept(req: HttpRequest<any>, next: HttpHandler):
   Observable<HttpEvent<any>> {
    // 3: We retrieve the token, if any
    const token = sessionStorage.getItem('token');
    // 4: Get the reference of the Current Request header
    let newHeaders = req.headers;
    // 5: Chec; if there is token available
    if (token) {
      console.log(token);
       // 6 If we have a token, we append it to our new headers
      newHeaders = newHeaders.append('Authorization', `Bearer ${token}`);
    }
    // 7 clone the request with  new headers
    const authReq = req.clone({headers: newHeaders});
    // 8: Frwarding the request to next interceptor(if any)  to to REST API
    return next.handle(authReq);
   }
}
