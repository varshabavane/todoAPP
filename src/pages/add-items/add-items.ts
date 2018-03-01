import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-add-items',
  templateUrl: 'add-items.html',
})
export class AddItemsPage {
  title: string;
  description: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public View: ViewController) {
  }


  saveItems() {
    let newItem = {
      title: this.title,
      description: this.description

    };
    this.View.dismiss(newItem)
  }
  close() {
    this.View.dismiss()
  }

}
