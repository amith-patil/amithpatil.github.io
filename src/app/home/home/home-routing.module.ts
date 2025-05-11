import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home.module';

const routes: Routes = [
  {path: '', 
    component: HomeModule,
    children: [
      {
        path : '',
        loadChildren: () => 
          import('../../components_page/components-page/components-page.module').then((m)=> m.ComponentsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
