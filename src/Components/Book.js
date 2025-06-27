import './Book.css';
import React from 'react';
import { Shevchenko } from './componetsTaras/Shevchenko';

export function Book(props) {
    const [state, setState] = React.useState('main');

    function changeTheme(event) {
        setState(event.target.value);
    }

    return (
        <div className={state}>
            <div id='radio'>
                <span>Dark</span>
                <input type='radio' name='radio' value='dark' onClick={changeTheme} />
                <span>Light</span>
                <input type='radio' name='radio' value='light' onClick={changeTheme} />
            </div>

            <Shevchenko theme={state} /> 
            {/* ^ Вы сказали в 21 июня, что нужно сделать именно интегрированый компонент, так я и сделал, или это не так сказано? */}
        </div>
    );
}
