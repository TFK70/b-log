import styles from "../styles/BlogSelector.module.css"
import { BlogCard } from "../components/BlogCard";

type Card = {
  title: string
}

export default function LogSelector( { cards }: { cards: Card[] } ) {
  return (
    <div className={styles.container}>
      {cards.map((card: Card, idx: number) => <BlogCard key={idx} val={card.title} />)}
    </div>
  );
}

export async function getStaticProps() {
  const res: Response = await fetch("http://localhost:3000/api/hello");
  const data: Promise<{}> = await res.json();

  let cards: Card[] = [];

  for (let key in data) {
    cards.push(data[key]);
  }

  return {
    props: {
      cards
    }
  }
}
