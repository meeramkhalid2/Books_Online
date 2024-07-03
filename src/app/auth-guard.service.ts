import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { LoginComponent } from './modules/authentication/login/login.component';
import { AuthService } from './auth-service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  authService:AuthService= inject(AuthService);
  route: Router= inject(Router);

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean 
   {
    if(this.authService.isLoggedIn())
      {
        return true;
      }
      else
      {
        this.route.navigate(['login']);
        return false;

      }
  }
}
