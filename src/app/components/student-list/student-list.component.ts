import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router'
import { Router } from '@angular/router'
import {Job} from '../../models'

import { Observable} from 'rxjs';
import { IAppState,AuthActions } from '../../store';
import { NgRedux, select } from 'ng2-redux';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import {StudentService} from '../../providers';
import {CompanyService} from '../../providers';
import {AdminService} from '../../providers';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: FirebaseListObservable<any>;
  @select(['auth','user']) user$ :Observable<any>;
  constructor(private studentService: StudentService) {
    this.user$.subscribe(user=> {
      this.students = this.studentService.getStudentsList();
    })
   }

  ngOnInit() {
  }

}
