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
    UserListComponent,
    JobViewComponent,
    UserViewComponent,
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
            {path:'admin', component: AdminContainer,
                        children: [
                            {path:'list-jobs', component: ListJobsComponent},
                            {path:'student-list', component: UserListComponent},
                            {path:'company-list', component: UserListComponent},
                            {path:'jobDetail', component: JobViewComponent},
                            {path:'userDetail', component: UserViewComponent}
                        ]},
            {path:'company', component: CompanyContainer,
                        children: [
                            {path:'post-job', component: PostJobComponent},
                            {path:'list-jobs', component: ListJobsComponent},
                            {path:'student-list', component: UserListComponent},
                            {path:'userDetail', component: UserViewComponent}
                        ]},
            {path:'student', component: StudentContainer,
                        children: [
                            {path:'student-detail', component: StudentDetailComponent},
                            {path:'company-list', component: UserListComponent},
                            {path:'list-jobs', component: ListJobsComponent},
                            {path:'jobDetail', component: JobViewComponent},
                            {path:'userDetail', component: UserViewComponent}
                        ]},
        ]
    },
];