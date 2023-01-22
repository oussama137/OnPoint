import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-reservatie',
  templateUrl: './reservatie.component.html',
  styleUrls: ['./reservatie.component.css']
})
export class ReservatieComponent implements OnInit {
  companyId: number = 1;
  start: any;
  end: any;
  uur: any;
  minuut: any;
  firstName: any;
  lastName: any;
  email: '';
  phoneNumber: any;
  dateApointment: any;
  registerSucess:boolean;
  
  myLabels = [{
    start: '2023-01-02',
    textColor: '#e1528f',
    title: '2 SPOTS'
  }];
  myInvalid = [{
      start: '2023-01-02T08:00',
      end: '2023-01-02T13:00'
  }, {
      start: '2023-01-02T15:00',
      end: '2023-01-02T17:00'
  }, {
      start: '2023-01-02T19:00',
      end: '2023-01-02T20:00'
  }];

  reservations : []
  currentDate = new Date();
  maxDate = new Date();

  selected: Date | null | undefined;
  constructor(private service:SharedService) { 
    this.maxDate.setMonth(this.currentDate.getMonth() + 2)
  }

  ngOnInit(): void {
    this.AddReservation(); 
    this.loadReservations();
  }

  loadReservations() {
    this.service.getAllReservationsByCompanyId().subscribe(
      data => {
        console.log(data);
      }
    )
  }

  AddReservation(){
      if(this.minuut == 0){
        this.dateApointment = this.start + "T"+ this.uur + ":" + this.minuut + 0; 
      }else{
        this.dateApointment = this.start + "T"+ this.uur + ":" + this.minuut; 
      }
      this.service.postReservation(this.companyId, this.dateApointment, this.firstName, this.lastName, this.email, this.phoneNumber).subscribe(data => {
        this.registerSucess = true;
        console.log(data)
        error: () => {   
          this.registerSucess = false;
        }
      })
      

  }

}
