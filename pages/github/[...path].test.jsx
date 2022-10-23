import { render, screen } from '@testing-library/react';
import 'next';
import { GithubMarkDown, getServerSideProps } from './[...path]';
import '@testing-library/jest-dom';

describe('GithubMarkDown', () => {
  it('renders a heading', () => {
    render(<GithubMarkDown content={"Some Content"} />);
    const heading = screen.getByText("Some Content");
    expect(heading).toBeInTheDocument();
  });
});

describe('GithubMarkDown serverSideProps', () => {
    const fetchMock = jest
      .spyOn(global, 'fetch')
      .mockImplementation(() =>
        Promise.resolve({ text: () => Promise.resolve("Blah") })
      );

  it('creates content', async () => {
    const { props: { content } } = await getServerSideProps({ query: { path: "test" }});
    expect(content).toContain("Blah");
  });

  it('throws error', async () => {
    const { props: { error } } = await getServerSideProps({query: {}});
    expect(error).toContain('undefined');
  });
});
