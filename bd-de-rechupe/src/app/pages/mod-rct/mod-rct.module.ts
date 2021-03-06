import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModRctPageRoutingModule } from './mod-rct-routing.module';

import { ModRctPage } from './mod-rct.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModRctPageRoutingModule,
    PipesModule
  ],
  declarations: [ModRctPage]
})
export class ModRctPageModule {}
