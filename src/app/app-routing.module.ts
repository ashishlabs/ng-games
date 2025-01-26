import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tic-tac-toe', pathMatch: 'full' },
  {
    path: 'tic-tac-toe',
    loadChildren: () => import('./tic-tac-toe/tic-tac-toe.module').then(m => m.TicTacToeModule),
  },
  {
    path: '**',
    redirectTo: 'tic-tac-toe'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
