import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

  data: any
  contactForm = this.fb.group({
    id: [''],
    firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
    lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
    phoneNumber: ['', [Validators.required, Validators.pattern("[0-9]{9,12}")]],
    phoneCategory: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
    birthdayDate: [''],
    position: ['']
  })

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/response.json').subscribe({
      next: (v) => {
        this.data = v
        console.log(this.data)
      },
      error: () => {
        console.error('Problem with loading response.json')
      }
    })
  }

}
