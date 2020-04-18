import React from 'react';
import { List } from '../../assets/styles/ListContainer';
import { useList } from '../../contexts/ListContext';

import ListItem from '../ListItem';
import AddNewItens from '../AddNewItens';

export default function ListContainer() {
    const { renderList } = useList();

    function renderListItens() {
        if (renderList.length === 0) {
            return <AddNewItens />
        } else {
            return renderList.map(e => (
                <ListItem e={e} key={e.id} />
            ))
        }
    }

    return (
        <List>
            {renderListItens()}
        </List>
    );
}