import { Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { PublicationComponent } from './components/publication/publication.component';
import { ProfileComponent } from './components/profile/profile.component';

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
				path : 'profile',
				component : ProfileComponent,
				data: { animation: 'TeacherProfile' }

			},
			{
				path : 'profile/:auth_other',
				component : ProfileComponent,
				data: { animation: 'TeacherProfileOther' }

			}
		]
	}
	
]