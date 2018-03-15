import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { RouterModule } from '@angular/router';

import { DocumentsComponent } from './components/documents/documents.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PublicationComponent } from './components/publication/publication.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './../shared/components/header/header.component';
import { NavbarComponent } from './../shared/components/navbar/navbar.component';
import { CardProfileComponent } from './../shared/components/card-profile/card-profile.component';

import { routes } from './teacher-routing';
import { BackendAccessService } from './services/backend-access.service';
import { LoginGuard } from './../shared/guards/login.guard';
import { CollaborationsComponent } from './components/collaborations/collaborations.component';
import { StudentComponent } from './components/student/student.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    HeaderComponent,
    NavbarComponent,
    CardProfileComponent,
    IndexComponent,
    DocumentsComponent,
    LanguagesComponent,
    NotificationsComponent,
    ProfileComponent,
    PublicationComponent,
    SearchComponent,
    CollaborationsComponent,
    StudentComponent
   ],
   providers : [
     BackendAccessService,
     LoginGuard,
   ]
})
export class TeacherModule { }
