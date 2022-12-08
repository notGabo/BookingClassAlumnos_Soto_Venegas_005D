import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoIngresadoGuard } from './guards/no-ingresado.guard';
import { IngresadoGuard } from './guards/ingresado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]

  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./pages/configuracion/configuracion.module').then(m => m.ConfiguracionPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'escanear-qr',
    loadChildren: () => import('./pages/escanear-qr/escanear-qr.module').then(m => m.EscanearQrPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'menu-alumno',
    loadChildren: () => import('./pages/menu-alumno/menu-alumno.module').then(m => m.MenuAlumnoPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then(m => m.IntroPageModule),
  },
  {
    path: 'escribir-qr',
    loadChildren: () => import('./pages/escribir-qr/escribir-qr.module').then(m => m.EscribirQrPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then(m => m.NoticiasPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'feriados',
    loadChildren: () => import('./pages/feriados/feriados.module').then(m => m.FeriadosPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then(m => m.PerfilPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'listar-clases',
    loadChildren: () => import('./pages/listar-clases/listar-clases.module').then(m => m.ListarClasesPageModule),
    canActivate: [IngresadoGuard]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
