import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { startPageGuard } from '@core';
import { SimpleGuard } from '@delon/auth';
import { environment } from '@env/environment';
// layout
import { LayoutBasicComponent } from '../layout/basic/basic.component';
import { LayoutPassportComponent } from '../layout/passport/passport.component';
// dashboard pages
import { DashboardComponent } from './dashboard/dashboard.component';
// single pages
import { CallbackComponent } from './passport/callback.component';
import { UserLockComponent } from './passport/lock/lock.component';
// passport pages
import { UserLoginComponent } from './passport/login/login.component';
import { UserRegisterResultComponent } from './passport/register-result/register-result.component';
import { UserRegisterComponent } from './passport/register/register.component';
import { ProductsLogComponent } from './products/log/log.component';
import { UsersLogComponent } from './users/log/log.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutBasicComponent,
        canActivate: [startPageGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent, data: { title: '仪表盘', titleI18n: 'dashboard' } },
            { path: 'exception', loadChildren: () => import('./exception/exception.module').then(m => m.ExceptionModule) },
            { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
            { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
            { path: 'carts', loadChildren: () => import('./carts/carts.module').then(m => m.CartsModule) }
        ]
    },

    {
        path: 'passport',
        component: LayoutPassportComponent,
        children: [
            { path: 'login', component: UserLoginComponent, data: { title: '登录', titleI18n: 'pro-login' } },
            { path: 'register', component: UserRegisterComponent, data: { title: '注册', titleI18n: 'pro-register' } },
            {
                path: 'register-result',
                component: UserRegisterResultComponent,
                data: { title: '注册结果', titleI18n: 'pro-register-result' }
            },
            { path: 'lock', component: UserLockComponent, data: { title: '锁屏', titleI18n: 'lock' } },
            { path: 'users', component: UsersLogComponent },
            { path: 'products', component: ProductsLogComponent }
        ]
    },
    // 单页不包裹Layout
    { path: 'passport/callback/:type', component: CallbackComponent },
    { path: '**', redirectTo: 'exception/404' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: environment.useHash,
            // NOTICE: If you use `reuse-tab` component and turn on keepingScroll you can set to `disabled`
            // Pls refer to https://ng-alain.com/components/reuse-tab
            scrollPositionRestoration: 'top'
        })
    ],
    exports: [RouterModule]
})
export class RouteRoutingModule {}
