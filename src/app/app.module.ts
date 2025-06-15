import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HeaderComponent } from './header/header.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { TabViewModule } from 'primeng/tabview';
import { MixitupDirective } from './mixitup.directive';
import { HttpClientModule } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from './evieriment/environment';
import { AddProjectsComponent } from './add-projects/add-projects.component';
import { AngularFireModule } from '@angular/fire/compat';
import { ReactiveFormsModule } from '@angular/forms';
import { path } from 'animejs';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';


const route = [
  { path: '', component: MainComponent },
  { path: 'add', component: AddProjectsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    PortfolioComponent,
    HeaderComponent,
    MixitupDirective,
    AddProjectsComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgxTypedJsModule,
    TabViewModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirestore(() => getFirestore()),
    ReactiveFormsModule,
    RouterModule.forRoot(route),
    ButtonModule,
    InputTextareaModule,
    InputTextModule,
    DropdownModule,
    MenubarModule

  ],
  providers: [MixitupDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
