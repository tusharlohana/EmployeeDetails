import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { EmpData } from '../action/action';

const TableDetails = (props) => {

    const [data, setdata] = useState('')


    return (
        <div>
            <h1 className=" text-danger">employee's detailes</h1>
            {data && <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((Data) =>
                    (<tr key={Data.id}>
                        <th scope="row">{Data.id}</th>
                        <td>{Data.email}</td>
                        <td>{Data.password}</td>
                        <td> <button>delete</button><button>update</button></td>
                    </tr>)
                    )}
                </tbody>
            </table>}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        number: state
    };
};

export default connect(
    mapStateToProps,
    null
)(TableDetails);

