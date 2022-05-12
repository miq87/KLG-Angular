import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html'
})
export class FirstPageComponent implements OnInit {

  data: any
  columns = [ 'Name', 'Description', 'Trigger Name',
    'Interim Trigger Name', 'Effective Deadline Info', "Methods" ]
  
  constructor(private http: HttpClient) { }

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

  getTriggerName(data: any): string {
    switch(data.trigger) {
      case 5:   return "Change(d) or new personal data (processing purpose)"
      case 8:  return "Data Subject Access Request - request submitted"
      default:  return ""
    }
  }

  getInterimTriggerName(data: any): string {
    switch(data.interimtrigger) {
      case 33:   return "Early contract termination notice"
      default:  return ""
    }
  }

  getEffectiveDeadlineInfo(data: any): string {
    switch(data.lbmanEffectivedeadlineinfo) {
      case 1:   return "Planned Personal Data transfer to other processing entity"
      default:  return ""
    }
  }

}
