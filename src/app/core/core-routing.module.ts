import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';

const routes: Routes = [
  { path: '', component: CoreComponent, children: [
      { path: 'sudoku', loadChildren: () => import('./sudoku/sudoku.module').then(m => m.SudokuModule) },
      { path: 'tic-tac-toe', loadChildren: () => import('./ticTacToe/ticTacToe.module').then(m => m.TicTacToeModule) },
      { path: '**', redirectTo: 'bonjour' },
    ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  providers: [],
  declarations: [
    CoreComponent,
  ],
  exports: [
    RouterModule,
    CoreComponent,
  ],
})

export class CoreRoutingModule {}
