import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiasComponent } from './noticias/noticias.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ReglaComponent } from './regla/regla.component';



@NgModule({
  declarations: [
    NoticiasComponent,
    ReglaComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
  ],
  exports: [
    NoticiasComponent,
    
  ]
})
export class ComponentsModule { }
