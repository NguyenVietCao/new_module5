import axios from 'axios';

// show list
export async function getListPosts() {
    const res = await axios.get(` http://localhost:8080/posts`);
    return res.data;
}
// create
export async function addPosts(values) {
    await axios.post(`http://localhost:8080/posts`, values)

}
//delete
export async function deletePosts(id) {
    await axios.delete("http://localhost:8080/posts/" + id)
}

// edit
export async function editPosts(posts) {
    await axios.put("http://localhost:8080/posts/" + posts.id, posts);
}

// search
export async function searchName(name) {
    const rs = await axios.get("http://localhost:8080/song/?songName_like=" + name)
    return rs.data
}
// find by id
export async function getFindById(id) {
    const rs = await axios.get("http://localhost:8080/posts/"+id)
return rs.data;
}
