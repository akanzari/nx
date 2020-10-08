import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ngfModule } from 'angular-file';
import { FormsModule } from '@angular/forms';
import { SofButtonModule } from '../button/button.module';
import { UploadComponent } from './upload.component';

@NgModule({
    imports: [
        CommonModule,
        ngfModule, 
        FormsModule,
        SofButtonModule
    
     ],
    declarations: [UploadComponent],
    providers: [],
    exports: [UploadComponent]
})
export class SofUploadModule { }
