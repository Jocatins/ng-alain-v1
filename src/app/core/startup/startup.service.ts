import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { ALAIN_I18N_TOKEN, MenuService, SettingsService, TitleService } from '@delon/theme';
import { ACLService } from '@delon/acl';
import { Observable, zip, of, catchError, map } from 'rxjs';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzIconService } from 'ng-zorro-antd/icon';

import { ICONS } from '../../../style-icons';
import { ICONS_AUTO } from '../../../style-icons-auto';

/**
 * Used for application startup
 * Generally used to get the basic data of the application, like: Menu Data, User Data, etc.
 */
@Injectable()
export class StartupService {
    constructor(
        iconSrv: NzIconService,
        private menuService: MenuService,
        private settingService: SettingsService,
        private aclService: ACLService,
        private titleService: TitleService,
        @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
        private httpClient: HttpClient,
        private router: Router
    ) {
        iconSrv.addIcon(...ICONS_AUTO, ...ICONS);
    }

    private viaHttp(): Observable<void> {
        return this.httpClient.get('assets/tmp/app-data.json').pipe(
            catchError((res: NzSafeAny) => {
                console.warn(`StartupService.load: Network request failed`, res);
                setTimeout(() => this.router.navigateByUrl(`/exception/500`));
                return of({});
            }),
            map((res: NzSafeAny) => {
                // Application information: including site name, description, year
                this.settingService.setApp(res.app);
                // User information: including name, avatar, email address
                this.settingService.setUser(res.user);
                // ACL: Set the permissions to full, https://ng-alain.com/acl/getting-started
                this.aclService.setFull(true);
                // Menu data, https://ng-alain.com/theme/menu
                this.menuService.add(res.menu);
                // Can be set page suffix title, https://ng-alain.com/theme/title
                this.titleService.suffix = res.app.name;
            })
        );
    }

    private viaMock(): Observable<void> {
        // const tokenData = this.tokenService.get();
        // if (!tokenData.token) {
        //   this.router.navigateByUrl(this.tokenService.login_url!);
        //   return;
        // }
        // mock
        const app: any = {
            name: `ng-alain`,
            description: `Ng-zorro admin panel front-end framework`
        };
        const user: any = {
            name: 'Titan',
            avatar: './assets/tmp/img/avatar.jpg',
            email: 'sphinx@planet.co',
            token: '123456789'
        };
        // Application information: including site name, description, year
        this.settingService.setApp(app);
        // User information: including name, avatar, email address
        this.settingService.setUser(user);
        // ACL: Set the permissions to full, https://ng-alain.com/acl/getting-started
        this.aclService.setFull(true);
        // Menu data, https://ng-alain.com/theme/menu
        this.menuService.add([
            {
                text: 'Main',
                group: true,
                children: [
                    {
                        text: 'Dashboard',
                        link: '/dashboard',
                        icon: { type: 'icon', value: 'appstore' }
                    }
                ]
            },
            {
                text: 'Users Menu',
                group: true,
                children: [
                    {
                        text: 'Users',
                        link: '/dashboard',
                        icon: { type: 'icon', value: 'profile' },
                        children: [
                            {
                                text: 'Users-List',
                                icon: { type: 'icon', value: 'profile' },
                                link: 'users/log'
                            },
                            {
                                text: 'Add-User',
                                icon: { type: 'icon', value: 'profile' },
                                link: 'users/add-user-form'
                            }
                        ]
                    }
                ]
            },
            {
                text: 'Products Menu',
                group: true,
                children: [
                    {
                        text: 'Products',
                        icon: { type: 'icon', value: 'profile' },
                        children: [
                            {
                                text: 'Products-List',
                                icon: { type: 'icon', value: 'profile' },
                                link: 'products/log'
                            },
                            {
                                text: 'Add-Products',
                                icon: { type: 'icon', value: 'profile' },
                                link: 'products/edit'
                            }
                        ]
                    }
                ]
            },
            {
                text: 'Cart Menu',
                group: true,
                children: [
                    {
                        text: 'Carts',
                        icon: { type: 'icon', value: 'profile' },
                        children: [
                            {
                                text: 'Carts-List',
                                icon: { type: 'icon', value: 'profile' },
                                link: 'carts/log'
                            }
                        ]
                    }
                ]
            }
        ]);
        // Can be set page suffix title, https://ng-alain.com/theme/title
        this.titleService.suffix = app.name;

        return of(void 0);
    }

    load(): Observable<void> {
        // http
        // return this.viaHttp();
        // mock: Don’t use it in a production environment. ViaMock is just to simulate some data to make the scaffolding work normally
        // mock：请勿在生产环境中这么使用，viaMock 单纯只是为了模拟一些数据使脚手架一开始能正常运行
        return this.viaMock();
    }
}
