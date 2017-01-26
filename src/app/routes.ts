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
    ProtectedComponent,
    ParentComponent,
    StudentDetailComponent,
    PostJobComponent,
    ListJobsComponent,
    StudentListComponent
} from "./components";

export const AppRoutes: Routes = [
    {path: '', redirectTo:'/signin',pathMatch:'full'},
    {path:'signup', component: SignupContainer},
    {path:'signin', component: SigninContainer},
    {path:'home', component: HomeComponent},
    {path:'about', component: AboutComponent},
    
    {path:'contactus', redirectTo: 'contact'},
    {path:'protected', component: ProtectedComponent,
    canActivate: [LoggedInGuard]},
    {path:'parent', component: ParentComponent},
    
    {path:'root', component: RootContainer, 
        canActivate: [LoggedInGuard],
        children: [
            {path:'admin', component: AdminContainer},
            {path:'company', component: CompanyContainer,
                        children: [
                            {path:'post-job', component: PostJobComponent},
                            {path:'list-jobs', component: ListJobsComponent},
                            {path:'student-list', component: StudentListComponent}
                        ]},
            {path:'student', component: StudentContainer,
                        children: [
                            {path:'student-detail', component: StudentDetailComponent}
                        ]},
        ]
    },
];