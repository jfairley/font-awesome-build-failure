import { sandboxOf } from 'angular-playground';

const allStyle = `
    .container {
        display: grid;
        grid-template-columns: 40px auto;
        padding: 10px;
    }
`;
const allTemplate = `
    <div class="container">
        <asset-type-icon assetType="video" [inheritColor]="inheritColor"></asset-type-icon> video
        <asset-type-icon assetType="audio" [inheritColor]="inheritColor"></asset-type-icon> audio
        <asset-type-icon assetType="image" [inheritColor]="inheritColor"></asset-type-icon> image
    </div>
`;

export default sandboxOf('Asset Icons', { declareComponent: false })
    .add('all', {
        styles: [allStyle],
        template: allTemplate
    })
    .add('all (light theme)', {
        context: {
            inheritColor: true
        },
        styles: [allStyle, `
            .container {
                background-color: #0083B4;
                color: #FFF;
            }
        `],
        template: allTemplate
    })
    .add('all (dark theme)', {
        context: {
            inheritColor: true
        },
        styles: [allStyle, `
            .container {
                background-color: #212528;
                color: #D2D3D4;
            }
        `],
        template: allTemplate
    })
    .add('video', { template: '<video-icon></video-icon>' })
    .add('audio', { template: '<audio-icon></audio-icon>' })
    .add('image', { template: '<image-icon></image-icon>' });
