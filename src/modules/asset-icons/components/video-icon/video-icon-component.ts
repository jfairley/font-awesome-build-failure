import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faVideo } from '@fortawesome/pro-solid-svg-icons/faVideo';
import { AssetIconComponentBase } from '../asset-icon-base';

library.add(faVideo);

/**
 * "video" asset type icon
 *
 * <example-url>http://localhost:9002/?scenario=.%2Fcomponents%2Fasset-icons%2Fasset-icons.sandbox/video</example-url>
 */
@Component({
    selector: 'video-icon',
    styleUrls: ['video-icon.scss'],
    template: `
        <fa-icon [icon]="icon" [fixedWidth]="true"></fa-icon>
    `
})
export class VideoIconComponent extends AssetIconComponentBase {
    public readonly icon: IconDefinition = faVideo;
}