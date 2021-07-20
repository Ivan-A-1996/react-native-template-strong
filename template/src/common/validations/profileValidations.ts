import {emptyValidation} from "./commonValidations";
import {localization} from "../localization";
import {isEmail} from "../helpers";
import {validationConstants} from "./index";

export function emailValidations(checkValue: string): string | null {
  const isEmpty = emptyValidation(checkValue);

  if (isEmpty != null) {
    return isEmpty;
  } else if (!isEmail(checkValue)) {
    return localization.errors.invalidEmail;
  } else {
    return null;
  }
}

export function fullNameValidations(checkValue: string): string | null {
  const isEmpty = emptyValidation(checkValue);

  if (isEmpty != null) {
    return isEmpty;
  } else if (checkValue.trim().length < validationConstants.fullName.minLength) {
    return localization.errors.invalidFullName;
  } else {
    return null;
  }
}
