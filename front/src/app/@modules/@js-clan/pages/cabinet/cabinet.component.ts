import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../@common-dependencies/services/api.service';
import { ApiJsClanService } from '../../services/api-js-clan.service';
import { Router } from '@angular/router';
import { log } from 'src/app/my_modules/stuff';
import appState from '../../../../app-state';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.sass']
})
export class CabinetComponent implements OnInit {

  st: any = appState;

  constructor(
    private api: ApiService,
    private _api: ApiJsClanService,
    private router: Router
  ) {
  }

  ngOnInit() {
    log('STATE:');
    log(this.st)
    setTimeout(() => {
      // debugger
      this.fake()

    }, 2000)

    log(this.st)

  }
  fake() {
    this.st.user = JSON.parse(`{
      "wallets": {
        "USD": {
          "balance": 0
        }
      },
      "facebook": {
        "id": "",
        "token": "",
        "email": "",
        "username": ""
      },
      "google": {
        "id": "",
        "token": "",
        "email": "",
        "username": ""
      },
      "isLogged": true,
      "purchases_made": [],
      "saved_numbers": [],
      "linked_users": [],
      "_id": "5e72314405de434144dca5be",
      "username": "testUser",
      "email": "shadespiritenator@gmail.com",
      "email_token": "077q6b76v9vwqtaryepfjbseao0fdprrj7chg22dlhj",
      "password": "cd2a9a2e8d3572113b95e3b60bf626a77899ec6b",
      "phone_pin": 730901,
      "link_pin": 272749,
      "active": false,
      "email_verif": false,
      "phone_verif": false,
      "ever_cha": "7645e520-6925-11ea-977c-578729c8c9f9",
      "ever_sec": "4c04539621e9baec7e8651059293a71573409788",
      "last_login": "2020-03-18T14:33:40.735Z",
      "last_appeal": "2020-03-18T14:33:40.736Z",
      "__v": 0
    }`)
  }

}
