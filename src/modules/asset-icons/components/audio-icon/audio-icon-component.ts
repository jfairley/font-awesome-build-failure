import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMusic } from '@fortawesome/pro-solid-svg-icons/faMusic';
import { AssetIconComponentBase } from '../asset-icon-base';

library.add(faMusic);

/**
 * "audio" asset type icon
 *
 * <example-url>http://localhost:9002/?scenario=.%2Fcomponents%2Fasset-icons%2Fasset-icons.sandbox/audio</example-url>
 */
@Component({
    selector: 'audio-icon',
    styleUrls: ['audio-icon.scss'],
    template: `
        <fa-icon [icon]="icon" [fixedWidth]="true" transform="grow-2"></fa-icon>
    `
})
export class AudioIconComponent extends AssetIconComponentBase {
    public readonly icon: IconDefinition = faMusic;
}