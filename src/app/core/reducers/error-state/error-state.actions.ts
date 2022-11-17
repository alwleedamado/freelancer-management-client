import { createAction, props } from "@ngrx/store"
import { CustomError } from "core/models/custom-error"

export const registerError = createAction("[Base] Error Added", props<{ lastError: CustomError }>())