import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryService } from './services/firebase/query.service';
import { ToastService } from "./services/toast/toast.service";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from './components/card/card/card.component';



@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule
  ],
  providers: [QueryService, ToastService],
  exports:[CommonModule, FormsModule, IonicModule, ReactiveFormsModule, CardComponent]
})
export class SharedModule { }
