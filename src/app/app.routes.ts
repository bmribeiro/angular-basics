import { Routes } from '@angular/router';
import { UserProfile } from './user-profile/user-profile';
import { TaskList } from './task-list/task-list';

export const routes: Routes = [
  // 1. Default route: Redirects the root URL to the home page
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // 2. Home route: Loads the user profile component
  { path: 'home', component: UserProfile },

  // 3. Tasks route: Loads the task list component
  { path: 'tasks', component: TaskList },

  // 4. Wildcard route (optional, but considered best practice): Handles invalid URLs
  { path: '**', redirectTo: 'home' },
];
