import { createAction, props } from "@ngrx/store"
import { CustomError } from "utils/models/custom-error"

export const registerError = createAction("[Base] Error Added", props<{ error: CustomError }>())