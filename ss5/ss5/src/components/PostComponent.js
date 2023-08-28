import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'
import { posts } from '../data/data';
import { toast } from 'react-toastify';


function PostComponent(props) {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState(posts);
    const param = useParams();
    const handleDelete = (id) => {
        // const newArr = posts.filter((element) => element.id != id);
        // setBlogs(newArr)
        setTimeout(() => {



        setBlogs(prev => {
            const newArr = prev.filter((element) => element.id != id);
            return [...newArr]
        })

            toast(`Blogs  delete OK`)
            navigate("/PostDetailComponent")
        }, 500)
    }
    const showListBlogs = async () => {
        const data = posts;
        setBlogs(data);
    }

    useEffect(() => {
        showListBlogs();
    }, [])
    return (
        <>
            <div className=" container my-2">
                <div
                    className=" btn btn-outline-info mb-3"

                >
                    <Link to={'/create'}>Create</Link>

                </div>
                <table className=" table">
                    <thead className=" table-dark">
                        <tr>
                            <td>ID</td>
                            <td>Title</td>
                            <td>Category</td>
                            <td>Time</td>
                            <td>Action</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs ? (blogs.map((posts, index) => (
                            <tr key={`key_${posts.id}`}>
                                <td>{index + 1}</td>
                                <td>{posts.title}</td>
                                <td>{posts.category}</td>
                                <td>{posts.updatedAt}</td>
                                <td>
                                    <div

                                        className=" btn btn-dark"
                                    >
                                        <Link to={`/edit/${posts.id}`}>Edit</Link>

                                    </div>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(posts.id)}
                                        className="btn btn-danger"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))) : (
                            <h1>khong co du lieu</h1>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default PostComponent;