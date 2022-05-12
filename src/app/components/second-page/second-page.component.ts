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
    triggerdateLbman: [ '' ],
    triggerdateSvcscat: [ '' ],
    triggerdateItem: [ '' ],
    isinterimtrigger: [ '' ],
    constraintLbman: [ '' ],
    constraintSvcscat: [ '' ],
    constraintItem: [ '' ],
    purma: [ '' ],
    nntm: [ '' ],
    pdbtm: [ '' ],
    dsart: [ '' ],
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

  onCheck(): void {
    console.log(this.triggerForm)
  }

  onTriggerChange(event: any): void {
    this.triggerForm.value.triggerdateLbman = false
    this.triggerForm.value.triggerdateSvcscat = false
    this.triggerForm.value.triggerdateItem = false
    switch(event.value) {
      case "triggerdateLbman":
        this.triggerForm.value.triggerdateLbman = true
        break;
      case "triggerdateSvcscat":
        this.triggerForm.value.triggerdateSvcscat = true
        break;
      case "triggerdateItem":
        this.triggerForm.value.triggerdateItem = true
        break;
    }
  }

  onConstraintChange(event: any): void {
    this.triggerForm.value.constraintLbman = false
    this.triggerForm.value.constraintSvcscat = false
    this.triggerForm.value.constraintItem = false
    switch(event.value) {
      case "constraintLbman":
        this.triggerForm.value.constraintLbman = true
        break;
      case "constraintSvcscat":
        this.triggerForm.value.constraintSvcscat = true
        break;
      case "constraintItem":
        this.triggerForm.value.constraintItem = true
        break;
    }
  }

}
