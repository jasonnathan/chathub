# JJN-INFO: CHATHUB

## Overview

ChatHub is an all-in-one chatbot client that integrates multiple chatbots into a single browser extension. It supports several popular bots such as ChatGPT, Bing Chat, Google Bard, Claude, and various open-source models like LLaMA 2 and Vicuna. The extension allows simultaneous conversations with multiple bots for comparison, local storage of chat history, Markdown export, and various customization options.

## Features

- Use different chatbots in one app, including ChatGPT, Bing Chat, Google Bard, Claude, and open-source models.
- Compare answers from multiple chatbots simultaneously.
- Markdown and code highlight support for rendered chat output.
- Conversation history is saved locally with options to export and import.
- Built-in prompt library for quick and reusable prompts.
- Customizable front-end features like themes and dark mode.
- Support for GPT-4 Browsing, Claude API, and Azure OpenAI Service.
- Extensions for browser integration and quick access.

## Supported Bots

- ChatGPT (via Webapp/API/Azure/Poe)
- Bing Chat
- Google Bard
- Claude 2 (via Webapp/API/Poe)
- LLaMA 2
- ChatGLM
- Vicuna
- iFlytek Spark
- Tongyi Qianwen
- Baichuan
- WizardLM
- Pi by Inflection

## File Structure

- **dist/**: Contains the built files for the browser extension, including the necessary assets and configuration files.
- **mock_server/**: Includes API mock files for testing purposes.
- **screenshots/**: Provides visual previews of the extension in light and dark modes.
- **src/**: Contains the source code organized into modules such as:
  - **app/**: Main application logic and UI components.
  - **background/**: Background script logic.
  - **content-script/**: Browser content script integration.
  - **services/**: Services for bot communication and data handling.
  - **utils/**: Utility functions and helpers.
  - **rules/**: Logic for specific chatbot behaviors or integration.

## Custom Branch: `stashed`

The `stashed` branch includes custom modifications and experimental features tailored to my use cases. These may include UI changes, additional bot integrations, or alternative approaches to certain workflows. While functional, the branch might not adhere strictly to upstream conventions.

## Dependencies

- Built with TypeScript and Vite.
- Uses TailwindCSS for styling.
- Relies on `yarn` for dependency management.
- Key libraries include:
  - `katex`: For rendering math formulas.
  - `sse`: For server-sent events handling.
  - `obsidian`: For Markdown-based front-end customization.

## Notes on Installation

- **Manual Installation**:
  1. Download the `chathub.zip` file from the [Releases page](https://github.com/chathub-dev/chathub/releases).
  2. Extract the files and load the `dist` folder as an unpacked extension in the browser.
- **Building from Source**:
  1. Clone the repository and switch to the desired branch.
  2. Run `corepack enable`, followed by `yarn install` and `yarn build`.
  3. Load the `dist` folder as an unpacked extension.
