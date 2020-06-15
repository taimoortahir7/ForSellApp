import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  
  public formGroup: FormGroup;
  public login_error_msg: string;
  public password_type: string = 'password';

  constructor(
    private titleService: Title,
    private router: Router,
    private storage: StorageService
  ) { 
    this.titleService.setTitle('Log In');
  }

  ngOnInit() {
    this.loginFormGroup();
  }
  
  loginFormGroup(): void {
    this.formGroup = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(15),
      ]),
    })
  }

  login(): void {
    
    
    if(this.formGroup.value) {
      this.storage.setToken('chal on kr dey');
      this.router.navigate(['dashboard'])
      console.log(this.storage.isLogin())
    }
    let param = this.formGroup.value;
    console.log(param)
  }

}
