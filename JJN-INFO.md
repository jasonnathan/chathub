# JJN-INFO: CHATHUB  

## Purpose  
ChatHub is basically the **Swiss Army knife of chatbot clients**, except instead of a corkscrew and a tiny saw, it comes loaded with **ChatGPT, Bing Chat, Bard, Claude, LLaMA, and a bunch of AI models I've never actually used**. Instead of flipping between a million different chatbot UIs like a fool, this **browser extension** lets me chat with **multiple AI models simultaneously** in one place.  

Because why settle for **one hallucinating AI** when I can have **five hallucinating at the same time?**  

---

## Key Features (aka Why I Bothered Installing This)  

### 🔥 Multiple AI Models in One App  
- Lets me talk to **ChatGPT, Bing Chat, Google Bard, Claude 2, LLaMA 2**, and various open-source models.  
- **Side-by-side comparisons** so I can see which bot lies the best.  

### 📝 Markdown & Code Highlighting  
- Markdown rendering means **no ugly formatting nightmares**.  
- Code blocks actually **look like code** instead of a jumbled mess.  

### 📜 Local Conversation History  
- Saves chat history **locally** (no cloud storage nonsense).  
- I can **export/import** my chats because, apparently, I like hoarding AI conversations.  

### ⚡ Prompt Library  
- **Reusable prompts** because I’m tired of typing the same thing over and over again.  
- Supports **GPT-4 Browsing, Claude API, and Azure OpenAI Service** for added flexibility.  

### 🌙 Customizable UI (Because Default Light Mode is a War Crime)  
- Supports **themes and dark mode** so my eyes don’t burn.  
- Extensions for **browser integration** and **quick access**.  

---

## Supported AI Models (Or, How Many Bots Can Annoy Me at Once?)  

- **ChatGPT** (Webapp/API/Azure/Poe)  
- **Bing Chat**  
- **Google Bard**  
- **Claude 2** (Webapp/API/Poe)  
- **LLaMA 2**  
- **ChatGLM**  
- **Vicuna**  
- **iFlytek Spark**  
- **Tongyi Qianwen**  
- **Baichuan**  
- **WizardLM**  
- **Pi by Inflection**  

I only know half of these, but I guess it’s nice to have options?  

---

## Project Structure (So I Remember Where Everything Lives)  

```plaintext
.
├── dist/                # Compiled browser extension files  
├── mock_server/         # Fake API responses for testing  
├── screenshots/         # UI previews (for when I forget what it looks like)  
├── src/                 # The actual source code  
│   ├── app/             # Core UI components  
│   ├── background/      # Background script logic  
│   ├── content-script/  # Injects scripts into web pages  
│   ├── services/        # Handles chatbot communication  
│   ├── utils/           # Helper functions  
│   ├── rules/           # Defines bot behaviors  
└── package.json         # Dependencies and scripts  
```

---

## Custom Branch: `stashed`  
I have a custom **`stashed`** branch where I’ve been making **weird experimental modifications** that:  
1. **Might break everything**  
2. **Might make things awesome**  

These mods include **UI tweaks, extra bot integrations, and general chaos**. No guarantees it won’t explode.  

---

## Dependencies  
- **Built with:**  
  - **TypeScript + Vite** (because React wasn’t bloated enough)  
  - **TailwindCSS** (for stylish but lazy CSS)  
- **Package Manager:**  
  - Uses **`yarn`** instead of npm, because why make things easy?  
- **Key Libraries:**  
  - **`katex`** → Math formulas, for the three times I’ll use them.  
  - **`sse`** → Handles live streaming responses.  
  - **`obsidian`** → Because **Markdown rules my life now**.  

---

## Installation (aka How to Get This Working Without Crying)  

### 🏗 Manual Installation  
1. **Download** `chathub.zip` from [Releases](https://github.com/chathub-dev/chathub/releases).  
2. **Extract it.**  
3. **Load the `dist` folder** as an **unpacked extension** in Chrome or whatever browser I’m using this week.  

### 🔨 Building from Source (When I Feel Like Overcomplicating My Life)  
1. Clone the repo and switch to the right branch:  
   ```bash
   git clone https://github.com/chathub-dev/chathub.git
   cd chathub
   git checkout stashed  # Because of course I made my own branch  
   ```
2. Install dependencies:  
   ```bash
   corepack enable  
   yarn install  
   ```
3. Build it:  
   ```bash
   yarn build  
   ```
4. Load the **`dist` folder** as an unpacked extension in the browser.  

---

## Final Thoughts (To Future Me, From Past Me)  

- This thing is actually **useful as hell**. I don’t have to **switch between 50 chatbot UIs anymore**.  
- If it **breaks**, I probably messed with something in `stashed`—check there first.  
- Maybe **add voice input** later? Or don’t. I talk enough as it is.  
- If I uninstall it, I’ll regret it in a week. **DON’T DELETE IT.**  

💡 **Final Note:**  
_"If you’re debugging this at 2 AM, maybe you should just sleep instead."_