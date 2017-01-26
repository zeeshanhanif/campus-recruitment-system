import { SignupContainer } from './signup/signup.container';
import { SigninContainer } from './signin/signin.container';
import { AdminContainer } from './admin/admin.container';
import { CompanyContainer } from './company/company.container';
import { StudentContainer } from './student/student.container';
import { RootContainer } from './root/root.container';

export const Containers: any[] = [
    SignupContainer,   
    SigninContainer,
    AdminContainer,
    CompanyContainer,
    StudentContainer,
    RootContainer
]

export {
   SignupContainer,
   SigninContainer,
   AdminContainer,
   CompanyContainer,
   StudentContainer,
   RootContainer
}