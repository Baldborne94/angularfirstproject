import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { equalValidator } from 'src/app/Validators/string.validators';

@Component({
  selector: 'app-login-new',
  templateUrl: './login-new.component.html',
  styleUrls: ['./login-new.component.scss']
})
export class LoginNewComponent implements OnInit {

  public form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(15)
      ]),
      lastname: new FormControl('',[
        Validators.required,
        Validators.minLength(15)
      ]),
      age: new FormControl('',[
        Validators.required,
        Validators.maxLength(2)
      ])
    },
    [equalValidator('password', 'confirmPassword')]
    );
  }

  get email(): AbstractControl {
    return this.form.get('email');
  }

  get password(): AbstractControl {
    return this.form.get('password');
  }

  get name(): AbstractControl{
    return this.form.get('name');
  }

  get lastname(): AbstractControl{
    return this.form.get('lastname');
  }

  get age(): AbstractControl{
    return this.form.get('age');
  }

  get confirmPassword(): AbstractControl {
    return this.form.get('confirmPassword');
  }


  public handleSubmitNew(): void {
    if (this.form.invalid) {
      return;
    }
  }



  ngOnInit(): void {
  }

}
