import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable} from 'rxjs';
import {AuthService} from '../../providers';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student',
  templateUrl: './student.container.html',
  styleUrls: ['./student.container.css']
})
export class StudentContainer implements OnInit {

  myForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder,
  private authService: AuthService) {
    /*this.myForm = fb.group({
      'email': ['',Validators.required],
      'password': ['',Validators.required]
    });*/
  }

  ngOnInit() {
  }

  
}
