import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password-ui',
  templateUrl: './change-password-ui.component.html',
  styleUrls: ['./change-password-ui.component.scss']
})
export class ChangePasswordUiComponent implements OnInit {

  formGroup: FormGroup | any;

  @Input() formError = '';
  @Output() save = new EventEmitter();

  errorColor = 'matErrorColor';

  constructor(){
    this.formGroup = new FormGroup({
      newPassword: new FormControl('', [Validators.required]),
    });
  }

  onFormChange() {
    this.errorColor = 'matErrorColor';
    this.formError = '';
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.save.emit(this.formGroup.value);
    this.errorColor = 'matSuccesColor';
  }

}
