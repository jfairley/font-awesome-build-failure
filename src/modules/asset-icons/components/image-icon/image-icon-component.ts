import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faImage } from '@fortawesome/pro-regular-svg-icons/faImage';
import { AssetIconComponentBase } from '../asset-icon-base';

library.add(faImage);

/**
 * "image" asset type icon
 *
 * <example-url>http://localhost:9002/?scenario=.%2Fcomponents%2Fasset-icons%2Fasset-icons.sandbox/image</example-url>
 */
@Component({
    selector: 'image-icon',
    styleUrls: ['image-icon.scss'],
    template: `
        <fa-icon [icon]="icon" [fixedWidth]="true" transform="grow-2"></fa-icon>
    `
})
export class ImageIconComponent extends AssetIconComponentBase {
    public readonly icon: IconDefinition = faImage;
}