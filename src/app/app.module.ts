import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WashingMachinesListComponent } from './components/washing-machines-list/washing-machines-list.component';
import { WashingMachineDetailsComponent } from './components/washing-machine-details/washing-machine-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from "@angular/material/button";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
    declarations: [
        AppComponent,
        WashingMachinesListComponent,
        WashingMachineDetailsComponent,
        PageNotFoundComponent,
        HeaderBarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        HttpClientModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatInputModule,
        MatSelectModule,
        MatSnackBarModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
