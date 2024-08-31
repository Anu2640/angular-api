import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiServerService {
  public studentBaseUrl = "https://6128991386a213001729f9df.mockapi.io/test/v1/student"
  public bankBaseUrl = "https://6128991386a213001729f9df.mockapi.io/test/v1/principals"

  constructor(private http:HttpClient) {}

  getStudentDetails():Observable<any>{
    return this.http.get(this.studentBaseUrl)
  }

  getSpecificStudentDetails(input:string):Observable<any> {
      return this.http.get(this.studentBaseUrl+"?filter="+input)
  }

  getSortedDetails(column:string,order:string):Observable<any>{
    return this.http.get(this.studentBaseUrl+"?sortBy="+column+"&order="+order)
  }

  getPaginatedDetails(limit:number,page:number):Observable<any>{   
    return this.http.get(`${this.studentBaseUrl}?limit=${limit}&page=${page}`)
  }

  modifiedDetails(id:string):Observable<any>{
    return this.http.delete(this.studentBaseUrl+"/"+id)
  }

  getMemesData():Observable<any>{
    return this.http.get("https://api.imgflip.com/get_memes")
  }

  createStudentCard(data:any):Observable<any>{
    return this.http.post(this.studentBaseUrl,data)
  }

  getSingleStudent(id:string):Observable<any>{
    return this.http.get(this.studentBaseUrl+"/"+id)
  }

  updateStudentCard(data:any,id:string):Observable<any>{
    return this.http.put(this.studentBaseUrl+"/"+id,data)
  }

  getBankAccounts():Observable<any>{
    return this.http.get(this.bankBaseUrl)
  }

  getSpecificAccountDetails(input:string):Observable<any>{
    return this.http.get(this.bankBaseUrl+"?filter="+input)
  }

  getAccountSortedDetails(column:string,order:string):Observable<any>{
    return this.http.get(this.bankBaseUrl+"?sortBy="+column+"&order="+order)
  }

  getAccountPaginatedDetails(limit:number,page:number):Observable<any>{
    return this.http.get(`${this.bankBaseUrl}?limit=${limit}&page=${page}`)
  }

  getModifiedDetails(id:string):Observable<any>{
    return this.http.delete(this.bankBaseUrl+"/"+id)
  }

  createAccount(data:any):Observable<any>{
    return this.http.post(this.bankBaseUrl,data)
  }

  updateBankAccount(data:any,id:string):Observable<any>{
    return this.http.put(this.bankBaseUrl+"/"+id,data)
  }

  getSingleBankAccount(id:string):Observable<any>{
    return this.http.get(this.bankBaseUrl+"/"+id)
  }


}



