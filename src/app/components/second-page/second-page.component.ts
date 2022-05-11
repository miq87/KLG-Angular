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
    trigger: [ '' ],
    interimtrigger: [ '' ],
    constraint: [ '' ],
    lbmanEffectivedeadlineinfo: [ '' ],
    lbmanProcbasisref: [ '' ],
    editable: [ '' ]
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
