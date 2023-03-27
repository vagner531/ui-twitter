import { FormEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import "./Timeline.css";

let newTweet = '';

export function Timeline() {
  const [tweets, setTweets] = useState([
    'Meu primeito Tweet',
    'Teste',
])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()

    setTweets([newTweet, ...tweets])
  }

  return (
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/vagner531.png" alt="Vagner Santos" />
          <textarea 
             id="tweet" 
            placeholder="What´s happening?"
            onChange={(event) => {
              newTweet = event.target.value
            }}
            />
        </label>

        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet) => {
        return <Tweet key={tweet} content={tweet} />;
      })}
    </main>
  );
}
