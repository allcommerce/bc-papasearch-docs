#!/bin/bash

# BigCommerce Semantic Search & Filters Documentation Server
# Quick start script for development

set -e

echo "🚀 BigCommerce Semantic Search & Filters Documentation"
echo "=================================================="

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is required but not installed."
    echo "Please install Python 3.8 or higher and try again."
    exit 1
fi

# Check if pip is installed
if ! command -v pip &> /dev/null && ! command -v pip3 &> /dev/null; then
    echo "❌ pip is required but not installed."
    echo "Please install pip and try again."
    exit 1
fi

# Use pip3 if available, otherwise pip
PIP_CMD="pip"
if command -v pip3 &> /dev/null; then
    PIP_CMD="pip3"
fi

# Check if requirements.txt exists
if [ ! -f "requirements.txt" ]; then
    echo "❌ requirements.txt not found."
    echo "Please run this script from the user-guide directory."
    exit 1
fi

# Install dependencies if mkdocs is not available
if ! command -v mkdocs &> /dev/null; then
    echo "📦 Installing dependencies..."
    $PIP_CMD install -r requirements.txt
    echo "✅ Dependencies installed successfully!"
else
    echo "✅ MkDocs is already installed."
fi

# Check if mkdocs.yml exists
if [ ! -f "mkdocs.yml" ]; then
    echo "❌ mkdocs.yml not found."
    echo "Please run this script from the user-guide directory."
    exit 1
fi

echo ""
echo "🌐 Starting development server..."
echo "📖 Documentation will be available at: http://127.0.0.1:8000"
echo "🔄 The server will automatically reload when you make changes."
echo ""
echo "Press Ctrl+C to stop the server."
echo ""

# Start the development server
if [ -f "mkdocs.local.yml" ]; then
    echo "Using local development configuration..."
    mkdocs serve --config-file=mkdocs.local.yml
else
    echo "Using default configuration..."
    mkdocs serve --dev-addr=127.0.0.1:8000
fi