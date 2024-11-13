import PropTypes from 'prop-types'; 
const Blog=({blog})=>{
    const {cover_title,author_img,author,reading_time}=blog;
    return(
        <div>
            <img src={author_img} alt="{`cover title  ${cover_title}`}" />
            <div className='flex justify-between'>
                <div>

                </div>
                <div>

                </div>
            </div>
<h2 className='text-4xl'>{cover_title}</h2>
        </div>
    )
}
Blog.PropTypes={
    blog:PropTypes.object.isRequired
}
export default Blog;