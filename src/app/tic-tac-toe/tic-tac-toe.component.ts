import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  template: `<app-board></app-board>`
})

export class TicTacToeComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
