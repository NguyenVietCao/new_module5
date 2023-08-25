import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FidgetSpinner } from 'react-loader-spinner';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import { addPosts } from '../service/ServiceServer';

function CreatePostComponent(props) {
    const navigate = useNavigate();
    return (
        <>
            <Formik
                initialValues={{
                    id: '',
                    title: '',
                    slug: '',
                    category: '',
                    updatedAt: ''
                }}

                validationSchema={Yup.object({
                    title: Yup.string()
                        .required("Name is not empty")
                        .min(3, "Name too short")
                        .matches(/^[a-z A-Z ]+$/, "Name invalid"),
                    slug: Yup.string()
                        .min(18)
                })}

                onSubmit={(values, { setSubmitting }) => {
                    //call API
                    setTimeout(async () => {
                        setSubmitting(false);
                        console.log(values);
                        await addPosts(values)
                        toast(`Blogs ${values.title} create OK`)
                        navigate("/PostDetailComponent")
                    }, 2000)
                }}
            >
                {
                    ({ isSubmitting }) => (
                        <div className='container'>
                            <h1>Create Blog</h1>
                            <Form>

                                {/* title */}

                                <div className='mb-3'>
                                    <label htmlFor='title' className='form-label'>title</label>
                                    <Field type='text' className='form-control' id='title' name='title' />
                                    <ErrorMessage name="title" component='span' className="form-error" />
                                </div>

                                {/* slug */}

                                <div className='mb-3'>
                                    <label htmlFor='slug' className='form-label'>slug</label>
                                    <Field name="slug" type='text' className='form-control' id='slug' />
                                    <ErrorMessage name="slug" component='span' className="form-error" />
                                </div>

                                {/* category */}

                                <div className='mb-3'>
                                    <label htmlFor='category' className='form-label'>category</label>
                                    <Field name="category" className='form-control' type="text" id="category" />
                                    <ErrorMessage name="category" component='span' className="form-error" />
                                </div>

                                {/* updatedAt */}

                                <div className='mb-3'>
                                    <label htmlFor='updatedAt' className='form-label'>updatedAt</label>
                                    <Field name="updatedAt" className='form-control' type="text" id="updatedAt" />
                                    <ErrorMessage name="updatedAt" component='span' className="form-error" />
                                </div>
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
                    )
                }
            </Formik>
        </>
    );
}

export default CreatePostComponent;