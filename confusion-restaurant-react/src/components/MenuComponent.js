import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay,CardBody, CardText, CardTitle } from 'reactstrap';
import DishdetailComponent from './DishdetailComponent';

class Menu extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish })
    }

    renderDish(dish) {
        if(dish != null) {
            return(
                <Card>
                      <CardImg width="100%" src={dish.image} alt={dish.name} />
                      <CardBody>
                      <CardTitle>{dish.name}</CardTitle>        
                          <CardText>{dish.description}</CardText>
                      </CardBody>
                </Card>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    componentDidMount() {
        console.log("It's working in the end of the web");
    }

    render() {
        const menu = this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-md-5 col-12 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay> 
                            <CardTitle>{dish.name}</CardTitle>        
                         </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>

                <div className="row">
                    <div className="col-md-6 m-1">
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                </div>
                {/* Adding a DishdetailComponent  */}
                <div className="row">
                    <div className="col-md-12">
                        <DishdetailComponent />
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;