import React, {Component} from "react";
import {Card, CardActions, CardHeader, CardText} from "material-ui/Card";
import _ from 'lodash';
import Filter from "./Filter";
import data from "../data";

const MESSAGE_NAME = 'filter.value.changed',
      MESSAGE_TYPE = 'app.ok';

class FilterManagement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filters: data.filters
        };
    }

    componentDidMount () {
        this.parentWindow = window;
        this.parentWindow.addEventListener('message', this.receiveMessage);
        this.dashboardWindow = (document.getElementById("gooddata") || {}).contentWindow;
    }

    onCheck = (label, value, checked) => {
        this.setState( ({filters}) => {
            return {
                filters: filters.map(filter => {
                    return {
                        ...filter,
                        items:
                            filter.label === label ?
                                filter.items.map(item => ({
                                        ...item,
                                        checked: item.value === value ? checked : item.checked
                                })) :
                                filter.items
                    };
                })
            };
        });
    };

    onSend = label => {
        const filter = this.state.filters.filter(filter => filter.label === label)[0];
        if (filter) {
            const message = filter.items
                .filter(({checked}) => checked)
                .map(({value}) => ({
                    label,
                    value
                }));

            message.length && this.sendMessage(message);
        }
    };
    sendMessage = message => {
        const wrapperMessage = {
            gdc: {
                setFilterContext: message
            }
        };
        this.dashboardWindow && this.dashboardWindow.postMessage(JSON.stringify(wrapperMessage), '*');
    };

    receiveMessage = ({data}) => {
        if(typeof data === 'string') {
            let _data = JSON.parse(data),
                message = _data.gdc;

            if (message.name === MESSAGE_NAME && message.type === MESSAGE_TYPE) {
                this.updateFilter(message.data);
            }
        }
    };

    updateFilter = data => {
        !_.isEmpty(data) &&
        this.setState(prevState => {

            const label = data[0].label;
            const values = data.map(({value}) => value);

            return {
                filters: prevState.filters.map((filter) => {
                    return label !== filter.label ?
                        filter :
                        {
                            ...filter,
                            items: filter.items.map(item => {
                                return values.findIndex(value => item.value === value) >= 0  ?
                                {...item, checked: true} :
                                {...item, checked: false}
                            })
                        }
                })
            }
        })

    };

    render () {
        let filters = this.state.filters;

        return(
            <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row'}}>
                {
                    filters.map(filter =>
                        <Filter
                            key={filter.label}
                            {...filter}
                            onCheck={this.onCheck}
                            onSend={this.onSend}
                        />)
                }
            </div>
        );
    }
};

export default  FilterManagement;