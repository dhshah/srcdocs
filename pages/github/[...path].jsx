import { GithubRawContentUrl } from '../../utils/github/constants';
import { parsePath } from '../../utils/common/parsePath';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

export async function getServerSideProps(context) {
  const { path } = context.query;

  if (!path) {
    return { props: { error: `Invalid path: ${path}`} }
  }

  const pathArr = parsePath(path);
  const rawContent = await fetch(`${GithubRawContentUrl}/${pathArr.join('/')}`)
    .then(response => response.text())

  const { content } = matter(rawContent);
  return { props: { content } };
}

export const GithubMarkDown = ({ content }) => {
  return <ReactMarkdown>{ content }</ReactMarkdown>
}

export default GithubMarkDown