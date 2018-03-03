import { Component } from '@angular/core';
import { NavController, ModalController, Item } from 'ionic-angular';
import { AddItemsPage } from '../add-items/add-items';
import { ItemDetailsPage } from '../item-details/item-details';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [];

  constructor(public navCtrl: NavController, public ModalCtrl: ModalController) {

  }
  addItem() {
    let addModal = this.ModalCtrl.create(AddItemsPage);
    addModal.onDidDismiss((item) => {
      if (item) {
        this.saveItem(item);
      }
    })
    addModal.present();
  }
  saveItem(item) {
    this.items.push(item);

  }
  viewItem(item) {
    this.navCtrl.push(ItemDetailsPage,
    {item:item});
  }
}



