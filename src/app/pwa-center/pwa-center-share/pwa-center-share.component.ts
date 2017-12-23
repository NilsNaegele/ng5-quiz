import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { ShareService } from '../pwa-share.service';

@Component({
  selector: 'app-pwa-center-share',
  templateUrl: './pwa-center-share.component.html',
  styleUrls: ['./pwa-center-share.component.css']
})
export class PwaCenterShareComponent {
  private _app: any;
  private _disabled: boolean;
  formPWA: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private snackBar: MatSnackBar,
              private shareService: ShareService) {
                this.createForm();
               }

  get app(): any {
    return this._app;
  }

  get disabled(): boolean {
    return this._disabled;
  }

  private createForm(): void {
      this.formPWA = this.fb.group({
        url: new FormControl({value: '', disabled: true }, Validators.required)
      });
    }

  private enableForm(): void {
    this.formPWA.enable();
    this._disabled = false;
  }

  private disableForm(): void {
    this.formPWA.disable();
    this._disabled = true;
  }


  share() {
    this.snackBar.open('Add Success', null, { duration: 3000 });
    this.router.navigate(['/pwa-center']);
  }

}
