import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
host = environment.URL
  constructor( private http: HttpClient) { }

  public verifier(login: string, password: string) {
    return this.http.get(this.host+"/loginUtilisateur/"+login+"&"+password)
  }

  public SetLogin(login: string) {
    localStorage.setItem("login", login)
  }

  public getLogin(){
    return localStorage.getItem("login")
  }
}
