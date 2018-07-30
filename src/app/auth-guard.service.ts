import { Injectable } from '@angular/core';
import { CanActivate } from '../../node_modules/@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth:AuthService) { }

  canActivate(){


  }
}
