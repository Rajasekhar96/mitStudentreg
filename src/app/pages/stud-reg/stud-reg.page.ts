import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CommfunService } from 'src/app/services/commfun.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stud-reg',
  templateUrl: './stud-reg.page.html',
  styleUrls: ['./stud-reg.page.scss'],
})
export class StudRegPage implements OnInit {

  validations_form: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private myFunc: CommfunService,
    public http: HttpClient,
    public loadingCtrl: LoadingController,
    public toastController: ToastController,) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      studName: new FormControl('', Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(5),
        // Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      mobileNo : new FormControl('', Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.required
      ]))
    });
  }

  validation_messages = {
    studName: [
      { type: 'required', message: 'Student Name is required.' },
      { type: 'minlength', message: 'Student Name must be at least 5 characters long.' },
      { type: 'maxlength', message: 'Student Name cannot be more than 25 characters long.' },
    ],
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    mobileNo: [
      { type: 'required', message: 'Mobile number is required.' },
      { type: 'minlength', message: 'Mobile No must be at least 10' },
      { type: 'maxlength', message: 'Mobile No cannot be more than 10' },
    ]
  };

  async onSubmit(values) {
    console.log(values);
    console.log(values.email);
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
