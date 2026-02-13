# $20 Restaurant Website - "Free WordPress Template"

## Project Overview

**Budget**: $20
**Target**: Ultra-budget, thrown together in minutes
**Development Time**: 30 minutes - 1 hour
**Best For**: Placeholder, "something is better than nothing"

**Vibe**: A free WordPress template with default content, zero customization, hosted on slow free hosting.

---

## Concept

This simulates what a $20 website actually looks like in the real world:
- Someone found a free WordPress theme
- Installed it on free hosting
- Changed the logo and some text
- Left all default content and placeholder images
- Slow, bloated, unoptimized

### Realism Factors

To accurately represent a $20 website:
1. **Artificial Delays**: Add 3-5 second delays to simulate slow free hosting
2. **Bloat**: Include unnecessary assets (unused CSS, JavaScript, images)
3. **Default Content**: Leave placeholder text and images
4. **No Optimization**: No image compression, no minification
5. **Generic Template Look**: Obvious template design with minimal customization

---

## Technical Specifications

### Stack (Simulated)
- **Frontend**: Next.js (mimicking a WordPress template look)
- **Backend**: None
- **Hosting**: Vercel (but will add delays to simulate free hosting)

### Actual Implementation
We use Next.js but style it to look like a generic WordPress template and add artificial delays.

---

## Artificial Delays

### Configuration
```typescript
// lib/delays.ts
export const DELAYS = {
  // Simulate slow free hosting
  pageLoad: 3000,        // 3 second initial load
  imageLoad: 2000,       // 2 second image delays
  contentRender: 1000,   // 1 second content delay
  navigation: 1500,      // 1.5 second page transitions
};
```

### Delay Implementation
```typescript
// app/page.tsx
async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function HomePage() {
  // Simulate slow server response
  await delay(DELAYS.pageLoad);
  
  return (
    <div className="wordpress-template">
      {/* Content */}
    </div>
  );
}
```

### Client-Side Delays
```typescript
// components/DelayedImage.tsx
'use client';

import { useState, useEffect } from 'react';

export function DelayedImage({ src, alt, delay = 2000 }) {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  if (!loaded) {
    return <div className="image-placeholder loading-shimmer" />;
  }
  
  return <img src={src} alt={alt} />;
}
```

---

## Design Specifications

### WordPress Template Aesthetic
```css
/* Generic WordPress Theme Styles */

/* Classic WordPress template colors */
--template-blue: #21759b;      /* Default WordPress admin blue */
--template-dark: #333333;
--template-light: #f1f1f1;
--template-white: #ffffff;
--template-gray: #666666;

/* Default WordPress fonts */
font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;

/* Generic template spacing */
padding: 20px; /* Always 20px, everywhere */

/* Classic WordPress shadows */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
```

### Template Page Layout
```
┌─────────────────────────────────────────────────────────┐
│  [HEADER]                                               │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Site Title (default: "My Website")             │   │
│  │  Home | About | Contact | Sample Page          │   │
│  └─────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────┤
│  [CONTENT AREA]                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Featured Image (placeholder or stock photo)    │   │
│  ├─────────────────────────────────────────────────┤   │
│  │  Hello world!                                   │   │
│  │                                                 │   │
│  │  Welcome to WordPress. This is your first post. │   │
│  │  Edit or delete it, then start writing!        │   │
│  │                                                 │   │
│  │  [Continue Reading...]                          │   │
│  └─────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────┤
│  [SIDEBAR]                                              │
│  ┌───────────┐                                         │
│  │ Search... │                                         │
│  ├───────────┤                                         │
│  │ Recent    │                                         │
│  │ Posts     │                                         │
│  ├───────────┤                                         │
│  │ Archives  │                                         │
│  ├───────────┤                                         │
│  │ Meta      │                                         │
│  │ - Login   │                                         │
│  │ - Entries │                                         │
│  └───────────┘                                         │
├─────────────────────────────────────────────────────────┤
│  [FOOTER]                                               │
│  Proudly powered by WordPress                           │
└─────────────────────────────────────────────────────────┘
```

---

## Features (Lack Thereof)

### What's "Included"
- [x] Default WordPress theme layout
- [x] Generic navigation with dummy links
- [x] Placeholder hero image
- [x] "Hello World" style content
- [x] Sidebar with default widgets
- [x] "Proudly powered by" footer
- [x] Comment section (non-functional)

### What's Missing (Intentionally)
- [ ] NO responsive design (fixed width)
- [ ] NO actual restaurant info
- [ ] NO menu
- [ ] NO contact form
- [ ] NO map
- [ ] NO customization
- [ ] NO SEO
- [ ] NO accessibility
- [ ] NO optimization

### Template Artifacts (Left Intentionally)
- Default WordPress navigation links (Sample Page, Hello World)
- "Leave a comment" text
- "Posted on [date] by [admin]"
- "Continue reading" links to nowhere
- Sidebar with "Recent Posts" showing default content
- "Log in" links
- Admin bar (simulated at top)

---

## Content (Default/Placeholder)

### Restaurant "Content"
```
Site Title: Bella Italia (changed, but font is wrong)

Home Page Content:
"Welcome to our restaurant website! We serve great food.
[Hero image: A blurry stock photo of food]

[Continue reading...]

Posted on January 1, 2024 by admin
Leave a comment
```

### Sidebar Widgets
```
Search: [Search...]
Recent Posts:
  - Hello world!
  - Sample Page
  
Archives:
  - January 2024
  
Categories:
  - Uncategorized
  
Meta:
  - Site Admin
  - Log out
  - Entries RSS
  - Comments RSS
  - WordPress.org
```

---

## Performance (Intentionally Poor)

### Target Metrics
- **Page Load**: 5-8 seconds (simulated)
- **Time to Interactive**: 8-10 seconds
- **Bundle Size**: Large (unoptimized)
- **Lighthouse Score**: 15-25

### Simulated Issues
```typescript
// Simulate slow hosting
export const slowHostingSimulation = {
  // Initial server response
  serverDelay: 3000,
  
  // Asset loading delays
  assetDelay: {
    css: 1000,
    js: 2000,
    images: 3000,
    fonts: 2500,
  },
  
  // Cumulative layout shifts
  layoutShifts: true,
  
  // Blocking resources
  blockingResources: [
    'generic-slider.js',      // Unused
    'jquery.min.js',          // Unnecessary
    'comment-reply.min.js',   // Non-functional
    'wp-embed.min.js',        // Unused
  ],
};
```

---

## Implementation

### File Structure
```
twenty_dollar_site/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── loading.tsx          # Slow loading state
├── components/
│   ├── WPLayout.tsx         # WordPress-like layout
│   ├── WPHeader.tsx         # Generic header
│   ├── WPSidebar.tsx        # Default sidebar
│   ├── WPFooter.tsx         # "Powered by" footer
│   ├── WPAdminBar.tsx       # Fake admin bar
│   └── DelayedImage.tsx     # Slow image loader
├── lib/
│   └── delays.ts            # Artificial delay config
├── public/
│   └── images/
│       ├── hero-placeholder.jpg
│       └── stock-food-blur.jpg
└── package.json
```

### Layout Component
```tsx
// components/WPLayout.tsx
import { WPAdminBar } from './WPAdminBar';
import { WPHeader } from './WPHeader';
import { WPSidebar } from './WPSidebar';
import { WPFooter } from './WPFooter';

export function WPLayout({ children }) {
  return (
    <div className="wordpress-wrapper">
      {/* Fake admin bar */}
      <WPAdminBar />
      
      {/* Container with fixed width (not responsive) */}
      <div className="site-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <WPHeader />
        
        <div className="content-wrapper">
          <main className="main-content">
            {children}
          </main>
          
          <WPSidebar />
        </div>
        
        <WPFooter />
      </div>
      
      {/* Bloated unused CSS/JS simulation */}
      <link rel="stylesheet" href="/fake-bloat.css" />
    </div>
  );
}
```

### Home Page
```tsx
// app/page.tsx
import { delay } from '@/lib/delays';
import { WPLayout } from '@/components/WPLayout';
import { DelayedImage } from '@/components/DelayedImage';

export default async function HomePage() {
  // Simulate slow hosting
  await delay(3000);
  
  return (
    <WPLayout>
      <article className="post">
        <DelayedImage 
          src="/images/hero-placeholder.jpg" 
          alt="Featured image"
          delay={2500}
        />
        
        <h1>Welcome to Bella Italia</h1>
        
        <div className="entry-meta">
          <span>Posted on January 1, 2024</span>
          <span> by <a href="#">admin</a></span>
        </div>
        
        <div className="entry-content">
          <p>
            Welcome to our restaurant website! We serve great Italian food.
            This is a placeholder paragraph that would normally have actual 
            information about the restaurant.
          </p>
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            This is what happens when you don't customize your template.
          </p>
          
          <p className="read-more">
            <a href="#">Continue reading...</a>
          </p>
        </div>
        
        <div className="comments-area">
          <h3>Leave a comment</h3>
          <p className="no-comments">Comments are closed.</p>
        </div>
      </article>
    </WPLayout>
  );
}
```

---

## CSS (Generic Template Style)

```css
/* app/globals.css */

/* Reset that every WordPress theme has */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  background: #f1f1f1;
}

/* Fixed width container */
.site-container {
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Header */
.site-header {
  padding: 20px;
  border-bottom: 1px solid #e5e5e5;
}

.site-title {
  font-size: 28px;
  font-weight: normal;
  color: #21759b;
}

.main-navigation ul {
  list-style: none;
  padding: 20px;
  background: #21759b;
}

.main-navigation a {
  color: white;
  text-decoration: none;
  padding: 10px 15px;
}

/* Content area */
.content-wrapper {
  display: flex;
  gap: 20px;
  padding: 20px;
}

.main-content {
  flex: 1;
}

/* Sidebar */
.sidebar {
  width: 300px;
  padding: 20px;
  background: #f9f9f9;
}

.widget {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e5e5e5;
}

.widget-title {
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 10px;
  color: #666;
}

/* Footer */
.site-footer {
  padding: 20px;
  text-align: center;
  background: #333;
  color: #999;
  font-size: 14px;
}

/* Loading shimmer */
.loading-shimmer {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Entry meta */
.entry-meta {
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
}

/* Read more */
.read-more a {
  display: inline-block;
  padding: 8px 16px;
  background: #21759b;
  color: white;
  text-decoration: none;
  border-radius: 3px;
}

/* Comments area */
.comments-area {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #e5e5e5;
}

.no-comments {
  font-style: italic;
  color: #666;
}
```

---

## Checklist

- [ ] Create WordPress-like layout components
- [ ] Add artificial delays (3-5 seconds)
- [ ] Include placeholder/stock images
- [ ] Add default WordPress sidebar
- [ ] Include "Powered by WordPress" footer
- [ ] Add fake admin bar at top
- [ ] Include non-functional comment section
- [ ] Add meta "Posted by admin"
- [ ] Include unused CSS/JS files
- [ ] No responsive design
- [ ] Generic blue color scheme

---

## The $20 Website Experience

When someone visits this site, they should experience:
1. **3-5 second blank screen** while "loading"
2. **Default WordPress appearance** - obvious template
3. **Placeholder content** - clearly not customized
4. **Broken/missing features** - links go nowhere
5. **No mobile optimization** - scroll horizontally on phone
6. **Generic branding** - could be any business
7. **"Where's the menu?"** - not included
8. **"How do I contact them?"** - not included

This is what $20 actually buys you in the real world.
