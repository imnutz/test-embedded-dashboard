import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {white, cyan500} from 'material-ui/styles/colors';

const Panel = ({className = "col-lg col-md col-sm", title, text, children}) => {
    return (
        <div className={className}>
            <div className="panel">
                <Card style={{boxShadow: 'none'}}>
                    <CardHeader
                        title={title}
                        titleColor={white}
                        style={{backgroundColor: cyan500, borderBottom: `1px ${white} solid`}} />
                    {text &&
                        <CardText>
                            <span>{text}</span>
                        </CardText>
                    }
                </Card>
                <div style={{padding: '20px'}}>
                    {children}
                </div>
            </div>
        </div>
    )
};

export default Panel;