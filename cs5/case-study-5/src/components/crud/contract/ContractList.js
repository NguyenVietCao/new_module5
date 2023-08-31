import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { deleteContract, getListContract, paginationContract, searchContractByCode } from '../../service/ServiceSever';

// Hợp đồng thuê sẽ bao gồm các thông tin: Số hợp đồng, Ngày bắt đầu, Ngày kết thúc, 
// Số tiền cọc trước, Tổng số tiền thanh toán.

function ContractList(props) {
  const [contracts, setContracts] = useState([]);
  const [search, setSearch] = useState([]);
  const [page, setPage] = useState(2);

  const handlePrevPage = () => {
    console.log(page);
    const previousPages = page - 1;
    if (page > 1) {
      setPage(previousPages)
    }
  }



  const handleNextPage = async() => {
    const data = await getListContract()
    if (page < Math.ceil(data.length/3)) {
      const nextPage = page + 1;
      setPage(nextPage)
    }
   
  }

  // input Search
  const handleOnchange = async (event) => {
    setSearch(event.target.value)
  };
  // button Search
  const handleButtonSearch = async() => {
    const data = await searchContractByCode(search);
    setContracts(data)
  };

  const handleDelete = async (id) => {
    await deleteContract(id);
    await getListContract()
  };

  const getList = async () => {
    const data = await paginationContract(page,3);
    console.log("jjjjj");
    console.log(data);
    setContracts(data);
  }

  useEffect(() => { getList() }, [page])


  return (
    <div>
      <>

        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n      body {\n        color: #566787;\n        background: #f5f5f5;\n        font-family: "Varela Round", sans-serif;\n        font-size: 13px;\n      }\n      .table-responsive {\n        margin: 30px 0;\n      }\n      .table-wrapper {\n        background: #fff;\n        padding: 20px 25px;\n        border-radius: 3px;\n        min-width: 1000px;\n        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n      }\n      .table-title {\n        padding-bottom: 15px;\n        background: #435d7d;\n        color: #fff;\n        padding: 16px 30px;\n        min-width: 100%;\n        margin: -20px -25px 10px;\n        border-radius: 3px 3px 0 0;\n      }\n      .table-title h2 {\n        margin: 5px 0 0;\n        font-size: 24px;\n      }\n      .table-title .btn-group {\n        float: right;\n      }\n      .table-title .btn {\n        color: #fff;\n        float: right;\n        font-size: 13px;\n        border: none;\n        min-width: 50px;\n        border-radius: 2px;\n        border: none;\n        outline: none !important;\n        margin-left: 10px;\n      }\n      .table-title .btn i {\n        float: left;\n        font-size: 21px;\n        margin-right: 5px;\n      }\n      .table-title .btn span {\n        float: left;\n        margin-top: 2px;\n      }\n      table.table tr th,\n      table.table tr td {\n        border-color: #e9e9e9;\n        padding: 12px 15px;\n        vertical-align: middle;\n      }\n      table.table tr th:first-child {\n        width: 60px;\n      }\n      table.table tr th:last-child {\n        width: 100px;\n      }\n      table.table-striped tbody tr:nth-of-type(odd) {\n        background-color: #fcfcfc;\n      }\n      table.table-striped.table-hover tbody tr:hover {\n        background: #f5f5f5;\n      }\n      table.table th i {\n        font-size: 13px;\n        margin: 0 5px;\n        cursor: pointer;\n      }\n      table.table td:last-child i {\n        opacity: 0.9;\n        font-size: 22px;\n        margin: 0 5px;\n      }\n      table.table td a {\n        font-weight: bold;\n        color: #566787;\n        display: inline-block;\n        text-decoration: none;\n        outline: none !important;\n      }\n      table.table td a:hover {\n        color: #2196f3;\n      }\n      table.table td a.edit {\n        color: #ffc107;\n      }\n      table.table td a.delete {\n        color: #f44336;\n      }\n      table.table td i {\n        font-size: 19px;\n      }\n      table.table .avatar {\n        border-radius: 50%;\n        vertical-align: middle;\n        margin-right: 10px;\n      }\n      .pagination {\n        float: right;\n        margin: 0 0 5px;\n      }\n      .pagination li a {\n        border: none;\n        font-size: 13px;\n        min-width: 30px;\n        min-height: 30px;\n        color: #999;\n        margin: 0 2px;\n        line-height: 30px;\n        border-radius: 2px !important;\n        text-align: center;\n        padding: 0 6px;\n      }\n      .pagination li a:hover {\n        color: #666;\n      }\n      .pagination li.active a,\n      .pagination li.active a.page-link {\n        background: #03a9f4;\n      }\n      .pagination li.active a:hover {\n        background: #0397d6;\n      }\n      .pagination li.disabled i {\n        color: #ccc;\n      }\n      .pagination li i {\n        font-size: 16px;\n        padding-top: 6px;\n      }\n      .hint-text {\n        float: left;\n        margin-top: 10px;\n        font-size: 13px;\n      }\n      /* Custom checkbox */\n      .custom-checkbox {\n        position: relative;\n      }\n      .custom-checkbox input[type="checkbox"] {\n        opacity: 0;\n        position: absolute;\n        margin: 5px 0 0 3px;\n        z-index: 9;\n      }\n      .custom-checkbox label:before {\n        width: 18px;\n        height: 18px;\n      }\n      .custom-checkbox label:before {\n        content: "";\n        margin-right: 10px;\n        display: inline-block;\n        vertical-align: text-top;\n        background: white;\n        border: 1px solid #bbb;\n        border-radius: 2px;\n        box-sizing: border-box;\n        z-index: 2;\n      }\n      .custom-checkbox input[type="checkbox"]:checked + label:after {\n        content: "";\n        position: absolute;\n        left: 6px;\n        top: 3px;\n        width: 6px;\n        height: 11px;\n        border: solid #000;\n        border-width: 0 3px 3px 0;\n        transform: inherit;\n        z-index: 3;\n        transform: rotateZ(45deg);\n      }\n      .custom-checkbox input[type="checkbox"]:checked + label:before {\n        border-color: #03a9f4;\n        background: #03a9f4;\n      }\n      .custom-checkbox input[type="checkbox"]:checked + label:after {\n        border-color: #fff;\n      }\n      .custom-checkbox input[type="checkbox"]:disabled + label:before {\n        color: #b8b8b8;\n        cursor: auto;\n        box-shadow: none;\n        background: #ddd;\n      }\n      /* Modal styles */\n      .modal .modal-dialog {\n        max-width: 400px;\n      }\n      .modal .modal-header,\n      .modal .modal-body,\n      .modal .modal-footer {\n        padding: 20px 30px;\n      }\n      .modal .modal-content {\n        border-radius: 3px;\n        font-size: 14px;\n      }\n      .modal .modal-footer {\n        background: #ecf0f1;\n        border-radius: 0 0 3px 3px;\n      }\n      .modal .modal-title {\n        display: inline-block;\n      }\n      .modal .form-control {\n        border-radius: 2px;\n        box-shadow: none;\n        border-color: #dddddd;\n      }\n      .modal textarea.form-control {\n        resize: vertical;\n      }\n      .modal .btn {\n        border-radius: 2px;\n        min-width: 100px;\n      }\n      .modal form label {\n        font-weight: normal;\n      }\n    ',
          }}
        />
        <div className="container-xl">
          <div className="table-responsive">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-4">
                    <h2>
                      Contract <b>List</b>
                    </h2>
                  </div>
                  {/* search */}
                  <div className='col-sm-4'>
                    <div class="input-group">
                      <div class="form-outline">
                        <input type="search" id="form1" class="form-control" placeholder='Contract Code' onChange={handleOnchange} />
                      </div>
                      <button type="button" class="btn btn-primary" onClick={handleButtonSearch}>
                        Search
                      </button>
                    </div>
                  </div>

                  {/* Add Button */}
                  <div className="col-sm-4">
                    <a>
                      <Link
                        to={`/contract/new`}
                        className="btn btn-success"
                        data-toggle="modal"
                      >
                        <i className="material-icons"></i>
                        <span>Add New Contract</span>
                      </Link>
                    </a>

                    <a
                      href="#deleteEmployeeModal"
                      className="btn btn-danger"
                      data-toggle="modal"
                    >
                      <i className="material-icons"></i> <span>Delete</span>
                    </a>
                  </div>
                </div>
              </div>

              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>
                      <span className="custom-checkbox">
                        <input type="checkbox" id="selectAll" />
                        <label htmlFor="selectAll" />
                      </span>
                      {/* // Tên dịch vụ, Diện tích sử dụng, Chi phí thuê, Số lượng người tối đa, Kiểu thuê (bao gồm thuê theo năm, tháng, ngày, giờ). */}
                    </th>
                    <th>Contrac code</th>
                    <th>Start day</th>
                    <th>End day</th>
                    <th>Deposit</th>
                    <th>Payment</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {contracts.length > 0 && contracts.map((contract) => (
                    <tr>
                      <td>
                        <span className="custom-checkbox">
                          <input
                            type="checkbox"
                            id="checkbox1"
                            name="options[]"
                            defaultValue={1}
                          />
                          <label htmlFor="checkbox1" />
                        </span>
                      </td>
                      <td>{contract.contracCode}</td>
                      <td>{contract.startDay}</td>
                      <td>{contract.endDay}</td>
                      <td>{contract.deposit}</td>
                      <td>{contract.payment}</td>
                      <td>
                        {/* <a
                          href="#editEmployeeModal"
                          className="edit"
                          data-toggle="modal"
                        > */}
                        <Link to={`/contract/edit/${contract.id}`}>
                          <i
                            className="material-icons"
                            data-toggle="tooltip"
                            title="Edit"
                          >
                            
                          </i>
                        </Link>
                        {/* </a> */}

                        <a
                          href="#deleteEmployeeModal"
                          onClick={() => {
                            handleDelete(contract.id);
                          }}
                          className="delete"
                          data-toggle="modal"
                        >
                          <i
                            className="material-icons"
                            data-toggle="tooltip"
                            title="Delete"
                          >
                            
                          </i>
                        </a>
                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>
              <button className='btn btn-group' onClick={handlePrevPage}>Previous</button>
              <button className='btn btn-group' onClick={handleNextPage}>Next</button>
              <div className="clearfix">
                <div className="hint-text">
                  Showing <b>5</b> out of <b>25</b> entries
                </div>
                <ul className="pagination">
                  {/* prev */}
                  <li className="page-item disabled">
                    <a href="#">Previous</a>
                  </li>
                  
                  <li className="page-item">
                    <a href="#" className="page-link">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      2
                    </a>
                  </li>
                  <li className="page-item active">
                    <a href="#" className="page-link">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      5
                    </a>
                  </li>

                  {/* Next */}
                  <li className="page-item">
                    <a href="#" className="page-link">
                      Next
                    </a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Edit Modal HTML */}
        <div id="addEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h4 className="modal-title">Add Employee</h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    ×
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" required="" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" required="" />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <textarea
                      className="form-control"
                      required=""
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="text" className="form-control" required="" />
                  </div>
                </div>
                <div className="modal-footer">
                  <input
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    defaultValue="Cancel"
                  />
                  <input
                    type="submit"
                    className="btn btn-success"
                    defaultValue="Add"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Edit Modal HTML */}
        <div id="editEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h4 className="modal-title">Edit Employee</h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    ×
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" required="" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" required="" />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <textarea
                      className="form-control"
                      required=""
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="text" className="form-control" required="" />
                  </div>
                </div>
                <div className="modal-footer">
                  <input
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    defaultValue="Cancel"
                  />
                  <input
                    type="submit"
                    className="btn btn-info"
                    defaultValue="Save"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Delete Modal HTML */}
        <div id="deleteEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h4 className="modal-title">Delete Employee</h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    ×
                  </button>
                </div>
                <div className="modal-body">
                  <p>Are you sure you want to delete these Records?</p>
                  <p className="text-warning">
                    <small>This action cannot be undone.</small>
                  </p>
                </div>
                <div className="modal-footer">
                  <input
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    defaultValue="Cancel"
                  />
                  <input
                    type="submit"
                    className="btn btn-danger"
                    defaultValue="Delete"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default ContractList;