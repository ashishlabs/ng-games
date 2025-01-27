import { TicTacToeComponent } from './tic-tac-toe.component';
import { TicTacToeRoutingModule } from './tic-tac-toe.routing.module';
import { SquareComponent } from './components/square/square.component';
import { BoardComponent } from './components/board/board.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    BoardComponent,
    SquareComponent,
    TicTacToeComponent
  ],
  imports: [
    CommonModule,
    TicTacToeRoutingModule,
  ]
})
export class TicTacToeModule { }
