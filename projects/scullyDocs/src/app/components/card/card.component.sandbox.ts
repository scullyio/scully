import {sandboxOf} from 'angular-playground';
import {CardComponent} from './card.component';

export default sandboxOf(CardComponent)
  .add('default', {
    template: `<app-card
                    [header]=" 'Machine Learning Driven' "
                    [text]=" 'Scully uses machine learning techniques to find all of your app project routes and pre-render each page to plain HTML & CSS.' "
                    [iconUrl]=" 'assets/angular.svg' "
                    [alt]=" 'Angular logo' ">
                </app-card>`,
  })
  .add('invert color', {
    template: `<app-card
                    [header]=" 'Machine Learning Driven' "
                    [text]=" 'Scully uses machine learning techniques to find all of your app project routes and pre-render each page to plain HTML & CSS.' "
                    [iconUrl]=" 'assets/angular.svg' "
                    [alt]=" 'Angular logo' "
                    [invertColors]="true">
                </app-card>`,
  })
  .add('png icon', {
    template: `<app-card
                    [header]=" 'Machine Learning Driven' "
                    [text]=" 'Scully uses machine learning techniques to find all of your app project routes and pre-render each page to plain HTML & CSS.' "
                    [iconUrl]=" 'assets/angular-original.png' "
                    [alt]=" 'Angular logo' ">
                </app-card>`,
  })
  .add('svg external src', {
    template: `<app-card
                    [header]=" 'Machine Learning Driven' "
                    [text]=" 'Scully uses machine learning techniques to find all of your app project routes and pre-render each page to plain HTML & CSS.' "
                    [iconUrl]=" 'https://angular.io/assets/images/logos/angular/angular_solidBlack.svg' "
                    [alt]=" 'Angular logo' ">
                </app-card>`,
  })
  .add('svg external src inverting color', {
    template: `<app-card
                    [header]=" 'Machine Learning Driven' "
                    [text]=" 'Scully uses machine learning techniques to find all of your app project routes and pre-render each page to plain HTML & CSS.' "
                    [iconUrl]=" 'https://angular.io/assets/images/logos/angular/angular_solidBlack.svg' "
                    [alt]=" 'Angular logo' "
                    [invertColors]="true">
                </app-card>`,
  })
  .add('png external src', {
    template: `<app-card
                    [header]=" 'Machine Learning Driven' "
                    [text]=" 'Scully uses machine learning techniques to find all of your app project routes and pre-render each page to plain HTML & CSS.' "
                    [iconUrl]=" 'https://angular.io/assets/images/logos/angular/angular.png' "
                    [alt]=" 'Angular logo' ">
                </app-card>`,
  });
