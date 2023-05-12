import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor() {
  }


  getIcons(): Array<any> {
    const icons = [
      {
        iconName: 'copy',
        iconPath: '../assets/copy.svg',
      },
      {
        iconName: 'grid',
        iconPath: '../assets/grid.svg',
      },
      {
        iconName: 'link',
        iconPath: '../assets/link.svg',
      },
      {
        iconName: 'loader',
        iconPath: '../assets/loader.svg',
      },
      {
        iconName: 'tick',
        iconPath: '../assets/tick.svg',
      },
      {
        iconName: 'chat',
        iconPath: '../assets/chat.svg',
      },
      {
        iconName: 'send',
        iconPath: '../assets/send.svg',
      },
      {
        iconName: 'add',
        iconPath: '../assets/add.svg',
      },
      {
        iconName: 'menu',
        iconPath: '../assets/menu.svg',
      },
      {
        iconName: 'row-right',
        iconPath: '../assets/row-right.svg',
      },
      {
        iconName: 'row-left',
        iconPath: '../assets/row-left.svg',
      },
      {
        iconName: 'loading',
        iconPath: '../assets/loader.svg',
      },
    ];
    return icons;
  }
}
