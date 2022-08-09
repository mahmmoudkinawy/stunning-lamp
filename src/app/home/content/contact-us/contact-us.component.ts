import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContactUS } from 'src/app/shared/models/contactus';
import { ContactusService } from 'src/app/shared/services/contactus.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  formSubmitted = false;
  contactForm!: FormGroup
  mailForm: FormGroup;
  public name?: string;
  public email?: string;
  public body?: string;
  public phone?: string;
  public message?: string;
  constructor(private fb: FormBuilder, private contactService: ContactusService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['']
    })
    this.mailForm = this.fb.group({
      host: ['185.151.28.67'],
      from: ['estatevilleeg@bebrand.tv'],
      pass: ['EstateVille@2022'],
      to: ['info@estatevilleeg.com'],
      subject: ['Contact us - INFO - Website'],
      content: [],
      toAdressTitle: ['EstateVille'],
      fromAdressTitle: ['EstateVille'],
      smtpPortNumber: [465]
    })
  }


  get f() {
    return this.contactForm.controls;
  }

  get fmail() {
    return this.mailForm.controls;
  }

  submit() {
    this.formSubmitted = true;
    if (this.contactForm.invalid) {
      this.toastr.error('Please fill Required Fields')
    }
    else {

      this.body = `<h5>Hello, </h5> <br> <p>We'd like to inform you that ${this.name} filled the Contact us Form. Kindly check his/her Details</p>
      <br>
      <br> His/Her Email is <a href="mailto:${this.email}">${this.email}  ,  </a> <br> <br> His/Her Message is ${this.message}`

      const newBody = this.body.replace(/<[^>]*>?/gm, '');
      this.mailForm.controls.content.setValue(newBody)
      this.contactService.postContactForm(this.contactForm.value).subscribe((res: any) => {
        if (res) {
          this.contactService.postForm(this.mailForm.value).subscribe((res: any) => {
            if (res) {
              this.toastr.success('Thank you, Form submitted Successfully!')
              this.contactForm.reset();
            }
          })

        }
      })



    }
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.contactForm.controls[controlName].hasError(errorName);
  }
}
