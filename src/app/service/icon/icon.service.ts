import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  getIcons(): Array<any> {
    return [
      {
        iconName: 'copy',
        iconPath: '../assets/icons/copy.svg',
      },
      {
        iconName: 'link',
        iconPath: '../assets/icons/link.svg',
      },
      {
        iconName: 'loader',
        iconPath: '../assets/icons/loader.svg',
      },
      {
        iconName: 'tick',
        iconPath: '../assets/icons/tick.svg',
      },
      {
        iconName: 'chat',
        iconPath: '../assets/icons/chat.svg',
      },
      {
        iconName: 'send',
        iconPath: '../assets/icons/send.svg',
      },
      {
        iconName: 'add',
        iconPath: '../assets/icons/add.svg',
      },
      {
        iconName: 'menu',
        iconPath: '../assets/icons/menu.svg',
      },
      {
        iconName: 'row-right',
        iconPath: '../assets/icons/row-right.svg',
      },
      {
        iconName: 'row-left',
        iconPath: '../assets/icons/row-left.svg',
      },
      {
        iconName: 'loading',
        iconPath: '../assets/icons/loader.svg',
      },
    ];
  }
}
