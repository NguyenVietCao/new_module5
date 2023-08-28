import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from 'react-toastify';
import {FidgetSpinner } from 'react-loader-spinner';
import { addService, getListServiceName } from "../../service/ServiceSever";

function CreateService() {
  const [serviceNames, setserviceName] = useState([]);
  const navigate = useNavigate();

  // const handleSubmit = async (value) => {
  //   await addService(value);
  // };



  const getListServiceNames = async () => {
    const options = await getListServiceName();
    setserviceName(options);
    console.log(options);
  };
  useEffect(() => {
    getListServiceNames();
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          serviceName: "",
          usableArea: "",
          rentalFee: "",
          quantity: "",
          rentalType: "",
        }}
        validationSchema={Yup.object({
          serviceName: Yup.string().required("It is not empty"),
          rentalFee: Yup.string().required("this is field must be fill"),
          quantity: Yup.string().required("this is field must be fill"),
          rentalType: Yup.string().required("this is field must be fill"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(async () => {
            setSubmitting(false);
            await addService(values);
            toast(`Blogs ${values.serviceName} create OK`)
            navigate("/serviceList")
          },1000);

        
          // handleSubmit(values);
        }}
      >
        {
          ({ isSubmitting }) => (
            <div>
              <meta charSet="utf-8" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
              />
              <title>Bootstrap CRUD Data Table for Database with Modal Form</title>
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round"
              />
              <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
              />
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
              />
              <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
              />
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\nbody {\n\tcolor: #566787;\n\tbackground: #f5f5f5;\n\tfont-family: \'Varela Round\', sans-serif;\n\tfont-size: 13px;\n}\n.table-responsive {\n    margin: 30px 0;\n}\n.table-wrapper {\n\tbackground: #fff;\n\tpadding: 20px 25px;\n\tborder-radius: 3px;\n\tmin-width: 1000px;\n\tbox-shadow: 0 1px 1px rgba(0,0,0,.05);\n}\n.table-title {        \n\tpadding-bottom: 15px;\n\tbackground: #435d7d;\n\tcolor: #fff;\n\tpadding: 16px 30px;\n\tmin-width: 100%;\n\tmargin: -20px -25px 10px;\n\tborder-radius: 3px 3px 0 0;\n}\n.table-title h2 {\n\tmargin: 5px 0 0;\n\tfont-size: 24px;\n}\n.table-title .btn-group {\n\tfloat: right;\n}\n.table-title .btn {\n\tcolor: #fff;\n\tfloat: right;\n\tfont-size: 13px;\n\tborder: none;\n\tmin-width: 50px;\n\tborder-radius: 2px;\n\tborder: none;\n\toutline: none !important;\n\tmargin-left: 10px;\n}\n.table-title .btn i {\n\tfloat: left;\n\tfont-size: 21px;\n\tmargin-right: 5px;\n}\n.table-title .btn span {\n\tfloat: left;\n\tmargin-top: 2px;\n}\ntable.table tr th, table.table tr td {\n\tborder-color: #e9e9e9;\n\tpadding: 12px 15px;\n\tvertical-align: middle;\n}\ntable.table tr th:first-child {\n\twidth: 60px;\n}\ntable.table tr th:last-child {\n\twidth: 100px;\n}\ntable.table-striped tbody tr:nth-of-type(odd) {\n\tbackground-color: #fcfcfc;\n}\ntable.table-striped.table-hover tbody tr:hover {\n\tbackground: #f5f5f5;\n}\ntable.table th i {\n\tfont-size: 13px;\n\tmargin: 0 5px;\n\tcursor: pointer;\n}\t\ntable.table td:last-child i {\n\topacity: 0.9;\n\tfont-size: 22px;\n\tmargin: 0 5px;\n}\ntable.table td a {\n\tfont-weight: bold;\n\tcolor: #566787;\n\tdisplay: inline-block;\n\ttext-decoration: none;\n\toutline: none !important;\n}\ntable.table td a:hover {\n\tcolor: #2196F3;\n}\ntable.table td a.edit {\n\tcolor: #FFC107;\n}\ntable.table td a.delete {\n\tcolor: #F44336;\n}\ntable.table td i {\n\tfont-size: 19px;\n}\ntable.table .avatar {\n\tborder-radius: 50%;\n\tvertical-align: middle;\n\tmargin-right: 10px;\n}\n.pagination {\n\tfloat: right;\n\tmargin: 0 0 5px;\n}\n.pagination li a {\n\tborder: none;\n\tfont-size: 13px;\n\tmin-width: 30px;\n\tmin-height: 30px;\n\tcolor: #999;\n\tmargin: 0 2px;\n\tline-height: 30px;\n\tborder-radius: 2px !important;\n\ttext-align: center;\n\tpadding: 0 6px;\n}\n.pagination li a:hover {\n\tcolor: #666;\n}\t\n.pagination li.active a, .pagination li.active a.page-link {\n\tbackground: #03A9F4;\n}\n.pagination li.active a:hover {        \n\tbackground: #0397d6;\n}\n.pagination li.disabled i {\n\tcolor: #ccc;\n}\n.pagination li i {\n\tfont-size: 16px;\n\tpadding-top: 6px\n}\n.hint-text {\n\tfloat: left;\n\tmargin-top: 10px;\n\tfont-size: 13px;\n}    \n/* Custom checkbox */\n.custom-checkbox {\n\tposition: relative;\n}\n.custom-checkbox input[type="checkbox"] {    \n\topacity: 0;\n\tposition: absolute;\n\tmargin: 5px 0 0 3px;\n\tz-index: 9;\n}\n.custom-checkbox label:before{\n\twidth: 18px;\n\theight: 18px;\n}\n.custom-checkbox label:before {\n\tcontent: \'\';\n\tmargin-right: 10px;\n\tdisplay: inline-block;\n\tvertical-align: text-top;\n\tbackground: white;\n\tborder: 1px solid #bbb;\n\tborder-radius: 2px;\n\tbox-sizing: border-box;\n\tz-index: 2;\n}\n.custom-checkbox input[type="checkbox"]:checked + label:after {\n\tcontent: \'\';\n\tposition: absolute;\n\tleft: 6px;\n\ttop: 3px;\n\twidth: 6px;\n\theight: 11px;\n\tborder: solid #000;\n\tborder-width: 0 3px 3px 0;\n\ttransform: inherit;\n\tz-index: 3;\n\ttransform: rotateZ(45deg);\n}\n.custom-checkbox input[type="checkbox"]:checked + label:before {\n\tborder-color: #03A9F4;\n\tbackground: #03A9F4;\n}\n.custom-checkbox input[type="checkbox"]:checked + label:after {\n\tborder-color: #fff;\n}\n.custom-checkbox input[type="checkbox"]:disabled + label:before {\n\tcolor: #b8b8b8;\n\tcursor: auto;\n\tbox-shadow: none;\n\tbackground: #ddd;\n}\n/* Modal styles */\n.modal .modal-dialog {\n\tmax-width: 400px;\n}\n.modal .modal-header, .modal .modal-body, .modal .modal-footer {\n\tpadding: 20px 30px;\n}\n.modal .modal-content {\n\tborder-radius: 3px;\n\tfont-size: 14px;\n}\n.modal .modal-footer {\n\tbackground: #ecf0f1;\n\tborder-radius: 0 0 3px 3px;\n}\n.modal .modal-title {\n\tdisplay: inline-block;\n}\n.modal .form-control {\n\tborder-radius: 2px;\n\tbox-shadow: none;\n\tborder-color: #dddddd;\n}\n.modal textarea.form-control {\n\tresize: vertical;\n}\n.modal .btn {\n\tborder-radius: 2px;\n\tmin-width: 100px;\n}\t\n.modal form label {\n\tfont-weight: normal;\n}\t\n',
                }}
              />

              <div className="container-xl">
                <div className="table-responsive">
                  <div className="table-wrapper">
                    <div className="table-title">
                      <div className="row">
                        <div className="col-sm-6">
                          <h2>
                            Create <b>Service</b>
                          </h2>
                        </div>
                        <div className="col-sm-6">
                          {/* <button type="submit">
                          <a
                            href="#addEmployeeModal"
                            className="btn btn-success"
                            data-toggle="modal"
                          >
                            <i className="material-icons"></i>{" "}
                            <span>Add New Service</span>
                          </a>
                        </button> */}

                          <Link
                            to={"/serviceList"}
                            // href="#deleteEmployeeModal"
                            className="btn btn-danger"
                            data-toggle="modal"
                          >
                            <i className="material-icons"></i>{" "}
                            <span>Back To Menu</span>
                          </Link>

                        </div>
                      </div>
                    </div>
                    <Form>
                      <table>
                        <tbody>
                          {/* service name */}
                          <tr>
                            <td>
                              {" "}
                              <label htmlFor="serviceName">Service Name</label>
                            </td>
                            <td>
                              {" "}
                              <Field
                                as="select"
                                id="serviceName"
                                name="serviceName"
                              >
                                <option value="" disabled>
                                  -- Chọn --
                                </option>
                                {serviceNames.map((serviceName) => (
                                  <option
                                    key={serviceName.id}
                                    value={serviceName.Name}
                                  >
                                    {serviceName.Name}
                                  </option>
                                ))}
                              </Field>
                            </td>
                            <ErrorMessage name="serviceName" component="div" />
                          </tr>
                          {/* <tr>
                        <td>
                          <label htmlFor="serviceName">Service Name</label>
                        </td>
                        <td>
                          <Field id="serviceName" name="serviceName" />
                        </td>
                        <ErrorMessage name="serviceName" component="div" />
                      </tr> */}

                          <tr>
                            <td>
                              <label htmlFor="usableArea">Usable Area</label>
                            </td>
                            <td>
                              <Field id="usableArea" name="usableArea" />
                            </td>
                            <ErrorMessage name="usableArea" component="div" />
                          </tr>

                          <tr>
                            <td>
                              <label htmlFor="rentalFee">Rental Fee</label>
                            </td>
                            <td>
                              <Field id="rentalFee" name="rentalFee" />
                            </td>
                            <ErrorMessage name="rentalFee" component="div" />
                          </tr>

                          <tr>
                            <td>
                              <label htmlFor="quantity">Quantity</label>
                            </td>
                            <td>
                              <Field id="quantity" name="quantity" />
                            </td>
                            <ErrorMessage name="quantity" component="div" />
                          </tr>

                          <tr>
                            <td>
                              <label htmlFor="rentalType">Rental Type</label>
                            </td>
                            <td>
                              <Field id="rentalType" name="rentalType" />
                            </td>
                            <ErrorMessage name="rentalType" component="div" />
                          </tr>

                          {/* <button className="btn btn-primary" type="submit"> create</button> */}
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
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          )
      }
      </Formik>
    </>
  );
}
export default CreateService;
