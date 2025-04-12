import { useState, createContext, useContext } from 'react';

const MyContext = createContext();

const ContextExample = () => {
    const [speakerName] = useState('Fred Morris');

    return (
        <MyContext.Provider value={speakerName}>
            <h2>This is the Parent Component</h2>
            <hr />
            <ImmediateChildComponent />
        </MyContext.Provider>
    );
}


function ImmediateChildComponent() {
    return (
        <div>
            <h3>This is the Immediate Child Component</h3>
            <hr />
            <NestedChildComponent />
        </div>
    );
};

function NestedChildComponent() {
    const speakerName = useContext(MyContext);

    return (
        <div>
            <h4>This is the Nested Child Component</h4>
            <p>Speaker Name: {speakerName}</p>
        </div>
    );
};

export default ContextExample;