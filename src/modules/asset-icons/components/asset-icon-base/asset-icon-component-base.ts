import { HostBinding, Input } from '@angular/core';

/**
 * base abstraction for the asset-type icon components
 */
export abstract class AssetIconComponentBase {
    @Input()
    @HostBinding('class.inherit-color')
    public inheritColor: boolean;
}