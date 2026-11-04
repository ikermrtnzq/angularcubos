import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, MaybeAsync, GuardResult } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private _router: Router
    ) {}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): MaybeAsync<GuardResult> {

    const token = sessionStorage.getItem('TOKEN');

    if (token) {
        return true;
    }else{
        return this._router.createUrlTree(['/'], {queryParams: {returnUrl: state.url}})
    }
    }
}
