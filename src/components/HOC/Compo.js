import { render } from '@testing-library/react';
import React from 'react';
import Alert from './Alert';

class Compo extends React.Component {
    componentDidMount() {
        alert('1');
    }

    render() {
        return (
            <>Hello</>
        );
    }
    
}

export default Alert(Compo);