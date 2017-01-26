import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable} from 'rxjs';
import {AuthService} from '../../providers';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.container.html',
  styleUrls: ['./admin.container.css']
})
export class AdminContainer implements OnInit {

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

  onSubmit(value: String): void {
    console.log('you submitted value: ', value);
    this.authService.login(value).subscribe(val=> {
      console.log("user : ",val);
      this.router.navigate(['/protected']);
    })
  }
}
