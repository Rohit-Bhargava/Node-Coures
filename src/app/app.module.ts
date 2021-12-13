import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
// import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./auth/auth-interceptor";
import { PostsModule } from "./posts/post.module";
import { AngularMaterialModule } from "./angular-material.module"
// import {
//   MatInputModule,
//   MatCardModule,
//   MatButtonModule,
//   MatToolbarModule,
//   MatExpansionModule,
//   MatProgressSpinnerModule,
//   MatAutocompleteModule,
//   MatBadgeModule,
//   MatBottomSheetModule,
//   MatButtonToggleModule,
//   MatCheckboxModule,
//   MatIconModule,
//   MatSidenavModule,
//   MatListModule,
//   MatFormFieldModule,
//   MatSelectModule
  
// } from "@angular/material";

import { AppComponent } from "./app.component";
// import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { HeaderComponent } from "./header/header.component";
// import { PostListComponent } from "./posts/post-list/post-list.component";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ErrorComponent } from './error/error.component';
import { ErrorInterceptor } from "./error-interceptor";


@NgModule({
  declarations: [
    AppComponent,
    // PostCreateComponent,
    HeaderComponent,
    // PostListComponent,
    LoginComponent,
    SignupComponent,
    ErrorComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    // FormsModule,
    PostsModule,
    HttpClientModule
    // MatInputModule,
    // MatCardModule,
    // MatButtonModule,
    // MatToolbarModule,
    // MatExpansionModule,
    // MatProgressSpinnerModule,
    // MatButtonModule,
    // MatToolbarModule,
    // MatAutocompleteModule,
    // MatBadgeModule,
    // MatBottomSheetModule,
    // MatButtonToggleModule,
    // MatCardModule,
    // MatCheckboxModule,
    // MatIconModule,
    // MatSidenavModule,
    // MatListModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatSelectModule,
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule {}
