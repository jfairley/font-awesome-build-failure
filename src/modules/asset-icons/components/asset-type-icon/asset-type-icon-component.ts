import { Component, Input } from '@angular/core';
import { AssetType } from '../../../../models';

/**
 * component to render the correct asset type icon based on the input {@link AssetType}
 *
 * <example-url>http://localhost:9002/?scenario=.%2Fcomponents%2Fasset-icons%2Fasset-icons.sandbox/all</example-url>
 */
@Component({
    selector: 'asset-type-icon',
    templateUrl: 'asset-type-icon.html'
})
export class AssetTypeIconComponent {
    /**
     * Type of icon to display
     * @type {AssetType}
     * @memberof AssetTypeIconComponent
     */
    @Input()
    public assetType: AssetType;

    /**
     * Indicate whether the asset icon should use its default coloring
     */
    @Input()
    public inheritColor: boolean;
}