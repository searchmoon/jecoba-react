import { useState } from 'react';
// useState 사용하여 상태변경하기
function App() {
  const [like, setLike] = useState(false);
  const handleLikeClick = () => {
    setLike(!like)
  }
  const heart = like ? '좋아요' : '안좋아요'
  return (
    <div>
      <button onClick={handleLikeClick}>{heart}</button>
    </div>
  );
}

export default App;
