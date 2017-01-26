import { Component, OnInit } from '@angular/core';

import {StudentService} from '../../providers';
import {CompanyService} from '../../providers';
import {AdminService} from '../../providers';

import {ActivatedRoute} from '@angular/router'
import { Router } from '@angular/router'
import {Job} from '../../models'

import { Observable} from 'rxjs';
import { IAppState,AuthActions } from '../../store';
import { NgRedux, select } from 'ng2-redux';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent implements OnInit {


  jobs: FirebaseListObservable<any>;
  @select(['auth','user']) user$ :Observable<any>;
  allJobs: boolean;
  constructor(private companyService: CompanyService,private route: ActivatedRoute) {

    this.user$.subscribe(user=> {
      if(user.accountType=="2"){
        this.jobs = this.companyService.getJobList(user.uid);
      }
      else {
        this.jobs = this.companyService.getJobList(null);
      }
      
    })
    
/*
     route.params.subscribe(params=> {
      this.all = params['all'];

        this.user$.subscribe(user=> {
            if(this.type=="company"){
                this.users = this.studentService.getUserList("1");
            }
            else if(this.type=="student"){
                this.users = this.studentService.getUserList("2");
            }
        })     
    })*/
  }


  
      
   

  ngOnInit() {
  }

}
