import {ApplicationRef, Component, NgZone} from '@angular/core';
@Component({
  selector: 'app-tabe',
  templateUrl: './tabe.component.html',
  styleUrls: ['./tabe.component.scss']
})
export class TabeComponent {
  progress: number = 0;
  label!: string;
  constructor(private _ngZone: NgZone, private app: ApplicationRef) {}
  // Loop inside the Angular zone
  // so the UI DOES refresh after each setTimeout cycle
  processWithinAngularZone() {
    this.label = 'inside';
    this.progress = 0;
    this._increaseProgress(() => console.log('Inside Done!'));
  }
  // Loop outside of the Angular zone
  // so the UI DOES NOT refresh after each setTimeout cycle
  processOutsideOfAngularZone() {
    this.label = 'outside';
    this.progress = 0;
    this._ngZone.runOutsideAngular(() => {
      this._increaseProgress(() => {
        // reenter the Angular zone and display done
        this._ngZone.run(() => { console.log('Outside Done!'); });
             });
         });
     }
     _increaseProgress(doneCallback: () => void) {
        this.progress += 1;
        // this.app.tick();
       console.log(`Current progress: ${this.progress}%`);
       if (this.progress < 100) {
           window.setTimeout(() => this._increaseProgress(doneCallback), 10);
         } else {
           doneCallback();
         }
    }

}
