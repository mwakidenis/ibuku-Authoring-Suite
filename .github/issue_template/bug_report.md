name: Bug Report
description: File a bug report for ibuku
title: "[Bug] "
labels: ["bug", "triage"]
body:
  - type: markdown
    attributes:
      value: |
        Thank you for helping improve ibuku! Please fill out this form completely.

  - type: input
    id: version
    attributes:
      label: Version
      description: What version of ibuku are you using?
      placeholder: "1.0.1"
    validations:
      required: true

  - type: input
    id: platform
    attributes:
      label: Platform / OS
      description: Which operating system are you running ibuku on?
      placeholder: "Windows 11 / macOS Sonoma / Web"
    validations:
      required: true

  - type: textarea
    id: description
    attributes:
      label: Description
      description: What happened? What did you expect to happen?
      placeholder: "Describe the bug clearly and concisely."
    validations:
      required: true

  - type: textarea
    id: steps
    attributes:
      label: Steps to Reproduce
      description: Steps to reproduce the behavior.
      placeholder: |
        1. Go to '...'
        2. Click on '....'
        3. Scroll down to '....'
        4. See error
    validations:
      required: true

  - type: textarea
    id: expected
    attributes:
      label: Expected Behavior
      description: What did you expect to see?
    validations:
      required: true

  - type: textarea
    id: actual
    attributes:
      label: Actual Behavior
      description: What actually happened?
    validations:
      required: true

  - type: textarea
    id: logs
    attributes:
      label: Console Logs / Error Output
      description: Relevant log output, stack traces, or error messages.
      render: shell
    validations:
      required: false

  - type: checkboxes
    id: terms
    attributes:
      label: Code of Conduct
      description: By submitting this issue, you agree to follow our [Code of Conduct](CODE_OF_CONDUCT.md).
      options:
        - label: I agree to follow this project's Code of Conduct
          required: true
