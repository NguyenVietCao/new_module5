
import React, { Component } from "react";
import { posts } from "../data/data";
class Form extends React.Component {
    constructor() {
        super()
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
    AddBlog() {
        posts.push({ title: this.state.title, slug: this.state.slug, category: this.state.category, updatedAt: this.state.updatedAt })
        console.log(posts);
    }

    render() {
        return (
            <>
                <form>

                    <table>
                        <tr>  <h1>Create Blog</h1> </tr>

                        <tr>
                            <td> <label>Tittle</label></td>
                            <td>  <input type='text' name="title" onChange={this.onChange}></input></td>
                        </tr>
                        <tr>
                            <td>   <label>slug</label></td>
                            <td><input type='text' name="slug" onChange={this.onChange}></input> </td>
                        </tr>
                        <tr>
                            <td>  <label>category</label> </td>
                            <td><input type='text' name="category" onChange={this.onChange}></input> </td>
                        </tr>
                        <tr>
                            <td> <label>updatedAt</label> </td>
                            <td>  <input type='text' name="updatedAt" onChange={this.onChange}></input> </td>
                        </tr>
                    </table>






                    <button type="button" onClick={() => this.AddBlog()}>Submit</button>
                </form>

            </>
        )
    }
}
export default Form;