import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicTacToeComponent } from './ticTacToe.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [{ path: '', component: TicTacToeComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  declarations: [
    TicTacToeComponent,
  ],
  exports: [
    RouterModule,
    TicTacToeComponent,
  ],
})

export class TicTacToeModule {}
