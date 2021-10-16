import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IdleMonitorService, ScullyLibModule } from '@scullyio/ng-lib';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({appId:'universalSample'}),
    ServerModule,
    HttpClientModule,
    ScullyLibModule,
    RouterModule.forRoot(
      [
        { path: 'demo/:id', loadChildren: () => import('./demo/demo.module').then((m) => m.DemoModule) },
        { path: 'about', loadChildren: () => import('./about/about.module').then((m) => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
        { path: 'user/:id', loadChildren: () => import('./user/user.module').then((m) => m.UserModule) },
      ],
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppUniversalModule {
  constructor(private r: ActivatedRoute, private idle:IdleMonitorService) {
  }
}
