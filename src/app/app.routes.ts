import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { ScoreComponent } from './score/score.component';
import { RegisteradminComponent } from './registeradmin/registeradmin.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { AdminComponent } from './admin/admin.component';
import { AdminworkComponent } from './adminwork/adminwork.component';
import { CheckingComponent } from './checking/checking.component';


export const routes: Routes = [

{path:"register", component:RegisterComponent},

{path:"login", component:LoginComponent},

{path:"welcome", component:WelcomeComponent},

{path:"question", component:QuestionComponent},

{path:"score", component:ScoreComponent},

{path:"registeradmin", component:RegisteradminComponent},

{path:"loginadmin", component:LoginadminComponent},

{path:"admin", component:AdminComponent},

{path:"adminwork", component:AdminworkComponent},

{path:"checking", component:CheckingComponent}


];
