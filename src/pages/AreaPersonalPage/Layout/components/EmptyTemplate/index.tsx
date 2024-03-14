import css from "./styles.module.scss";

type TEmptyProps = {
  children: React.ReactNode;
};
function EmptyTemplate({ children }: TEmptyProps) {
  return <div className={css.ticketsEmpty}>{children}</div>;
}

export default EmptyTemplate;
