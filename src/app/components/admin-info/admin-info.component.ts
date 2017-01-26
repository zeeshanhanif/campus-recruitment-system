import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

import { Observable} from 'rxjs';
import { IAppState,AuthActions } from '../../store';
import { NgRedux, select } from 'ng2-redux';


@Component({
  selector: 'app-admin-info',
  templateUrl: './admin-info.component.html',
  styleUrls: ['./admin-info.component.css']
})
export class AdminInfoComponent implements OnInit {

  @select(['auth','user']) user$ :Observable<any>;
  constructor(private route: ActivatedRoute) {
    console.log("admin-info: ");
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
