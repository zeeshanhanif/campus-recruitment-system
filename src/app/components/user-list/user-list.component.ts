import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router'
import { Router } from '@angular/router'
import {Job} from '../../models'
import {User} from '../../models'

import { Observable} from 'rxjs';
import { IAppState,AuthActions } from '../../store';
import { NgRedux, select } from 'ng2-redux';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import {StudentService} from '../../providers';
import {CompanyService} from '../../providers';
import {AdminService} from '../../providers';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: FirebaseListObservable<any>;
  @select(['auth','user']) user$ :Observable<any>;
  accountType: string;
  currentUrl : string;
  constructor(private studentService: StudentService,private route: ActivatedRoute) {
      route.url.subscribe(url=>{
        console.log("paht : ",url[0].path);
        this.currentUrl = url[0].path;
        if(this.currentUrl=="student-list"){
          this.users = this.studentService.getUserList("1");
        }
        else {
          this.users = this.studentService.getUserList("2");
        }

      });
   }

  ngOnInit() {
  }

  viewDetail(user: User){
    this.studentService.setCurrentDisplayUser(user);
    //this.router.navigate(['../jobDetail']);
    // [routerLink]="['../job-view']"
    console.log("User = ",user);
  }

  deleteUser(user: User){
    this.studentService.deleteUser(user);
  }

}
