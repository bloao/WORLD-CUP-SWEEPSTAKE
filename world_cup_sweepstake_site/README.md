# World Cup Sweepstake Site

Static site for the sweepstake.

## Edit the data

Open [app.js](/Users/bloao/Documents/world_cup_sweepstake_site/app.js) and update:

- `entrants[].photoUrl` for funny profile pictures
- `teamResults` when teams progress
- `fixtures` for kickoff clashes
- `updatedAt` when you change anything

## Team result keys

For each team inside `teamResults`, you can set any of these to `true`:

- `first`
- `second`
- `ro32`
- `ro16`
- `qf`
- `sf`
- `third`
- `runnerUp`
- `winner`

Example:

```js
Spain: { first: true, ro32: true, ro16: true }
```

## Publish it

Easiest options:

1. `GitHub Pages`
2. `Netlify`
3. `Vercel`

No build step is required. The site is plain HTML/CSS/JS.
