import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'primereact/card';
import { Skeleton } from 'primereact/skeleton';

import '../assets/css/card.css';
/**
 * Primary UI component for user interaction
 */
export const CardComponent = ({ title, subTitle, image,...props }) => {

    const header = (
        <img alt="Card" src={image} />
    );



  return (
    <div className='card'>
        <Card
        title={title}
        subTitle={`@${subTitle}`}
        header={header}
        >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, nobis repellendus! Sint dignissimos alias voluptas recusandae suscipit quod ipsum, aut autem iure excepturi cumque modi totam porro in facere incidunt?
        </Card>
    </div>
);
};
