# Actions of Kindness

Tiny Node HTTP service with unit tests, wired to GitHub Actions for CI and a non-pushing Docker image build on `main`.

## Local

```bash
npm test
npm start
# GET http://localhost:3000/health
```

## Workflows

| Workflow | Trigger | Job |
|----------|---------|-----|
| `ci.yml` | PR + push | `npm test` on Node 20 |
| `docker.yml` | push to main | `docker build` (no registry push) |

Swap the Docker job to `push: true` and add registry credentials when you have a remote.

## License

MIT
