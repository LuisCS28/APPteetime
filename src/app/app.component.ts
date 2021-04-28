import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { FireauthService } from './services/fireauth.service';
import { ReglamentoService } from './services/reglamento.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private fireauthService: FireauthService,
              public infoReglamento: ReglamentoService) {}

              toggleTheme(event){
                if(event.detail.checked){
                  document.body.setAttribute('color-theme','dark')
                }else{
                  document.body.setAttribute('color-theme','light')
                }
               }

}

