// Inyectar el servicio en el controlador

import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

// Importando el servicio UserService
import {UserService} from '../../providers/user-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  users: any[] = [];

  constructor(
    public navCtrl: NavController,
    public userService: UserService
  ) {
    this.userService.load()
    .then(data => {
      this.users = data;
    }) ;
  }
}