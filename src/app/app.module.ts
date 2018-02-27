import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PublicationComponent } from './components/publication/publication.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CardProfileComponent } from './shared/components/card-profile/card-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    DocumentsComponent,
    LanguagesComponent,
    NotificationsComponent,
    ProfileComponent,
    PublicationComponent,
    SearchComponent,
    HeaderComponent,
    NavbarComponent,
    CardProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
