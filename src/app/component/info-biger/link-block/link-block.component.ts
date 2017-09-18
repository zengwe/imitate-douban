import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link-block',
  templateUrl: './link-block.component.html',
  styleUrls: ['./link-block.component.scss']
})
export class LinkBlockComponent implements OnInit {
  @Input('needStar') needStar: boolean = false;
  @Input('text') text: string = '想看';
  constructor() { }

  ngOnInit() {
  }

}
