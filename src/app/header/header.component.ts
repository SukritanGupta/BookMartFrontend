import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  ismenuItem:boolean=true;
  iscloseItem:boolean;
  toggleShow:boolean;
  openHeader(){
      this.iscloseItem=true;
      this.ismenuItem=false;
      this.toggleShow=true;
  }
  closeHeader(){
      this.iscloseItem=false;
      this.ismenuItem=true;
      this.toggleShow=false;
  }
}
