import React, {Component} from 'react';
import {Aside} from "./aside.jsx";

export class CustomizationPage extends Component {
    constructor(props) {
        super(props);
        this.colorPage = React.createRef();
        this.colorFont = React.createRef();
    }

    componentDidMount() {
        const {setColorPage, setColorFont} = this.props;
        const {current: currentColorPage} = this.colorPage;
        const {current: currentColorFont} = this.colorFont;
        currentColorPage.addEventListener("change", setColorPage, false);
        currentColorFont.addEventListener("change", setColorFont, false);
    }

    componentWillUnmount() {
        const {setColorPage, setColorFont} = this.props;
        const {current: currentColorPage} = this.colorPage;
        const {current: currentColorFont} = this.colorFont;
        currentColorPage.removeEventListener("change", setColorPage, false);
        currentColorFont.removeEventListener("change", setColorFont, false);
    }


    handlePosition = e => {
        const {setPositionSidebar} = this.props;
        const number = parseInt(e.target.value);
        number === 0 ? setPositionSidebar('row') : setPositionSidebar('row-reverse');
    };

    render() {
        const {colorPage, colorFont, positionSidebar} = this.props;
        const styleFromProps = {
            backgroundColor: colorPage,
            color: colorFont,
            flexFlow: positionSidebar
        };

        return (
            <main style={styleFromProps}>
                <article>
                    <div className={'wrap-customization'}>
                        <div>
                            <label htmlFor="colorPage">Цвет фона страницы</label>
                            <input type="color" id={'colorPage'} defaultValue={'#74dbe8'} ref={this.colorPage}/>
                        </div>
                        <div>
                            <label htmlFor="fontColor">Цвет шрифта</label>
                            <input type="color" id={'fontColor'} ref={this.colorFont}/>
                        </div>
                        <div>
                            <label htmlFor="position-aside">Позиция sidebar</label>
                            <select id="position-aside" onChange={this.handlePosition}>
                                <option value="0">Left</option>
                                <option value="1">Right</option>
                            </select>
                        </div>
                    </div>
                </article>
                <Aside/>
            </main>
        )
    }
}