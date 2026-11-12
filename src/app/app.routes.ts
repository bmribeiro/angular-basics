import { Routes } from '@angular/router';
import { UserProfile } from './user-profile/user-profile';
import { TaskList } from './task-list/task-list';
import { PersistentTaskList } from './persistent-task-list/persistent-task-list';
import { ApiTaskList } from './api-task-list/api-task-list';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  // 1. Default route: Redirects the root URL to the home page
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // 2. Home route: Loads the user profile component
  { path: 'home', component: UserProfile },

  // 3. Tasks route: Loads the task list component
  { path: 'tasks', component: TaskList },

  // 4. Tasks route: Loads the persistence task list component
  { path: 'tasks-persistent', component: PersistentTaskList },

  // 5. Tasks route: Loads API Task
  {
    path: 'task-api',
    component: ApiTaskList,
    canActivate: [authGuard],
  },

  // 6. Wildcard route (optional, but considered best practice): Handles invalid URLs
  { path: '**', redirectTo: 'home' },
];
