import { Injectable } from '@angular/core';
import { Notice } from './notice';

@Injectable()
export class NoticeService {
  notices: Notice[];
  noticeId: IterableIterator<number>;
  constructor() {
    this.notices = [];
    this.noticeId = this.noticeIdGenerator();

    if (localStorage.getItem('lastid'))
      this.getAllNotices();
  }
  getAllNotices() {
    for (let id = 1; id <= parseInt(localStorage.getItem('lastid')); id++) {
      this.notices.push(JSON.parse(localStorage.getItem(`${id}`)));
    }

  }
  *noticeIdGenerator(): IterableIterator<number> {
    if (this.notices.length == 0)
      yield 1;
    while (true) {
      yield this.notices[this.notices.length - 1]["id"]+1;
    }


  }
  addNotice(notice: Notice) {
    localStorage.setItem(`${notice["id"]}`, JSON.stringify(notice));
    localStorage.setItem('lastid', `${notice["id"]}`);
    this.notices.push(notice);
  }

}
