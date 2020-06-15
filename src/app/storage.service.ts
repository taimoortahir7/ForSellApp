import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setToken(value: string): void {
    localStorage.setItem('token', value)
  }

  removeToken(): void {
    localStorage.removeItem("token")
  }

  isLogin(): boolean {
    return localStorage.getItem("token") ? true : false;
  }
  
}