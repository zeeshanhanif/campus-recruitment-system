import { Routes } from '@angular/router';
import {LoggedInGuard} from './providers/loggedin-guard'

import { 
    SignupContainer, 
    SigninContainer, 
    AdminContainer,
    CompanyContainer,
    StudentContainer,
    RootContainer
} from "./containers";
import {     
    HomeComponent, 
    AboutComponent, 
    ContactComponent, 
    ProtectedComponent,
    ParentComponent,
    Child1Component,
    Child2Component 
} from "./components";

export const AppRoutes: Routes = [
    {path: '', redirectTo:'/signin',pathMatch:'full'},
    {path:'signup', component: SignupContainer},
    {path:'signin', component: SigninContainer},
    {path:'home', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'contact/:id', component: ContactComponent},
    {path:'contactus', redirectTo: 'contact'},
    {path:'protected', component: ProtectedComponent,
    canActivate: [LoggedInGuard]},
    {path:'parent', component: ParentComponent,
        children: [
            {path:'child1', component: Child1Component},
            {path:'child2', component: Child2Component},
        ]
    },
    
    {path:'root', component: RootContainer, 
        canActivate: [LoggedInGuard],
        children: [
            {path:'admin', component: AdminContainer},
            {path:'company', component: CompanyContainer},
            {path:'student', component: StudentContainer},
        ]
    },
];