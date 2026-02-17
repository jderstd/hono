set shell := ["bash", "-cu"]
set windows-shell := ["pwsh", "-Command"]

tsc := "pnpm exec tsc"
biome := "pnpm exec biome"
tsdown := "pnpm exec tsdown"
vitest := "pnpm exec vitest"
typedoc := "pnpm exec typedoc"
publish := "pnpm publish"

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
    ls-lint -config .ls-lint.yaml
    typos
    cd ./{{hono}} && {{tsc}} --noEmit
    cd ./{{sv}} && {{tsc}} --noEmit
    cd ./{{zv}} && {{tsc}} --noEmit
    cd ./{{openapi}} && {{tsc}} --noEmit

# Lint code with Biome
lint-biome:
    {{biome}} lint .

# Format code
fmt:
    {{biome}} check --write .

# Build package
build:
    cd ./{{hono}} && {{tsdown}} -c tsdown.config.ts
    cd ./{{sv}} && {{tsdown}} -c tsdown.config.ts
    cd ./{{zv}} && {{tsdown}} -c tsdown.config.ts
    cd ./{{openapi}} && {{tsdown}} -c tsdown.config.ts

# Run tests
test:
    cd ./{{test_hono}} && {{vitest}} run
    cd ./{{test_sv}} && {{vitest}} run
    cd ./{{test_zv}} && {{vitest}} run
    cd ./{{test_openapi}} && {{vitest}} run

# Generate APIs documentation
api:
    cd ./{{hono}} && {{typedoc}}
    cd ./{{sv}} && {{typedoc}}
    cd ./{{zv}} && {{typedoc}}
    cd ./{{openapi}} && {{typedoc}}

# Publish hono package with dev tag
publish-dev-hono:
    cd ./{{hono}} && {{publish}} --no-git-checks --tag dev

# Publish standard validator package with dev tag
publish-dev-sv:
    cd ./{{sv}} && {{publish}} --no-git-checks --tag dev

# Publish Zod validator package with dev tag
publish-dev-zv:
    cd ./{{zv}} && {{publish}} --no-git-checks --tag dev

# Publish OpenAPI package with dev tag
publish-dev-openapi:
    cd ./{{openapi}} && {{publish}} --no-git-checks --tag dev

# Publish all packages with dev tag
publish-dev:
    just publish-dev-hono
    just publish-dev-sv
    just publish-dev-zv
    just publish-dev-openapi

# Publish hono package as dry-run
publish-try-hono:
    cd ./{{hono}} && {{publish}} --no-git-checks --dry-run

# Publish standard validator package as dry-run
publish-try-sv:
    cd ./{{sv}} && {{publish}} --no-git-checks --dry-run

# Publish Zod validator package as dry-run
publish-try-zv:
    cd ./{{zv}} && {{publish}} --no-git-checks --dry-run

# Publish OpenAPI package as dry-run
publish-try-openapi:
    cd ./{{openapi}} && {{publish}} --no-git-checks --dry-run

# Publish all packages as dry-run
publish-try:
    just publish-try-hono
    just publish-try-sv
    just publish-try-zv
    just publish-try-openapi

# Publish hono package
publish-hono:
    cd ./{{hono}} && {{publish}}

# Publish standard validator package
publish-sv:
    cd ./{{sv}} && {{publish}}

# Publish Zod validator package
publish-zv:
    cd ./{{zv}} && {{publish}}

# Publish OpenAPI package
publish-openapi:
    cd ./{{openapi}} && {{publish}}

# Publish all packages
publish:
    just publish-hono
    just publish-sv
    just publish-zv
    just publish-openapi

# Clean builds
clean:
    rm -rf ./packages/*/dist

# Clean everything
clean-all:
    just clean

    rm -rf ./tests/*/node_modules

    rm -rf ./packages/*/node_modules

    rm -rf ./node_modules
