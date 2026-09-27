# Academic homepage template: publishing and maintenance

This folder is the whole website. There is no build step: open `index.html` in a browser and it runs. Everything personal lives in `config.js`; the rest is a reusable template.

```
index.html   page skeleton, styles and rendering logic (rarely needs touching)
config.js    all the content: intro, News, Research, papers, figure gallery, collaborators, footer
admin.html   the editor: fill in forms, upload images, save config.js, preview
figures/     paper figures (PNG), referenced from config.js by relative path
photo/       portrait (portrait_web.jpg), school logo, favicons
publish.sh   one command to push everything to GitHub Pages
```

## 1. Publishing (GitHub Pages)

GitHub serves a repository named `<username>.github.io` at **https://<username>.github.io**. Create that repository (public), then set the `REMOTE` line at the top of `publish.sh` to its SSH address.

Every time you change something, run in Terminal:

```bash
cd /path/to/homepage
bash publish.sh "what changed"
```

The script initialises git on first run, ignores the 4 MB original portrait, commits everything and pushes. The live site updates within one or two minutes; if your browser still shows the old version, force-reload with ⌘⇧R.

One-time setup for a fresh repository: repository **Settings → Pages**, Source = *Deploy from a branch*, Branch = `main`, folder = `/ (root)`, Save.

If `publish.sh` fails with `Permission denied (publickey)`, this Mac has no SSH key registered with GitHub yet:

```bash
ssh-keygen -t ed25519 -C "you@example.edu"   # press Enter through the prompts
cat ~/.ssh/id_ed25519.pub
```

Copy the printed line into GitHub → profile picture → Settings → SSH and GPG keys → New SSH key, then run `publish.sh` again. If `git` itself is missing, run `xcode-select --install` first.

Alternative without any terminal: on the repository page use **Add file → Upload files** and drag in everything except `photo/portrait.jpg`.

## 2. Editing content (admin.html, Chrome or Edge)

1. Double-click `admin.html`.
2. First time only: click **Connect site folder** (top right), pick this `homepage` folder and allow read/write. The browser remembers it.
3. Use the left sidebar to switch between sections: Profile, News, Research, Publications, Selected figures, Collaborators, Footer.
4. Click **Save to folder** when done (writes `config.js` in place), then run `publish.sh`.

Lists (News, Publications, Selected figures, Collaborators) all work the same way: only the first *N* entries are shown on the site (set *N* in "show the first N"), the rest are tucked behind **Manage others**; **Add** inserts at the top and opens the new entry; each entry collapses to a one-line summary and expands on click; every entry has move-up, move-down and delete. Old entries never need deleting: lower *N* and they disappear from the site, raise it and they come back.

Text fields accept a little markup: `**bold**`, `[text](url)` for links, an empty line for a paragraph break (intro only). In the intro, `{school}` and `{advisor}` expand to the school and advisor links set below it.

Refresh `admin.html` before saving if it has been open for a long time, otherwise an old copy of the form can overwrite fields that were added later.

Safari cannot write files from a web page: there, upload images by copying them into `figures/` by hand, type the path, and use **Download config.js** to replace the file.

## 3. Adding a paper

1. Publications → **Add paper**. Fill in title, authors (comma-separated; every occurrence of your own name is bolded automatically, `*` for equal contribution is fine), venue and year.
2. **Cover image** → **Upload image**: pick a white-background PNG (a teaser or pipeline figure works best). It is saved into `figures/`, the path is filled in and a thumbnail appears. The list shows covers in a fixed 3:2 frame (about 140 × 86 px), cropped from the top, so landscape images or a pre-cropped 3:2 image look best; a tall figure will only show its top part.
3. Links, one per line: `PDF | https://…`, `Code | https://…`, `Project | https://…`.
4. Optionally add the same figure to Selected figures so it also drifts through the gallery.
5. **Save to folder**, then `bash publish.sh "add paper"`.

## 4. Images

- New figures go into `figures/`; any file name is fine. Use white-background PNG: the page blends white into whatever sits behind it, so the figure looks printed on the page rather than pasted on.
- The Research card takes its background colour from the figure itself. Leave "Card colour" empty or `auto` to sample the figure's edge colour on load, click **Pick from image** to store an explicit value, or type `none` for the default grey.
- The portrait is `photo/portrait_web.jpg`, 4:5 portrait orientation, cropped so the head sits in the top fifth. Replace the file to change it.
- The school logo goes in `photo/` (transparent PNG or SVG) with its path set in Profile → School; it appears inline before the school name in the intro.
- Favicons (`photo/favicon-*.png`, `photo/apple-touch-icon.png`) are circular crops of the portrait. Regenerate them if the portrait changes.

## 5. The "Ask about a figure" form

The button under the figure gallery opens a short form (topic, what the paper is about, what is needed, email). The site is static and cannot send mail by itself, so there are two ways to receive submissions:

- **Recommended: Formspree (free).** Sign up at https://formspree.io with your email, create a form, copy its endpoint (`https://formspree.io/f/xxxxxxxx`) into Selected figures → "Form endpoint" in admin.html, save and publish. Each submission arrives in your inbox with the four fields; replying goes straight to the visitor. The free tier allows 50 submissions a month.
- **No service:** leave the endpoint empty. Clicking Send opens the visitor's own mail app with you as recipient and the four fields already in the body. This is also the automatic fallback if Formspree does not respond.

## 6. The Like button

The heart in the top bar keeps a shared counter through a free public counter service (abacus.jasoncameron.dev) under the namespace set in Profile → Like button; pick a namespace unique to your site. If the service is unreachable the page falls back to a per-browser count so nothing breaks. The messages that pop up on click ("Accept!", "Best paper", …) are editable, one per line. Changing the namespace restarts the count from zero.

## 7. Notes

- `admin.html` is published along with the site. It is only a form: it holds no secrets and cannot change the live site from the browser, but if you would rather keep it private, leave it out when uploading and use it locally.
- Custom domain: add a `CNAME` file containing the domain to the repository root and point a DNS CNAME record at `<username>.github.io`.
- Starting from scratch: replace the portrait in `photo/`, the figures in `figures/`, and edit `config.js` (name, email, links, texts) through `admin.html`. Nothing else references personal data.
