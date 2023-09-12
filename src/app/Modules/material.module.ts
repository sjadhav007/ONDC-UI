import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

const materialModules = [
    MatIconModule,
    MatDialogModule,
]
@NgModule({
    declarations: [],
    imports: [CommonModule, ...materialModules],
    exports: [...materialModules],
    providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  })
  export class MaterialModule {}