import React from 'react';
import { posts } from '../data/data';

class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            slug: "",
            category: "",
            updatedAt: ""
        }
    }
    onChange = event => {
        const { value, name } = event.target

        this.setState({
            [name]: value
        })
    }

    handleDelete = (id) => {
        let cf = window.confirm(`are u sure to delete ID ${id} ?`);
        if (cf) {
            let newArr = [];
            for (const el of posts) {
                if (el.id == id) newArr = posts.filter((el) => el.id != id);
            }
            this.setState(() => {

            })
            this.setState((prev) => ({
                ...prev,
                blogs: prev.blogs.filter((el) => el.id !== id),
            }));
        }
    };
    render() {
        return (
            <>
                <button className='bg-warning'>Create</button>
                <table className='table'>
                    <thead className='table-dark'>
                        <tr>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>CATEGORY</th>
                            <th>TIME</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.list.map((el, index) => {
                            return (
                                <tr>
                                    {/* <td>{index+1}</td> */}
                                    <td>{el.id}</td>
                                    <td>{el.title}</td>
                                    <td>{el.category}</td>
                                    <td>{el.updatedAt}</td>
                                    <td>
                                        <button className='bg-primary'>Edit</button>
                                        <button onClick={() => this.handleDelete(el.id)} className='bg-danger'>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </>
        )
    }
}
export default Blog;