import React, { Component } from 'react'
import alisa from '../alisa.png'
import Cookies from 'universal-cookie/es6';
import { Header } from './Header.js';
import { Footer } from './Footer.js';

import {Upgrades} from './Upgrades.js';
const cookies = new Cookies();

export default class MainPart extends Component {


    constructor(props) {
        super(props);
        
        this.state = { sugar: parseInt(cookies.get('sugar')), cps: parseInt(cookies.get('cps')) };

    }

    timer = () => {
        this.addSugar(this.state.cps/10);
    }

    componentDidMount() {
        setInterval(this.timer, 100)
    }
    addSugar = (count) => {
        this.setState({
            sugar: this.state.sugar + count
        });
        
        cookies.set('sugar', Math.round(this.state.sugar + count));

    }

    addCps = (addict, price) => {
        this.setState({
            sugar: this.state.sugar - price,
            cps: this.state.cps + addict
        }); 
        
        cookies.set('sugar', Math.round(this.state.sugar - price));
        cookies.set('cps', this.state.cps + addict);
    }

    render() {
        return (
            <>
            <div className='clickerZone'>
                <Header sugar={Math.round(this.state.sugar)} cps={this.state.cps}/>
                <div className='mainPart'>
                    <button onClick={() => {this.addSugar(1)}} type="button">
                        <img src={alisa} />
                    </button>
                </div>
                <Footer />
            </div>
            <Upgrades addCps={this.addCps} sugar={this.state.sugar}/>
            </>
        )
    }
}
