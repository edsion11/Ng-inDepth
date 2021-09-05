import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsumerComponent } from './consumer/consumer.component';
import { SwiperComponent } from './consumer/swiper/swiper.component';
import { MyinputComponent } from './ngcontent/myinput/myinput.component';
import { InputRefDirective } from './ngcontent/input-ref/input-ref.directive';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AComponent } from './onpush/a/a.component';
import { HomeComponent } from './onpush/home/home.component';
import { TabaComponent } from './onpush/component-group/taba.component';
import { TabbComponent } from './onpush/component-group/tabb.component';
import { TabcComponent } from './onpush/component-group/tabc.component';
import { TabdComponent } from './onpush/component-group/tabd.component';
import { TabeComponent } from './onpush/tabe/tabe.component';
import { IvyComponent } from './ivy/ivy.component';
import { ChildComponent } from './ivy/child/child.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    ConsumerComponent,
    SwiperComponent,
    MyinputComponent,
    InputRefDirective,
    AComponent,
    HomeComponent,
    TabeComponent,
    TabaComponent,
    TabbComponent,
    TabcComponent,
    TabdComponent,
    IvyComponent,
    ChildComponent
  ],
  imports: [
    NzIconModule,
    NzButtonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
