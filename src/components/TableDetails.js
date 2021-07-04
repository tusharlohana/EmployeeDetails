import axios from 'axios';
import { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';

const TableDetails = (props) => {

    // const data = useSelector(state => state.EmpReducer.userData)
    // console.log(data)

    const [data, setdata] = useState()

    const tableValue = () => {
        axios.get('http://localhost:8000/data/')
            .then((res) => {
                setdata(res.data)
                // console.log(res.data)
            })
    }

    useEffect(() => {
        // Make a request for a user with a given ID
        tableValue()

    }, [])
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
                        <td>
                            <button type="delete">delete</button>
                            <button type="update">update</button>
                        </td>
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

