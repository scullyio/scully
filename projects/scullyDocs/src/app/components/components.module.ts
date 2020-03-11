import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './button/button.component';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {SubheaderComponent} from './subheader/subheader.component';
import {CodeComponent} from './code/code.component';
import {CardComponent} from './card/card.component';
import {BookComponent} from './book/book.component';
import {LeftMenuComponent} from './left-menu/left-menu.component';
import {IconComponent} from './icon/icon.component';
import {MarketingHeaderComponent} from './marketing-header/marketing-header.component';
import {HrComponent} from './hr/hr.component';

@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    SubheaderComponent,
    CodeComponent,
    CardComponent,
    BookComponent,
    LeftMenuComponent,
    IconComponent,
    MarketingHeaderComponent,
    HrComponent,
  ],
  exports: [
    ButtonComponent,
    HeaderComponent,
    HrComponent,
    CodeComponent,
    CardComponent,
    LeftMenuComponent,
    BookComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class ComponentsModule {}
