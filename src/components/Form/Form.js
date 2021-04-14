import './Form.scss';
import * as _ from "lodash";
import {getValueByType} from "./FormUtils";


export const Form = ({children, onChange}) => {

    const onFormChange = (event) => {
        const input = event.target;

        const name = input.attributes.name.value;

        const value = getValueByType(input);
        const errors = getFieldError(value, input.validators);

        onChange?.({
            name,
            input,
            value,
            errors
        });
    };

    const getFieldError = (value, validators) => {
        if (validators) {
            return _.reduce(validators, (acc, validator) => {
                const error = validator(value) || {};
                return {...acc, ...error};
            }, {});
        }

        return {};
    };

    return (
        <form onChange={onFormChange}
              className='custom-form'>
            {children}
        </form>
    );

};
