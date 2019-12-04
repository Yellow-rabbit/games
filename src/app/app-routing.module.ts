import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {path: '', children: [
      { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
      {path: '**', redirectTo: 'core' },
    ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserModule,
  ],
  providers: [],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
