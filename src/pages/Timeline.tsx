import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import './Timeline.css';

const tweets = ["Meu primeito Tweet", "Teste", "Deu certo!"];

export function Timeline() {
  function createNewTweet() {}
 
  return (
    <main className="timeline">
      <Header title="Home" />

      <form className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/vagner531.png" alt="Vagner Santos" />
          <textarea id="tweet" placeholder="What´s happening?"></textarea>
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
