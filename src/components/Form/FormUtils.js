import {ERROR_CODE, INPUT_TYPE} from "./Form.const";
import * as _ from "lodash";

export const getValueByType = (input) => {
    const type = input.attributes.type.value;

    switch (type) {
        case INPUT_TYPE.NUMBER:
            return input.valueAsNumber;
        default:
            return input.value
    }
};

const getValidatorValue = (isError,errorCode)=>{
    return isError ? {[errorCode]: true} : null;
}

export const validators = {
    required: (value) => getValidatorValue(_.isNil(value) || value === '', ERROR_CODE.REQUIRED),
    minLength :(minValue) => (value) => getValidatorValue(value.length < minValue,ERROR_CODE.MIN_LENGTH),
    maxLength :(maxValue) => (value) => getValidatorValue(value.length > maxValue,ERROR_CODE.MAX_LENGTH),
    min :(minValue) => (value) => getValidatorValue(value < minValue,ERROR_CODE.MIN),
    max :(maxValue) => (value) => getValidatorValue(value > maxValue,ERROR_CODE.MAX)
}
