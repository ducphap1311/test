import "./App.css";
import { useReducer, useState, createContext } from "react";
import { Middle } from "./Middle";

//init state
// reducer
//dispatch
//action : type, payload

export const Context = createContext()

const initState = {
    job: "",
    jobs: [],
};

const reducer = (state, action) => {
    // console.log(state);
    switch (action.type) {
        case "ENTERTEXT":
            return { ...state, job: action.payload };
        case "ADD":
            return { ...state, jobs: [...state.jobs, action.payload] };
        case "REMOVE":
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1)
            return {...state, jobs: newJobs};
        default:
            return state;
    }
};

function App() {
    const [state, dispatch] = useReducer(reducer, initState);
    const [text, setText] = useState("hello")
    return (
            <div className="App">
                <input
                    type="text"
                    value={state.job}
                    onChange={(e) =>
                        dispatch({ type: "ENTERTEXT", payload: e.target.value })
                    }
                />
                <button
                    onClick={() => dispatch({ type: "ADD", payload: state.job })}
                >
                    Add
                </button>
                {state.jobs.map((job, index) => {
                    return (
                        <div
                            style={{ display: "flex", justifyContent: "center" }}
                            key={index}
                        >
                            <p>{job}</p>
                            <p
                                onClick={() =>
                                    dispatch({ type: "REMOVE", payload: index })
                                }
                            >
                                Remove
                            </p>
                        </div>
                    );
                })}
                <Middle text={text}/>
            </div>
    );
}

export default App;
