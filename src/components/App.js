import video from "../data/video.js";
import CommentList from "./CommentList"
import Video from "./Video"
import VideoInfo from "./VideoInfo"

function App() {
  console.log("Here's your data:", video);
  return (
    <div className="App">
      <Video video={video}/>
      <VideoInfo video={video}/>
      <CommentList comments={video.comments}/>
    </div>
  );
}

export default App;
