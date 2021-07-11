import React from "react";
import Video from "./Video";
import "./App.css";
import { useState, useEffect } from "react";
import db from "./firebase";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    //BEM convention
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              decription={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
        {/* <Video
          url="https://player.vimeo.com/external/221221952.sd.mp4?s=68f6296d85e2b095e7a7e3ad84a0b3de9d8b6442&profile_id=164&oauth2_token_id=57447761"
          channel="tejassaindane"
          description="Lets get pumped up Guys.🤩"
          song="The Nights -- Avici"
          likes={123}
          messages={400}
          shares={5}
        /> */}
      </div>
    </div>
  );
}

export default App;
