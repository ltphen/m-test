import { Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes : Routes = [
	{
		path : "s",
		component : IndexComponent,
		children : [

			{
				path : 'home',
				component : ProfileComponent
			}
		]
	}
	
]