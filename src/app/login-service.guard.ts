import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { StorageService } from './storage.service';


@Injectable({
    providedIn: 'root'
  })
export class LoginCheck implements CanActivate {
  constructor(private router: Router, private storage: StorageService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.storage.isLogin()) {
      this.router.navigate(['/dashboard']);
      return false;
    }
    return true;
  }
}