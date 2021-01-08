import styles from "../styles/BlogCard.module.css";

const BlogCard = ( { val }: { val: string } ) => {
  return <div tabIndex={0} className={styles.card}>{val}</div>;
};

export { BlogCard };
