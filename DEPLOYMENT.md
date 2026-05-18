# Rythm's Musical Bot - deployment

## Variables

Set these environment variables on Render. Do not commit a real token.

```env
TOKEN=your_discord_bot_token_here
BOT_NAME=Rythm's Musical Bot
MAX_PLAYLIST_SIZE=10
PRUNING=false
LOCALE=fr
STAY_TIME=30
DEFAULT_VOLUME=100
```

## Discord Developer Portal

In the Discord Developer Portal, set the bot username to `Rythm's Musical Bot`.

Enable this privileged intent:

- Message Content Intent

Invite the bot with these scopes:

- `bot`
- `applications.commands`

Recommended bot permissions:

- Send Messages
- Embed Links
- Use Slash Commands
- Connect
- Speak
- Use Voice Activity

## Render

Use this project as a Render Background Worker.

Render does not provide the free instance type for background workers. If you omit the plan, Render currently defaults new worker services to `starter`.

Build command:

```sh
npm ci && npm run build
```

Start command:

```sh
node ./dist/index.js
```

The included `render.yaml` already contains these settings. Add `TOKEN` in Render's Environment tab.

## Vercel

Vercel is not a good host for this music bot because Discord music bots need a long-running process connected to Discord voice. Vercel runs serverless functions that stop after each request, so the bot will not stay online there.

Use Render for the live bot. Keep Vercel only if you later add a separate dashboard or website for the bot.
