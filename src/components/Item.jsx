import React, { useState } from 'react'; // Import useState from React

function Item(props) {


  const {Name} = props;


  // Declare state
  // const [name, setName] = useState(Name);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");




  // Click handler
  // function onclickHandler(){
  //   setName("Anurag");
  //   console.log("Clicked");
  // }


  function titleChangeHandler(event){
    console.log(event.target.value);
    setTitle(event.target.value);
  }

  function dateChangeHandler(event){
    console.log(event.target.value);
    setDate(event.target.value);
  }

  function onSubmitHandler(event){
    event.preventDefault();

    let data = {
      title,
      date,
    }
    console.log(data);
    setTitle(" ");
    setDate(" ");
  }


  return (
    // <div className='flex-col justify-center items-center'>
    //   {name} {/* This will now use the state name */}
    //   <button className='border-2 border-red-600 hover:bg-red-600 hover:text-white' onClick={onclickHandler}>
    //     Click Me
    //   </button>
      <form onSubmit={onSubmitHandler}>
        <label>
          Name:
          <input type="text" onChange={titleChangeHandler} value={title} />
        </label>
        <label>
          Date:
          <input type="date" onChange={dateChangeHandler} value={date} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
  );
}

export default Item;
