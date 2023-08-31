import React from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { addContract } from '../../service/ServiceSever';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { FidgetSpinner } from 'react-loader-spinner';


function ContractCreate(props) {
  const navigate = useNavigate();
  return (

    <>
      <Formik
        initialValues={{
          contracCode: "",
          startDay: "",
          endDay: "",
          deposit: "",
          payment: "",
        }}
        validationSchema={Yup.object({
          contracCode: Yup.string().required("It is not empty"),
          startDay: Yup.string().required("this is field must be fill"),
          endDay: Yup.string().required("this is field must be fill"),
          deposit: Yup.string().required("this is field must be fill"),
          payment:Yup.string().required("ccgf")
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(async () => {
            setSubmitting(false);
            await addContract(values);
            toast(`Blogs ${values.contracCode} create OK`)
            navigate("/contractList")
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

              <div className="container-xl">
                <div className="table-responsive">
                  <div className="table-wrapper">
                    <div className="table-title">
                      <div className="row">
                        <div className="col-sm-6">
                          <h2>
                            Create <b>Contract</b>
                          </h2>
                        </div>
                        <div className="col-sm-6">
           

                          <Link
                            to={"/contractList"}                          
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

                          
                          {/* contracCode */}
                          <tr>
                            <td>
                              <label htmlFor="contracCode">contracCode</label>
                            </td>
                            <td>
                              <Field id="contracCode" name="contracCode" />
                            </td>
                            <ErrorMessage name="contracCode" component="div" />
                          </tr>             
                          {/* startDay */}
                          <tr>
                            <td>
                              <label htmlFor="startDay">startDay</label>
                            </td>
                            <td>
                              <Field id="startDay" name="startDay" type="date"/>
                            </td>
                            <ErrorMessage name="startDay" component="div" />
                          </tr>
                          {/* endDay */}
                          <tr>
                            <td>
                              <label htmlFor="endDay">Rental Fee</label>
                            </td>
                            <td>
                              <Field id="endDay" name="endDay" type="date"/>
                            </td>
                            <ErrorMessage name="endDay" component="div" />
                          </tr>
                          {/* deposit */}
                          <tr>
                            <td>
                              <label htmlFor="deposit">deposit</label>
                            </td>
                            <td>
                              <Field id="deposit" name="deposit" />
                            </td>
                            <ErrorMessage name="deposit" component="div" />
                          </tr>
                          {/* payment */}
                          <tr>
                            <td>
                              <label htmlFor="payment">payment</label>
                            </td>
                            <td>
                              <Field id="payment" name="payment" />
                            </td>
                            <ErrorMessage name="payment" component="div" />
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

export default ContractCreate;