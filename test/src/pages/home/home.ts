import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsuariosProvider } from '../../providers/usuarios/usuarios'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
usuarios=[];
  constructor(public navCtrl: NavController, public provider: UsuariosProvider) {

  }
  ionViewDidLoad(){
    this.provider.load().subscribe(
      (data)=>{this.usuarios = data;}
    )
  }

}
