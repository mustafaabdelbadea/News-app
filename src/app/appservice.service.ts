import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

 
  constructor(private _HttpClient:HttpClient) { 

  }
  getPosts():Observable<any>
  {
    return this._HttpClient.get('https://newsapi.org/v2/top-headlines?country=us&category=general&pageSize=60&apiKey=872a0d109a604e12b7c3213144401847');
  
  }
  getSports():Observable<any>
  {
    return this._HttpClient.get('https://newsapi.org/v2/top-headlines?country=us&category=sports&pageSize=60&apiKey=872a0d109a604e12b7c3213144401847');
  }
  getscience():Observable<any>
  {
    return this._HttpClient.get('https://newsapi.org/v2/top-headlines?country=us&category=science&pageSize=60&apiKey=872a0d109a604e12b7c3213144401847');
  }
  gethealth():Observable<any>
  {
    return this._HttpClient.get('https://newsapi.org/v2/top-headlines?country=us&category=health&pageSize=60&apiKey=872a0d109a604e12b7c3213144401847');
  }
  getbusiness():Observable<any>
  {
    return this._HttpClient.get('https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=60&apiKey=872a0d109a604e12b7c3213144401847');
  }
  gettechnology():Observable<any>
  {
    return this._HttpClient.get('https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=60&apiKey=872a0d109a604e12b7c3213144401847');
  }
}
