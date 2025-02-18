import { Routes } from '@angular/router';
import { GoogleComponent } from './components/interview-resources/google/google.component';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent  // Create this component to hold your main page content
  },
  { 
    path: 'interview-resources',
    loadComponent: () => import('./components/interview-resources/interview-resources.component')
      .then(m => m.InterviewResourcesComponent)
  },
  {
    path: 'interview-resources/google',
    component: GoogleComponent
  }
];
