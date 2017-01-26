import { Component, OnInit } from '@angular/core';
import { Job } from '../../models';
import {ActivatedRoute,Router} from '@angular/router';
import {CompanyService} from '../../providers';


@Component({
  selector: 'app-job-view',
  inputs: ['job'],
  templateUrl: './job-view.component.html',
  styleUrls: ['./job-view.component.css']
})
export class JobViewComponent implements OnInit {

  job : Job
  constructor(private companyService: CompanyService) {
    this.job = companyService.getCurrentJob();
   }

  ngOnInit() {
  }

}
