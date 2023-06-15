import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserInfoService } from 'src/app/store/user-info-store/service/user-info.service';
import { UserInfo } from '../../blocks/info-block/info-block.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-info-form-ui',
  templateUrl: './info-form-ui.component.html',
  styleUrls: ['./info-form-ui.component.scss'],
})
export class InfoFormUiComponent {
  formGroup: FormGroup | any;

  @Input() formError = '';
  @Output() save = new EventEmitter();

  userInfo: Observable<UserInfo> = this.userInfoService.getUserInfo();

  constructor(private userInfoService: UserInfoService) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl('', Validators.email),
    });
    this.formGroup.get('username').disable();
    this.userInfo.subscribe((res) => {
      this.formGroup.get('username').setValue(res['username']);
      this.formGroup.get('firstName').setValue(res['firstName']);
      this.formGroup.get('lastName').setValue(res['lastName']);
      this.formGroup.get('email').setValue(res['email']);
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
