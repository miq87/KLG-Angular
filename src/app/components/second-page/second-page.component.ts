import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html'
})
export class SecondPageComponent implements OnInit {

  data: any
  triggerForm = this.fb.group({
    id: [''],
    name: [ '', [ Validators.required ] ],
    status: [ '', ],
    modifyBy: [ '', ],
    modifyDate: [ '', ],
    description: ['', [ Validators.maxLength(256) ] ],
    triggerdateLbman: [ false ],
    triggerdateSvcscat: [ false ],
    triggerdateItem: [ false ],
    isinterimtrigger: [ false ],
    constraintLbman: [ false ],
    constraintSvcscat: [ false ],
    constraintItem: [ false ],
    purma: [ false ],
    nntm: [ false ],
    pdbtm: [ false ],
    dsart: [ false ],
    trigger: [ '' ],
    interimtrigger: [ '' ],
    constraint: [ '', [ Validators.required ] ],
    lbmanEffectivedeadlineinfo: [ '', [ Validators.required ] ],
    lbmanProcbasisref: [ '' ],
    editable: [ '' ]
  })
  triggerDateKnown: any
  constraintDateKnown: any

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

  onTriggerChange(event: any): void {
    console.log('change')
    this.triggerForm.value.triggerdateLbman = false
    this.triggerForm.value.triggerdateSvcscat = false
    this.triggerForm.value.triggerdateItem = false
    switch(event.value) {
      case "1":
        this.triggerForm.value.triggerdateLbman = true
        break
      case "2":
        this.triggerForm.value.triggerdateSvcscat = true
        break
      case "3":
        this.triggerForm.value.triggerdateItem = true
        break
    }
  }

  onConstraintChange(event: any): void {
    console.log('change')
    this.triggerForm.value.constraintLbman = false
    this.triggerForm.value.constraintSvcscat = false
    this.triggerForm.value.constraintItem = false
    switch(event.value) {
      case "1":
        this.triggerForm.value.constraintLbman = true
        break
      case "2":
        this.triggerForm.value.constraintSvcscat = true
        break
      case "3":
        this.triggerForm.value.constraintItem = true
        break
    }
  }

  onSubmit() {
    console.log("Submit")
  }

  onCheck(): void {
    console.log(this.triggerForm.value)
  }

}
