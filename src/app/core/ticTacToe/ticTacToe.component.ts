import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './ticTacToe.component.html',
  styleUrls: ['./ticTacToe.component.scss']
})
export class TicTacToeComponent implements OnInit {
  tiles = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  constructor() { }
  ngOnInit() {
  }
  handleClick(columnIndex, rowIndex) {
    console.log(columnIndex, rowIndex);
    this.tiles[columnIndex][rowIndex] = 'x';
  }
}
