import React, {useState} from "react";

export default function ToDoList () {
    let [addList, setAddList] = useState({
        Morning: " ",
        Afternoon: " ",
        Evening: "",
        Work: "",
    Health: "",
    Exercise: "",
    Food: ""
    })

    const [input, setInput] = useState("");
    let lists = Object.keys(addList);
    let[category, setCategory] = useState(0);

    function addedList (event) {
        setInput(event.target.value);
        }

    function onEnter(event){
    event.preventDefault();
    setAddList((prevList) => ({
        ...prevList,
        [lists[category]]: input,
      }));
      setCategory((prevCategory) => (prevCategory + 1) % lists.length);
      setInput("");

    }
    


    return (
       
    <div>
       
        <div>
        <h2>Your to do list for today</h2>
            <form onSubmit={onEnter}>
                <label>Enter a item you need to do today for {lists[category]} each catagory: </label>
                <input type="text" value={input} onChange={addedList} >
                
                </input>
            </form>
        
        </div>
       
        <div>
        {Object.entries(addList).map((key, value) => (
            <p key={key}>
             <strong>{value + 1}.</strong> <span>{key}</span>
            </p>
        )  )}
        </div>
        
    </div>);
}
/*Create a list component: Create a new component called "List" that will display the todo list items. You can use an array of objects to store the list items and use the map() function to render each item in the list.

Add form to add new items: Create a form that allows users to add new todo list items. You can use the onChange event to track changes to the form input and the onSubmit event to handle the form submission.

Add a delete button: Add a delete button to each list item that allows users to delete items from the list. You can use the onClick event to handle the delete button click and update the list accordingly.

Add a checkbox: Add a checkbox to each list item that allows users to mark items as complete. You can use the onChange event to handle the checkbox change and update the list accordingly.

Style the app: Use CSS or a CSS framework like Bootstrap to style the app and make it look visually appealing.

By following these steps, you should be able to build a simple todo list app using ReactJS. You can then expand on this app by adding more features or customizing it to fit your specific needs.*/