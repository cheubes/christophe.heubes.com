# christophe.heubes.com

Personal site of Christophe Heubès: a profile page (career, skills) and "Figures de pensée" ("Thought Figures"), a series of minimalist illustrations about intellectual concepts, cognitive laws and biases. Static site built with Jekyll, hosted on GitHub Pages, bilingual (French / English).

## Getting started

### Prerequisites

- Ruby (version pinned in `.ruby-version`)
- Bundler

### Install

```bash
bundle install
```

### Run locally

```bash
bundle exec jekyll serve
```

The site is served at `http://localhost:4000`.

## Project structure

- `_illustrations/` : content collection backing the illustrations (one Markdown file per illustration per language).
- `generator/` : standalone Node.js tool that generates the illustration SVGs from concept files, see `generator/README.md`.
- `specs/` : design source of truth (functional specifications, data model, technical specifications, style guide, one file per screen).
- `CLAUDE.md` : how to use `specs/` when working on this repo.

## License

The code and content of this site (illustrations, profile text) are dedicated to the public domain under [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/), see [`LICENSE`](LICENSE).

Third-party files keep their own licenses and are not covered by this dedication:

- Bootstrap (`assets/dist/css/bootstrap*`, `assets/dist/js/bootstrap*`): MIT.
- Less (`assets/dist/js/less.min.js`): Apache-2.0.
- The Ubuntu font embedded in the illustration SVGs: Ubuntu Font Licence 1.0.
- Company logos (`assets/img/dreamsoft.png`, `epita.png`, `flint.png`, `xebia.png`): property of their respective owners.
