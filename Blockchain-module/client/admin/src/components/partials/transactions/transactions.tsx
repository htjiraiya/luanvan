import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import React from 'react';
import './transactions.scss';

const Transactions = () => {
    return (
        <div className='transaction-wrapper'>
            <br />
            <h1>Giao dịch</h1>
            <MDBBtn color='success'>Thêm giao dịch</MDBBtn>
            <br />
            <div className="transaction-table-wrapper">
                <MDBTable className='product-table'>
                    <MDBTableHead light>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>First</th>
                            <th scope='col'>Last</th>
                            <th scope='col'>Handle</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                            <th scope='row'>1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope='row'>2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope='row'>3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </MDBTableBody>
                </MDBTable>
            </div>
        </div>
    );
};

export default Transactions;