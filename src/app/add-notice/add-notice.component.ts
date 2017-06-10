import { Component, OnInit } from '@angular/core';
import { NoticeService } from '../notice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MdSnackBar} from '@angular/material';
import {Router, ActivatedRoute} from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-add-notice',
  templateUrl: './add-notice.component.html',
  styleUrls: ['./add-notice.component.css']
})
export class AddNoticeComponent implements OnInit {
  addNoticeForm: FormGroup;
  constructor(public snackBar: MdSnackBar, private noticeService:NoticeService, private fb: FormBuilder, private route: ActivatedRoute,private router: Router) {
    if (route.snapshot.paramMap.get("success") == "success"){
      this.snackBar.open("New notice Added. Click on eye icon button in toolbar to view", "Ok", {
      duration: 2500,
    });
    }
    this.addNoticeForm = fb.group({
      'author' : [null,  Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(42)])],
      'desc' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'title' : [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(42)])]
    });


  }
  addNoticeClickHandler(formData){
    this.noticeService.addNotice({id:this.noticeService.noticeId.next().value,title:formData.title,author:formData.author,desc:formData.desc,date:moment().format("MMMM Do YYYY, h:mm ")});
    this.router.navigate(['/addnotice',"success"])

}
  ngOnInit() {
  }

}
