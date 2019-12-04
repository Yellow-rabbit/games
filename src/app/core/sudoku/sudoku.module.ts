import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SudokuComponent } from './sudoku.component';

const routes: Routes = [{ path: '', component: SudokuComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  declarations: [
    SudokuComponent,
  ],
  exports: [
    RouterModule,
    SudokuComponent,
  ],
})

export class SudokuModule {}
