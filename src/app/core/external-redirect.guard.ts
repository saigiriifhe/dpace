import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ExternalRedirectGuard implements CanActivate {
  canActivate(): boolean {
    window.location.href = 'https://ifheiindia.knimbus.com/portal/v2/default/home';
    return false;
  }
}