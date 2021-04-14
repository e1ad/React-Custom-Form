import {INPUT_TYPE} from "./Form.const";
import {FormSelect} from "./FormSelect";

const getValue = (value)=>{
    return value || '';
};

const SimpleInput = ({type = "text", name, value, onChange}) => {
    return <input type={type}
                  name={name}
                  value={getValue(value)}
                  onChange={onChange}/>
};

export const FormInput = ({onChange, type, name, value, validators, children}) => {

    const onInputChange = (event) => {
        event.target.validators = validators;
        onChange?.(event);
    };

    switch (type) {
        case INPUT_TYPE.SELECT:
            return (
                <FormSelect value={getValue(value)}
                            name={name}
                            onChange={onInputChange}>
                    {children}
                </FormSelect>
            );
        default:
            return <SimpleInput value={value}
                                name={name}
                                type={type}
                                onChange={onInputChange}/>
    }
};
