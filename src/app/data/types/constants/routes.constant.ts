import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('../../../pages/main/home/home.module').then(m => m.HomePageModule), data: { preload: true } },
    { path: 'case', loadChildren: () => import('../../../pages/main/case/case.module').then(m => m.CasePageModule) },
    { path: 'explore', loadChildren: () => import('../../../pages/main/explore/explore.module').then(m => m.ExplorePageModule) },
    { path: 'settings', loadChildren: () => import('../../../pages/main/settings/settings.module').then(m => m.SettingsPageModule) },
    { path: 'welcome', loadChildren: () => import('../../../pages/other/welcome-slide/welcome-slide.module').then(m => m.WelcomeSlidePageModule) },
    { path: '**', redirectTo: 'home' }
];