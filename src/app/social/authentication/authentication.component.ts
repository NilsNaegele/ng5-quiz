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
  isSignIn = false;
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
    // console.log(credentials.email);
    // console.log(credentials.password);
    // console.log(this.validateEmail(credentials.email));

    if (!credentials.email || !credentials.password || !this.validateEmail(credentials.email)) {
      this.errorMessage = 'All fields and a valid email are required';
      return;
    }
      if (this.authenticationType === 'login') {
        console.log(credentials.email);
      this.userService.login(credentials.email.trim(), credentials.password).then((response) => {
        if (response === 'success') {
          this.router.navigateByUrl('/social');
        }
        this.errorMessage = response;
        this.isSubmitting = false;
      });
    }
    if (this.authenticationType === 'register') {
      this.userService.register(credentials.email, credentials.password,
                                credentials.yourname).then((response) => {
        if (response === 'success') {
          this.router.navigateByUrl('/social');
        }
        this.errorMessage = response;
        this.isSubmitting = false;
      });
    }

  }

  validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  ngOnInit() {
    this.route.url.subscribe(data => {
      this.authenticationType = data[data.length - 1].path;
      this.title = (this.authenticationType === 'login') ? 'Sign In' : 'Sign Up';
      if (this.title === 'Sign In') {
        this.isSignIn = true;
      } else {
        this.isSignIn = false;
      }
      if (this.authenticationType === 'register') {
        this.authenticationForm.addControl('yourname', new FormControl(' ', Validators.required));
      }
    });

  }

}
