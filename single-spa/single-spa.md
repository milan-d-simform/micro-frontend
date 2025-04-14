# 🧹 Setting Up Microfrontends with Single-SPA

## 🔧 Step 1: Install `create-single-spa`
```bash
pnpm install -g create-single-spa
```

---

## 🏗️ Step 2: Create the Host Application (Root Config)

```bash
create-single-spa
```

### During the setup, select the following:
- **Directory for new project**: `host`
- **Project type**: `single-spa root config`
- **Package manager**: `pnpm`
- **Use TypeScript**: `Y/n` (your choice)
- **Use Layout Engine**: `Y/n` (recommended: `Y`)
- **Organization name**: e.g., `@simform`

### To run the host app:
```bash
cd host
pnpm install
pnpm start
```

---

## 🔌 Step 3: Create Vue Microfrontend(s)

```bash
create-single-spa
```

### During the setup, choose:
- **Directory for new project**: `microfrontend1`
- **Project type**: `single-spa application / parcel`
- **Framework**: `Vue`
- **Organization name**: e.g., `@simform`
- **Vue install option**: Choose to install via Vue CLI

### To run the microfrontend:
```bash
cd microfrontend1
pnpm install
pnpm run serve --port 3001
```

---

## 🧱 Step 4: Add Shared Dependencies in Host

- Open `host/src/index.ejs`
- Add shared dependencies to the `<script type="systemjs-importmap">` block
- You can generate an import map using [JSPM Generator](https://generator.jspm.io/)

📦 **Example Import Map Link**:  
https://generator.jspm.io/#U2VhYGDhD80rySzJSU1hKMjMy0x0MNYz0DNiKM7MS89J1S0uSHQwAwoYM5SVpuoW5ZeWpBY5mOiZ6hmABIBqTfUMjQERE6iiRwA

---

## 🔗 Step 5: Register Microfrontend in Host

### In `host/src/index.ejs`, add:
```html
<script type="systemjs-importmap">
  {
    "imports": {
      "@simform/microfrontend1": "http://localhost:3001/js/app.js"
    }
  }
</script>
```

### In your layout or HTML:
```html
<application name="@simform/microfrontend1"></application>
```

---

## 🚀 BONUS: Multi-Framework Support
For help setting up microfrontends in different frameworks:
👉 Single-SPA Ecosystem Guides : https://single-spa.js.org/docs/ecosystem/#help-for-frameworks


