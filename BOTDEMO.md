# How to create Bot demo page

## Set up dev environment

Install git:
https://git-scm.com/downloads

Install Node.js:
https://nodejs.org/en

Clone repository:
```bash
git clone https://github.com/enegelai/landing-v1.git
```

Install dependencies:
```bash
cd landing-v1
npm install
```

Start development server:
```bash
npm run dev
```

You should see:
```
 vitepress v1.0.0-rc.31

  ➜  Local:   http://localhost:5176/
  ➜  Network: use --host to expose
  ➜  press h to show help

```

Navigate to http://localhost:5176/ in your browser. 
You will see enegel.ai web site. 
You can open any bot demo page by navigating to "http://localhost:5176/bot/[bot_page_name].html"

For example:
http://localhost:5176/bot/ticketspice_amadorvintners_bot.html

See all available bot pages in the "public/bot" folder.


## Create new bot demo page

Make a copy of any page in the `public/bot` folder to a new file in the same folder, i.e. "new_bot_file_name.html" 

In the new file, update bot widget parameters - `bot-id`, `org-id`, `logo-url`, `name`.
Update logo and colors as desired.

```html
    <!-- Enegel.ai bot widget begin -->
    <link href="https://unpkg.com/@enegelai/bot-widget/dist/enegelaibot.css" rel="stylesheet">
    <script src="https://unpkg.com/@enegelai/bot-widget/dist/enegelaibot.umd.js" type="text/javascript" async></script>
    <style>
        enegelai-bot {
            --enegelai-bot-header-color: rgba(255, 255, 255, 0.9);
            --enegelai-bot-header-background: rgba(199,170,112, 1);
            --enegelai-bot-message-user-background: rgba(199,170,112, 1);
            --enegelai-bot-anchor-background: rgba(199,170,112, 1);
            --enegelai-bot-anchor-border-color: rgba(199,170,112, 1);
            --enegelai-bot-form-submit-background: rgba(199,170,112, 1);
            --enegelai-bot-form-submit-border: rgba(199,170,112, 1);
            --enegelai-bot-popup-min-height: 60px;
        }
    </style>
    <script>
        (function() {
            var el = document.createElement('enegelai-bot');
            el.setAttribute('name', '');
            el.setAttribute('url', 'bot-service.enegel.ai');
            el.setAttribute('org-id', 'webconnex');
            el.setAttribute('bot-id', 'm3k30ujjen');
            el.setAttribute('logo-url', 'https://amadorwine.com/wp-content/uploads/2023/03/amador-vintners-logo.png');
            document.body.appendChild(el);
        })();
    </script>
    <!-- Enegel.ai bot widget end -->
```

Update text on page to proper customer name.
Save file.

Now you can open  "http://localhost:5176/bot/new_bot_file_name.html" to test it locally.

## Deploy changes

Stop development server.

Commit changes to git:
```bash
git add .
git commit -m "New bot test page"
git push
```

This will rebuild and publish updated website, including new bot test page.
Wait couple of minutes.
Navigate to "https://enegel.ai/bot/new_bot_file_name.html" to see updated page.