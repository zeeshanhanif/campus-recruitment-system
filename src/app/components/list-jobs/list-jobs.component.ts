import { Component, OnInit } from '@angular/core';

import {StudentService} from '../../providers';
import {CompanyService} from '../../providers';
import {AdminService} from '../../providers';

import {ActivatedRoute,Router} from '@angular/router'
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
  
  constructor(private companyService: CompanyService,private route: ActivatedRoute,
          private router: Router) {

    this.user$.subscribe(user=> {
      
      if(user && user.accountType=="2"){
        this.jobs = this.companyService.getJobList(user.uid);
      }
      else {
        this.jobs = this.companyService.getJobList(null);
      }
      
    })
  }

  viewDetail(job: Job){
    this.companyService.setCurrentJob(job);
    //this.router.navigate(['../jobDetail']);
    // [routerLink]="['../job-view']"
    console.log("Job = ",job);
  }

  deleteJob(job:any){
    console.log(job);
    this.companyService.deleteJob(job);
  }


  ngOnInit() {
  }

}
