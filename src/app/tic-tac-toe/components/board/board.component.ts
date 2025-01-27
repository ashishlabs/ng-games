import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  standalone: false,
})
export class BoardComponent implements OnInit {
  squares: string[];
  xIsNext: boolean;
  winner: string;
  isDialogOpen = false;

  constructor() { }

  ngOnInit() {
    this.newGame();
  }

  public newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
    this.isDialogOpen = false; 
  }

  get player(): string {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
    if (this.winner !== null) {
      this.openDialog();
    }
  }

  calculateWinner(): string | null {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6], // Diagonals
    ];

    for (const [a, b, c] of winningCombinations) {
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }

    // Check for a draw
    if (this.squares.every((square) => square !== null)) {
      return 'draw';
    }

    return null;
  }

  openDialog() {
    this.isDialogOpen = true;
  }

  closeDialog() {
    this.newGame(); // Reset the game on dialog close
    this.isDialogOpen = false;
  }
}
