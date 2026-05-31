export const bugs = [
  {
    id: "B1",
    title: "Feature Card Carousel Lifts Up on Scroll — Broken Animation",
    body: `The horizontal scrolling feature cards section ("Telephony", "Reliability", "Scale", "AI Stack", "Dev-First", "Latency") has a scroll-triggered animation where the entire panel partially detaches from its container mid-animation. The layout breaks visibly during scrolling. For a technical buyer evaluating whether to trust this company with production infrastructure, this signals poor frontend quality.`,
    fix: `Replace with a simple horizontal scroll using CSS snap points (scroll-snap-type: x mandatory). No JavaScript needed, no layout bugs, works on all devices including mobile.`,
    source: "VocalLabs_HomePage.pdf p.7–9",
  },
  {
    id: "B2",
    title: "Talk to Expert — Noticeable Latency (Tested Live)",
    body: `Clicked "Talk to an Expert" on the homepage hero. The call connected and showed "Voice conversation active." But there was a significant response delay — the AI's replies felt well above 1.5–2 seconds. For a product whose core promise is "human-like fluency," this is a critical contradiction. Industry benchmark for production voice AI in 2026 is sub-500ms speech-to-speech latency.`,
    fix: `Prioritise latency optimisation for the homepage demo specifically — this is the highest-stakes first impression. Co-locate LLM, TTS, and ASR models to reduce pipeline latency (exactly what the homepage claims under "AI Stack: Host Your AI Models"). Alternatively, pre-warm the demo agent so the first response is near-instant.`,
    source: "VocalLabs_HomePage.pdf p.2",
  },
  {
    id: "B3",
    title: "No Sign Up / Login — Product Completely Inaccessible Without a Sales Call",
    body: `Searched for signup, login, or "start free trial" across every page — homepage, solutions, industries, docs, about, blog. There is no sign up, no login, no "Create account" button anywhere. The only path into the product is the demo form with a 24-hour response window. The homepage video shows a fully-built dashboard with agent creation, phone numbers, campaign management, and analytics. There's no public way to access it.`,
    fix: `Ship a self-serve signup with a free tier (e.g. 100 minutes/month, 1 agent). Add "Sign In" to the navbar. This single change unlocks product-led growth — developers and operators can try before they buy, which is how every successful competitor in this space acquires users.`,
    source: "All pages",
  },
  {
    id: "B4",
    title: "Blog Is 14 Pages of Generic SEO Content — No Original Insight",
    body: `The blog shows 14+ pages of posts — "The Definitive Guide to the Benefits of Conversational AI in Retail," "Best Replicant Alternatives," "What is Replicant?" — all published 4–15 days ago in rapid succession. Competitor brand names used as SEO hooks with no original analysis. No author photos or bios. Zero customer stories, zero founder perspectives, zero content only Vocallabs could write. The blog is linked prominently in the navbar — it's often the second page a prospect visits, and it actively damages trust.`,
    fix: `Remove Blogs from the primary navbar. Publish 1 case study ("How [anonymised client] reduced support call volume by X% using Vocallabs") and 1 founder post on what it takes to build voice AI for Indian accents. Two authentic posts outperform 14 pages of generic content with every type of buyer.`,
    source: "blog_section.pdf",
  },
];
