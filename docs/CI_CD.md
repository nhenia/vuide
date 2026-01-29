# CI/CD Workflows

The project uses GitHub Actions for automation.

## Workflows
- **CI**: Runs on every push/PR to validate tests and build.
- **Deployment**: Deploys the app to GitHub Pages on every push to `main`. **Note**: In your repository settings, ensure that "Settings" > "Pages" > "Build and deployment" > "Source" is set to **"GitHub Actions"**.
- **Build Failure Handling**: Automatically creates a GitHub Issue if the build fails, assigned to Jules.
- **Auto-Merge**: Automatically merges bug-fix PRs from Jules once CI passes.
- **Runtime Error Reporting**: Receives error reports from the client and creates GitHub Issues.
