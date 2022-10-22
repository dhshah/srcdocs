# srcdocs

A markdown renderer for code repos to encourage docs-as-code.

## How to develop

- `yarn run dev`
- `yarn run test`

## Inspiration

- [writethedocs.org](https://www.writethedocs.org/guide/docs-as-code/#docs-as-code-at-write-the-docs)
- [docs-as-code](https://cchesser.github.io/docs-as-code/)
- [The Knowledge: Towards a Culture of Engineering Documentation](https://www.usenix.org/conference/srecon16europe/program/presentation/macnamara)

## Features

- [x] Renders markdown from public github repos
- [x] add initial jest tests
- [ ] explicitly require the srcdocs folder name in the path for rendering
        - or gate below functionality behind that folder name
- [ ] add support for a header
- [ ] add support for a footer
- [ ] add support for a default site map
- [ ] add support for custom themes
- [ ] add index page for github which has a form to convert a url into a srcdocs link
- [ ] Support private repos on Github
