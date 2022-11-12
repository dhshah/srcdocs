import { render, screen } from "@testing-library/react";
import "next";
import { GithubMarkDown, getServerSideProps } from "./[...path]";
import "@testing-library/jest-dom";
import { GetServerSidePropsContext } from "next";

describe("GithubMarkDown", () => {
  it("renders a heading", () => {
    render(<GithubMarkDown content={"Some Content"} />);
    const heading = screen.getByText("Some Content");
    expect(heading).toBeInTheDocument();
  });
});

describe("GithubMarkDown serverSideProps", () => {
  const fetchMock = jest
    .spyOn(global, "fetch")
    .mockImplementation(
      jest.fn(() =>
        Promise.resolve({ text: () => Promise.resolve("Blah") })
      ) as jest.Mock
    );

  it("creates content", async () => {
    const context = {
      query: { path: "test" },
      res: undefined,
      req: undefined,
      resolvedUrl: undefined,
    } as GetServerSidePropsContext;
    const {
      props: { content },
    } = await getServerSideProps(context);
    expect(content).toContain("Blah");
  });

  it("throws error", async () => {
    const {
      props: { error },
    } = await getServerSideProps({ query: {} } as GetServerSidePropsContext);
    expect(error).toContain("undefined");
  });
});
