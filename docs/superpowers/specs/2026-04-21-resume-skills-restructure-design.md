# Resume Technical Skills Restructure

**Date:** 2026-04-21
**File:** `resume/resume.tex`
**Audience:** Dual — large company SWE roles (keyword scanning) and startup/YC network (breadth + velocity)

## Goal

Restructure the resume to better showcase system design knowledge informed by an SWE concepts tier list (S-tier: REST APIs, Databases, Load Balancers, CDNs, CI/CD, Containers, Monitoring; A-tier: Object Storage, Queues, Authentication, Data Pipelines). The user covers all S-tier and A-tier concepts through Rindler.

## Changes

### 1. Technical Skills: 3 categories to 5

**Before:**
- Languages: Python, Go, TypeScript, Rust, R, SQL, C
- ML/AI: PyTorch, TensorFlow, scikit-learn, LangChain, Snorkel, NumPy, Pandas, PySpark
- Infrastructure: FastAPI, Node.js, PostgreSQL, Redis, Docker, AWS, Celery, Airflow, Playwright, React, Next.js

**After:**
- Languages: Python, Go, TypeScript, Rust, R, SQL, C
- System Design: Dual-database architecture, async job queues, multi-stage data pipelines, self-healing execution loops, sliding-window rate limiting, graceful shutdown
- Tools & Infra: PostgreSQL, Redis, Docker, GitHub Actions, Railway, Cloudflare, Sentry, Playwright, AWS, Celery, Airflow
- Protocols & Auth: REST APIs, MCP, OAuth 2.0 PKCE, JWT, AES-256-GCM encryption
- ML/AI: PyTorch, TensorFlow, scikit-learn, LangChain, Claude API, Snorkel, NumPy, Pandas, PySpark

**Rationale:** "System Design" line maps directly to S/A-tier concepts and signals architectural thinking. "Protocols & Auth" is thin (5 items) but every item is high-signal and hard to fake. Tools & Infra separates concrete tools from patterns. React/Next.js/FastAPI/Node.js removed from skills (they appear in project bullets where they carry more weight).

### 2. Remove Teaching Assistant Role

Remove the entire TA block (lines 118-121):
```
Teaching Assistant | Modeling with ML & Intro to ML Courses (Cambridge, MA)   Feb 2024 — May 2025
- Held office hours and taught fundamentals...
- Redesigned curriculum structure...
```

No one-liner replacement — the formatting wouldn't work. Reclaims ~4 lines of vertical space to absorb the expanded skills section.

### 3. Revise Rindler Bullets

**Before (5 bullets):**
1. Built infrastructure layer exposing retail sites as API for AI agents
2. 4x faster, 6x cheaper vs open-source
3. Agent-agnostic MCP server in Go
4. Playwright worker fleet with Redis/asynq, ephemeral containers, self-healing fallbacks
5. Merchant dashboard with Next.js, Clerk

**After (5 bullets):**
1. Built an agent-agnostic MCP server in Go with OAuth 2.0 PKCE, JWT auth, and AES-256-GCM encryption at rest — any AI model can search, navigate, and transact on retail sites without per-site integration
2. Deployed a Playwright worker fleet with Redis/asynq priority queues, ephemeral browser containers, and a self-healing execution loop with automatic fallback promotion
3. Architected dual-database separation (control plane vs. data plane) with structured logging (slog), Sentry error tracking, and sliding-window rate limiting
4. Built GitHub Actions CI/CD gating PRs before Railway auto-deploy, with Cloudflare Pages/Workers at the edge
5. Achieved 4x faster (407s->98s) and 6x cheaper ($1.54->$0.26) task completion vs. open-source agents in benchmark arena

**Rationale:** Each bullet now maps to tier list concepts. Dashboard bullet cut as least system-design-relevant. Metrics bullet moves to last as the payoff.

### 4. ConceptQ — Deferred

User will provide additional info before revising ConceptQ bullets.

## Out of Scope

- No changes to Education section
- No changes to Leadership section (Sloan Business Club, Beta Theta Pi stay as-is)
- No changes to Roblox, Better Off Social, or MIT Sloan entries
- No changes to the website (config/projects.ts already updated separately)
