import css from "./Title.module.scss";

interface ITitleSectionProps {
  title: string;
  cls?: string;
}

const TitleSection = ({ title }: ITitleSectionProps) => {
  return (
    <div className={css.container}>
      <div className={` ${css.line} ${css.lineLeft}`}></div>
      <h3 className={css.title}>{title}</h3>
      <div className={` ${css.line} ${css.lineRight}`}></div>
    </div>
  );
};

export default TitleSection;
