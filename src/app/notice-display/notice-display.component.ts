import { Component, OnInit } from '@angular/core';
import { NoticeService } from '../notice.service';

@Component({
  selector: 'app-notice-display',
  templateUrl: './notice-display.component.html',
  styleUrls: ['./notice-display.component.css']
})
export class NoticeDisplayComponent implements OnInit {

  constructor(public noticeService : NoticeService) { }

  ngOnInit() {
  }

}
