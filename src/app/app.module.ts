import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AComponent } from './onPush/a/a.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { IconsProviderModule } from './icons-provider.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './onPush/home/home.component';
import {TabaComponent} from './onPush/componentGroup/taba.component';
import {TabbComponent} from './onPush/componentGroup/tabb.component';
import {TabcComponent} from './onPush/componentGroup/tabc-component';
import {NzCollapseModule} from 'ng-zorro-antd/collapse';
import {TabdComponent} from './onPush/componentGroup/tabd.component';
import { MyinputComponent } from './NGcontent/myinput/myinput.component';
import { InputRefDirective } from './NGcontent/directive/input-ref.directive';
import { RxAngularComponent } from './rx-angular/rx-angular.component';
import {TemplateModule} from '@rx-angular/template';
import { TabeComponent } from './onPush/tabe/tabe.component';
import { RouterAComponent } from './router-a/router-a.component';
import { RouterBComponent } from './router-a/router-b/router-b.component';
import { RouterCComponent } from './router-c/router-c.component';
import { SwiperComponent } from './consumer/swiper/swiper.component';
import { ConsumerComponent } from './consumer/consumer.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    TabaComponent,
    TabcComponent,
    AComponent,
    TabdComponent,
    TabbComponent,
    HomeComponent,
    MyinputComponent,
    InputRefDirective,
    RxAngularComponent,
    TabeComponent,
    RouterAComponent,
    RouterBComponent,
    RouterCComponent,
    SwiperComponent,
    ConsumerComponent,
  ],
  imports: [
    TemplateModule,
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NzInputModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    FormsModule,
    NzCollapseModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
