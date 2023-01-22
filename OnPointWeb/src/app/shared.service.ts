import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators"; 
import { Observable } from 'rxjs';
export interface Users{
  dinsdagDrukte: number;
}

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl="https://localhost:7259/";
  constructor(private http:HttpClient) {​​​​​ 
 }

  getChartData(){
    return this.http.get(this.APIUrl)
      .pipe(map(result => result));
  } 
  getcompany(){
    return this.http.get(this.APIUrl + "api/company/GetLiveAantalWithId/1")
  }
  getDailyCount(){
    return this.http.get<Users>(this.APIUrl + "api/company/GetCompanyWithId/1")
  }
  getAllReservationsByCompanyId(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + "api/Reservation/GetReservationById/1")
  }
  putData(liveAantal:number){
 
    console.log(liveAantal);
    const headers = {headers: new HttpHeaders({'content-type': 'application/json'})} 

    return this.http.put(this.APIUrl+ "api/Company/UpdateLiveAantalWithId/1/" + liveAantal,headers)
  }
  postReservation(companyId: number,start: string,firstName:string, lastName:string, email:string, phoneNumber:string){
    const headers = {headers: new HttpHeaders({'content-type': 'application/json'})} 

    const params={
      companyId: companyId,
      start: start,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber
    }
    console.log(params);
    return this.http.post(this.APIUrl + "api/Reservation/CreateReservation", params, headers )
  }
  
}
