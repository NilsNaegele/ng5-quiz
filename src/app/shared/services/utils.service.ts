import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

declare const Modernizr;


@Injectable()
export class UtilsService {
  constructor(private snackbar: MatSnackBar) { }

  checkBrowserFeatures() {
    let supported = true;
    for (const feature in Modernizr) {
      if (Modernizr.hasOwnProperty(feature)
          && typeof Modernizr[feature] === 'boolean'
          && Modernizr[feature] === false) {
            supported = false;
            break;
          }
    }

    if (!supported) {
      this.snackbar.open('Update Browser', 'OK');
    }
    return supported;
  }
}
