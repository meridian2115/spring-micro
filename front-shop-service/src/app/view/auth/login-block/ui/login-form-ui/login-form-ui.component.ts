import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form-ui',
  templateUrl: './login-form-ui.component.html',
  styleUrls: ['./login-form-ui.component.scss']
})
export class LoginFormUiComponent implements OnInit {
  formGroup: FormGroup | any;

  @Input() formError = '';
  @Input() disabled: boolean = false;
  @Output() login = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup(      {
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
      });
  }

  onFormChange(){
    this.formError='';
  }

  onSubmit(){
    this.login.emit(this.formGroup.value);
  }

}
