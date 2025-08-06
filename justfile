set shell := ["bash", "-cu"]
set windows-shell := ["powershell"]

node_bin := "./node_modules/.bin/"
tsc := node_bin + "tsc"
biome := node_bin + "biome"
tsup := node_bin + "tsup"
vitest := node_bin + "vitest"
typedoc := node_bin + "typedoc"

hono := "./packages/hono"
validator := "./packages/hono-zod-validator"

test_hono := "./tests/hono"
test_validator := "./tests/hono-zod-validator"

# Default action
_:
    just lint
    just fmt
    just build
    just test

# Install
i:
    pnpm install

# Setup the project
setup:
    brew install ls-lint typos-cli
    just i

# Lint code
lint:
    ls-lint
    typos
    cd ./{{hono}} && ../../{{tsc}} --noEmit
    cd ./{{validator}} && ../../{{tsc}} --noEmit

# Format code
fmt:
    ./{{biome}} check --write .

# Build package
build:
    cd ./{{hono}} && ../../{{tsup}}
    cd ./{{validator}} && ../../{{tsup}}

# Run tests
test:
    cd ./{{test_hono}} && ./{{vitest}} run
    cd ./{{test_validator}} && ./{{vitest}} run

# Run tests with different runtimes
test-all:
    cd ./{{test_hono}} && pnpm run test
    cd ./{{test_validator}} && pnpm run test
    cd ./{{test_hono}} && deno run test
    cd ./{{test_validator}} && deno run test
    cd ./{{test_hono}} && bun run test
    cd ./{{test_validator}} && bun run test

# Generate APIs documentation
api:
    cd ./{{hono}} && ../../{{typedoc}}
    cd ./{{validator}} && ../../{{typedoc}}

# Publish hono package as dry-run
publish-try-hono:
    cd ./{{hono}} && pnpm publish --dry-run

# Publish zod-validator package as dry-run
publish-try-zv:
    cd ./{{validator}} && pnpm publish --dry-run

# Publish all packages as dry-run
publish-try:
    just publish-dev-try-hono
    just publish-dev-try-zv

# Publish hono package
publish-hono:
    cd ./{{hono}} && pnpm publish

# Publish zod-validator package
publish-zv:
    cd ./{{validator}} && pnpm publish

# Publish all packages
publish:
    just publish-hono
    just publish-zv

# Clean builds
clean:
    rm -rf ./{{hono}}/dist
    rm -rf ./{{validator}}/dist

# Clean everything
clean-all:
    rm -rf ./node_modules
    rm -rf ./{{hono}}/node_modules
    rm -rf ./{{validator}}/node_modules
    rm -rf ./{{test_hono}}/node_modules\
    rm -rf ./{{test_validator}}/node_modules
    just clean
