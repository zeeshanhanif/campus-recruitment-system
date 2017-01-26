import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-company-main',
  templateUrl: './company-main.component.html',
  styleUrls: ['./company-main.component.css']
})
export class CompanyMainComponent implements OnInit {

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
