import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
    <Fragment>
        <img src={spinner} style={{ filter: 'invert(100%)', width: '200px', margin: 'auto', display: 'block' }} alt="Loading..." />
    </Fragment>
);

export default Spinner;