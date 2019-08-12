import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { User } from '../../interfaces/user';
// import { ApiService } from '../../services/api.service';
import { log, getUrlQueryes } from '../../../../my_modules/stuff';

import { ValidatorService } from '../../../../@modules/@common-dependencies/services/validator.service';


// change component mode 
const queries: any = getUrlQueryes()
const mode = queries.mode ? queries.mode : 'empty'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  // styleUrls: [mode == 'custom' ? require('./register.component-alternative.sass') : require('./register.component.sass')]
  styleUrls: ['./register.component-alternative.sass']

})

export class RegisterComponent implements OnInit {

  userForm: any; //FormGroup;

  roles: Array<string> = [
    'Guest',
    'Admin',
    'Owner',
    'Operator'
  ];

  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password1: '',
    password2: '',
    role: 'Guest',
    notes: null
  };

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private validator: ValidatorService
    // private api: ApiService
  ) {

    const pwdValidators: ValidatorFn[] = [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
      // this.someCustom()
    ];

    this.userForm = this.formBuilder.group({
      'email': [this.user.email, [Validators.required, Validators.minLength(5), this.validator.mailValidator()]],
      // 'firstName': [this.user.firstName, [Validators.required, Validators.minLength(3), this.someCustom()]],
      // 'lastName': [this.user.lastName, [Validators.required]],
      // 'role': [this.user.role, [Validators.required]],
      // 'notes': [this.user.notes, [Validators.maxLength(45)]]      
      'passwords': this.formBuilder.group({
        'pwd': ['', pwdValidators],
        'confirm': ['', pwdValidators]
      }, {
          validator: this.validator.itemsAreEqual('Passwords', 'pwd', 'confirm')
        })
    });
  }


  ngOnInit() {
    // example !!!
    // setInterval(this.logForm.bind(this), 2000)

    // example
    let mode = this.route.snapshot.queryParams["mode"];
    log(mode)

    // example
    this.route.queryParams.subscribe(log);
  }

  logForm() {
    const userData = {
      email: this.userForm.controls.email.value,
      password1: this.userForm.controls.passwords.controls.pwd.value,
      password2: this.userForm.controls.passwords.controls.confirm.value
    }
    log('0', userData)
    log('0', this.userForm)
    log('1', this.userForm.controls.passwords.errors) // .................... 'it'.errors -> {itemsAreEqual: msg: {"Passwords are not equal"}}
    log('3', this.userForm.controls.passwords.controls.confirm.errors) // ... 'it'.errors -> {minlength: {…}}
  }

  get email() { return this.userForm.get('email'); }
  get passwords() { return this.userForm.get('passwords'); }
  get pwd() { return this.userForm.get('passwords.pwd'); }
  get confirm() { return this.userForm.get('passwords.confirm'); }
}
