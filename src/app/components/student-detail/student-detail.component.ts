import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable} from 'rxjs';
import { IAppState,AuthActions } from '../../store';
import { NgRedux, select } from 'ng2-redux';

import {StudentService} from '../../providers';
import {CompanyService} from '../../providers';
import {AdminService} from '../../providers';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  myForm: FormGroup;
  isError: boolean;
  errorMessage: String;

  @select(['auth','user']) user$ :Observable<any>;
  constructor(private fb: FormBuilder, private route: ActivatedRoute,
        private studentService: StudentService) {
    this.myForm = fb.group({
      'firstName': ['',Validators.required],
      'education': ['',Validators.required],
      'gpa': ['',Validators.required],
      'skills': ['',Validators.required],
      'overview': ['',Validators.required]
    });
    /*
    route.params.subscribe(params=> {
      this.id = params['id'];
      console.log("Contact us id: "+this.id);
    })
    */
   }

  ngOnInit() {
  }


  onSubmit(value: any): void {
    console.log('you submitted value: ', value);
    this.user$.subscribe(user=>{
      this.studentService.updateInfo(user.uid,value)  
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
