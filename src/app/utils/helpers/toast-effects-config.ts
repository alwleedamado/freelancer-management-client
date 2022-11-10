import { TypedAction } from "@ngrx/store/src/models"

export interface ToastEffectsConfig {
    success: { action: any & TypedAction<string>, title: string, message: string },
    failure: { action: any & TypedAction<string>, title: string, message: string }
}
