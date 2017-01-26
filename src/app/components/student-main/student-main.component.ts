import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-student-main',
  templateUrl: './student-main.component.html',
  styleUrls: ['./student-main.component.css']
})
export class StudentMainComponent implements OnInit {

  id: String
  constructor(private route: ActivatedRoute) {
    /*
    route.params.subscribe(params=> {
      this.id = params['id'];
      console.log("Contact us id: "+this.id);
    })
    */
   }

  ngOnInit() {
  }

}
