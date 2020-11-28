function FormComponent(props) {
    return (
        <div>
          <form onSubmit={props.handleSubmit}>
            <label>
              <input
                type="text"
                placeholder="first name"
                name="firstName"
                value={props.firstName}
                onChange={props.handleChange}
              />
  
              <br />
              <input
                type="text"
                placeholder="last name"
                name="lastName"
                value={props.lastName}
                onChange={props.handleChange}
              />
            </label>
            <br />
            <label>
              <input
                type="number"
                placeholder="Age"
                name="age"
                onChange={props.handleChange}
              />
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked = {props.gender === "male"}
                onChange={props.handleChange}
              />{" "}
              Male
              <br />
              <input
                type="radio"
                placeholder="gender"
                name="gender"
                value="female"
                checked = {props.gender === "female"}
                onChange={props.handleChange}
              />
              Female
              <br />
            </label>
            <label>Location:</label>
            <select onChange={props.handleChange} name="location" value= {props.location}>
              <option value="">---Select Location---</option>
              <option value="India">India</option>
              <option value="Australia">Australia</option>
              <option value="Brazil">Brazil</option>
              <option value="US">US</option>
              <option value="UK">UK</option>
            </select>
            <br />
            <label>Dietary restrictions: </label>
            <input 
              type = "checkbox"
              name = "isVegetarian"
              value = {props.isVegetarian}
              onChange = {props.handleChange}
              checked = {props.isVegetarian}
            /> Vegan?
  
            <input 
              type = "checkbox"
              name = "isKosher"
              value = {props.isKosher}
              onChange = {props.handleChange}
              checked = {props.isKosher}
            /> Kosher?
  
            <input 
              type = "checkbox"
              name = "isLactoseFree"
              value = {props.isLactoseFree}
              onChange = {props.handleChange}
              checked = {props.isLactoseFree}
            /> Lactose Free?
  
            <br />
            <button>submit</button>
          </form>
        </div>
      );
}

export default FormComponent;