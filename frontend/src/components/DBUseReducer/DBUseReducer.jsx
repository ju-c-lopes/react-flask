import { useEffect, useReducer } from 'react';
import axios from 'axios';

const initialState = {
    isLoading: true,
    error: null,
    data: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'GetEvenSchedule':
            return { 
                ...state,
                isLoading: true,
            };
        case 'GetEvenScheduleSuccess':
            return { 
                ...state,
                isLoading: false,
                data: action.payload,
            };
        case 'GetEvenSchedulFailure':
            return { 
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
};

const DBUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log("render", state);

    useEffect(() => {
        dispatch({ type: 'GetEvenSchedule' });
        axios.get("http://localhost:8000/schedules/")
            .then((response) => {
                console.log("response", response);
                dispatch({ type: 'GetEvenScheduleSuccess', payload: response.data });
            } ).catch(() => {
                dispatch({ type: 'GetEvenSchedulFailure' });
            });
    }, []);

    return (
        <div>
            {state.isLoading && <div>Loading...</div>}
            {state.error && <div>Error: {state.error}</div>}
            {state.data && state.data.length === 0 && <div>No schedules available.</div>}
            <ul>
                {state.data?.map(({id, time, speaker, subjectTitle, venue}) => (
                    <li key={id}>
                        Time: {time}
                        Speaker: {speaker}<br />
                        Subject Title: {subjectTitle}<br />
                        Venue: {venue}<br />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DBUseReducer;
