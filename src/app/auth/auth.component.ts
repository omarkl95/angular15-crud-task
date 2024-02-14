import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  ValidationErrors,
} from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { DataService } from '../services/data.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  loginForm!: FormGroup;
  loading: boolean = false;
  errors: string = '';
  isLoginMode: boolean = true;
  users: any[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: DataService,
    private http: HttpClient
  ) {
    this.loginForm = this.fb.group({
      // this.isUserNameExists(),

      UserName: [
        null,
        [Validators.required, this.firstLetterUppercase.bind(this)],
      ],
      Password: [null, [Validators.required]],
    });
  }
  // async login(loginData: any) {
  //   this.loading = true;
  //   let params = new HttpParams()
  //     .set('UserName', loginData.UserName)
  //     .set('Password', loginData.Password);
  //   await firstValueFrom(
  //     this.http.post<any>(`${this.auth.apiUrl}User/Login`, loginData, {
  //       params,
  //     })
  //   ).then(
  //     (loginRes) => {
  //       console.log(loginRes);
  //       this.loginForm.reset();
  //       this.loading = false;
  //       if (loginRes.userName !== null) {
  //         localStorage.setItem('userName', loginRes.userName);
  //         localStorage.setItem('empID', loginRes.empID);
  //         localStorage.setItem('name', loginRes.name);
  //         localStorage.setItem('token', loginRes.token);
  //         localStorage.setItem('id', loginRes.id);
  //         localStorage.setItem('expirydate', loginRes.tokenExpirationDate);

  //         this.router.navigate(['pages/dashboard']);
  //       }
  //     },
  //     (err: any) => {
  //       console.log(err);
  //       this.loginForm.reset();
  //       this.loading = false;
  //       this.errors = err.message;
  //     }
  //   );
  // }
  ngOnInit() {
    localStorage.clear();
    // this.getAllUsers();
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  // getAllUsers() {
  //   this.auth.getAllUsers().subscribe((res) => {
  //     res.forEach((element: any) => {
  //       this.users.push(element.userName);
  //     });
  //   });
  // }

  onSubmit(loginform: FormGroup) {
    // if (loginform.valid) {
    //   this.login(loginform.value);
    // }
  }
  get f() {
    return this.loginForm.controls;
  }
  // custom vaidation
  firstLetterUppercase(control: FormControl): ValidationErrors | null {
    const value = control.value as string;
    if (!value || value.length === 0) {
      return null; // Empty input is valid
    }

    const firstLetter = value.charAt(0);
    if (firstLetter.match(/[A-Z]/)) {
      return { firstLetterUppercase: true }; // Invalid if first letter is not uppercase
    }

    return null; // Valid input
  }
}
