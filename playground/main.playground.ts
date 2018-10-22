import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PlaygroundModule } from 'angular-playground';
import { CustomPlaygroundModule } from './custom-playground';
import 'zone.js/dist/zone';

PlaygroundModule
    .configure({
        selector: 'playground-root',
        overlay: false,
        modules: [CustomPlaygroundModule]
    });

platformBrowserDynamic().bootstrapModule(PlaygroundModule).catch(console.error);