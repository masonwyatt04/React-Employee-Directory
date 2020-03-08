import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export default function MyNavbar(){

    return <>

        <Navbar bg="dark" variant="dark">
            <div className='col-7'>
            <Navbar.Brand>
                <img alt="" src="/logo.svg" width="30" height="30" className="d-inline-block align-top"/>{' '}
                Employee Directory
            </Navbar.Brand>
            </div>
            
            <div className='col-2'>
                <Button variant="info" href='#home'>All Employees</Button>
            </div>

            <div className='col-3'>
            <Form inline>
                <FormControl type="text" placeholder="Employee Name..." className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
            </div>

        </Navbar>

    </>
}