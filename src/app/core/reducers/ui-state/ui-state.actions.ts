import { createAction, props } from "@ngrx/store";

// toastrs actions
const showSuccessToastr = createAction("[UI/Toast] Show Success Toastr", props<{ title: string, message: string }>());
const showErrorToastr = createAction("[UI/Toast] Show Error Toastr", props<{ title: string, message: string }>());



const uiActions = {
   showErrorToastr,
   showSuccessToastr
}

export default uiActions; 