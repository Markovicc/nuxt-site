# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## GitHub CLI (Local Usage)

Yes, you can use [GitHub CLI](https://cli.github.com/) locally on your computer to work with this repository.

### Install GitHub CLI

Follow the [official installation guide](https://cli.github.com/) for your operating system:

```bash
# macOS (Homebrew)
brew install gh

# Windows (winget)
winget install --id GitHub.cli

# Linux (apt)
sudo apt install gh
```

### Authenticate

```bash
gh auth login
```

### Clone This Repository

```bash
gh repo clone Markovicc/nuxt-site
```

### Useful GitHub CLI Commands

```bash
# List open issues
gh issue list

# Create a new issue
gh issue create

# List pull requests
gh pr list

# Create a pull request
gh pr create

# Check CI status
gh run list
```

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
