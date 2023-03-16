import React,{useState, useEffect} from "react";
import classes from "./AddUser.module.css"
import Button from "../UI/Button";
import { v4 as uuidv4 } from 'uuid';
import ErrorModal from "../UI/ErrorModal";
import Card from "../UI/Card";


const AddUser = props => {
    const randomId = uuidv4();
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const nameChangeHandler = event => {
        setEnteredName(event.target.value);
    };

    const ageChangeHandler = event => {
        setEnteredAge(event.target.value);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
              title: 'Invalid input',
              message: 'Please enter a valid name and age (non-empty values).',
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
              title: 'Invalid age',
              message: 'Please enter a valid age (> 0).',
            });
            return;
        }
    
        props.onAddUser({id: randomId, name: enteredName, age: enteredAge })
        setEnteredName('')
        setEnteredAge('')
    };

    const errorHandler = () => {
        setError(null);
      };
      
return (
    <div>
         {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={formSubmitHandler}>
            <div>
                <label> Name</label>
                <input type="text" onChange={nameChangeHandler} value={enteredName} />
                <label> Age</label>
                <input type="text" onChange={ageChangeHandler} value={enteredAge} />
            </div>
        
            <Button type="submit">Add user</Button>
        </form>
        </Card>
    </div>
)

} 

export default AddUser;