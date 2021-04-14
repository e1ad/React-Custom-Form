import {ERROR_CODE, ERROR_MESSAGE, INPUT_TYPE} from "./Form.const";
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


export const RequiredValidator = (value) => {
    return (_.isNil(value) || value === '') ? {[ERROR_CODE.REQUIRED]: ERROR_MESSAGE[ERROR_CODE.REQUIRED]} : null;
};
