import React from 'react';




class Blog extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <table className=' table' >

                    <thead className='table-dark'>
                        <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>CATEGORY</th>
                        <th>TIME</th>
                        </tr>
                        
                    </thead>
                    <tbody className=' table-primary'>
                        {this.props.list.map((el, index) => {
                            return(<tr>
                                <td>{index + 1}</td>
                                <td>{el.title}</td>
                                <td>{el.category}</td>
                                <td>{el.updatedAt}</td>
                            </tr>
)
                        })}
                    </tbody>
                </table>
            </>
        );
    }

}
export default Blog;

