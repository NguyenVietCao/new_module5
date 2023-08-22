
import React, { Component } from "react";
import { posts } from "../data/data";
class Form extends React.Component {
    constructor(props) {
        super()
        this.state = {
            list: props.list,
            title: "",
            slug: "",
            category: "",
            updatedAt: "",
        }
    }


    onChange = event => {

        this.setState(prev => ({ ...prev, [event.target.name]: event.target.value }))

    }
    addBlog() {
        console.log(JSON.stringify(this.state));

        this.props.func((prev) => {
            console.log(JSON.stringify(prev.listPosts))

            const newEl = { id: Math.floor(Math.random() * 100) + 1, title: this.state.title, slug: this.state.slug, category: this.state.category, updatedAt: this.state.updatedAt }
         
            return { ...prev, listPosts: [...prev.listPosts, newEl] }
        })

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






                    <button type="button" onClick={() => this.addBlog()}>Submit</button>
                </form>

            </>
        )
    }
}
export default Form;