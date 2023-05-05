import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {IconService} from "../../service/icon/icon.service";
import {DomSanitizer} from "@angular/platform-browser";
import {MatIconRegistry} from "@angular/material/icon";
import {MatSidenav} from "@angular/material/sidenav";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav
  maxWidth = '(max-width:800px)';

  constructor(private breakpointObserver: BreakpointObserver,
              private readonly matIconRegistry: MatIconRegistry,
              private readonly domSanitizer: DomSanitizer,
              private readonly iconsService: IconService) {

    this.iconsService.getIcons().forEach((icon) => {
      this.matIconRegistry.addSvgIcon(
        icon.iconName,
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon.iconPath)
      );

    });
  }


  ngAfterViewInit() {
    this.breakpointObserver.observe([this.maxWidth]).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  newQuestion() {
    alert('new question not works :-)');
  }
}
