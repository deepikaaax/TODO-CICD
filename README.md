# Secure ToDo App (example)

This repository contains a minimal to-do app with CI configured to build, test and perform dependency scanning using Trivy. Push to GitHub to run the workflow in `.github/workflows/ci.yml`.

See the `Dockerfile` for a multi-stage build and non-root runtime. Enable Dependabot and CodeQL in repository settings for extra coverage.
