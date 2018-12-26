import React, {Component} from 'react';
import PropTypes from 'prop-types';

class News extends Component {

    static propTypes = {
      items: PropTypes.arrayOf({
          title: PropTypes.string.isRequired,
          author: PropTypes.string,
          url: PropTypes.string,
          urlToImage: PropTypes.string,

      })
    };

    static defaultProps = {
      items: []
    };

    render() {

        const { items } = this.props;

        return (
            <div className="news-container">
                {
                    items && items.map((item)=> (
                        <div className="news">
                            <div className="leftItem">
                                <img className="news-img" src={item.urlToImage} alt=""/>
                            </div>
                            <div className="rightItem">
                                <h2>{item.title}</h2><span>{item.publishedAt}</span>
                                <a href={item.url} target="_blank">{item.url}</a>
                            </div>

                        </div>
                    ))
                }
            </div>
        );
    }
}

export default News;