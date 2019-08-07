import { Component, OnInit, OnDestroy } from '@angular/core';
import  state  from '../../app-state';
import { log } from '../../my_modules/stuff';
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})

export class MainComponent implements OnInit {

  constructor(
    private api: ApiService
  ) { }

  async ngOnInit() {
    state.nav.msg += 1
    log(state.nav.msg)
    const fromGit = await this.api.test()
    log(fromGit)
  }

  ngOnDestroy() {
  }

}
