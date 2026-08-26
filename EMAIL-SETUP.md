# Connecting the Contact Form to a Real Business Email

Your site is static (plain HTML/CSS/JS, hosted on GoDaddy) — there's no
server to receive form POSTs the traditional way. This project uses
**EmailJS**, which lets a static site send real emails straight from the
visitor's browser to your inbox, no backend required. It's a normal,
widely-used approach for exactly this situation and has a free tier
(200 emails/month) that's plenty for an enquiry form.

Until you complete this setup, the form falls back to opening the
visitor's own email client with the enquiry pre-filled — so nothing is
broken in the meantime, it's just a manual step for them instead of
automatic.

## 1. Buy the business email on GoDaddy

1. In your GoDaddy account, go to **Email & Office** → add a
   **Professional Email** (or Microsoft 365) plan for your domain, e.g.
   `enquiries@xendpaysolutions.com`.
2. Finish setup and make sure you can log into that mailbox (webmail or
   an email client) before moving on — you'll need its SMTP details in
   step 3.
3. Update `COMPANY_EMAIL` in `src/data/content.js` to this new address
   (currently set to `info@xendpaysolutions.com` — change it to whatever
   address you actually bought).

## 2. Create a free EmailJS account

1. Go to [emailjs.com](https://www.emailjs.com) → sign up.
2. **Email Services** → **Add New Service** → choose **Other SMTP**
   (not Gmail/Outlook, since you want your own GoDaddy address to be the
   sender).
3. Enter your GoDaddy mailbox's SMTP details — GoDaddy's Professional
   Email SMTP is typically `smtpout.secureserver.net`, port `465` (SSL),
   using the mailbox's own email + password as credentials. Confirm the
   exact host/port in GoDaddy's Email & Office settings, since it can
   vary slightly by plan.
4. Save the service — copy the **Service ID** it gives you.

## 3. Create the email template

1. **Email Templates** → **Create New Template**.
2. Set the "To" field to your business email, and build the body using
   these variable names (they match what the code sends):
   `{{from_name}}`, `{{company}}`, `{{business_email}}`, `{{mobile}}`,
   `{{business_type}}`, `{{message}}`
3. Save — copy the **Template ID**.
4. Go to **Account** → **General** and copy your **Public Key**.

## 4. Wire the keys into the project

1. In the project root, copy `.env.example` to a new file named `.env`.
2. Fill in the three values you copied:
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
   ```
3. `.env` is already git-ignored — these stay local to your machine and
   won't get pushed to GitHub or bundled anywhere public by accident.

## 5. Rebuild and redeploy

```
npm run build
```

Then re-upload the new `dist/` contents to GoDaddy as usual (see
README-DEPLOY.md). From then on, form submissions land directly in your
GoDaddy business inbox — no email client popup needed.

## Testing it

Fill out the form on `/contact` yourself once deployed (or via
`npm run dev` with `.env` in place) and confirm the email actually
arrives — check spam on the first attempt, since a brand-new sending
domain sometimes lands there until it builds a little sending history.
