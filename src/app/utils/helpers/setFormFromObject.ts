import { FormArray, FormControl, FormGroup } from "@angular/forms";

export function setFormFromObject(form: FormGroup, res: any) {
    form.patchValue(res);
    return;
}


export function setObjectFromFormControl<T>(form: FormControl, res: T) {
    let formValues = form.value;
    let result = { ...res };
    for (let key in formValues) {
        if (result[key] !== undefined)
            result[key] = formValues[key]
    }
    return result;
}

export function setObjectFromForm<T>(form: FormGroup, res: T): T {

    let result = { ...res };

    let controls = form.controls;
    for (let key in controls) {
        if (result[key] !== undefined)
            result[key] = controls[key].value;
    }

    return result;
}
