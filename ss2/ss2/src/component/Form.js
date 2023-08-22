
import React, { Component } from "react";
import { posts } from "../data/data";
class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            id: "",
            title: "",
            slug: "",
            category: "",
            updatedAt: ""
        }
    }


    onChange = event => {
        const { value, name } = event.target.value

        this.setState({
            [name]: value
        })


    }
    AddBlog() {
        posts.push({ id: Math.floor(Math.random() * 100) + 1, title: this.state.title, slug: this.state.slug, category: this.state.category, updatedAt: this.state.updatedAt })
        console.log(posts);
    }

    render() {
        return (
            <>
                <form>


                    <h1>Create Blog</h1>
                    <label>Tittle</label>
                    <input type='text' name="title" onChange={this.onChange}></input>
                    <br />
                    <label>slug</label>
                    <input type='text' name="slug" onChange={this.onChange}></input>
                    <br />
                    <label>category</label>
                    <input type='text' name="category" onChange={this.onChange}></input>
                    <br />
                    <label>updatedAt</label>
                    <input type='text' name="updatedAt" onChange={this.onChange}></input>

                    <button type="button" onClick={() => this.AddBlog()}>Submit</button>
                </form>

            </>
        )
    }
}
export default Form;