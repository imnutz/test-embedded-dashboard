import 'flexboxgrid/dist/flexboxgrid.min.css';
import '../css/panel.css';

import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Row from './Row';
import Panel from './Panel';
import FilterManagement from './FilterManagement';
import dataset01 from '../data/dataset01';
import dataset02 from '../data/dataset02';

injectTapEventPlugin();

const App = () => {

    const dataSet = dataset02;

    return (
        <MuiThemeProvider>
            <Row>
                <Panel title="CUSTOMER WEB APP">
                    <Row>
                        <Panel title="Filters" className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                            <FilterManagement filters={dataSet.filters}/>
                        </Panel>
                        <Panel title="Embedded GDC Dashboard" className="col-lg-8 col-md-8 col-sm-6 col-xs-6">
                            <iframe id="gooddata"
                                    frameBorder="0"
                                    src={dataSet.embeddedUrl}
                                    width="100%"
                                    height="620px"
                                    allowTransparency="false">
                            </iframe>
                        </Panel>
                    </Row>
                </Panel>
            </Row>
        </MuiThemeProvider>
    );
};

/*src="https://localhost:8443/dashboard.html?label.stage.name.stagename=vals=Short List,Negotiation#project=/gdc/projects/w8gtg6cwkygunvf59pd3amlij0i8nvx6&dashboard=/gdc/md/w8gtg6cwkygunvf59pd3amlij0i8nvx6/obj/76191"*/
/*src="https://localhost:8443/dashboard.html?snapshot.aag81lMifn6q=2011#project=/gdc/projects/w8gtg6cwkygunvf59pd3amlij0i8nvx6&dashboard=/gdc/md/w8gtg6cwkygunvf59pd3amlij0i8nvx6/obj/76191&tab=95bc951f809b"*/
export default App;

