import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdsListComponent } from './components/ads-list/ads-list.component';  
import { AdFormComponent } from './components/ad-form/ad-form.component';


const routes: Routes = [
  { path: '', redirectTo: '/ads-list', pathMatch: 'full' }, // ברירת מחדל
  { path: 'ads-list', component: AdsListComponent }, // הגדרה עבור ads-list
  { path: 'ad-form', component: AdFormComponent }, // לדוגמה, אם יש לך טופס יצירה/עריכה
  { path: 'ad-form/:id', component: AdFormComponent }, // לדוגמה, אם יש לך טופס יצירה/עריכה
  { path: '**', redirectTo: '/ads-list' }, // לטיפול בשגיאות 404
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


