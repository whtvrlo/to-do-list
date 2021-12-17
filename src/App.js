// // const Todo = () => {
//     // V    useState hook to store an array useState([]) 
//     // V    useState hook to store user input useState("")

//     // V    addHandler function
//     // V duplicate the state array
//     // V push input value to duplicated array
//     // update state array

//     // removeHandler function
//     // duplicate the state array
//     // remove that item from duplicated array
//     // update state array

//     // update input function
//     // use the global event to update the state input value
    
//     // return (
//         // input element with an onchange to run the update function
//         // display user input
//         // button to add to array onclick to run addHandler function
//         // map through list items to display them to the user
//             // in the map method
//             // return a h2 to display the current element
//             // button to delete the element, with an onclick to run removeHandler function

//     // )
// // }


import { useState } from 'react'
import "./toDo.css";
import ndelap from "./Components/ndelap.jpg";



const Todo = () => {
    const [input, setInput] = useState ("")
    const [list, setList] = useState([])

    const inputHandler = (event) => {
        setInput(event.target.value)
    }

    const update = (event) => {
        this.setUserInput(event.target.value)
    }

    const addHandler = () => {
        const newArray = [...list]
        newArray.push(input)
        setList(newArray)
        setInput("") // clear input text box by setting setInput to an empty string 
    }



   const removeHandler = (index) => {
       const newArray = [...list]
       newArray.splice(index,1); // remove array items using .splice method
       setList(newArray) //update list)
   }


    return (
    <div className="wrapper"><div className="box1">
            <h1>To do list: </h1>
            {list.map((item, index) => {
                return <Note update={update} index={index} removeHandler={removeHandler} key={index} item={item} /> // send removehandler function to note component so it can be used below note component=> sending function as prop. 
            })}
            <h2></h2>
            <input type="text" value={input} onChange={inputHandler} placeholder="e.g. bake cookies.."></input> 
            <button onClick={addHandler} className="addButton">adddd</button>




        </div>
    </div>
    )
}

const Note = (props) => {
    return  (
        <div>
            <h2 className="taskbox">• {props.item}</h2>
            <button onClick={()=>props.removeHandler(props.index)} class="remove-btn">remove</button> 
            <Picture img={ndelap}/>
        </div>
    )
}
export default Todo



const Picture = (img) => {
    return (<div>
        <img src={img.img} alt=""/>
    </div>
    );
}



// const update = (event) => {
//     setUserInput(event.target.value)
// }
// return (
//     <div>
//         <h1>TO DO LIST</h1>

//         <input type="text" onChange={update}/>
//         <button onClick={addHandler}>add note</button>
//         {/* <h3>{userInput}</h3> */}
//         {numbers.map((num, index) => {
//             return  (
//                 <>
//                     <h1 key={index}>{num}</h1>
//                     <button onClick={() => removeHandler(index)}>remove</button>
//                 </>
//             )
//         })}
    
//     </div>
// )


// export default App

   {/* {list.map((num, index) => {
                return (
                    <h1 key={index}>{input, index}</h1>
                )
            })}







// import { useState} from "react";


// const Todo = () => {
//     const [list, setList]= useState([])
//     const [input, SetInput]= useState("")

//     const inputHandler = (event) => {
//         setInput(event.target.value)
//     }
//     return (
//         <div>
//             <Content title="My to do list:"/>
//             <input onChange={inputHandler} type="text" placeholder="Type here to do's"></input>
//             <button in>adddd</button>

            
            
//         </div>
//     );
// }

// const Content = (props) => {
//     return (<div>
//         <h1>{props.title}</h1>
//         <h2>{props.input}</h2>
//         </div>
//     );
// };


// export default Todo


































// import { useState } from "react"



// const App = () => {
//     const [numbers, setNumbers] = useState([1, 2, 3, 4])
//     const [userInput, setUserInput] = useState("")
    

//     const addHandler = () => {
//         const newArray = [...numbers]
//         newArray.push(numbers[numbers.length - 1] + 1)
//         setNumbers(newArray)
//     }

//     const removeHandler = (index) => {
//         const newArray = [...numbers]
//         newArray.splice(index, 1)
//         setNumbers(newArray)
//     }


//     const update = (event) => {
//         setUserInput(event.target.value)
//     }
//     return (
//         <div>
//             <h1>TO DO LIST</h1>

//             <input type="text" onChange={update}/>
//             <button onClick={addHandler}>add note</button>
//             {/* <h3>{userInput}</h3> */}
//             {numbers.map((num, index) => {
//                 return  (
//                     <>
//                         <h1 key={index}>{num}</h1>
//                         <button onClick={() => removeHandler(index)}>remove</button>
//                     </>
//                 )
//             })}
        
//         </div>
//     )
// }

// export default App






//_____seperate shit that didnt work

// const newArray = [...list] // make copy of original array
// const clickButton = () => {
//     let temp_state = [...state]; // make shallow copy of the array
//     let temp_element = {...temp_state[0]}; // shallow copy of element you want to mutate
//     temp_element.counter = temp.element.counter+1; // update property youre interested in
//     temp_state[0] = temp_element; //Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
//     setState( temp_state);


