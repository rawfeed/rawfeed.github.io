#!/usr/bin/env sh

# =============================================================================
#  Rawfeed Jekyll Starter - Setup Script
#  URL: https://rawfeed.github.io/rawfeed-jekyll/setup.sh
# =============================================================================
#  Usage:
#    sh -c "$(curl -fsSL https://rawfeed.github.io/rawfeed-jekyll/setup.sh)"
# =============================================================================

set -e

REPO_URL="https://github.com/rawfeed/rawfeed-jekyll-starter.git"

# --- Colors (POSIX compatible) ---
if command -v tput >/dev/null 2>&1 && tput setaf 1 >/dev/null 2>&1; then
  RED=$(tput setaf 1)
  GREEN=$(tput setaf 2)
  YELLOW=$(tput setaf 3)
  CYAN=$(tput setaf 6)
  BOLD=$(tput bold)
  RESET=$(tput sgr0)
else
  RED=""
  GREEN=""
  YELLOW=""
  CYAN=""
  BOLD=""
  RESET=""
fi

header() { printf "\n${BOLD}${CYAN}%s${RESET}\n" "$*"; }
info() { printf "${CYAN}%s${RESET}\n" "$*"; }
ok() { printf "${GREEN}✓ %s${RESET}\n" "$*"; }
warn() { printf "${YELLOW}⚠ %s${RESET}\n" "$*"; }
error() {
  printf "${RED}✗ %s${RESET}\n" "$*"
  exit 1
}

prompt() { printf "${BOLD}%s${RESET}" "$*"; }

# --- Interactive prompts ---

header "Rawfeed Jekyll Starter - Setup"
echo ""
echo "Choose how to use Rawfeed Jekyll:"
echo "  [1]  Local (install Ruby, Node.js, etc. on your machine)"
echo "  [2]  Docker (isolated container, no host dependencies)"
echo ""

prompt "> "
read -r INSTALL_MODE

case "$INSTALL_MODE" in
1 | local | Local | LOCAL) INSTALL_MODE="local" ;;
2 | docker | Docker | DOCKER) INSTALL_MODE="docker" ;;
*) error "Invalid option. Please choose 1 or 2." ;;
esac

echo ""

prompt "What is the name of your website/project? [default: my-site] "
read -r SITE_DIR
SITE_DIR="${SITE_DIR:-my-site}"
SITE_DIR=$(printf "%s" "$SITE_DIR" | tr ' ' '-')

# --- Prerequisites ---

header "Checking prerequisites..."

command -v git >/dev/null 2>&1 || error "Git is not installed. Please install Git first."
ok "Git found"

if [ "$INSTALL_MODE" = "docker" ]; then
  command -v docker >/dev/null 2>&1 || error "Docker is not installed."
  ok "Docker found"

  if docker compose version >/dev/null 2>&1; then
    ok "Docker Compose found"
  else
    error "Docker Compose (docker compose) is not available."
  fi
else
  command -v ruby >/dev/null 2>&1 || error "Ruby is not installed. Please install Ruby >= 3.2."
  ruby_version=$(ruby --version 2>/dev/null | awk '{print $2}' | awk -F'[p-]' '{print $1}')
  ruby --version 2>/dev/null | awk '{
        split($2, v, /[p-]/)
        split(v[1], parts, ".")
        if (parts[1] > 3) exit 0
        if (parts[1] == 3 && parts[2] >= 2) exit 0
        exit 1
    }' >/dev/null 2>&1 || error "Ruby version must be >= 3.2. Found: $ruby_version"
  ok "Ruby $ruby_version found"

  command -v gem >/dev/null 2>&1 || error "RubyGems (gem) is not installed."
  ok "RubyGems found"

  command -v node >/dev/null 2>&1 || error "Node.js is not installed."
  ok "Node.js found"

  command -v npm >/dev/null 2>&1 || error "npm is not installed."
  ok "npm found"

  if ! command -v bundler >/dev/null 2>&1; then
    info "Installing Bundler..."
    gem install bundler || error "Failed to install Bundler."
  fi
  ok "Bundler found"
fi

echo ""
info "All prerequisites satisfied!"
echo ""

# --- Clone ---

if [ -d "$SITE_DIR" ]; then
  error "Directory '$SITE_DIR' already exists. Remove it or specify a different name."
fi

info "Cloning Rawfeed Jekyll Starter into '$SITE_DIR'..."
git clone --depth=1 "$REPO_URL" "$SITE_DIR" || error "Failed to clone repository."
ok "Repository cloned"

cd "$SITE_DIR" || error "Failed to enter directory '$SITE_DIR'."

info "Removing .git history..."
rm -rf .git
ok "Clean slate ready"

# --- Install ---

if [ "$INSTALL_MODE" = "docker" ]; then
  header "Setting up Docker environment..."
  echo ""
  info "Building Docker image and installing dependencies..."
  docker compose build || error "Docker build failed."
  ok "Docker image built (dependencies pre-installed)"

  echo ""
  printf "%s%s✓ Setup complete!%s\n" "$GREEN" "$BOLD" "$RESET"
  echo ""
  echo "  Next steps:"
  echo "    cd $SITE_DIR"
  echo "    docker compose up"
  echo "    Open http://localhost:4000 in your browser"
  echo ""
else
  header "Installing dependencies locally..."
  echo ""
  info "Installing dependencies (npm + bundler)..."
  npm install || error "Failed to install dependencies."
  ok "Dependencies installed"

  echo ""
  printf "%s%s✓ Setup complete!%s\n" "$GREEN" "$BOLD" "$RESET"
  echo ""
  echo "  Next steps:"
  echo "    cd $SITE_DIR"
  echo "    npm run help    # See available commands"
  echo "    npm run serve   # Start the development server"
  echo ""
fi
