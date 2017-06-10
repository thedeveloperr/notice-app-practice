import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdButtonModule, MdButtonToggleModule, MdTooltipModule, MdInputModule, MdMenuModule, MdCardModule, MdToolbarModule, MdIconModule, MdSnackBarModule}  from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NoticeDisplayComponent } from './notice-display/notice-display.component';
import { NoticeService } from './notice.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AddNoticeComponent } from './add-notice/add-notice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NoticeDisplayComponent,
    PageNotFoundComponent,
    AddNoticeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    AppRoutingModule,
    MdInputModule,
    MdTooltipModule,
    MdButtonToggleModule,
    MdSnackBarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [NoticeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
