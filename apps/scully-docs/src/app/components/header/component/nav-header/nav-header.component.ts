import { Component, ViewEncapsulation, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'nav.scullyio-nav-header',
  encapsulation: ViewEncapsulation.None,
  template: `
    <img src="assets/beta-badge.png" alt="beta" class="badge" />
    <ul>
      <li class="logo"><a routerLink="/"></a></li>
      <li class="text">#BlackLivesMatter</li>
      <li class="feature"><a routerLink="/docs/learn/getting-started/requirements">get started</a></li>
      <li><a routerLink="/docs/learn/overview">docs</a></li>
      <li><a routerLink="/docs/community/showcase">showcase</a></li>
      <li class="icon github"><a href="https://github.com/scullyio/scully"></a></li>
    </ul>
  `,
})
export class NavHeaderComponent {
  themes = { dark: 'dark' };

  @Input() theme: string;

  @HostBinding('style.--nav-bg') get navTheme(): string {
    return this.theme === this.themes.dark ? 'var(--scully-black)' : 'var(--scully-white)';
  }

  @HostBinding('style.--nav-logo-path') get navlogoPath(): string {
    return this.theme === this.themes.dark ? `url('/assets/img/scullyio-logo-light.svg')` : `url('/assets/img/scullyio-logo.svg')`;
  }

  @HostBinding('style.--nav-link-color') get navLinkColor(): string {
    return this.theme === this.themes.dark ? 'var(--scully-white)' : 'var(--scully-black)';
  }

  @HostBinding('style.--nav-link-box-shadow-color') get navLinkBoxShadowColor(): string {
    return this.theme === this.themes.dark ? 'var(--scully-white)' : 'var(--scully-green)';
  }

  @HostBinding('style.--nav-icon-color-filter') get navIconColorFilter(): string {
    return this.theme === this.themes.dark ? 'brightness(0) invert(1)' : 'none';
  }
}
