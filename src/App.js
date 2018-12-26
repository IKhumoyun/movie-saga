import React, {Component} from 'react';
import "./assets/style/main.scss";
import Header from "./components/Header";
import jss from "jss";
import preset from "jss-preset-default";

import museo100 from './assets/fonts/MuseoSansCyrl-100.ttf';
import museo300 from './assets/fonts/MuseoSansCyrl-100.ttf';
import museo500 from './assets/fonts/MuseoSansCyrl-100.ttf';
import museo900 from './assets/fonts/MuseoSansCyrl-100.ttf';

jss.setup(preset());

const styles = {
    '@font-face': [
        {
            fontFamily: 'Museo100',
            src: `url(${museo100}) format("truetype")`,
            fontWeight: 'normal',
            fontStyle: 'normal',
        },
        {
            fontFamily: 'Museo300',
            src: `url(${museo300}) format("truetype")`,
            fontWeight: 'normal',
            fontStyle: 'normal',
        },
        {
            fontFamily: 'Museo500',
            src: `url(${museo500}) format("truetype")`,
            fontWeight: 'normal',
            fontStyle: 'normal',
        },
        {
            fontFamily: 'Museo900',
            src: `url(${museo900}) format("truetype")`,
            fontWeight: 'normal',
            fontStyle: 'normal',
        },

    ],
};

const {classes} = jss.createStyleSheet(styles).attach();

class App extends Component {
    render() {
        return (
            <div className={classes.body}>
                <Header/>
                {this.props.children}
            </div>
        );
    }
}

export default App;