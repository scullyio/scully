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
  ],
  exports: [ButtonComponent],
  imports: [CommonModule, RouterModule],
})
export class ComponentsModule {}
