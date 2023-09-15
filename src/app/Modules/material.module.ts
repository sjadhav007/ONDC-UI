import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';

const materialModules = [
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatTooltipModule
]
@NgModule({
    declarations: [],
    imports: [CommonModule, ...materialModules],
    exports: [...materialModules],
    providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  })
  export class MaterialModule {}