import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  id: String
  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params=> {
      this.id = params['id'];
      console.log("Contact us id: "+this.id);
    })
   }

  ngOnInit() {
  }

}
