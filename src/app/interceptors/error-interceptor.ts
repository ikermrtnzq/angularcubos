import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http'; 

import { inject } from '@angular/core'; 

import { Router } from '@angular/router'; 

import { ToastService } from 'ngx-yet-another-toast-library'; 

import { catchError, throwError } from 'rxjs'; 

export const errorInterceptor: HttpInterceptorFn = (req, next) => { 

  const toastService: ToastService = inject(ToastService); 

  const _router: Router = inject(Router); 

  return next(req).pipe( 

    catchError((error: HttpErrorResponse) => { 

      toastService.error(error.message); 

      _router.navigate(['/error']); 

      console.log("tipo de error: " + error.status); 

      console.log("Mensaje de error: " + error.message); 

      //ESTAMOS CAPTURANDO UN ERROR, DEBEMOS PROPAGAR DICHO ERROR A LA  

      //PETICION 

      return throwError(() => error); 

    })     

  ); 

}