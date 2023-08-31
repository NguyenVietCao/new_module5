import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { toast } from 'react-toastify';
import { FidgetSpinner } from 'react-loader-spinner';
import * as Yup from 'yup';
import { editCustomer, getFindByIdCustomer } from '../../service/ServiceSever';


function EditCustomer(props) {
  const navigate = useNavigate();
  const param = useParams();
  console.log(param.id);

  const [customer, setCustomer] = useState({});

  const getCustomer = async () => {
    const ci = await getFindByIdCustomer(param.id);
    console.log(JSON.stringify(ci));
    setCustomer(ci)
  }


  useEffect(() => {
    getCustomer()
  }, []);

  // if (!customer) {
  //   return null;
  // };

  return (
    <>
      {customer.id &&
        <Formik
          initialValues={{
            ...customer
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("this is field must be fill"),
            birthDay: Yup.date("this is field must be fill"),
            gender: Yup.string().required("this is field must be fill"),
            citizenId: Yup.string().required("this is field must be fill"),
            numberPhone: Yup.string().required("this is field must be fill"),
            email: Yup.string().required("this is field must be fill"),
            customerType: Yup.string().required("this is field must be fill"),
            address: Yup.string().required("this is field must be fill"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(async () => {
              setSubmitting(false);
              await editCustomer(values);
              toast(`Customer ${values.customerType} create OK`)
              navigate("/customerList")
            }, 1000);


            // handleSubmit(values);
          }}
        >
          {
            ({ isSubmitting }) => (
              <div>

                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '\nbody {\n\tcolor: #566787;\n\tbackground: #f5f5f5;\n\tfont-family: \'Varela Round\', sans-serif;\n\tfont-size: 13px;\n}\n.table-responsive {\n    margin: 30px 0;\n}\n.table-wrapper {\n\tbackground: #fff;\n\tpadding: 20px 25px;\n\tborder-radius: 3px;\n\tmin-width: 1000px;\n\tbox-shadow: 0 1px 1px rgba(0,0,0,.05);\n}\n.table-title {        \n\tpadding-bottom: 15px;\n\tbackground: #435d7d;\n\tcolor: #fff;\n\tpadding: 16px 30px;\n\tmin-width: 100%;\n\tmargin: -20px -25px 10px;\n\tborder-radius: 3px 3px 0 0;\n}\n.table-title h2 {\n\tmargin: 5px 0 0;\n\tfont-size: 24px;\n}\n.table-title .btn-group {\n\tfloat: right;\n}\n.table-title .btn {\n\tcolor: #fff;\n\tfloat: right;\n\tfont-size: 13px;\n\tborder: none;\n\tmin-width: 50px;\n\tborder-radius: 2px;\n\tborder: none;\n\toutline: none !important;\n\tmargin-left: 10px;\n}\n.table-title .btn i {\n\tfloat: left;\n\tfont-size: 21px;\n\tmargin-right: 5px;\n}\n.table-title .btn span {\n\tfloat: left;\n\tmargin-top: 2px;\n}\ntable.table tr th, table.table tr td {\n\tborder-color: #e9e9e9;\n\tpadding: 12px 15px;\n\tvertical-align: middle;\n}\ntable.table tr th:first-child {\n\twidth: 60px;\n}\ntable.table tr th:last-child {\n\twidth: 100px;\n}\ntable.table-striped tbody tr:nth-of-type(odd) {\n\tbackground-color: #fcfcfc;\n}\ntable.table-striped.table-hover tbody tr:hover {\n\tbackground: #f5f5f5;\n}\ntable.table th i {\n\tfont-size: 13px;\n\tmargin: 0 5px;\n\tcursor: pointer;\n}\t\ntable.table td:last-child i {\n\topacity: 0.9;\n\tfont-size: 22px;\n\tmargin: 0 5px;\n}\ntable.table td a {\n\tfont-weight: bold;\n\tcolor: #566787;\n\tdisplay: inline-block;\n\ttext-decoration: none;\n\toutline: none !important;\n}\ntable.table td a:hover {\n\tcolor: #2196F3;\n}\ntable.table td a.edit {\n\tcolor: #FFC107;\n}\ntable.table td a.delete {\n\tcolor: #F44336;\n}\ntable.table td i {\n\tfont-size: 19px;\n}\ntable.table .avatar {\n\tborder-radius: 50%;\n\tvertical-align: middle;\n\tmargin-right: 10px;\n}\n.pagination {\n\tfloat: right;\n\tmargin: 0 0 5px;\n}\n.pagination li a {\n\tborder: none;\n\tfont-size: 13px;\n\tmin-width: 30px;\n\tmin-height: 30px;\n\tcolor: #999;\n\tmargin: 0 2px;\n\tline-height: 30px;\n\tborder-radius: 2px !important;\n\ttext-align: center;\n\tpadding: 0 6px;\n}\n.pagination li a:hover {\n\tcolor: #666;\n}\t\n.pagination li.active a, .pagination li.active a.page-link {\n\tbackground: #03A9F4;\n}\n.pagination li.active a:hover {        \n\tbackground: #0397d6;\n}\n.pagination li.disabled i {\n\tcolor: #ccc;\n}\n.pagination li i {\n\tfont-size: 16px;\n\tpadding-top: 6px\n}\n.hint-text {\n\tfloat: left;\n\tmargin-top: 10px;\n\tfont-size: 13px;\n}    \n/* Custom checkbox */\n.custom-checkbox {\n\tposition: relative;\n}\n.custom-checkbox input[type="checkbox"] {    \n\topacity: 0;\n\tposition: absolute;\n\tmargin: 5px 0 0 3px;\n\tz-index: 9;\n}\n.custom-checkbox label:before{\n\twidth: 18px;\n\theight: 18px;\n}\n.custom-checkbox label:before {\n\tcontent: \'\';\n\tmargin-right: 10px;\n\tdisplay: inline-block;\n\tvertical-align: text-top;\n\tbackground: white;\n\tborder: 1px solid #bbb;\n\tborder-radius: 2px;\n\tbox-sizing: border-box;\n\tz-index: 2;\n}\n.custom-checkbox input[type="checkbox"]:checked + label:after {\n\tcontent: \'\';\n\tposition: absolute;\n\tleft: 6px;\n\ttop: 3px;\n\twidth: 6px;\n\theight: 11px;\n\tborder: solid #000;\n\tborder-width: 0 3px 3px 0;\n\ttransform: inherit;\n\tz-index: 3;\n\ttransform: rotateZ(45deg);\n}\n.custom-checkbox input[type="checkbox"]:checked + label:before {\n\tborder-color: #03A9F4;\n\tbackground: #03A9F4;\n}\n.custom-checkbox input[type="checkbox"]:checked + label:after {\n\tborder-color: #fff;\n}\n.custom-checkbox input[type="checkbox"]:disabled + label:before {\n\tcolor: #b8b8b8;\n\tcursor: auto;\n\tbox-shadow: none;\n\tbackground: #ddd;\n}\n/* Modal styles */\n.modal .modal-dialog {\n\tmax-width: 400px;\n}\n.modal .modal-header, .modal .modal-body, .modal .modal-footer {\n\tpadding: 20px 30px;\n}\n.modal .modal-content {\n\tborder-radius: 3px;\n\tfont-size: 14px;\n}\n.modal .modal-footer {\n\tbackground: #ecf0f1;\n\tborder-radius: 0 0 3px 3px;\n}\n.modal .modal-title {\n\tdisplay: inline-block;\n}\n.modal .form-control {\n\tborder-radius: 2px;\n\tbox-shadow: none;\n\tborder-color: #dddddd;\n}\n.modal textarea.form-control {\n\tresize: vertical;\n}\n.modal .btn {\n\tborder-radius: 2px;\n\tmin-width: 100px;\n}\t\n.modal form label {\n\tfont-weight: normal;\n}\t\n',
                  }}
                />
                <Form>
                  <div className="container-xl">
                    <div className="table-responsive">
                      <div className="table-wrapper">
                        <div className="table-title">
                          <div className="row">
                            <div className="col-sm-6">
                              <h2>
                                Edit <b>Customer</b>
                              </h2>
                            </div>
                            <div className="col-sm-6">
                              {/* <a
                                href="#addEmployeeModal"
                                className="btn btn-success"
                                data-toggle="modal"
                              >
                                <i className="material-icons"></i>{" "}
                                <span>Create Customer</span>
                              </a> */}
                              <button className="btn btn-danger" data-toggle="modal">
                                <i className="material-icons"></i>
                                <span>
                                  <Link to={"/customerList"}>Back To Menu</Link>
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* Họ tên, Ngày sinh, Giới tính, Số CMND, Số Điện Thoại, Email, Loại khách, Địa chỉ  */}
                        <table>
                          {/* Name */}
                          <tbody>
                            <tr>
                              <td>
                                <label htmlFor="name">Name</label>
                              </td>
                              <td>
                                <Field id="name" name="name" />
                              </td>
                              <ErrorMessage name="name" component="div" />
                            </tr>
                            {/* Birth Day */}
                            <tr>
                              <td>
                                <label htmlFor="birthDay">Birth Day</label>
                              </td>
                              <td>
                                <Field id="birthDay" name="birthDay" type="date" />
                              </td>
                              <ErrorMessage name="birthDay" component="div" />
                            </tr>
                            {/* Gender */}
                            <tr>
                              <td>
                                <label htmlFor="gender">Gender</label>
                              </td>
                              <td>
                                <Field id="gender" name="gender" />
                              </td>
                            </tr>
                            <ErrorMessage name="gender" component="div" />
                            {/* Citizen Id */}
                            <tr>
                              <td>
                                <label htmlFor="citizenId">Citizen Id</label>
                              </td>
                              <td>
                                <Field id="citizenId" name="citizenId" />
                              </td>
                            </tr>
                            <ErrorMessage name="citizenId" component="div" />
                            {/* Number Phone */}
                            <tr>
                              <td>
                                <label htmlFor="numberPhone">Number Phone</label>
                              </td>
                              <td>
                                <Field id="numberPhone" name="numberPhone" />
                              </td>
                            </tr>
                            <ErrorMessage name="numberPhone" component="div" />
                            {/* Email */}
                            <tr>
                              <td>
                                <label htmlFor="email">Email</label>
                              </td>
                              <td>
                                <Field id="email" name="email" />
                              </td>
                            </tr>
                            <ErrorMessage name="email" component="div" />
                            {/* Customer Type */}
                            <tr>
                              <td>
                                <label htmlFor="customerType">Customer Type</label>
                              </td>
                              <td>
                                <Field id="customerType" name="customerType" />
                              </td>
                            </tr>
                            <ErrorMessage name="customerType" component="div" />
                            {/* Address */}
                            <tr>
                              <td>
                                <label htmlFor="address">Address</label>
                              </td>
                              <td>
                                <Field id="address" name="address" />
                              </td>
                            </tr>
                            <ErrorMessage name="address" component="div" />
                          </tbody>
                        </table>
                        {isSubmitting ?
                          <FidgetSpinner
                            visible={true}
                            height="20"
                            width="20"
                            ariaLabel="dna-loading"
                            wrapperStyle={{}}
                            wrapperClass="dna-wrapper"
                            ballColors={['#ff0000', '#00ff00', '#0000ff']}
                            backgroundColor="#F4442E"
                          />
                          : <button type='submit' className='btn btn-primary'>Submit</button>
                        }
                      </div>
                    </div>
                  </div>
                </Form>

              </div>
            )
          }
        </Formik>}

    </>
  );
}

export default EditCustomer;