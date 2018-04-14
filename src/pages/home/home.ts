import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { NoticiaProvider } from './../../providers/noticia/noticia';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  noticia: any = {};

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              private noticiaProvider: NoticiaProvider) {

      this.buscarNoticia();
  }

  buscarNoticia() {

    let loading = this.loadingCtrl.create({
      content: 'Buscando...'
    });
  
    loading.present();
    this.noticiaProvider.carregarNoticias().subscribe(result => {
      this.noticia = result
      loading.dismiss();
    }  );
  }

  remover(item) {
    let self=this;
    this.showConfirm(item, function () {
      self.removerNoticia(item);
    });
  }

  private removerNoticia(item) {
    /*this.noticia.articles = */this.noticia.articles.splice(this.noticia.articles.indexOf(item), 1);
  }

  showConfirm(item, callback) {
    let confirm = this.alertCtrl.create({
      title: 'Tem certeza?',
      message: 'Deseja remover o artigo: ' + item.title + '?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            console.log('Faz nada');
          }
        },
        {
          text: 'Sim',
          handler: callback
        }
      ]
    });
    confirm.present();
  }

}
