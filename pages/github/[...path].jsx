import { GithubRawContentUrl } from '../../utils/github/constants';
import { parsePath } from '../../utils/common/parsePath';
import matter from 'gray-matter';

export async function getServerSideProps(context) {
  const { path } = context.query;

  if (!path) {
    return { props: { content: `Invalid path: ${path}`} }
  }

  const pathArr = parsePath(path);
  const rawContent = await fetch(`${GithubRawContentUrl}/${pathArr.join('/')}`)
    .then(response => response.text())

  const { content } = matter(rawContent);
  return { props: { content } };
}

export const GithubMarkDown = ({ content }) => {
  return <div>{ content }</div>
}

export default GithubMarkDown