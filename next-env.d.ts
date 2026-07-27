type Props = {
  kicker: string;
  title: string;
  body: string;
  points?: string[];
  tags?: string[];
  accent?: "green" | "blue" | "yellow" | "purple";
};

export default function ExperienceCard({
  kicker,
  title,
  body,
  points = [],
  tags = [],
  accent = "green",
}: Props) {
  return (
    <article className={`experience-card accent-${accent}`}>
      <span className="pixel-label">{kicker}</span>
      <h3>{title}</h3>
      <p>{body}</p>
      {points.length > 0 ? (
        <ul>
          {points.map((point) => <li key={point}>{point}</li>)}
        </ul>
      ) : null}
      {tags.length > 0 ? (
        <div className="tag-list">
          {tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      ) : null}
    </article>
  );
}
