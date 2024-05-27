import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from "./layout/app.layout.component";

const routes: Routes = [
    {
      path: '',
      component: AppLayoutComponent,
      children: [
        {
          path: 'encuestas',
          loadChildren: () =>
            import('./demo/components/modules/encuestas/encuestas.module').then(
              (m) => m.EncuestasModule
            ),
        },
        {
          path: 'utilities',
          loadChildren: () =>
            import('./demo/components/utilities/utilities.module').then(
              (m) => m.UtilitiesModule
            ),
        },
      ],
    },
    {
      path: 'auth',
      loadChildren: () => import('./demo/components/auth/auth.module').then((m) => m.AuthModule),
    },
    {
      path: '**',
      redirectTo: '/notfound',
    },
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        onSameUrlNavigation: 'reload',
      }),
    ],
    exports: [RouterModule],
    providers: [],
  })
export class AppRoutingModule {
}
