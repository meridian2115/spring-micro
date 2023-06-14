import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-form-ui',
  templateUrl: './register-form-ui.component.html',
  styleUrls: ['./register-form-ui.component.scss']
})
export class RegisterFormUiComponent implements OnInit {

  @Input() formError = '';
  @Output() register = new EventEmitter();
  @Input() disabled: boolean = false;
  formGroup: FormGroup | any;

  constructor() {
   }

  ngOnInit(): void {
    this.formGroup = new FormGroup(      {
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      repeatPassword: new FormControl('',[Validators.required])
      });
  }

  onFormChange(){
    this.formError='';
  }

  onSubmit(){
    const password = this.formGroup.get('password').value;
    const repeatPassword = this.formGroup.get('repeatPassword').value;
    if (password == repeatPassword) {
      this.register.emit(this.formGroup.value);
    } else {
      this.formError = 'Пароли не совпадают';
    }
  }

}
