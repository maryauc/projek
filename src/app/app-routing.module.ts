import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
    canLoad: [AuthGuard], // Secure all child pages
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
    canLoad: [AutoLoginGuard],
  },
  {
    path: 'note',
    loadChildren: () =>
      import('./note/note.module').then((m) => m.NotePageModule),
  },
  {
    path: 'note-tambah',
    loadChildren: () =>
      import('./note-tambah/note-tambah.module').then(
        (m) => m.NoteTambahPageModule
      ),
  },
  {
    path: 'note-edit/:id',
    loadChildren: () =>
      import('./note-edit/note-edit.module').then((m) => m.NoteEditPageModule),
  },
  {
    path: 'note-lihat/:id',
    loadChildren: () =>
      import('./note-lihat/note-lihat.module').then(
        (m) => m.NoteLihatPageModule
      ),
  },
  {
    path: 'task',
    loadChildren: () =>
      import('./task/task.module').then((m) => m.TaskPageModule),
  },
  {
    path: 'task-edit/:id',
    loadChildren: () =>
      import('./task-edit/task-edit.module').then((m) => m.TaskEditPageModule),
  },
  {
    path: 'task-lihat/:id',
    loadChildren: () =>
      import('./task-lihat/task-lihat.module').then(
        (m) => m.TaskLihatPageModule
      ),
  },
  {
    path: 'task-tambah',
    loadChildren: () =>
      import('./task-tambah/task-tambah.module').then(
        (m) => m.TaskTambahPageModule
      ),
  },
  {
    path: 'daftar',
    loadChildren: () => import('./daftar/daftar.module').then( m => m.DaftarPageModule)
  },
  {
    path: 'task-lihat-log',
    loadChildren: () => import('./task-lihat-log/task-lihat-log.module').then( m => m.TaskLihatLogPageModule)
  },
  {
    path: 'task-lihat-semua',
    loadChildren: () => import('./task-lihat-semua/task-lihat-semua.module').then( m => m.TaskLihatSemuaPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
