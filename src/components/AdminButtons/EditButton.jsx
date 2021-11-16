import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
export default function EditButton({ gameId }) {

    return (
        <Link
            to={`/videoGame/edit/${gameId}`}
        >
            <Button
                className="justify-content-md-center"
                variant="primary"
            >

                Edit product
            </Button>
        </Link>


    )
}
