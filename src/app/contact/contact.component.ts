import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

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
