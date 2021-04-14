import './App.scss';
import {useState} from "react";
import {Form} from '../Form/Form';
import {INPUT_TYPE} from "../Form/Form.const";
import {FromControl} from "../Form/FormControl/FormControl";
import {FormInput} from "../Form/FormInput";
import {FormButtons} from "../Form/FormButtons";
import {FormErrors} from "../Form/FormErrors/FormErrors";
import {RequiredValidator} from "../Form/FormUtils";


const countries = [
  {
    label: 'Israel',
    name: 'li'
  },
  {
    label: 'Germany',
    name: 'ge'
  },
  {
    label: 'United States',
    name: 'us'
  }
];

function App() {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const onFormChange = (event) => {
    setValues(previousValues => ({...previousValues, [event.name]: event.value}));
    setErrors(previousErrors => ({...previousErrors, [event.name]: event.errors}));
  };

  const onSubmit =  () => {
    console.log('on Save', values);
  }

  return (
      <div className="App">
        <Form onChange={onFormChange}>
          <FromControl label="Name">
            <FormInput type={INPUT_TYPE.TEXT}
                       name="name"
                       validators={[RequiredValidator]}
                       value={values.name}/>
             <FormErrors>
               {errors.name?.required}
             </FormErrors>
          </FromControl>

          <FromControl label="Age">
            <FormInput type={INPUT_TYPE.NUMBER}
                       name="age"
                       value={values.age}/>
          </FromControl>

          <FromControl label="Country">
            <FormInput type={INPUT_TYPE.SELECT}
                       name="country"
                       value={values.country}>
              {countries.map(item => <option key={item.name} value={item.name}>{item.label}</option>)}
            </FormInput>
          </FromControl>

          <FormButtons>
            <button type="button" onClick={onSubmit}>Save</button>
          </FormButtons>
        </Form>
      </div>
  );
}

export default App;
