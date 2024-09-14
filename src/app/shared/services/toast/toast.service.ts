import { Injectable } from '@angular/core';
import { ToastController } from "@ionic/angular";

type Color = "danger" | "success" | "warning";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private _toastCtrl: ToastController) { }

  public async show(message: string, color: Color = "success") {
    const toast = await this._toastCtrl.create({
      message,
      duration: 3000,
      color,
      cssClass: "text-white",
      position: "bottom"
    });
    toast.present();
  }
}
