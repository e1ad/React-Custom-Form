import {useState} from 'react';
import * as _ from 'lodash';
import {InputByType} from './InputByType';
import './Form.scss';


export const Form = ({config, initializeValues = {}}) => {

    const [values,setValues] = useState(initializeValues);

    const getValueByType = (field, input) => {
        switch (field.type) {
            case 'number':
                return input.valueAsNumber;
            default:
                return input.value
        }
    };

    const onFormChange = (event) => {
        const input = event.target;
        const name = input.attributes.name.value;
        const field = _.find(config.fields,{name});
        setValues(previousValues => {
            return {...previousValues, [name]: getValueByType(field, input)};
        });
    };

    const getFields = () => {
        return _.map(config.fields, field => {
            return (
                <div key={field.name} className='field-container'>
                    <label>{field.label}</label>
                    <InputByType field={field}
                                 values={values}/>
                </div>
            );
        });
    }

    const onButtonClick = (event, button) => {
        event.preventDefault();
        button.onClick(values, event);
    };

    const getButtons = () => {
        if(config.buttons) {
            return (
                <div className='buttons-container'>
                    {
                        config.buttons.map((button, index) => {
                            return (
                                <button key={index}
                                        onClick={(event) => onButtonClick(event, button)}>
                                    {button.name}
                                </button>
                            )
                        })
                    }
                </div>
            );
        }
    };

    return (
        <form onChange={onFormChange} className='custom-form'>
            {getFields()}
            {getButtons()}
        </form>
    );

};
