import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: this.fb.control<string>('', [Validators.required,Validators.minLength(20), Validators.maxLength(80)]),
      email: ['', [Validators.required, Validators.email]],
      address: [null],
      birthdate: [null, Validators.required],

    });
  }

  submitForm(form: any) {
    alert(JSON.stringify(form.value));
    // form.reset();
  }

}
