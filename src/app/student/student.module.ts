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

import { routes } from './student-routing';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    IndexComponent,
    DocumentsComponent,
    LanguagesComponent,
    NotificationsComponent,
    ProfileComponent,
    PublicationComponent,
    SearchComponent
  ]
})
export class StudentModule { }
