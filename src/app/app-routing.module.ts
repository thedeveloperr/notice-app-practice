import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticeDisplayComponent } from './notice-display/notice-display.component';
import { AddNoticeComponent } from './add-notice/add-notice.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'notices', component: NoticeDisplayComponent },
  { path: 'addnotice/:success', component: AddNoticeComponent },
  { path: 'addnotice', component: AddNoticeComponent },
  { path: '', redirectTo: '/notices', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
