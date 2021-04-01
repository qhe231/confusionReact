import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody, Button, Row, Col, Label } from 'reactstrap'
import { Control, LocalForm, Errors } from 'react-redux-form'

const maxLength = (len) => (val) => !val || (val.length <= len)
const minLength = (len) => (val) => val && (val.length >= len)

class CommentForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isModalOpen: false
        }

        this.toggleModal = this.toggleModal.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleSubmit(values) {
        this.toggleModal()
        console.log("props: " + JSON.stringify(this.props))
        console.log("DishID: " + this.props.dishId)
        this.props.addComment(this.props.dishId, values.rating, values.fullname, values.comment)
    }

    render() {
        return (
            <React.Fragment>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="rating">Rating</Label>
                                    <Control.select model=".rating" name="rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="fullname">Your Name</Label>
                                    <Control.text model=".fullname" id="fullname" name="fullname" placeholder="Your Name" className="form-control"
                                        validators={
                                            { maxLength: maxLength(15), minLength: minLength(3) }
                                        } />
                                    <Errors className="text-danger" model=".fullname" show="touched"
                                        messages={
                                            {
                                                minLength: 'Must be longer than 2 characters.',
                                                maxLength: 'Must be shorter than 15 characters.'
                                            }
                                        } />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="comment">Comment</Label>
                                    <Control.textarea model=".comment" id="comment" name="comment" rows="6" className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Button color="primary" type="submit" >Submit</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
            </React.Fragment>
        )
    }
}

export default CommentForm