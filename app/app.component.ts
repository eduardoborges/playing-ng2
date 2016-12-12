import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent  {

  // [ ] databinding de propriedade - C to D
  // ( ) databinding de evento - D to C
 
  title       = 'Meu app angular';
  name        = 'Eduardo'; 
  wardsColor  = 'blue';

  changeSuitColor(){
    this.wardsColor = this.wardsColor === 'blue' ? 'red': 'blue';
  }
}
