import React, { Component } from 'react'

import Cookies from 'universal-cookie/es6';



const cookies = new Cookies();
export class Upgrades extends Component {

    constructor(props) {
        super(props);


        this.state = cookies.get('upd')

    }

    clickHandle = (number) => {
        if (this.props.sugar > this.state.costs[number]) {
            this.props.addCps(this.state.addict[number], this.state.costs[number]);
            this.state.costs[number] = Math.round(this.state.costs[number] * 1.2);
            this.state.have[number] += 1;
            cookies.set('upd', this.state);
        }
    }

    render() {
        return (
            <div className="upgrades">
                <button onClick={() => { this.clickHandle(1) }} type="button" className="upgrade">
                    <img src="http://placehold.it/55x55/333" />
                    <div className="upd">
                        <h2 className="updTitle">Украсть котлету</h2>
                        <h3 className="updInfo">+{this.state.addict[1]} Сахара в секунду</h3>
                        <div className="buyInfo">
                            <h3 className="updCost">Стоимость: {this.state.costs[1]}</h3>
                            <h3 className="updHave">В наличии: {this.state.have[1]}</h3>
                        </div>
                    </div>
                </button>
                <button onClick={() => { this.clickHandle(2) }} type="button" className="upgrade">
                    <img src="http://placehold.it/55x55/333" />
                    <div className="upd">
                        <h2 className="updTitle">Выиграть в карты</h2>
                        <h3 className="updInfo">+{this.state.addict[2]} Сахара в секунду</h3>
                        <div className="buyInfo">
                            <h3 className="updCost">Стоимость: {this.state.costs[2]}</h3>
                            <h3 className="updHave">В наличии: {this.state.have[2]}</h3>
                        </div>
                    </div>
                </button>
                <button onClick={() => { this.clickHandle(3) }} type="button" className="upgrade">
                    <img src="http://placehold.it/55x55/333" />
                    <div className="upd">
                        <h2 className="updTitle">Рут Ульяны</h2>
                        <h3 className="updInfo">+{this.state.addict[3]} Сахара в секунду</h3>
                        <div className="buyInfo">
                            <h3 className="updCost">Стоимость: {this.state.costs[3]}</h3>
                            <h3 className="updHave">В наличии: {this.state.have[3]}</h3>
                        </div>
                    </div>
                </button>
                <button onClick={() => { this.clickHandle(4) }} type="button" className="upgrade">
                    <img src="http://placehold.it/55x55/333" />
                    <div className="upd">
                        <h2 className="updTitle">Бутылка Столичной</h2>
                        <h3 className="updInfo">+{this.state.addict[4]} Сахара в секунду</h3>
                        <div className="buyInfo">
                            <h3 className="updCost">Стоимость: {this.state.costs[4]}</h3>
                            <h3 className="updHave">В наличии: {this.state.have[4]}</h3>
                        </div>
                    </div>
                </button>
                <button onClick={() => { this.clickHandle(5) }} type="button" className="upgrade">
                    <img src="http://placehold.it/55x55/333" />
                    <div className="upd">
                        <h2 className="updTitle">Нож Лены</h2>
                        <h3 className="updInfo">+{this.state.addict[5]} Сахара в секунду</h3>
                        <div className="buyInfo">
                            <h3 className="updCost">Стоимость: {this.state.costs[5]}</h3>
                            <h3 className="updHave">В наличии: {this.state.have[5]}</h3>
                        </div>
                    </div>
                </button>
            </div>
        )
    }
}
