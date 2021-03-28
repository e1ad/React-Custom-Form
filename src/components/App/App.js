import './App.scss';
import {Form} from '../Form/Form';
import {INPUT_TYPE} from "../Form/Form.const";

function App() {
  const config = {
    fields:[
      {
        type:INPUT_TYPE.TEXT,
        label:'Name',
        name: 'name'
      },
      {
        type: INPUT_TYPE.NUMBER,
        label:'Age',
        name: 'age'
      },
      {
        type: INPUT_TYPE.SELECT,
        name:'country',
        label: 'County',
        items:[
          {
            label:'Israel',
            name: 'li'
          },
          {
            label:'Germany',
            name: 'ge'
          },
          {
            label:'United States',
            name: 'us'
          }
        ]
      }
    ],
    buttons:[
      {
        name:'Save',
        onClick:(values)=>{
          console.log('on Save',values);
        }
      }
    ]
  };

  return (
    <div className="App">
      <Form config={config} initializeValues={{name:'Elad',country:'us'}}/>
    </div>
  );
}

export default App;
