import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-breif',
  templateUrl: './detail-breif.component.html',
  styleUrls: ['./detail-breif.component.scss']
})
export class DetailBreifComponent implements OnInit {
  @Input('title') title:string = '';
  constructor() { }

  ngOnInit() {
  }

}
