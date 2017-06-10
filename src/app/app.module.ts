import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ROUTES } from './routes/index';
import { VIEWS } from './views/index';
import { RESOLVES } from './resolves/index';

@NgModule({
    declarations: [
        AppComponent,
        ...VIEWS
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES)
    ],
    providers: [
        ...RESOLVES
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}