import 'flexboxgrid/dist/flexboxgrid.min.css';
import '../css/panel.css';

import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Row from './Row';
import Panel from './Panel';
import FilterManagement from './FilterManagement';

injectTapEventPlugin();

const App = () => {

    return (
        <MuiThemeProvider>
            <Row>
                <Panel title="CUSTOMER WEB APP">
                    <Row>
                        <Panel title="Filters" className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                            <FilterManagement/>
                        </Panel>
                        <Panel title="Embedded GDC Dashboard" className="col-lg-8 col-md-8 col-sm-6 col-xs-6">
                            <iframe id="gooddata"
                                    frameBorder="0"
                                    src="https://localhost:8443/dashboard.html?label.stage.name.stagename=vals=Short List,Negotiation#project=/gdc/projects/w8gtg6cwkygunvf59pd3amlij0i8nvx6&dashboard=/gdc/md/w8gtg6cwkygunvf59pd3amlij0i8nvx6/obj/76191"
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

export default App;