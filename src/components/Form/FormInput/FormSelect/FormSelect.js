import {INPUT_TYPE} from "../../Form.const";
import "./FormSelect.scss";

export const FormSelect = ({children, name, value, onChange}) => {
    return (
        <select className="form-select"
                name={name}
                type={INPUT_TYPE.SELECT}
                value={value}
                onChange={onChange}>
            {children}
        </select>
    );
};
