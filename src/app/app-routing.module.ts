import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WashingMachinesListComponent } from "./components/washing-machines-list/washing-machines-list.component";
import { WashingMashineDetailsComponent } from "./components/washing-mashine-details/washing-mashine-details.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "washing-machines-list",
        pathMatch: "full"
    },
    {
        path: "washing-machines-list",
        component: WashingMachinesListComponent,
        children: [
            {
                path: "washing-machine-details/:id",
                component: WashingMashineDetailsComponent
            }
        ]
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
