import { Component, OnInit } from '@angular/core';
import{AppserviceService} from '../appservice.service';
@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  heathnews:any[]=[];
  constructor(public _AppserviceService:AppserviceService) {
    this._AppserviceService.gethealth().subscribe((data)=>{
      console.log(data)
      this.heathnews=data.articles;
    });
    
   }

  ngOnInit(): void {
  }

}
