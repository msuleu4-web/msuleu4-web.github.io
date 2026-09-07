import { ExternalLink } from "lucide-react";

type Props = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  status?: string;
};

export default function ProjectCard({ number, title, description, tags, href, status }: Props) {
  const content = (
    <>
      <div className="project-topline">
        <span className="pixel-label">PROJECT {number}</span>
        {href ? <ExternalLink size={17} aria-hidden="true" /> : <span className="status">{status}</span>}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tag-list">
        {tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
    </>
  );

  return href ? (
    <a className="project-card" href={href} target="_blank" rel="noreferrer">
      {content}
    </a>
  ) : (
    <article className="project-card">{content}</article>
  );
}
