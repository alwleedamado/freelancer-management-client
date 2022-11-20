import { createAction, props } from "@ngrx/store"
import { CustomError } from "core/models/custom-error"

export const addErrorToRoot = createAction("[Root] Error Added", props<{ lastError: CustomError }>())