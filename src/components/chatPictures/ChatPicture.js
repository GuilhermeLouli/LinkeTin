import OnePictures from "./OnePictures";
import TwoPictures from "./TwoPictures";
import ThreePictures from "./ThreePictures";
import FourPictures from "./FourPictures";
import FivePictures from "./FivePictures";

export default function ChatPicture({ hasNewStory, chatPictures, size }) {
  switch (chatPictures.length) {
    case 1: return <OnePictures chatPictures={chatPictures} size={size} hasNewStory={hasNewStory} />
    case 2: return <TwoPictures chatPictures={chatPictures} />
    case 3: return <ThreePictures chatPictures={chatPictures} />
    case 4: return <FourPictures chatPictures={chatPictures} />
    case 5: return <FivePictures chatPictures={chatPictures} />
  }
}
