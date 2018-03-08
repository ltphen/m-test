import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AppErrorHandler } from './shared/common/ErrorsHandler/AppErrorHandler';

import { HeaderComponent } from './shared/components/header/header.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CardProfileComponent } from './shared/components/card-profile/card-profile.component';

import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { WorksessionModule } from './worksession/worksession.module';
import { AccountModule } from './account/account.module';

import { RequestService } from './shared/services/request.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    CardProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StudentModule,
    TeacherModule,
    WorksessionModule,
    AccountModule,
    RouterModule
  ],
  providers: [
    RequestService,
    {provide : ErrorHandler, useClass : AppErrorHandler},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
