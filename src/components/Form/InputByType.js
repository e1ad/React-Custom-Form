import {INPUT_TYPE} from "./Form.const";

const getValue = (field,values)=>{
    return values[field.name] || '';
}


const SimpleInput = ({field, values, onChange}) => {
    return <input type={field.type}
                  name={field.name}
                  value={getValue(field, values)}
                  onChange={onChange}
                  className={field.className}/>;
};

const Select = ({field, values, onChange}) => {
    return (
        <select name={field.name}
                value={getValue(field, values)}
                onChange={onChange}>
            {field.items.map(item => <option key={item.name} value={item.name}>{item.label}</option>)}
        </select>
    );
};


export const InputByType = ({field, values}) => {

    const onInputChange = (event) => {
        field.onChange && field.onChange(event, field);
    };

    switch (field.type) {
        case INPUT_TYPE.SELECT:
            return <Select field={field}
                           values={values}
                           onChange={onInputChange}/>
        default:
            return <SimpleInput field={field}
                                values={values}
                                onChange={onInputChange}/>
    }
};
