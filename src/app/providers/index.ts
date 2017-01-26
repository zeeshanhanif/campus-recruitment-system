import { AuthService } from './AuthService';
import { StudentService } from './StudentService';
import { CompanyService } from './CompanyService';
import { AdminService } from './AdminService';


export const Providers: any[] = [
    AuthService,
    StudentService,
    CompanyService,
    AdminService
]

export {
   AuthService,
   StudentService,
   CompanyService,
   AdminService
}