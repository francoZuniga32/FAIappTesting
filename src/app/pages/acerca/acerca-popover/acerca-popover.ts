import { Component } from '@angular/core';

import { PopoverController } from '@ionic/angular';

@Component({
  template: `
    <ion-list>
      <ion-item button (click)="close('https://drive.google.com/open?id=1t0ujGj5qZDTdSRBZ4G689lvC8kMeym283yPpQYw0Jnw')" lines="none">
        <ion-label>Reportar Error</ion-label>
      </ion-item>
    </ion-list>
  `
})
export class PopoverPage {
  constructor(public popoverCtrl: PopoverController) {}

  support() {
    this.popoverCtrl.dismiss();
  }

  close(url: string) {
    window.open(url, '_blank');
    this.popoverCtrl.dismiss();
  }
}
