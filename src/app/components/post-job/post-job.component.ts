import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable} from 'rxjs';
import { IAppState,AuthActions } from '../../store';
import { NgRedux, select } from 'ng2-redux';

import {StudentService} from '../../providers';
import {CompanyService} from '../../providers';
import {AdminService} from '../../providers';

import {ActivatedRoute} from '@angular/router'
import { Router } from '@angular/router'

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {


  myForm: FormGroup;
  @select(['auth','user']) user$ :Observable<any>;
  constructor(private fb: FormBuilder,
        private companyService: CompanyService,
        private router: Router) { 
    this.myForm = fb.group({
        'jobTitle': ['',Validators.required],
        'salary': ['',Validators.required],
        'jobDescription': ['',Validators.required]
      });
  }

  ngOnInit() {
  }

  onSubmit(value: any): void {
    console.log('you submitted value: ', value);
    this.user$.subscribe(user=>{
      this.companyService.postJob(user.uid,value);
      
    });
    
    
    /*
    this.authService.register(value).subscribe(val=>{
        this.router.navigate(['/signin']);
    },
    error=>{
      console.log("Error: ",error);
      this.isError = true;
      this.errorMessage = error.message
    })
*/
    //redux not working for me
    //this.authAction.register(value);


  }
}
