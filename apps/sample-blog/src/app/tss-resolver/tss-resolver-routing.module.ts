import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TssResolverComponent } from './tss-resolver.component';
import { UserResolver } from './user.resolver';

const routes: Routes = [
  {
    path: '',
    component: TssResolverComponent,
    resolve: {
      user: UserResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TssResolverRoutingModule {}
