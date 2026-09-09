# Maintenance checklist

## Before each release

```bash
npm install
npm run typecheck
npm run lint
npm run build
npm audit
```

Review `npm audit` findings before applying automated fixes. Prefer targeted package upgrades over a blind major-version upgrade.

## Dependency policy

- Keep React and React DOM on the same release line.
- Keep TanStack Start and TanStack Router reasonably aligned and upgrade them together when possible.
- Use stable releases for production tooling; avoid prerelease build tools unless the deployment target requires them.
- Do not add secrets to client-side code or variables prefixed with `VITE_`.
- Do not add dependencies to solve a problem that can be handled with the existing stack.

## Content updates

Edit `src/lib/portfolio-data.ts` for projects, publications, capabilities, and skill groups.
Edit the relevant route file when changing page-specific copy or metadata.
Keep external URLs exact and verified.
