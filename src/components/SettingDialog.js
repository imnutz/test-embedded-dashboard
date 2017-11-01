import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const customContentStyle = {
    width: '95%',
    maxWidth: 'none',
};

class SettingDialog extends Component {

    constructor (props) {
        super(props);

        this.actions = [
            <FlatButton
                label="Ok"
                primary={true}
                onClick={this.handleOk}
            />,
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleCancel}
            />
        ];

        this.state = {
            open: true,
            data: props.data
        };
    }

    handleOk = () => {
        this.setState({open: false});
        this.props.updateSetting(this.state.data);
    }

    handleCancel = () => {
        this.setState({open: false});
    }

    handleOpen = () => {
        this.setState({open: true});
    }

    handleEmbeddedUrlChange = (event, embeddedUrl) => {
        this.setState(prevState => {
            return {
                ...prevState,
                data: {
                    ...prevState.data,
                    embeddedUrl
                }
            }
        });
    }

    handleFiltersChange = (event, filters) => {
        this.setState(prevState => {
            return {
                ...prevState,
                data: {
                    ...prevState.data,
                    filters
                }
            }
        });
    }

    render () {
        return (
            <div className="setting-button">
                <RaisedButton label="Setting" primary={true} onClick={this.handleOpen}/>
                <Dialog
                    title="Setting"
                    actions={this.actions}
                    open={this.state.open}
                    contentStyle={customContentStyle}
                    modal={true}
                    autoDetectWindowHeight={true}
                    autoScrollBodyContent={true}
                >
                    <TextField
                        fullWidth={true}
                        floatingLabelText="Embedded GDC Dashboard URL"
                        value={this.state.data.embeddedUrl}
                        onChange={this.handleEmbeddedUrlChange}
                    /><br />
                    <TextField
                        fullWidth={true}
                        floatingLabelText="Filters in JSON"
                        multiLine={true}
                        rows={50}
                        rowsMax={1000}
                        value={this.state.data.filters}
                        onChange={this.handleFiltersChange}
                    /><br />
                </Dialog>
            </div>
        );
    }
}

export default SettingDialog;