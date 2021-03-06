import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemporadaPageRoutingModule } from './temporada-routing.module';

import { TemporadaPage } from './temporada.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ModalCheckPage } from '../modal-check/modal-check.page';
import { ModalCheckPageModule } from '../modal-check/modal-check.module';

@NgModule({
  entryComponents: [
    ModalCheckPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemporadaPageRoutingModule,
    PipesModule,
    ModalCheckPageModule
  ],
  declarations: [TemporadaPage]
})
export class TemporadaPageModule {}
