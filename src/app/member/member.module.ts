import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';


import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    DeleteComponent,
    ListComponent,
 
  ],
  imports: [
    CommonModule,
    MemberRoutingModule,
    FormsModule,
    MatIconModule,
  ]
})
export class MemberModule { }
