import 'flexboxgrid/dist/flexboxgrid.min.css';
import '../css/panel.css';

import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Row from './Row';
import Panel from './Panel';
import FilterManagement from './FilterManagement';
import IFramePanel from './IFramePanel';

/* IMPORT DATASET HERE */
import dataset01 from '../data/dataset01';
import dataset02 from '../data/dataset02';
/* ... */

injectTapEventPlugin();

const App = () => {

    /******************SELECT IMPORTED DATASET TO TEST*************/
    // const dataSet = dataset01;
    const dataSet = dataset02;
    /**************************************************************/

    return (
        <MuiThemeProvider>
            <Row>
                <Panel title="CUSTOMER WEB APP">
                    <Row>
                        <Panel title="Filters" className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                            <FilterManagement filters={dataSet.filters} embeddedUrl={dataSet.embeddedUrl} />
                        </Panel>

                        <IFramePanel embeddedUrl={dataSet.embeddedUrl} />
                    </Row>
                </Panel>
            </Row>
        </MuiThemeProvider>
    );
};

export default App;

