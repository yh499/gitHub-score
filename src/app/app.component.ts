import { Component, OnInit  } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username: string = null; 
  score: number; 


  constructor(private _taskService: TaskService) { }

  ngOnInit() {

  }

  onSubmit(){
    this._taskService.getUserInfo(this.username).subscribe(
      (response) => {
        this.score = response.json()['followers'] + response.json()['public_repos'];
        console.log(this.score);
      },(err) => {
        console.log(err);
      }
    );
    this.username = undefined;
  }



}
