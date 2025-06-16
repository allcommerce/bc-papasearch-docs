# Makefile for BigCommerce Semantic Search & Filters Documentation

.PHONY: help install serve serve-dev build build-prod clean deploy lint setup

# Default target
help:
	@echo "Available commands:"
	@echo "  install      Install dependencies"
	@echo "  serve        Start development server (same as serve-dev)"
	@echo "  serve-dev    Start development server with dev environment"
	@echo "  build        Build documentation for development"
	@echo "  build-prod   Build documentation for production"
	@echo "  clean        Clean build artifacts"
	@echo "  deploy       Deploy to GitHub Pages (production build)"
	@echo "  lint         Check for issues"
	@echo "  setup        Quick setup for new environment"

# Install dependencies
install:
	@echo "Installing MkDocs and dependencies..."
	pip install -r requirements.txt

# Start development server (default với dev environment)
serve: serve-dev

# Start development server với dev environment
serve-dev:
	@echo "Starting development server with dev environment..."
	@if [ -f env.dev ]; then \
		echo "Loading development environment variables..."; \
		export $$(cat env.dev | grep -v '^#' | xargs) && mkdocs serve; \
	else \
		echo "Warning: env.dev not found, using default settings..."; \
		mkdocs serve; \
	fi

# Build the documentation cho development
build:
	@echo "Building documentation for development..."
	@if [ -f env.dev ]; then \
		echo "Loading development environment variables..."; \
		export $$(cat env.dev | grep -v '^#' | xargs) && mkdocs build --clean; \
	else \
		echo "Warning: env.dev not found, using default settings..."; \
		mkdocs build --clean; \
	fi

# Build for production với production environment
build-prod:
	@echo "Building documentation for production..."
	@if [ -f env.prod ]; then \
		echo "Loading production environment variables..."; \
		export $$(cat env.prod | grep -v '^#' | xargs) && mkdocs build --clean --strict; \
	else \
		echo "Warning: env.prod not found, using default settings..."; \
		mkdocs build --clean --strict; \
	fi

# Clean build artifacts
clean:
	@echo "Cleaning build artifacts..."
	rm -rf site/

# Deploy to GitHub Pages với production environment
deploy:
	@echo "Deploying to GitHub Pages with production settings..."
	@if [ -f env.prod ]; then \
		echo "Loading production environment variables..."; \
		export $$(cat env.prod | grep -v '^#' | xargs) && mkdocs gh-deploy --clean; \
	else \
		echo "Warning: env.prod not found, using default settings..."; \
		mkdocs gh-deploy --clean; \
	fi

# Lint and check for issues với production environment
lint:
	@echo "Checking for issues with production settings..."
	@if [ -f env.prod ]; then \
		echo "Loading production environment variables..."; \
		export $$(cat env.prod | grep -v '^#' | xargs) && mkdocs build --strict --clean; \
	else \
		echo "Warning: env.prod not found, using default settings..."; \
		mkdocs build --strict --clean; \
	fi

# Quick setup for new environment
setup: install
	@echo "Setup complete! Run 'make serve' to start development server."
	@echo ""
	@echo "Environment files:"
	@echo "  - env.dev  : Development environment (fast builds, no optimization)"
	@echo "  - env.prod : Production environment (optimized builds, all features)"
	@echo ""
	@echo "Commands:"
	@echo "  - make serve      : Development server"
	@echo "  - make build-prod : Production build"
	@echo "  - make deploy     : Deploy to production"