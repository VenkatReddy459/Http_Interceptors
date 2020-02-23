import {Injectable} from '@angular/core'
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({providedIn:'root'})
export class Interceptors implements HttpInterceptor {
    constructor(){}

    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
      const headers= new HttpHeaders({
          'Authorization':'venkatReddy'
      })
      const clone=req.clone({
          headers:headers
      });
        
        return next.handle(clone)
    }
    
    }




