import React, { useRef } from 'react';
import '../shared/search-bar.css';
import { Col, Form, FormGroup } from "reactstrap";

const SearchBar = () => {

    const locationRef = useRef('');
    const distanceRef = useRef('0');
    const maxGroupSizeRef = useRef('0');

    const searchHandler = () => {
        const location = locationRef.current.value;
        const distance = distanceRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value; // Corrected reference

        if (location === '' || distance === '' || maxGroupSize === '') {
            alert('Please fill all fields');
        }
    }

    return (
        <Col lg='12'>
            <div className='search__bar'>
                <Form className="d-flex align-items-center gap-4">
                    <FormGroup className="d-flex flex-column align-items-start gap-2 form__group form__group-fast">
                        <span><i className="ri-map-pin-line"></i></span>
                        <h6>Location</h6>
                        <input type="text" placeholder="Where are you going?" ref={locationRef} />
                    </FormGroup>

                    <FormGroup className="d-flex flex-column align-items-start gap-2 form__group form__group-fast">
                        <span><i className="ri-map-pin-time-line"></i></span>
                        <h6>Distance</h6>
                        <input type="number" placeholder="Distance k/m" ref={distanceRef} />
                    </FormGroup>

                    <FormGroup className="d-flex flex-column align-items-start gap-2 form__group form__group-fast">
                        <span><i className="ri-group-line"></i></span>
                        <h6>Max People</h6>
                        <input type="number" placeholder="0" ref={maxGroupSizeRef} />
                    </FormGroup>

                    <span className='search__icon' type="submit" onClick={searchHandler}>
                        <i className="ri-search-line"></i>
                    </span>
                </Form>
            </div>
        </Col>
    );
}

export default SearchBar;
