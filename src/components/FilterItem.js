import React, {Component} from "react";
import Checkbox from "material-ui/Checkbox";

const FilterItem = ({items, label, onCheck}) => {

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            {
                items.map( ({value, checked = false}, index) => {
                    return <Checkbox
                            key={value + index}
                            label={value}
                            checked={checked}
                            onCheck={(event, isInputChecked) => {
                                onCheck(label, value, isInputChecked);
                            }
                    }/>
                })
            }
        </div>
    );
};

export default FilterItem;