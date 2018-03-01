import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [];

  constructor(public navCtrl: NavController) {

  }


  ionViewDidLoad() {
    this.items = [
      { title: 'hi', description: 'here you are' },
      { title: 'hello', description: 'hey' },
      { title: 'hey', description: 'jyane' }

    ]
  }
  addItem() {
    alert('add item works')
  }

  viewItem(item) {
    alert('this is your item' + JSON.stringify(item))
  }

}
