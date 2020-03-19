import { helpers } from "vuelidate/lib/validators";
export const accountNameRegex = helpers.regex(
  "accountNameRegex",
  /^[a-zA-Z0-9_-]{4,56}$/
);
export const accountNameTooltipMessage =
  "Min 4 to 56 characters. Only alphanumeric, underscore and hyphen are allowed.";

export const passwordRegex = helpers.regex(
  "passwordRegex",
  // tslint:disable-next-line
  /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*\(\)\_\+\-\=\[\]\{\}\|\'])[A-Za-z\d!@#\$%\^&\*\(\)\_\+\-\=\[\]\{\}\|\']{8,}/
);
export const passwordTooltipMessage =
  "Min 8 characters. Must contain at least 1 capital, 1 small, 1 special, 1 numeric character.";

export const iamPathRegex = helpers.regex("pathRegex", /^(\/[^/ ]*)+\/?$/);