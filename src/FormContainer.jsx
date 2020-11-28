import { React, Component } from "react";
import FormComponent from './FormComponent'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      age: 0,
      location: "",
      gender: "",
        isVegetarian: false,
        isKosher: false,
        isLactoseFree: false
    };
  }

  /* You should collect the following information from the user:

First name (text input)
Last name (text input)
Age (number input)
Gender (radio buttons with 2 or more options)
Location they're traveling to (select box with at least 3 options. You're an airline that doesn't fly to many places...)
Whether they have any dietary restrictions (check boxes for vegetarian, kosher, lactose free, etc. Include at least 3 options)
Each element of the form should be given a name attribute so you can access the data in JavaScript and do stuff with it.

There should also be a button at the end of the form to submit it. Upon pressing the button, an alert should pop up that looks like this: */

  handleSubmit = (event) => {
    alert(`
    First Name          : ${this.state.firstName} 
    Last Name           : ${this.state.lastName} 
    Age                 : ${this.state.age} 
    Gender              : ${this.state.gender} 
    Location            : ${this.state.location}
    Dietary Restriction : ${this.state.isVegetarian === true ? "Vegetarian" : ""} ${this.state.isKosher === true ? "Kosher" : ""} ${this.state.isLactoseFree === true ? "Lactose Free" : ""}
    `);

    event.preventDefault();
  };

  handleChange = (event) => {
    const {name, value, type, checked} = event.target;
    type === 'checkbox' ? this.setState(prevState => {return {...prevState.dietaryRestrictions, [name]: checked}}): this.setState({ [name] : value });
  };

  render() {
    return(
      <FormComponent 
      handleChange = {this.handleChange} 
      handleSubmit = {this.handleSubmit}
      /* data = {this.state}  */
      {...this.state}
    />
    )
  }
}

export default Form;
