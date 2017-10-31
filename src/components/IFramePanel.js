import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import Panel from './Panel';

class IFramePanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            embeddedUrl: props.embeddedUrl
        };
    }

    componentDidMount() {
        this.frame = document.querySelector("#gooddata").contentWindow;
    }

    onUrlChange(evt) {
        this.setState({
            embeddedUrl: evt.target.value
        });
    }

    goToEmbededDashboard() {
        if (this.state.embeddedUrl) {
            this.frame.location = this.state.embeddedUrl;
        }
    }

    render() {
        return (
            <Panel title="Embedded GDC Dashboard" className="col-lg-8 col-md-8 col-sm-6 col-xs-6">
                <div className="address col-lg-12">
                    <TextField hintText="Embedded url" onChange={this.onUrlChange.bind(this)} value={this.state.embeddedUrl}></TextField>
                    <FlatButton label="Go" primary={true} onClick={this.goToEmbededDashboard.bind(this)}/>
                </div>
                <iframe id="gooddata"
                        frameBorder="0"
                        width="100%"
                        height="620px"
                        allowTransparency="false">
                </iframe>
            </Panel>
        );
    }
}

export default IFramePanel;
