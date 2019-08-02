import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.page.html',
  styleUrls: ['./userhome.page.scss'],
})
export class UserhomePage implements OnInit {

  constructor(public menuCtrl: MenuController) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }
}
