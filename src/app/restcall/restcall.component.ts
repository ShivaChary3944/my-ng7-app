import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-restcall',
  templateUrl: './restcall.component.html',
  styleUrls: ['./restcall.component.scss']
})
export class RestcallComponent implements OnInit {

  myString : Object;
  myFlag : boolean = false;

  constructor(private myRest : DataService) { }

  ngOnInit() {
    this.myRest.callMyRestApp().subscribe( myRest =>
      this.myString = myRest
    );
    console.log(this.myString);
  }

  onClickOf(){
    this.myFlag = true
  }

}
