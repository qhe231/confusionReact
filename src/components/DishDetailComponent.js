import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

class DishDetail extends Component {

    renderDish(dish) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    }

    renderComments(comments) {
        if (comments != null) {
            return comments.map((comment) => {
                let date = new Intl.DateTimeFormat('en-NZ', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))
                return (
                    <div key={comment.id}>
                        <ul className="list-unstyled">
                            <li>{comment.comment}</li>
                            <li>-- {comment.author}, {date}</li>
                        </ul>
                    </div>
                )
            })
        } else {
            return (
                <div></div>
            )
        }
    }

    render() {
        const dish = this.props.dish
        if (dish != null) {
            return (
                <div class="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(dish)}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            {this.renderComments(dish.comments)}
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                </div>
            )
        }
    }
}

export default DishDetail