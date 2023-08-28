import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    getPostsFetch,
    createPost,
    deletePost,
    updatePost,
} from "../redux/action";



const Post = () => {
    // const [blogs, setBlogs] = useState();
    const [isReloaded, setIsReloaded] = useState(true);

    const dispatch = useDispatch();
    const posts = useSelector((state) => state.postsReducer.posts);

    const handleDelete = (id) => {
        const cf = window.confirm("Are u sure to delete ID " + id + " ?");
        if (cf) dispatch(deletePost(id));
        setIsReloaded((prev) => !prev);
    };


    useEffect(() => {
        dispatch(getPostsFetch());
    }, [dispatch]);

    // const [posts, setPosts] = useState([]);
    // const [isOpen, setIsOpen] = useState(false);

    // const posts = useSelector((state) => state.postsReducer.posts);
    // const [isReloaded, setIsReloaded] = useState(true);
    // const [updatedPost, setUpdatedPost] = useState({});

    // async function getAllPosts() {
    //     const data = await getPosts();
    //     setPosts(data);
    // }

    return (
        <>
            <div className=" container my-2">
                <div
                    className=" btn btn-outline-info mb-3"

                >
                    {/* <Link to={'/create'}>Create</Link> */}

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
                        {posts ? (posts.map((posts, index) => (
                            <tr key={`key_${posts.id}`}>
                                <td>{index + 1}</td>
                                <td>{posts.title}</td>
                                <td>{posts.category}</td>
                                <td>{posts.slug}</td>
                                <td>
                                    <div

                                        className=" btn btn-dark"
                                    >
                                        {/* <Link to={`/edit/${posts.id}`}>Edit</Link> */}

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
                            <h1>khong co du lieu hay chay json-server</h1>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Post;