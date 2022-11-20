import { createAction, props } from "@ngrx/store";
import { CustomError } from "core/models";

// toastrs actions
const showSuccessToastr = createAction("[UI/Toast] Show Success Toastr", props<{ title: string, message?: string }>());
const showInfoToastr = createAction("[UI/Toast] Show Info Toastr", props<{ title: string, message?: string }>());
const showWarningToastr = createAction("[UI/Toast] Warning Success Toastr", props<{ title: string, message?: string }>());
const showErrorToastr = createAction("[UI/Toast] Show Error Toastr", props<{ title: string, message?: string }>());
const showApiErrorToastr = createAction("[UI/Toast] Show Api Error Toastr", props<{ error: CustomError }>());



const uiActions = {
   showErrorToastr,
   showSuccessToastr,
   showInfoToastr,
   showWarningToastr,
   showApiErrorToastr
}

export default uiActions; 