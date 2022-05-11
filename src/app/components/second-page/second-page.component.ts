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
  triggerForm = this.fb.group({
    id: [''],
    name: [ '', [ Validators.required ] ],
    status: [ '', [ Validators.required ] ],
    modifyBy: [ '', [Validators.required ] ],
    modifyDate: [ '', [Validators.required] ],
    description: ['', [ Validators.required ] ],
    triggerdateLbman: [ false ],
    triggerdateSvcscat: [ false ],
    triggerdateItem: [ false ],
    isinterimtrigger: [ '' ],
    constraintLbman: [ false ],
    constraintSvcscat: [ false ],
    constraintItem: [ false ],
    purma: [ '' ],
    nntm: [ '' ],
    pdbtm: [ '' ],
    dsart: [ '' ],
    trigger: [ '' ],
    interimtrigger: [ '' ],
    constraint: [ '' ],
    lbmanEffectivedeadlineinfo: [ '' ],
    lbmanProcbasisref: [ '' ],
    editable: [ '' ]
  })
  triggerDateKnown: any
  constraintDateKnown: any

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
  
  }

  check(event: any): void {
    console.log(this.triggerForm)
  }

  onChange(event: any) {
    console.log(event)
  }

}
