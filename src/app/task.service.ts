import { Injectable } from '@angular/core';
//import { BehaviorSubject } from 'Rxjs';
import { Http } from '@angular/http';

@Injectable()
export class TaskService {
  private username; 

  constructor(private _http: Http) { }
 
getUserInfo= function(username){
  return this._http.get(`https://api.github.com/users/${username}`);

  }

}

