import React from 'react';

function FormCreateService(props) {
    return (
          <div>
            <section className="vh-100" style={{ backgroundColor: "#2779e2" }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-9">
                            <h1 className="text-white mb-4">Create a new service</h1>
                            <div className="card" style={{ borderRadius: 15 }}>
                                <div className="card-body">

                                    {/* serviceName */}

                                    <div className="row align-items-center pt-4 pb-3">
                                        <div className="col-md-3 ps-5">
                                            <h6 className="mb-0">Service Name</h6>
                                        </div>
                                        <div className="col-md-9 pe-5">
                                            <input type="text" className="form-control form-control-lg" />
                                        </div>
                                    </div>
                                   
                                    <hr className="mx-n3" />

                                    {/* Area */}


                                    <div className="row align-items-center pt-4 pb-3">
                                        <div className="col-md-3 ps-5">
                                            <h6 className="mb-0">Area</h6>
                                        </div>
                                        <div className="col-md-9 pe-5">
                                            <input type="text" className="form-control form-control-lg" />
                                        </div>
                                    </div>

                                    <hr className="mx-n3" />

                                    {/* Ren Type */}

                                    <div className="row align-items-center pt-4 pb-3">
                                        <div className="col-md-3 ps-5">
                                            <h6 className="mb-0">Ren Type</h6>
                                        </div>
                                        <div className="col-md-9 pe-5">
                                            <input type="text" className="form-control form-control-lg" />
                                        </div>
                                    </div>

                                    <hr className="mx-n3" />

                                    {/* Rent */}

                                    <div className="row align-items-center pt-4 pb-3">
                                        <div className="col-md-3 ps-5">
                                            <h6 className="mb-0">Rent</h6>
                                        </div>
                                        <div className="col-md-9 pe-5">
                                            <input type="text" className="form-control form-control-lg" />
                                        </div>
                                    </div>

                                    <hr className="mx-n3" />

                                    {/* Max Capacity */}

                                    <div className="row align-items-center pt-4 pb-3">
                                        <div className="col-md-3 ps-5">
                                            <h6 className="mb-0">Max Capacity</h6>
                                        </div>
                                        <div className="col-md-9 pe-5">
                                            <input type="text" className="form-control form-control-lg" />
                                        </div>
                                    </div>

                                    <hr className="mx-n3" />

                                    {/* images */}

                                    <div className="row align-items-center py-2">
                                        <div className="col-md-3 ps-5">
                                            <h6 className="mb-0">Images</h6>
                                        </div>
                                        <div className="col-md-9 pe-5">
                                            <input
                                                className="form-control form-control-lg"
                                                id="formFileLg"
                                                type="file"
                                            />
                                            <div className="small text-muted mt-2">
                                                Upload your CV/Resume or any other relevant file. Max file
                                                size 50 MB
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="mx-n3" />

                                    <div className="px-5 py-3">
                                        <button type="submit" className="btn btn-primary btn-lg">
                                            Send application
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default FormCreateService;