# 🌸 Vaishnavi Event Planners — Website

A beautiful, modern static website for Vaishnavi Event Planners, Nizamabad, Telangana.

## 📁 Folder Structure

```
vaishnavi-events/
├── index.html          ← Main website (all sections)
├── css/
│   └── style.css       ← All styles (responsive, animations)
├── js/
│   └── main.js         ← Navbar, scroll, gallery, lightbox, counters
├── images/             ← Add your own event photos here
└── README.md           ← This file
```

## 🚀 How to Use

### Local Preview
Just open `index.html` in your browser — no server needed!

### Deploy to GitHub Pages
1. Push this folder to a GitHub repository
2. Go to **Settings → Pages → Source: main branch / root**
3. Your site will be live at `https://yourusername.github.io/repo-name`

### Deploy to Netlify
1. Drag & drop this entire folder onto [netlify.com/drop](https://app.netlify.com/drop)
2. Your site is instantly live with a free URL!

---

## ✏️ How to Customize

### 1. Update Phone Number
Search and replace `+919000000000` with your real phone number in both:
- `index.html` (all `href="tel:..."` and `href="https://wa.me/..."` links)

### 2. Add Real Photos
- Place your event photos in the `images/` folder
- In `js/main.js`, find the `galleryData` array and replace the `src` URLs with `images/your-photo.jpg`

### 3. Update Social Media Links
In `index.html`, find the social links section in the footer and replace:
- `https://instagram.com` → your Instagram URL
- `https://facebook.com` → your Facebook URL

### 4. Change Business Details
Edit the Contact section in `index.html` for phone, address, hours.

### 5. Update Map Location
Replace the Google Maps embed `src` URL with one pointing to your exact address:
1. Go to [Google Maps](https://maps.google.com)
2. Search "Kumar Gali, Nizamabad"
3. Click **Share → Embed a map → Copy HTML**
4. Replace the `<iframe src="...">` in `index.html`

---

## 🎨 Color Scheme (CSS Variables in `style.css`)

| Variable       | Color    | Usage             |
|---------------|----------|-------------------|
| `--gold`      | #C9973A  | Primary accent    |
| `--rose`      | #C2526B  | Secondary accent  |
| `--deep`      | #1A0A2E  | Dark backgrounds  |
| `--cream`     | #FDF8F0  | Light backgrounds |

---

## 📱 Features

- ✅ Fully mobile responsive
- ✅ Smooth scroll navigation
- ✅ Sticky navbar with scroll effect
- ✅ Animated scroll reveal
- ✅ Gallery with lightbox (click to enlarge)
- ✅ Animated stats counters
- ✅ Floating WhatsApp button
- ✅ Google Maps embed
- ✅ SEO friendly headings & meta tags
- ✅ No libraries / frameworks required — pure HTML, CSS, JS

---

*Built with ❤️ for Vaishnavi Event Planners, Nizamabad*
