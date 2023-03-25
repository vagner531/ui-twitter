import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import "./Status.css";

const answers = [
  "Concordo...",
  "Olha, faz sentido!",
  "Parabens pelo progresso.",
];

export function Status() {
  return (
    <main className="status">
      <Header title="Tweet" />
      <Tweet
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dicta dignissimos inventore consequatur fugiat officia unde, harum sint, animi distinctio excepturi dolorem recusandae voluptate nihil ad architecto aliquid? Maiores, pariatur.
"
      />
      <Separator />
      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/vagner531.png" alt="Vagner Santos" />
          <textarea id="tweet" placeholder="Tweet your answer"></textarea>
        </label>

        <button type="submit">Answer</button>
      </form>

      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
