import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FormioResource, FormioResourceRoutes, FormioResourceConfig, FormioResourceService } from 'angular-formio/resource';


@NgModule({
  imports: [
    CommonModule,
    FormioResource,
    RouterModule.forChild(FormioResourceRoutes())
  ],
  declarations: [],
  providers: [
    FormioResourceService,
    {provide: FormioResourceConfig, useValue: {
      name: 'event',
      form: 'event'
    }}
  ]
})
export class EventModule { }
