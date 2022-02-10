import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterModule } from '../../components/footer';
import { LandingRoutingModule } from './landing-routing.module';

import { LandingFeaturesComponent } from './components/features/features.component';
import { LandingIntroComponent } from './components/intro/intro.component';
import { LandingPageComponent } from './page/landing.component';
import { LandingQuoteComponent } from './components/quote/quote.component';
import { LandingResourcesComponent } from './components/resources/resources.component';

@NgModule({
  declarations: [
    LandingFeaturesComponent,
    LandingIntroComponent,
    LandingPageComponent,
    LandingQuoteComponent,
    LandingResourcesComponent
  ],
  imports: [CommonModule, FooterModule, LandingRoutingModule]
})
export class LandingModule {}
