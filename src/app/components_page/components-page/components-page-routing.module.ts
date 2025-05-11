import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsPageModule } from './components-page.module';

const routes: Routes = [
  {
    path: '',
    component: ComponentsPageModule,
    children: [
      {
        loadChildren: () => 
          import('../../home/home/home.module').then((m)=> m.HomeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsPageRoutingModule { }
