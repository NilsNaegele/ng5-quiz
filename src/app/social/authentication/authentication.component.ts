import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../user.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  authenticationType = '';
  title = '';
  errorMessage = '';
  isSubmitting = false;
  authenticationForm: FormGroup;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) {
    this.authenticationForm = this.fb.group({
      'email': [' ', Validators.required],
      'password': [' ', Validators.required ]
    });
  }

  submitForm() {
    this.isSubmitting = true;
    const credentials = this.authenticationForm.value;
    console.log(credentials);
    if (!credentials.email || !credentials.password || !this.validateEmail(credentials.email)) {
      this.errorMessage = 'All fields and a valid email are required';
      return;
    }
      this.userService.login(credentials.email, credentials.password).then((response) => {
        if (response === 'success') {
          this.router.navigateByUrl('/social');
        }
        this.errorMessage = response;
        this.isSubmitting = false;
      });
  }

  validateEmail(email: string) {
    const regPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regPattern.test(email);
  }

  ngOnInit() {
    this.route.url.subscribe(data => {
      this.authenticationType = data[data.length - 1].path;
      this.title = (this.authenticationType === 'login') ? 'Sign In' : 'Sign Up';
      if (this.authenticationType === 'register') {
        this.authenticationForm.addControl('yourname', new FormControl(' ', Validators.required));
      }
    });

  }

}
