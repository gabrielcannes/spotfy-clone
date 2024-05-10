import { Routes, CanLoad } from '@angular/router';
import { LoginModule } from './pages/login/login.module';
import { PlayerModule } from './pages/player/player.module';
import { AutenticadoGuard } from './guard/autenticado.guard';

export const AppRoutes: Routes = [
  //quando o caminho da URL estiver vazio, redirecionar para a rota de login
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  // usando loadChildren para chamar o módulo fazemos com que a pagina de login só seja carregada quando
  // o usuário for realmente acessar a rota
  {
    path: 'login',
    loadChildren: () => LoginModule,
  },
  {
    path: 'player',
    loadChildren: () => PlayerModule,
    canLoad: [AutenticadoGuard],
  },
];
