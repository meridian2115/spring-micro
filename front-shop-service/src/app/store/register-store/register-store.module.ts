import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { RegisterEffects } from "./store/register.effects";
import { StoreModule } from "@ngrx/store";
import { REGISTER_FEATURE_NAME, registerReducer } from "./store/register.reducer";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(REGISTER_FEATURE_NAME, registerReducer),
    EffectsModule.forFeature([RegisterEffects])
  ],
  providers: []
})

export class RegisterStoreModule { }
