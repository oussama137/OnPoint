import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import Chart from 'chart.js/auto'

@Component({
  selector: 'app-druktemeter',
  templateUrl: './druktemeter.component.html',
  styleUrls: ['./druktemeter.component.css']
})
export class DruktemeterComponent implements OnInit{

 constructor(private service:SharedService) {}
 chart: any;
 countDaily: any;
 dinsdagDrukte:any;
 num: any;
 liveAantal:any

 async ngOnInit() {
  // while(this.num =){
  //   await this.dailycount()
  // }
  
  this.data();
  console.log(this.num)
  
  setInterval(() => this.data(), 1000); 
  this.charts()

}

 async dailycount(){
   await this.service.getDailyCount().subscribe((res) => {
     this.countDaily = res.dinsdagDrukte;
     this.num = (this.countDaily);
     // this.dinsdagDrukte = this.countDaily.map((drukt: any) => drukt.dinsdagDrukte)
     return console.log(this.num);
   })
    
 }

 charts() :void{
  new Chart('canvas', {
    type: 'bar',
    data: {
      labels: ['Dinsdag', 'Woendsdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'],
      datasets: [{
        label: 'Aantal personen',
        barPercentage: 0.5,
        barThickness: 80,
        maxBarThickness: 100,
        minBarLength: 2,
        data: [2, 4, 2, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          
        ],
        borderColor: [
          'rgb(255, 99, 132)',
      
        ],
        borderWidth: 1
      }]
    },
    options: {
      maintainAspectRatio:false,
      responsive: true,
      layout: {
        padding: {
          left: 50
      }
    },
      scales: {
        x: {
          grid: {
            offset: true
          }
      },
        y: {
          min: 0,
          max: 10
        }
      }
    }
  });
 }
 dins: any;
  data(){
    this.service.getcompany().subscribe(data => {
      this.liveAantal= data; 
     })
  }
  counter() {
    return new Array(this.liveAantal);
  }
}
