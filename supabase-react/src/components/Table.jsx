import React from 'react'; 
import { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import PropTypes from 'prop-types';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';


export function Table({data, dataHeaders, ...props}) {
    const events = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];

    const imageBodyTemplate = (product) => {
        return <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.image} className="w-6rem shadow-2 border-round" />;
    };

    const ratingBodyTemplate = (product) => {
        return <Rating value={product.rating} readOnly cancel={false} />;
    };

    const statusBodyTemplate = (product) => {
        return <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>;
    };

    return (
        <div className="table">
            <DataTable value={data} tableStyle={{ minWidth: '50rem' }}>
                {dataHeaders.map(item=> item.type? 
                item.type === 'image'?
                <Column field={item.field} header={item.header} body={imageBodyTemplate}></Column> : null: 
                <Column field={item.field} header={item.header}></Column>
                )}
            </DataTable>
        </div>
    );
};

Table.propTypes = {
    /**
   * Table data
   */
    data: PropTypes.object,
    /**
   * Table header
   */
    dataHeaders: PropTypes.object
}



