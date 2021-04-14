import {INPUT_TYPE} from "./Form.const";

export const FormSelect = ({children, name, value, onChange}) => {
    return (
        <select name={name}
                type={INPUT_TYPE.SELECT}
                value={value}
                onChange={onChange}>
            {children}
        </select>
    );
};
