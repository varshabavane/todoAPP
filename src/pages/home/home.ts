import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddItemsPage } from '../add-items/add-items';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [];

  constructor(public navCtrl: NavController, public ModalCtrl: ModalController) {

  }
  addItem() {
    let adddModal = this.ModalCtrl.create(AddItemsPage)
    adddModal.onDidDismiss((item) => {
      if (item) {
        this.saveItem(item);
      }
    })
    adddModal.present();
  }
  saveItem(item) {
    this.items.push(item);

  }
  viewItem(item) {
    alert("this is your item" + JSON.stringify(item))
  }
}



