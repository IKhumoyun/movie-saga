import React, {Component, Fragment} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {addListRequest} from "../actions/system";

class HomePage extends Component {

    static path = '/';

    componentDidMount(){
        this.props.addListRequest('react');
    }

    render() {
        const { list } = this.props;

        return (
            <Fragment>
                {list.map(item => item)}
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
   list: state.system.list
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        addListRequest
    },
    dispatch
);

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);