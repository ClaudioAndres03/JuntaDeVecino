import React from 'react'

const Index = () => {
    return (
        <>
            <div className="col-12 d-flex justify-content-center align-self-center datagrid-container">
                <table className="datagrid-table">
                    <thead>
                        <tr className="datagrid-head">
                            <th id="num-head">No.</th>
                            <th>Month</th>
                            <th>Fee</th>
                            <th>Pay</th>
                            <th>Debt</th>
                            <th>User</th>
                            <th>Comment</th>
                            <th>Edit</th>
                            <th>To Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="datagrid-body">
                            <td id="num-body">1</td>
                            <td>January</td>
                            <td>700</td>
                            <td>0</td>
                            <td>700</td>
                            <td></td>
                            <td id="txt-comment">Click Enter Comment...</td>
                            <td><button type="button" className="btn btn-warning">Edit</button></td>
                            <td><button type="button" className="btn btn-primary">To Pay</button></td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default Index;