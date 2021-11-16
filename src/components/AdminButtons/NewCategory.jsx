import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { newCategory } from '../../store/actions/categoryActions'

export default function NewCategory() {
    const dispatch = useDispatch()

    const handleChange = (e)=> {
    const value = e.target.value
    dispatch(newCategory(value))
    }
  
    return (
        <div>
        <>
          <Container className="mr-3 margin-top">
            <h1 className="text-center mt-3 mb-3">Add Category</h1>
  
            <Row className="mt-3 mb-3">
              <Col></Col>
              <Col xs={6}>
                <Form onSubmit={handleSubmit}>
                  <Form.Label>Name</Form.Label>
                  <Form.Group className="mb-1">
                    <Form.Control
                      type="text"
                      placeholder="Enter"
                      name="name"
                      value="name"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="mt-3 mb-3">
                    Submit
                  </Button>
                </Form>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </>
      </div>
    )
}