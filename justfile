set shell := ["bash", "-cu"]
set windows-shell := ["powershell"]

node_bin := "./node_modules/.bin/"
tsc := node_bin + "tsc"
biome := node_bin + "biome"
tsdown := node_bin + "tsdown"
vitest := node_bin + "vitest"
typedoc := node_bin + "typedoc"

hono := "./packages/hono"
sv := "./packages/hono-standard-validator"
zv := "./packages/hono-zod-validator"
openapi := "./packages/hono-openapi"

test_hono := "./tests/hono"
test_sv := "./tests/hono-standard-validator"
test_zv := "./tests/hono-zod-validator"
test_openapi := "./tests/hono-openapi"

# Default action
_:
    just lint
    just fmt
    just build
    just test

# Install
i:
    pnpm install

# Lint code
lint:
    ls-lint
    typos
    cd ./{{hono}} && ../../{{tsc}} --noEmit
    cd ./{{sv}} && ../../{{tsc}} --noEmit
    cd ./{{zv}} && ../../{{tsc}} --noEmit
    cd ./{{openapi}} && ../../{{tsc}} --noEmit

# Format code
fmt:
    ./{{biome}} check --write .

# Build package
build:
    cd ./{{hono}} && ../../{{tsdown}} -c tsdown.config.ts
    cd ./{{sv}} && ../../{{tsdown}} -c tsdown.config.ts
    cd ./{{zv}} && ../../{{tsdown}} -c tsdown.config.ts
    cd ./{{openapi}} && ../../{{tsdown}} -c tsdown.config.ts

# Run tests
test:
    cd ./{{test_hono}} && ./{{vitest}} run
    cd ./{{test_sv}} && ./{{vitest}} run
    cd ./{{test_zv}} && ./{{vitest}} run
    cd ./{{test_openapi}} && ./{{vitest}} run

# Run tests with different runtimes
test-all:
    cd ./{{test_hono}} && pnpm run test
    cd ./{{test_sv}} && pnpm run test
    cd ./{{test_zv}} && pnpm run test
    cd ./{{test_openapi}} && pnpm run test

    cd ./{{test_hono}} && bun run test
    cd ./{{test_sv}} && bun run test
    cd ./{{test_zv}} && bun run test
    cd ./{{test_openapi}} && bun run test

# Generate APIs documentation
api:
    cd ./{{hono}} && ../../{{typedoc}}
    cd ./{{sv}} && ../../{{typedoc}}
    cd ./{{zv}} && ../../{{typedoc}}
    cd ./{{openapi}} && ../../{{typedoc}}

# Publish hono package with dev tag
publish-dev-hono:
    cd ./{{hono}} && pnpm publish --no-git-checks --tag dev

# Publish standard validator package with dev tag
publish-dev-sv:
    cd ./{{sv}} && pnpm publish --no-git-checks --tag dev

# Publish Zod validator package with dev tag
publish-dev-zv:
    cd ./{{zv}} && pnpm publish --no-git-checks --tag dev

# Publish OpenAPI package with dev tag
publish-dev-openapi:
    cd ./{{openapi}} && pnpm publish --no-git-checks --tag dev

# Publish all packages with dev tag
publish-dev:
    just publish-dev-hono
    just publish-dev-sv
    just publish-dev-zv
    just publish-dev-openapi

# Publish hono package as dry-run
publish-try-hono:
    cd ./{{hono}} && pnpm publish --no-git-checks --dry-run

# Publish standard validator package as dry-run
publish-try-sv:
    cd ./{{sv}} && pnpm publish --no-git-checks --dry-run

# Publish Zod validator package as dry-run
publish-try-zv:
    cd ./{{zv}} && pnpm publish --no-git-checks --dry-run

# Publish OpenAPI package as dry-run
publish-try-openapi:
    cd ./{{openapi}} && pnpm publish --no-git-checks --dry-run

# Publish all packages as dry-run
publish-try:
    just publish-try-hono
    just publish-try-sv
    just publish-try-zv
    just publish-try-openapi

# Publish hono package
publish-hono:
    cd ./{{hono}} && pnpm publish

# Publish standard validator package
publish-sv:
    cd ./{{sv}} && pnpm publish

# Publish Zod validator package
publish-zv:
    cd ./{{zv}} && pnpm publish

# Publish OpenAPI package
publish-openapi:
    cd ./{{openapi}} && pnpm publish

# Publish all packages
publish:
    just publish-hono
    just publish-sv
    just publish-zv
    just publish-openapi

# Clean builds
clean:
    rm -rf ./{{openapi}}/dist
    rm -rf ./{{zv}}/dist
    rm -rf ./{{sv}}/dist
    rm -rf ./{{hono}}/dist

# Clean everything
clean-all:
    just clean

    rm -rf ./{{test_openapi}}/node_modules
    rm -rf ./{{test_sv}}/node_modules
    rm -rf ./{{test_zv}}/node_modules
    rm -rf ./{{test_hono}}/node_modules

    rm -rf ./{{openapi}}/node_modules
    rm -rf ./{{zv}}/node_modules
    rm -rf ./{{sv}}/node_modules
    rm -rf ./{{hono}}/node_modules

    rm -rf ./node_modules
