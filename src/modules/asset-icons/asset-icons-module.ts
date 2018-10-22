import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AssetTypeIconComponent, AudioIconComponent, ImageIconComponent, VideoIconComponent } from './components';

const DECLARATIONS = [
    AssetTypeIconComponent,
    AudioIconComponent,
    ImageIconComponent,
    VideoIconComponent
];

const SHARED_MODULES = [
    FontAwesomeModule
];

@NgModule({
    declarations: DECLARATIONS,
    exports: [DECLARATIONS, SHARED_MODULES],
    imports: [CommonModule, SHARED_MODULES]
})
export class AssetIconsModule {}