import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WashingMachinesListComponent } from "./components/washing-machines-list/washing-machines-list.component";
import { WashingMachineDetailsComponent } from "./components/washing-machine-details/washing-machine-details.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "washing-machines-list",
        pathMatch: "full"
    },
    {
        path: "washing-machines-list",
        children: [
            {
                path: "",
                component: WashingMachinesListComponent,
            },
            {
                path: "washing-machine-details/:id",
                component: WashingMachineDetailsComponent
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
