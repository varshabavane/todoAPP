import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items;

  constructor(public navCtrl: NavController) {

  }


  ionViewdidLoad(){
    this.items = [
      {title: 'hi', description:'here you are'},
      {title:'hello', description:'hey'},
    {title:'hey',description:'jyane'}

    ]
  }
  addIem(){
    alert('add item works')
  }

  viewItem(){
    alert('this is your item' + JSON.stringify(item))
  }

}
