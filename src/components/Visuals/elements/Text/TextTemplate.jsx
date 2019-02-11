import React from 'react';

import styles from './Text.scss';

const TextTemplate = ({text}) => (

    <section className="Text">
        <h1>
            { text }
        </h1>
    </section>

)

export default TextTemplate;
