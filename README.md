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

Site content (illustrations, profile text) is licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
