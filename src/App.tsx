import { useState } from 'react';
import { Tweet } from './components/Tweet';

export function App() {
  const [tweets, setTweets] = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
  ]);

  function createTweet() {
    setTweets([...tweets, 'Tweet ' + (tweets.length + 1)]);
  }

  return (
    <>
      {tweets.map((tweet) => {
        return <Tweet text={tweet} />;
      })}

      <button onClick={createTweet}>Add Tweet</button>
    </>
  );
}
