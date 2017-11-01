import 'flexboxgrid/dist/flexboxgrid.min.css';
import '../css/panel.css';

import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Row from './Row';
import Panel from './Panel';
import FilterManagement from './FilterManagement';
import SettingDialog from './SettingDialog';

import dataset from '../data';

injectTapEventPlugin();

class App extends Component {

    constructor (props) {
        super(props);

        this.state = {
            embeddedUrl: dataset.embeddedUrl,
            filters: dataset.filters
        };
    }

    updateSetting = (data) => {
        this.setState(data);
    };

    render() {
        let filters = [];

        try {
            filters = eval(this.state.filters) || [];
        } catch (e) {
            console.log('JSON parsing error', e);
            filters = [];
        }

        return (
            <MuiThemeProvider>
                <Row>
                    <Panel title="CUSTOMER WEB APP">
                        <Row>
                            <SettingDialog data={this.state} updateSetting={this.updateSetting}/>
                        </Row>
                        <Row>
                            <Panel title="Filters" className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                                <FilterManagement filters={filters}/>
                            </Panel>
                            <Panel title="Embedded GDC Dashboard" className="col-lg-8 col-md-8 col-sm-6 col-xs-6">
                                <iframe id="gooddata"
                                        frameBorder="0"
                                        src={this.state.embeddedUrl}
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
    }
};

export default App;

