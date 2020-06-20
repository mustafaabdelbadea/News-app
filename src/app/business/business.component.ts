import { Component, OnInit } from '@angular/core';
import{AppserviceService} from '../appservice.service';
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  businessnews:any[]=[];
  constructor(public _AppserviceService:AppserviceService) {
    this._AppserviceService.getbusiness().subscribe((data)=>{
      this.businessnews=data.articles;
    });
    
   }

  ngOnInit(): void {
  }

}
