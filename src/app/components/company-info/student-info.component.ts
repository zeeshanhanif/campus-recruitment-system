import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {

  id: String
  constructor(private route: ActivatedRoute) {
    console.log("student-info: ");
    /*
    route.params.subscribe(params=> {
      //this.id = params['id'];
      console.log("student-info us id: ");
    })
    */
   }

  ngOnInit() {
  }

}
