
import PostCreate from './PostCreate';
import PostList from './PostList';

function App() {
  return (
    <div className="container">
       <h1>Microservices Blog App (Mini Project)</h1>
      <h2>Create Post !!!!!!!</h2>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
}

export default App;
