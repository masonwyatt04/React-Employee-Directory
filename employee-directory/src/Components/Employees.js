import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import useAxios from 'axios-hooks'

export default function EmployeesComponent(){

    const [{ data, loading, error }, refetch] = useAxios(
        'https://randomuser.me/api/?results=100'
    )

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    console.log(data.results[0])

    const array = data.results;
    
    return <>
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Picture</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Phone Number</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
  {array.map( item => {
    
    return  <>
    <tr>
          <td><img src={item.picture.large} alt='Error'/></td>
          <td>{item.name.first}</td>
          <td>{item.name.last}</td>
          <td>{item.phone}</td>
          <td>{item.email}</td>
    </tr>
    </>
    })}
  </tbody>
</Table>
    </>
}