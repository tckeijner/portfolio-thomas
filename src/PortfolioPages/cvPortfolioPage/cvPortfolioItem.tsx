interface CvPortfolioItemProps {
  content: {
    title: string;
    subtitle: string;
    descriptionLines: string[];
    date: string;
  };
  itemKey: number;
  isLeft: boolean;
}

export default function CvPortfolioItem(props: CvPortfolioItemProps) {
  return (
    <div className="cvItem">
      <div className="cvItemDate">{ props.content.date }</div>
      <div className="cvItemContent">
        <h1>{ props.content.title }</h1>
        <h2>{ props.content.subtitle }</h2>
        { props.content.descriptionLines.map((line, index) => (
          <p key={ index }>{ line }</p>
        )) }
      </div>
    </div>
  )
}