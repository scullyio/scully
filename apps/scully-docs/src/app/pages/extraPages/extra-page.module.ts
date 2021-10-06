import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScullyLibModule } from '@scullyio/ng-lib';

@Component({
  template: `
    <main>
      <scully-content></scully-content>
    </main>
    <footer class="scullyio-footer"></footer>
    <style>
      main {
        display:grid;
        min-height: calc(100vh - 176px - 80px);
        padding: 24px;
        max-width: 80rem;
        margin: 0 auto;
        justify-content: center;
      }
      :host {
        display: block;
      }
    </style>
  `,
})
export class ExtraPageComponent {}

@NgModule({
  declarations: [ExtraPageComponent],
  imports: [
    CommonModule,
    ScullyLibModule,
    RouterModule.forChild([
      { path: '', component: ExtraPageComponent },
      { path: '**', component: ExtraPageComponent },
    ]),
  ],
})
export class ExtraPageModule {}
