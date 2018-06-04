import { Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { PublicationComponent } from './components/publication/publication.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { StudentComponent } from './components/student/student.component';
import { CollaborationsComponent } from './components/collaborations/collaborations.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { SearchComponent } from './components/search/search.component';
import { ProfileComponent } from './components/profile/profile.component';

import { LoginGuard } from './../shared/guards/login.guard';

export const routes : Routes = [
	{
		path : "t",
		component : IndexComponent,
		children : [

			{
				path : 'home',
				component : PublicationComponent,
				data: { animation: 'TeacherHome' }

			},
			{
				path : 'profile/:auth_other',
				component : ProfileComponent,
				data: { animation: 'TeacherProfileOther' }

			},
			{
				path : 'profile',
				component : ProfileComponent,
				data: { animation: 'TeacherProfile' }

			},
			{
				path : 'document',
				component : DocumentsComponent,
				data: { animation: 'TeacherProfile' }

			},
			{
				path : 'document/:auth_other',
				component : DocumentsComponent,
				data: { animation: 'TeacherDocument' }

			},
			{
				path : 'student',
				component : StudentComponent,
				data: { animation: 'TeacherDocument' }

			},
			{
				path : 'student/:auth_other',
				component : StudentComponent,
				data: { animation: 'TeacherProfile' }

			},
			{
				path : 'collaborator',
				component : CollaborationsComponent,
				data: { animation: 'TeacherProfile' }

			},
			{
				path : 'collaborator/:auth_other',
				component : CollaborationsComponent,
				data: { animation: 'TeacherProfile' }

			},
			{
				path : 'notifications',
				component : NotificationsComponent,
				data: { animation: 'TeacherNotifications' }

			},
			{
				path : 'notifications/:auth_other',
				component : NotificationsComponent,
				data: { animation: 'TeacherNotifications' }

			},
			{
				path : 'search',
				component : SearchComponent,
				data: { animation: 'TeacherSeacrh' }

			},
			{
				path : 'search/:auth_other',
				component : SearchComponent,
				data: { animation: 'TeacherSeacrh' }

			}
		]
	}
	
]
