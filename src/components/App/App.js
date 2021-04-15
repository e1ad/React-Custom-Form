import './App.scss';
import {useState} from "react";
import {Form} from '../Form/Form';
import {ERROR_CODE, INPUT_TYPE} from "../Form/Form.const";
import {FromControl} from "../Form/FormControl/FormControl";
import {RadioInput, FormInput} from "../Form/FormInput/FormInput";
import {FormButtons} from "../Form/FormButtons";
import {FormErrors} from "../Form/FormErrors/FormErrors";
import {validators} from "../Form/FormUtils";


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

const ERRORS_MESSAGE = {
  [ERROR_CODE.REQUIRED]: 'Field Is Required',
  [ERROR_CODE.MIN_LENGTH]: 'Min-Length is invalid',
  [ERROR_CODE.MIN]: 'Min is invalid',
}

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
                       validators={[validators.required, validators.minLength(4)]}
                       value={values.name}/>
            {errors?.name  && <FormErrors>
              <div>{errors.name[ERROR_CODE.REQUIRED] && ERRORS_MESSAGE[ERROR_CODE.REQUIRED]}</div>
              <div>{errors.name[ERROR_CODE.MIN_LENGTH] && ERRORS_MESSAGE[ERROR_CODE.MIN_LENGTH]}</div>
            </FormErrors>
            }
          </FromControl>

          <FromControl label="Age">
            <FormInput type={INPUT_TYPE.NUMBER}
                       name="age"
                       validators={[validators.min(8)]}
                       value={values.age}/>
            {errors?.age && <FormErrors>
              <div>{errors.age[ERROR_CODE.MIN] && ERRORS_MESSAGE[ERROR_CODE.MIN]}</div>
              </FormErrors>
            }
          </FromControl>

          <FromControl label="Country">
            <FormInput type={INPUT_TYPE.SELECT}
                       name="country"
                       value={values.country}>
              {countries.map(item => <option key={item.name} value={item.name}>{item.label}</option>)}
            </FormInput>
          </FromControl>

          <FromControl label="Gender">
            <FormInput type={INPUT_TYPE.RADIO}
                       name="gender">

              <RadioInput label="Male" value="male"/>
              <RadioInput label="female" value="female"/>
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
