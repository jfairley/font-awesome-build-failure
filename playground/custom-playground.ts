import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LbAppComponentsModule } from '../src';

@NgModule({
    exports: [
        LbAppComponentsModule
    ],
    imports: [
        LbAppComponentsModule,
        RouterModule.forRoot([])
    ]
})
export class CustomPlaygroundModule {}