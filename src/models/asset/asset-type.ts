export enum AssetType {
    AUDIO = 'audio',
    AUDIO_CLIP = 'audio_clip',
    COLLECTION = 'collection',
    DOCUMENT = 'document',
    IMAGE = 'image',
    MARKER = 'marker',
    PACKAGE = 'package',
    PROJECT = 'project',
    TIMELINE = 'timeline',
    TIMELINE_CLIP = 'clip',
    UNCLASSIFIED = 'unclassified',
    VIDEO = 'video',
    VIDEO_CLIP = 'video_clip'
}

/**
 * Initially leaving out AUDIO_CLIP and PACKAGE since they are not real. Like imaginary numbers.
 *
 * @returns {AssetType[]}
 */
export function getAllAssetTypes(): AssetType[] {
    return [AssetType.AUDIO, AssetType.COLLECTION, AssetType.DOCUMENT, AssetType.IMAGE, AssetType.MARKER, AssetType.PROJECT, AssetType.TIMELINE, AssetType.TIMELINE_CLIP, AssetType.UNCLASSIFIED,
        AssetType.VIDEO, AssetType.VIDEO_CLIP];
}

/**
 * A decorator that exposes the {@link AssetType} for use within templates.
 *
 * example:
 *
 *     @Component({...})
 *     @AssetTypeAware
 *     class MyComponent {}
 */
//tslint:disable-next-line
export function AssetTypeAware(component: any) {
    component.prototype.AssetType = AssetType;
}