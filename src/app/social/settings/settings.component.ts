import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../models/user';
import { UserService } from './../user.service';



@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  user = new User();
  settingsForm: FormGroup;
  errors = {};
  isSubmitting = false;

  constructor(private router: Router,
              private userService: UserService,
              private fb: FormBuilder) {
            this.settingsForm = this.fb.group({
              image: '',
              username: '',
              bio: '',
              email: '',
              password: ''
            });
          // this.settingsForm.valueChanges.subscribe(values => this.updateUser(values));
        }

    submitForm() {
      this.isSubmitting = true;
      this.updateUser(this.settingsForm.value);

      this.userService.update(this.user).then((response) => {
        // console.log(response);
      });
      this.router.navigateByUrl('/social');
    }

  ngOnInit() {
    (<any>Object).assign(this.user, this.userService.getCurrentUser());
    this.settingsForm.patchValue(this.user);
  }

  logOut() {
    this.userService.logout();
    this.router.navigateByUrl('/social');
  }

  updateUser(values: Object) {
    (<any>Object).assign(this.user, values);
  }

}
