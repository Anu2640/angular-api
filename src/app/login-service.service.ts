import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }

  login(data:any):Observable<any>{
    return this.http.post("https://reqres.in/api/login",data)
  }
}


// eve.holt@reqres.in