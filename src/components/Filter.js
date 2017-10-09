import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ApplyIcon from 'material-ui/svg-icons/content/send';

import FilterItem from './FilterItem';

const Filter = ({title, label, items, onCheck, onSend}) => {
    return (
        <div style={{flexGrow: 1, flexShrink: 1, flexBasis: '50%'}}>
            <Card initiallyExpanded={true} style={{margin: '0 5px 10px 5px'}}>
                <CardHeader title={title}
                            showExpandableButton={true}
                            actAsExpander={true}/>
                <CardText expandable={true}>
                    <FilterItem
                        items={items}
                        label={label}
                        onCheck={onCheck}
                    />
                </CardText>
                <CardActions expandable={true}>
                    <FloatingActionButton mini={true} onClick={() => onSend(label)}>
                        <ApplyIcon />
                    </FloatingActionButton>
                </CardActions>
            </Card>
        </div>
    );
};

export default Filter;