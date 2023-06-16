import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserHttpService } from 'src/app/service/http/user-http.service';

@Component({
  selector: 'app-info-form-ui',
  templateUrl: './info-form-ui.component.html',
  styleUrls: ['./info-form-ui.component.scss'],
})
export class InfoFormUiComponent implements OnInit {
  formGroup: FormGroup | any;

  @Input() formError = '';
  @Output() save = new EventEmitter();

  constructor(private userHttpService: UserHttpService) {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl('', Validators.email),
    });
  }

  ngOnInit(): void {
    this.userHttpService.getUserInfo().subscribe({
      next: (res) => {
        this.formGroup.setValue({
          'username': res.username,
          'firstName': res.firstName,
          'lastName': res.lastName,
          'email': res.email
        });
        this.formGroup.get('username').disable();
      },
      error: (err) => {
        this.formError = err;
      },
    });
  }

  onFormChange() {
    this.formError = '';
  }

  onSubmit() {
    this.formGroup.get('username').enable();
    this.save.emit(this.formGroup.value);
    this.formGroup.get('username').disable();
  }
}
