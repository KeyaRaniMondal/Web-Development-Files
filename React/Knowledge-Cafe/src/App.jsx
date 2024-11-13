import Header from './components/header/header'
import Blogs from './components/Blogs/Blogs'
import './App.css'
import Bookmark from './components/Bookmarks/Bookmark'

function App() {

  return (
    <>
      <Header></Header>
      <div className='flex'>
      <Blogs></Blogs>
      <Bookmark></Bookmark>
      </div>

    </>
  )
}

export default App
