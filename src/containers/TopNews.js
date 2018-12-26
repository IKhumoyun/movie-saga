import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { getTopNews } from "../actions/news";
import News from 'components/News';


class TopNews extends Component {

    static path = '/topNews';

    componentDidMount() {
        const { getTopNews } = this.props;
        getTopNews();
    }


    render() {

        const { news } = this.props;

        return (
            <div>
                <News items={news}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        getTopNews
    },
    dispatch
);

const mapStateToProps = (state) => {
    return {
        news: state.news.all,
        isFetched: state.news.isFetched
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopNews);