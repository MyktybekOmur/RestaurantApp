import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'splashscreen',
    pathMatch: 'full',
  },
  {
    path: 'detail/:id',
    loadChildren: () =>
      import('./screens/detail/detail.module').then((m) => m.DetailPageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./screens/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'statistics',
    loadChildren: () => import('./screens/statistics/statistics.module').then( m => m.StatisticsPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./screens/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'stories',
    loadChildren: () => import('./screens/stories/stories.module').then( m => m.StoriesPageModule)
  },
  {
    path: 'splashscreen',
    loadChildren: () => import('./splashscreen/splashscreen.module').then( m => m.SplashscreenPageModule)
  },

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
