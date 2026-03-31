/* ============================================================
   METHOD ENDEAVORS — app.js
   ============================================================ */

// ── INJECT STYLES ────────────────────────────────────────────
(function injectStyles() {
  const s = document.createElement('style');
  s.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;500;600;700&family=Barlow:wght@300;400;500&display=swap');
    *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
    :root {
      --black:#080808; --dark:#0e0e0e; --panel:#131313; --card:#181818;
      --border:#2a2a2a; --border2:#333; --muted:#666; --dim:#999;
      --text:#ddd; --white:#f0ece4; --accent:#c8a96e; --accent2:#a07840; --red:#8b1a1a;
      --fh:'Bebas Neue',Impact,sans-serif;
      --fu:'Barlow Condensed','Arial Narrow',sans-serif;
      --fb:'Barlow',sans-serif;
    }
    html { scroll-behavior:smooth; }
    body { font-family:var(--fb); background:var(--black); color:var(--text); min-height:100vh; overflow-x:hidden; }
    body::before { content:''; position:fixed; inset:0; background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.03) 2px,rgba(0,0,0,.03) 4px); pointer-events:none; z-index:9999; }

    /* ALERT */
    .alert-bar { background:var(--red); padding:7px 28px; display:flex; align-items:center; justify-content:center; gap:12px; font-family:var(--fu); font-size:11px; letter-spacing:2px; text-transform:uppercase; color:#ffcccc; border-bottom:1px solid #6b1010; }
    .blink { width:6px; height:6px; background:#ff6666; border-radius:50%; animation:blink 1.2s infinite; }
    @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.2} }

    /* NAV */
    nav { background:rgba(8,8,8,.98); border-bottom:1px solid var(--border); padding:0 32px; display:flex; align-items:center; justify-content:space-between; height:64px; position:sticky; top:0; z-index:50; }
    nav::after { content:''; position:absolute; bottom:-1px; left:0; width:80px; height:2px; background:var(--accent); }
    .nav-brand { display:flex; align-items:center; gap:14px; }
    .nav-logo-wrap { height:44px; display:flex; align-items:center; }
    .nav-logo-wrap img { height:44px; width:auto; filter:invert(1); }
    .nav-brand-text { display:flex; flex-direction:column; line-height:1; }
    .nav-brand-text .t1 { font-family:var(--fh); font-size:18px; color:var(--white); letter-spacing:2px; }
    .nav-brand-text .t2 { font-family:var(--fu); font-size:9px; letter-spacing:3px; color:var(--accent); text-transform:uppercase; }
    .nav-links { display:flex; }
    .nav-btn { background:none; border:none; cursor:pointer; font-family:var(--fu); font-size:12px; padding:0 16px; height:64px; letter-spacing:2px; text-transform:uppercase; font-weight:600; color:var(--muted); border-bottom:2px solid transparent; transition:color .15s,border-color .15s; }
    .nav-btn:hover { color:var(--dim); }
    .nav-btn.active { color:var(--white); border-bottom-color:var(--accent); }
    .nav-right { display:flex; align-items:center; gap:12px; }
    .nav-right a { color:var(--muted); text-decoration:none; display:flex; transition:color .15s; }
    .nav-right a:hover { color:var(--accent); }
    .profile-btn { background:none; border:1px solid var(--border2); clip-path:polygon(0 0,94% 0,100% 15%,100% 100%,6% 100%,0 85%); padding:6px 12px; cursor:pointer; color:var(--dim); display:flex; align-items:center; gap:6px; font-family:var(--fu); font-size:11px; letter-spacing:1px; text-transform:uppercase; transition:border-color .15s,color .15s; }
    .profile-btn:hover { border-color:var(--accent); color:var(--accent); }
    .cart-btn { display:flex; align-items:center; gap:8px; background:none; border:1px solid var(--border2); clip-path:polygon(0 0,94% 0,100% 15%,100% 100%,6% 100%,0 85%); padding:7px 18px; cursor:pointer; font-family:var(--fu); font-size:11px; color:var(--dim); letter-spacing:1.5px; text-transform:uppercase; transition:border-color .15s,color .15s; }
    .cart-btn:hover { border-color:var(--accent); color:var(--accent); }
    .cart-badge { background:var(--accent); color:#0d0d0d; font-size:10px; padding:1px 7px; font-weight:700; }

    /* PAGES */
    .page { display:none; }
    .page.active { display:block; }

    /* IMAGES */
    .site-img { width:100%; height:100%; object-fit:cover; display:block; }

    /* DIVIDERS */
    .divider { height:1px; background:var(--border); }
    .divider-accent { height:1px; background:linear-gradient(90deg,var(--accent) 0%,var(--accent2) 30%,transparent 100%); }

    /* TYPE */
    .eyebrow { font-family:var(--fu); font-size:10px; letter-spacing:3px; text-transform:uppercase; color:var(--accent); display:flex; align-items:center; gap:10px; margin-bottom:10px; }
    .eyebrow::before { content:''; display:block; width:20px; height:1px; background:var(--accent); }
    .h-display { font-family:var(--fh); font-size:72px; line-height:.9; color:var(--white); letter-spacing:2px; }
    .h-xl { font-family:var(--fh); font-size:52px; line-height:.95; color:var(--white); letter-spacing:2px; }
    .h-lg { font-family:var(--fh); font-size:38px; line-height:1; color:var(--white); letter-spacing:1px; }
    .h-md { font-family:var(--fh); font-size:28px; line-height:1.05; color:var(--white); letter-spacing:1px; }
    .h-sm { font-family:var(--fu); font-size:16px; font-weight:600; color:var(--white); letter-spacing:.5px; }
    .lead { font-family:var(--fb); font-size:14px; color:var(--dim); line-height:1.75; }
    .small { font-family:var(--fu); font-size:12px; color:var(--muted); letter-spacing:.5px; }
    .coord { font-family:'Courier New',monospace; font-size:9px; color:#333; letter-spacing:1px; }
    .sec-num { font-family:var(--fh); font-size:80px; color:rgba(200,169,110,.06); position:absolute; top:20px; right:36px; line-height:1; user-select:none; pointer-events:none; }

    /* BUTTONS */
    .btn-primary { background:var(--accent); color:#080808; border:none; clip-path:polygon(0 0,95% 0,100% 20%,100% 100%,5% 100%,0 80%); padding:13px 28px; font-family:var(--fu); font-size:12px; font-weight:700; letter-spacing:2px; text-transform:uppercase; cursor:pointer; display:inline-flex; align-items:center; gap:10px; transition:background .15s; }
    .btn-primary:hover { background:#dbb97e; }
    .btn-outline { background:transparent; border:1px solid var(--border2); clip-path:polygon(0 0,95% 0,100% 20%,100% 100%,5% 100%,0 80%); padding:11px 24px; font-family:var(--fu); font-size:11px; letter-spacing:2px; text-transform:uppercase; cursor:pointer; color:var(--dim); display:inline-flex; align-items:center; gap:8px; transition:border-color .15s,color .15s; text-decoration:none; }
    .btn-outline:hover { border-color:var(--accent); color:var(--accent); }
    .btn-ghost { background:transparent; border:none; cursor:pointer; font-family:var(--fu); font-size:11px; letter-spacing:2px; text-transform:uppercase; color:var(--muted); padding:0; display:inline-flex; align-items:center; gap:8px; transition:color .15s; }
    .btn-ghost:hover { color:var(--accent); }

    /* TAGS */
    .tag { font-family:var(--fu); display:inline-block; font-size:10px; font-weight:600; letter-spacing:1.5px; text-transform:uppercase; padding:3px 10px; background:rgba(255,255,255,.04); color:var(--muted); border:1px solid var(--border); }
    .tag.gold { background:rgba(200,169,110,.1); color:var(--accent); border-color:rgba(200,169,110,.3); }
    .tag.red  { background:rgba(139,26,26,.2); color:#e06060; border-color:rgba(139,26,26,.5); }

    /* LAYOUT */
    .section { max-width:1140px; margin:0 auto; padding:56px 36px; }
    .section-sm { max-width:700px; margin:0 auto; padding:52px 36px; }
    .grid-2 { display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center; }
    .flex-col { display:flex; flex-direction:column; gap:4px; }
    .b-grid { border:1px solid var(--border); overflow:hidden; }
    .b-grid > * { border-right:1px solid var(--border); border-bottom:1px solid var(--border); }
    .section-head { margin-bottom:36px; padding-bottom:24px; border-bottom:1px solid var(--border); position:relative; }
    .section-head::after { content:''; position:absolute; bottom:-1px; left:0; width:60px; height:1px; background:var(--accent); }
    .stripe-head { display:flex; align-items:center; margin-bottom:4px; }
    .stripe-head::before { content:''; display:inline-block; width:4px; height:28px; background:var(--accent); margin-right:12px; flex-shrink:0; }
    .info-panel { background:var(--panel); border:1px solid var(--border); border-left:2px solid var(--accent); padding:18px 20px; }
    .info-panel-label { font-family:var(--fu); font-size:10px; color:var(--accent); font-weight:600; letter-spacing:2px; text-transform:uppercase; margin-bottom:6px; }
    .card-box { background:var(--panel); border:1px solid var(--border); border-top:2px solid var(--accent); padding:28px 32px; }

    /* HERO */
    .hero { position:relative; overflow:hidden; border-bottom:1px solid var(--border); }
    .hero-overlay { position:absolute; inset:0; background:linear-gradient(to top,rgba(8,8,8,.95) 0%,rgba(8,8,8,.5) 50%,rgba(8,8,8,.2) 100%); }
    .hero-content { position:absolute; bottom:0; left:0; right:0; padding:52px; }
    .corner-tl { position:absolute; top:20px; left:20px; width:50px; height:50px; border-top:1px solid var(--accent); border-left:1px solid var(--accent); }
    .corner-tr { position:absolute; top:20px; right:20px; width:50px; height:50px; border-top:1px solid var(--accent); border-right:1px solid var(--accent); }

    /* TICKER */
    .ticker { background:var(--panel); border-bottom:1px solid var(--border); padding:12px 28px; display:flex; gap:36px; justify-content:center; flex-wrap:wrap; }
    .ticker-item { display:flex; align-items:center; gap:8px; }
    .ticker-dot { width:4px; height:4px; background:var(--accent); flex-shrink:0; transform:rotate(45deg); }
    .ticker-item span { font-family:var(--fu); font-size:11px; color:var(--muted); letter-spacing:1px; text-transform:uppercase; }

    /* STATS */
    .stats-bar { background:var(--panel); border-top:1px solid var(--border); border-bottom:1px solid var(--border); }
    .stat-cell { text-align:center; padding:32px 24px; border-right:1px solid var(--border); position:relative; }
    .stat-cell::before { content:''; position:absolute; top:0; left:50%; transform:translateX(-50%); width:40px; height:2px; background:var(--accent); }
    .stat-num { font-family:var(--fh); font-size:44px; color:var(--accent); letter-spacing:2px; line-height:1; margin-bottom:6px; }
    .stat-lbl { font-family:var(--fu); font-size:10px; color:var(--muted); letter-spacing:2px; text-transform:uppercase; }

    /* CAP CARDS */
    .cap-card { background:var(--card); padding:28px 24px; border-right:1px solid var(--border); border-bottom:1px solid var(--border); cursor:pointer; transition:background .2s; }
    .cap-card:hover { background:#1c1c1c; }
    .cap-card:hover .cap-arrow { opacity:1; transform:translateX(0); }
    .cap-icon { font-size:22px; color:var(--accent); margin-bottom:16px; display:block; }
    .cap-title { font-family:var(--fu); font-size:15px; font-weight:700; color:var(--white); margin-bottom:8px; }
    .cap-desc { font-size:12px; color:var(--muted); line-height:1.6; }
    .cap-arrow { font-family:var(--fu); font-size:11px; color:var(--accent); letter-spacing:1px; margin-top:14px; opacity:0; transform:translateX(-6px); transition:all .2s; }

    /* ── SHOP / PRODUCT CARDS ── */
    .product-card { background:var(--card); display:flex; flex-direction:column; border-right:1px solid var(--border); border-bottom:1px solid var(--border); overflow:hidden; }
    .product-img { width:100%; height:200px; object-fit:cover; display:block; cursor:pointer; transition:opacity .15s; }
    .product-img:hover { opacity:.9; }
    .product-body { padding:18px 20px; display:flex; flex-direction:column; gap:10px; flex:1; }
    .product-footer { display:flex; justify-content:space-between; align-items:center; padding-top:12px; border-top:1px solid var(--border); margin-top:auto; }
    .price { font-family:var(--fh); font-size:22px; color:var(--white); letter-spacing:1px; }
    .select-btn { background:transparent; border:1px solid var(--border2); clip-path:polygon(0 0,88% 0,100% 30%,100% 100%,12% 100%,0 70%); padding:7px 16px; font-family:var(--fu); font-size:10px; letter-spacing:1.5px; text-transform:uppercase; cursor:pointer; color:var(--dim); transition:all .15s; }
    .select-btn:hover, .select-btn.open { border-color:var(--accent); color:var(--accent); }

    /* EXPAND PANEL */
    .product-expand { max-height:0; overflow:hidden; transition:max-height .3s ease, padding .3s ease; border-top:0px solid var(--border); }
    .product-expand.open { max-height:400px; border-top:1px solid var(--border); padding:16px 0 4px; }
    .expand-label { font-family:var(--fu); font-size:10px; font-weight:600; letter-spacing:2px; text-transform:uppercase; color:var(--muted); margin-bottom:8px; }
    .size-grid { display:flex; gap:6px; flex-wrap:wrap; margin-bottom:14px; }
    .size-btn { font-family:var(--fu); font-size:11px; font-weight:700; letter-spacing:1px; min-width:40px; height:36px; padding:0 8px; border:1px solid var(--border); background:transparent; color:var(--muted); cursor:pointer; transition:all .15s; display:flex; align-items:center; justify-content:center; }
    .size-btn:hover:not(.sold-out) { border-color:var(--dim); color:var(--dim); }
    .size-btn.selected { border-color:var(--accent); color:var(--accent); background:rgba(200,169,110,.1); }
    .size-btn.sold-out { opacity:.3; cursor:not-allowed; text-decoration:line-through; }
    .size-error { font-family:var(--fu); font-size:10px; color:#e06060; letter-spacing:.5px; margin-bottom:10px; display:none; }
    .qty-row { display:flex; align-items:center; gap:0; margin-bottom:14px; }
    .qty-btn { background:var(--panel); border:1px solid var(--border); width:32px; height:32px; cursor:pointer; font-size:18px; color:var(--accent); display:flex; align-items:center; justify-content:center; transition:border-color .15s; flex-shrink:0; line-height:1; }
    .qty-btn:hover { border-color:var(--accent); }
    .qty-display { font-family:var(--fh); font-size:18px; color:var(--white); min-width:40px; text-align:center; border-top:1px solid var(--border); border-bottom:1px solid var(--border); height:32px; line-height:32px; background:var(--panel); }
    .add-to-cart-btn { width:100%; padding:11px 0; background:var(--accent); color:#080808; border:none; font-family:var(--fu); font-size:11px; font-weight:700; letter-spacing:2px; text-transform:uppercase; cursor:pointer; transition:background .15s; clip-path:polygon(0 0,96% 0,100% 30%,100% 100%,4% 100%,0 70%); }
    .add-to-cart-btn:hover { background:#dbb97e; }

    /* FILTER */
    .filter-bar { display:flex; gap:10px; align-items:center; margin-bottom:24px; flex-wrap:wrap; }
    .search-wrap { position:relative; flex:1; min-width:200px; }
    .search-wrap svg { position:absolute; left:12px; top:50%; transform:translateY(-50%); }
    .search-wrap input { width:100%; padding:0 12px 0 36px; height:38px; border:1px solid var(--border); background:var(--panel); font-family:var(--fu); font-size:13px; color:var(--text); outline:none; }
    .cat-btn { font-family:var(--fu); font-size:10px; letter-spacing:1.5px; text-transform:uppercase; padding:7px 16px; border:1px solid var(--border); cursor:pointer; background:transparent; color:var(--muted); transition:all .15s; }
    .cat-btn.active { border-color:var(--accent); background:rgba(200,169,110,.08); color:var(--accent); }

    /* TRAINING */
    .training-card { background:var(--card); display:flex; flex-direction:column; border-right:1px solid var(--border); border-bottom:1px solid var(--border); overflow:hidden; }
    .training-img { width:100%; height:180px; object-fit:cover; display:block; }
    .training-body { padding:22px; display:flex; flex-direction:column; gap:10px; flex:1; }
    .training-footer { margin-top:auto; display:flex; justify-content:space-between; align-items:center; padding-top:12px; border-top:1px solid var(--border); }

    /* DOMAIN */
    .domain-card { background:var(--card); padding:28px 24px; border-right:1px solid var(--border); }
    .domain-header { display:flex; align-items:center; gap:10px; margin-bottom:16px; }
    .domain-icon { font-size:20px; color:var(--accent); }
    .domain-img { width:100%; height:140px; object-fit:cover; margin-top:16px; display:block; }

    /* ABOUT */
    .exp-cell { background:var(--card); padding:16px; border-right:1px solid var(--border); border-bottom:1px solid var(--border); }
    .exp-dot { width:4px; height:4px; background:var(--accent); transform:rotate(45deg); margin-bottom:10px; }
    .exp-cell p { font-family:var(--fu); font-size:12px; color:#bbb; }
    .presence-cell { background:var(--card); padding:22px; text-align:center; border-right:1px solid var(--border); }

    /* FORM */
    .form-box { background:var(--panel); border:1px solid var(--border); border-top:2px solid var(--accent); padding:36px; }
    .form-group { display:flex; flex-direction:column; gap:6px; }
    .form-label { font-family:var(--fu); font-size:10px; font-weight:600; letter-spacing:2px; color:var(--muted); text-transform:uppercase; }
    .form-input, .form-select, .form-textarea { border:1px solid var(--border); background:var(--dark); color:var(--text); outline:none; font-family:var(--fb); font-size:13px; transition:border-color .15s; }
    .form-input:focus, .form-select:focus, .form-textarea:focus { border-color:var(--accent); }
    .form-input, .form-select { height:40px; padding:0 14px; width:100%; }
    .form-textarea { padding:12px 14px; resize:vertical; line-height:1.6; width:100%; }
    .form-grid-2 { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
    .success-box { background:var(--panel); border:1px solid var(--border); border-top:2px solid var(--accent); padding:56px; text-align:center; }
    .success-icon { width:52px; height:52px; clip-path:polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%); background:rgba(200,169,110,.1); border:1px solid var(--accent); display:flex; align-items:center; justify-content:center; margin:0 auto 20px; }

    /* CART */
    .cart-overlay { display:none; position:fixed; inset:0; z-index:100; }
    .cart-overlay.open { display:flex; }
    .cart-backdrop { flex:1; background:rgba(0,0,0,.7); }
    .cart-panel { width:360px; background:var(--dark); border-left:1px solid var(--border); border-top:2px solid var(--accent); display:flex; flex-direction:column; padding:28px; min-height:100vh; overflow-y:auto; }
    .cart-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; padding-bottom:16px; border-bottom:1px solid var(--border); }
    .cart-title { font-family:var(--fh); font-size:22px; color:var(--white); letter-spacing:2px; }
    .cart-close { background:none; border:1px solid var(--border); width:28px; height:28px; cursor:pointer; font-size:14px; color:var(--muted); display:flex; align-items:center; justify-content:center; }
    .cart-items { flex:1; display:flex; flex-direction:column; gap:12px; }
    .cart-item { padding:14px; background:var(--panel); border:1px solid var(--border); border-left:2px solid var(--accent2); display:flex; flex-direction:column; gap:8px; }
    .cart-item-top { display:flex; justify-content:space-between; align-items:flex-start; }
    .cart-item-name { font-family:var(--fu); font-weight:600; font-size:13px; color:var(--text); flex:1; }
    .cart-item-remove { background:none; border:none; cursor:pointer; font-family:var(--fu); font-size:10px; color:var(--muted); letter-spacing:1px; text-transform:uppercase; transition:color .15s; white-space:nowrap; margin-left:8px; }
    .cart-item-remove:hover { color:#e06060; }
    .cart-item-bottom { display:flex; align-items:center; justify-content:space-between; }
    .cqty-wrap { display:flex; align-items:center; }
    .cqty-btn { background:var(--card); border:1px solid var(--border); width:26px; height:26px; cursor:pointer; font-size:16px; color:var(--accent); display:flex; align-items:center; justify-content:center; line-height:1; }
    .cqty-btn:hover { border-color:var(--accent); }
    .cqty-num { font-family:var(--fh); font-size:16px; color:var(--white); min-width:32px; text-align:center; border-top:1px solid var(--border); border-bottom:1px solid var(--border); height:26px; line-height:26px; background:var(--panel); }
    .cart-item-price { font-family:var(--fh); font-size:16px; color:var(--accent); }
    .cart-footer { border-top:1px solid var(--border); padding-top:20px; margin-top:20px; }
    .cart-total-row { display:flex; justify-content:space-between; margin-bottom:18px; align-items:baseline; }
    .cart-total-lbl { font-family:var(--fu); font-size:11px; color:var(--muted); letter-spacing:2px; text-transform:uppercase; }
    .cart-total-val { font-family:var(--fh); font-size:28px; color:var(--accent); letter-spacing:2px; }
    .checkout-btn { width:100%; padding:14px 0; background:var(--accent); color:#080808; border:none; font-family:var(--fu); font-size:12px; font-weight:700; letter-spacing:2px; text-transform:uppercase; cursor:pointer; transition:background .15s; }
    .checkout-btn:hover { background:#dbb97e; }
    .cart-empty { font-family:var(--fu); color:var(--muted); font-size:12px; letter-spacing:1px; text-transform:uppercase; }

    /* MODAL */
    .modal-overlay { display:none; position:fixed; inset:0; z-index:200; background:rgba(0,0,0,.75); align-items:center; justify-content:center; }
    .modal-overlay.open { display:flex; }
    .modal-box { background:var(--dark); border:1px solid var(--border); border-top:2px solid var(--accent); padding:36px; width:100%; max-width:420px; position:relative; }
    .modal-close { position:absolute; top:14px; right:14px; background:none; border:none; cursor:pointer; font-size:16px; color:var(--muted); }
    .modal-tabs { display:flex; margin-bottom:28px; border-bottom:1px solid var(--border); }
    .modal-tab { font-family:var(--fu); font-size:12px; letter-spacing:2px; text-transform:uppercase; padding:10px 20px; background:none; border:none; cursor:pointer; color:var(--muted); border-bottom:2px solid transparent; transition:all .15s; }
    .modal-tab.active { color:var(--accent); border-bottom-color:var(--accent); }
    .modal-section { display:none; }
    .modal-section.active { display:block; }

    /* PROFILE PANEL */
    .profile-panel { display:none; position:fixed; top:0; right:0; bottom:0; z-index:150; width:360px; background:var(--dark); border-left:1px solid var(--border); border-top:2px solid var(--accent); flex-direction:column; padding:28px; overflow-y:auto; }
    .profile-panel.open { display:flex; }
    .profile-panel-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; padding-bottom:16px; border-bottom:1px solid var(--border); }
    .profile-panel-title { font-family:var(--fh); font-size:22px; color:var(--white); letter-spacing:2px; }
    .panel-close { background:none; border:1px solid var(--border); width:28px; height:28px; cursor:pointer; font-size:14px; color:var(--muted); display:flex; align-items:center; justify-content:center; }
    .profile-avatar { width:64px; height:64px; border-radius:50%; background:rgba(200,169,110,.1); border:1px solid var(--accent); display:flex; align-items:center; justify-content:center; font-family:var(--fh); font-size:24px; color:var(--accent); margin:0 auto 12px; }
    .profile-user-name { font-family:var(--fh); font-size:20px; color:var(--white); letter-spacing:1px; text-align:center; margin-bottom:4px; }
    .profile-user-email { font-family:var(--fu); font-size:11px; color:var(--muted); text-align:center; margin-bottom:24px; }
    .profile-section-label { font-family:var(--fu); font-size:10px; letter-spacing:2px; text-transform:uppercase; color:var(--accent); margin-bottom:10px; display:flex; align-items:center; gap:8px; }
    .profile-section-label::before { content:''; display:block; width:14px; height:1px; background:var(--accent); }
    .history-item { background:var(--panel); border:1px solid var(--border); border-left:2px solid var(--accent2); padding:12px 14px; margin-bottom:8px; }
    .history-item-name { font-family:var(--fu); font-weight:600; font-size:13px; color:var(--text); }
    .history-item-meta { font-family:var(--fu); font-size:11px; color:var(--muted); margin-top:2px; }

    /* DONATE / NL */
    .donate-banner { background:var(--panel); border-top:1px solid var(--border); border-bottom:1px solid var(--border); padding:28px 48px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:16px; }
    .newsletter { padding:56px 32px; text-align:center; background:var(--panel); }
    .nl-form { display:flex; justify-content:center; max-width:440px; margin:0 auto; }
    .nl-form input { flex:1; height:44px; border:1px solid var(--border); border-right:none; background:var(--dark); padding:0 16px; font-family:var(--fu); font-size:13px; color:var(--text); outline:none; }
    .nl-form button { background:var(--accent); color:#080808; border:none; padding:0 22px; font-family:var(--fu); font-size:11px; font-weight:700; letter-spacing:2px; text-transform:uppercase; cursor:pointer; }

    /* FOOTER */
    footer { border-top:1px solid var(--border); padding:24px 36px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; background:#080808; }
    .footer-copy { font-family:var(--fu); font-size:10px; color:var(--muted); letter-spacing:1px; }
    .footer-social { display:flex; gap:14px; }
    .footer-social a { color:var(--muted); text-decoration:none; font-family:var(--fu); font-size:10px; letter-spacing:1.5px; text-transform:uppercase; transition:color .15s; }
    .footer-social a:hover { color:var(--accent); }
  `;
  document.head.appendChild(s);
})();

// ── CONSTANTS ────────────────────────────────────────────────
const CDN  = 'https://methodendeavors.com/cdn/shop/files/';
const LOGO = CDN + 'logo_100x@2x.png?v=1668167211';
const IMG  = {
  laser:   CDN + 'laser.jpg?v=1672954432&width=2400',
  ops9:    CDN + '9_602fceda-b880-4ff0-a845-386fbbf2db4e.jpg?v=1696453197&width=2400',
  f3:      CDN + '3.jpg?v=1696453196&width=2400',
  f16:     CDN + '16.jpg?v=1696453197&width=2400',
  f35:     CDN + '35.jpg?v=1696463500&width=2400',
  f0541:   CDN + 'IMG_0541.jpg?v=1696463760&width=2400',
  f31:     CDN + '31_300x.jpg?v=1696463499',
  f13:     CDN + '13_300x.jpg?v=1696453199',
};

const SHOP_ITEMS = [
  { id:1, name:'Conflict Series — Tee',   cat:'Apparel',      price:45, tag:'New Drop', desc:'Limited run tactical tee. 100% heavyweight cotton.',           img:IMG.laser, sizes:['XS','S','M','L','XL','XXL'], soldOut:['XS'] },
  { id:2, name:'ME Operator Cap',          cat:'Apparel',      price:38, tag:'',         desc:'Structured operator cap with embroidered Method logo.',        img:IMG.ops9,  sizes:['S/M','L/XL'],               soldOut:[] },
  { id:3, name:'Field Notebook',           cat:'Gear',         price:22, tag:'',         desc:'Waterproof cover, grid pages, lay-flat binding.',              img:IMG.f31,   sizes:null, soldOut:[] },
  { id:4, name:'Tactical Patch Set',       cat:'Gear',         price:28, tag:'Popular',  desc:'Set of 4 hook-and-loop patches. IR-reflective option.',        img:IMG.f13,   sizes:null, soldOut:[] },
  { id:5, name:'ME Challenge Coin',        cat:'Collectibles', price:35, tag:'',         desc:'Solid brass, dual-sided. Limited edition of 500.',             img:IMG.f35,   sizes:null, soldOut:[] },
  { id:6, name:'Conflict Series — Hoodie', cat:'Apparel',      price:85, tag:'New Drop', desc:'Heavy-duty pullover from the Conflict Series.',                img:IMG.f0541, sizes:['S','M','L','XL','XXL'],     soldOut:['XXL'] },
];

const TRAINING_ITEMS = [
  { id:'t1', name:'Protective Security Detail (PSD)',    level:'Professional', dur:'5 days', price:2200, desc:'PSD covering advance work, motorcades, venue security and EAPs.',           img:IMG.f3    },
  { id:'t2', name:'Surveillance & Counter-Surveillance', level:'Intermediate', dur:'3 days', price:1400, desc:'Urban surveillance, route analysis, pattern-of-life and counter-drills.',   img:IMG.f35   },
  { id:'t3', name:'Combat Trauma / TCCC',                level:'All levels',   dur:'2 days', price:650,  desc:'Tourniquet application, wound packing, airway management and CASEVAC.',     img:IMG.f16   },
  { id:'t4', name:'Close Quarters Battle (CQB)',         level:'Advanced',     dur:'4 days', price:1800, desc:'Room clearing, team movement, immediate action drills under stress.',       img:IMG.f0541 },
  { id:'t5', name:'Low-Visibility Operations',           level:'Advanced',     dur:'3 days', price:1600, desc:'Blending in environments, cover and concealment, covert movement.',        img:IMG.ops9  },
  { id:'t6', name:'Unit Advise & Assist',                level:'Custom',       dur:'Custom', price:null, desc:'Tailored packages for military, LE, and private sector. Negotiated.',      img:IMG.f31   },
];

// ── STATE ────────────────────────────────────────────────────
let cart        = [];
let activeCat   = 'All';
let accounts    = {};
let currentUser = null;
// Per-product expand state: id -> { qty, size, open }
const expandState = {};

// ── UTILS ────────────────────────────────────────────────────
const el   = id => document.getElementById(id);
const fmt  = n  => Number(n).toLocaleString();
const onerr = `onerror="this.style.background='#1a1a1a';this.removeAttribute('src');"`;

function sImg(src, cls, alt, style = '') {
  return `<img class="${cls}" src="${src}" alt="${alt}" ${onerr} ${style ? `style="${style}"` : ''} />`;
}

// ── BUILD STATIC HTML ────────────────────────────────────────
function buildStaticHTML() {
  return `
<div class="alert-bar"><div class="blink"></div><span>Conflict Series Drop — Live Now</span><span style="color:#884444;">|</span><span>Global Response Standby: Active</span><div class="blink"></div></div>

<nav>
  <div class="nav-brand">
    <div class="nav-logo-wrap">${sImg(LOGO,'','Method Endeavors')}</div>
    <div class="nav-brand-text"><span class="t1">Method Endeavors</span><span class="t2">We Create Options</span></div>
  </div>
  <div class="nav-links">
    <button class="nav-btn active"  data-page="home">Home</button>
    <button class="nav-btn"         data-page="shop">Shop</button>
    <button class="nav-btn"         data-page="training">Training</button>
    <button class="nav-btn"         data-page="methods">Methods</button>
    <button class="nav-btn"         data-page="about">About</button>
    <button class="nav-btn"         data-page="inquire">Inquire</button>
  </div>
  <div class="nav-right">
    <a href="https://www.instagram.com/methodendeavors/" target="_blank">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
    </a>
    <button class="profile-btn" id="profile-nav-btn">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
      <span id="profile-nav-label">Sign In</span>
    </button>
    <button class="cart-btn" id="cart-toggle-btn">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
      <span id="cart-label">Cart</span>
    </button>
  </div>
</nav>

<!-- PAGES -->
<div id="page-home"     class="page active">${buildHome()}</div>
<div id="page-shop"     class="page">${buildShopPage()}</div>
<div id="page-training" class="page">${buildTrainingPage()}</div>
<div id="page-methods"  class="page">${buildMethodsPage()}</div>
<div id="page-about"    class="page">${buildAboutPage()}</div>
<div id="page-inquire"  class="page">${buildInquirePage()}</div>

<footer>
  <div>
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">${sImg(LOGO,'','ME','height:22px;width:auto;filter:invert(1);opacity:.4;')}<span style="font-family:var(--fh);font-size:14px;color:var(--muted);letter-spacing:2px;">METHOD ENDEAVORS</span></div>
    <span class="footer-copy">© 2026 Method Endeavors. All rights reserved. SDVOSB.</span>
  </div>
  <div class="footer-social">
    <a href="https://www.instagram.com/methodendeavors/" target="_blank">Instagram</a>
    <a href="https://www.youtube.com/channel/UCJ7LaGCkkqdegVerN_INj2Q" target="_blank">YouTube</a>
    <a href="https://www.outerheavenfoundation.org" target="_blank">Foundation</a>
  </div>
</footer>

<!-- CART -->
<div id="cart-overlay" class="cart-overlay">
  <div class="cart-backdrop" id="cart-backdrop"></div>
  <div class="cart-panel">
    <div class="cart-header"><span class="cart-title" id="cart-heading">Cart</span><button class="cart-close" id="cart-close-btn">✕</button></div>
    <div id="cart-body"></div>
  </div>
</div>

<!-- AUTH MODAL -->
<div id="auth-modal" class="modal-overlay">
  <div class="modal-box">
    <button class="modal-close" id="auth-modal-close">✕</button>
    <div style="text-align:center;margin-bottom:20px;">${sImg(LOGO,'','ME','height:36px;filter:invert(1);opacity:.7;')}<br><span style="font-family:var(--fh);font-size:20px;color:var(--white);letter-spacing:2px;">Member Access</span></div>
    <div class="modal-tabs">
      <button class="modal-tab active" id="tab-signin-btn">Sign In</button>
      <button class="modal-tab"        id="tab-signup-btn">Create Account</button>
    </div>
    <div id="tab-signin" class="modal-section active">
      <div style="display:flex;flex-direction:column;gap:14px;">
        <div class="form-group"><label class="form-label">Email</label><input class="form-input" type="email" id="signin-email" placeholder="your@email.com" /></div>
        <div class="form-group"><label class="form-label">Password</label><input class="form-input" type="password" id="signin-pass" placeholder="••••••••" /></div>
        <p id="signin-error" style="font-family:var(--fu);font-size:11px;color:#e06060;display:none;"></p>
        <button class="btn-primary" style="width:100%;justify-content:center;" id="signin-submit-btn">Sign In →</button>
      </div>
    </div>
    <div id="tab-signup" class="modal-section">
      <div style="display:flex;flex-direction:column;gap:14px;">
        <div class="form-group"><label class="form-label">Full name</label><input class="form-input" type="text" id="signup-name" placeholder="Your name" /></div>
        <div class="form-group"><label class="form-label">Email</label><input class="form-input" type="email" id="signup-email" placeholder="your@email.com" /></div>
        <div class="form-group"><label class="form-label">Password</label><input class="form-input" type="password" id="signup-pass" placeholder="Min. 6 characters" /></div>
        <p id="signup-error" style="font-family:var(--fu);font-size:11px;color:#e06060;display:none;"></p>
        <button class="btn-primary" style="width:100%;justify-content:center;" id="signup-submit-btn">Create Account →</button>
      </div>
    </div>
  </div>
</div>

<!-- PROFILE PANEL -->
<div id="profile-panel" class="profile-panel">
  <div class="profile-panel-header"><span class="profile-panel-title">Profile</span><button class="panel-close" id="profile-close-btn">✕</button></div>
  <div class="profile-avatar" id="profile-initials">?</div>
  <div class="profile-user-name"  id="profile-name">—</div>
  <div class="profile-user-email" id="profile-email">—</div>
  <div style="margin-bottom:20px;">
    <p class="profile-section-label">Newsletter</p>
    <div style="display:flex;align-items:center;justify-content:space-between;background:var(--panel);border:1px solid var(--border);padding:12px 14px;">
      <span style="font-family:var(--fu);font-size:12px;color:var(--dim);">Method intel briefings</span>
      <span id="sub-status" style="font-family:var(--fu);font-size:11px;color:var(--muted);letter-spacing:1px;text-transform:uppercase;">Not subscribed</span>
    </div>
    <button id="sub-toggle-btn" style="width:100%;margin-top:6px;background:transparent;border:1px solid var(--border);padding:8px;font-family:var(--fu);font-size:10px;letter-spacing:2px;text-transform:uppercase;cursor:pointer;color:var(--muted);">Subscribe to Newsletter</button>
  </div>
  <div style="flex:1;"><p class="profile-section-label">Purchase history</p><div id="purchase-history"></div></div>
  <div style="padding-top:20px;border-top:1px solid var(--border);margin-top:20px;">
    <button class="btn-outline" style="width:100%;justify-content:center;" id="logout-btn">Sign Out →</button>
  </div>
</div>
`;
}

// ── PAGE CONTENT BUILDERS ────────────────────────────────────
function buildHome() {
  const tickers = ['Non-permissive environments','Specialized unit training','Low-visibility operations','Rapid global response','Diplomatic security','Special activities','Personnel recovery'];
  return `
  <div class="hero" style="height:600px;">${sImg(IMG.laser,'site-img','Hero','position:absolute;inset:0;width:100%;height:100%;object-fit:cover;')}
    <div class="hero-overlay"></div><div class="corner-tl"></div><div class="corner-tr"></div>
    <span class="coord" style="position:absolute;top:28px;left:80px;">34°03'N 118°14'W</span>
    <div class="hero-content">
      <p class="eyebrow">Service Disabled Veteran Owned · SDVOSB</p>
      <div class="h-display" style="margin-bottom:16px;max-width:800px;">Welcome to<br><span style="color:var(--accent);">Your Solution</span></div>
      <p style="font-size:15px;line-height:1.8;color:rgba(240,236,228,.7);max-width:580px;margin-bottom:36px;">At Method Endeavors, your difficult or dangerous challenge is our pleasure. We thrive on adversity and make it our personal mission to keep your activity seamless, easy and safe.</p>
      <div style="display:flex;gap:14px;flex-wrap:wrap;align-items:center;">
        <button class="btn-primary" data-page="methods">View Capabilities →</button>
        <button class="btn-outline" data-page="inquire">Submit Inquiry</button>
        <span class="coord" style="margin-left:8px;">GLOBAL RESPONSE: 18HR DEPLOY</span>
      </div>
    </div>
  </div>
  <div class="ticker">${tickers.map(t=>`<div class="ticker-item"><div class="ticker-dot"></div><span>${t}</span></div>`).join('')}</div>
  <div class="divider-accent"></div>
  <div class="section" style="position:relative;"><div class="sec-num">01</div>
    <div class="grid-2">
      <div>
        <p class="eyebrow">We create options</p>
        <div class="stripe-head"><div class="h-lg">All Capability.<br>No Limitation.</div></div>
        <p class="lead" style="margin:20px 0 16px;">From protecting people &amp; assets in non-permissive environments, to training of specialized units, low-visibility operations and rapid response globally, our capabilities are limitless.</p>
        <p class="lead" style="margin-bottom:32px;">We gladly accept the challenge.</p>
        <button class="btn-ghost" data-page="about">Learn about us →</button>
      </div>
      <div style="position:relative;height:360px;overflow:hidden;border:1px solid var(--border);">${sImg(IMG.ops9,'site-img','Operational')}<div style="position:absolute;bottom:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--accent),transparent);"></div></div>
    </div>
  </div>
  <div class="divider"></div>
  <div class="section" style="position:relative;"><div class="sec-num">02</div>
    <p class="eyebrow" style="margin-bottom:28px;">Core capabilities</p>
    <div class="b-grid" style="display:grid;grid-template-columns:repeat(4,1fr);">
      <div class="cap-card" data-page="methods"><span class="cap-icon">◈</span><div class="cap-title">Protection</div><div class="cap-desc">PSD, diplomatic security, and close protection for principals worldwide.</div><div class="cap-arrow">LEARN MORE →</div></div>
      <div class="cap-card" data-page="training"><span class="cap-icon">◎</span><div class="cap-title">Training</div><div class="cap-desc">Advanced training and advise/assist packages for military, LE and private orgs.</div><div class="cap-arrow">LEARN MORE →</div></div>
      <div class="cap-card" data-page="methods"><span class="cap-icon">◆</span><div class="cap-title">Special activities</div><div class="cap-desc">Surveillance, tracking, deep cover and covert action where deniability is key.</div><div class="cap-arrow">LEARN MORE →</div></div>
      <div class="cap-card" data-page="methods"><span class="cap-icon">◉</span><div class="cap-title">Global logistics</div><div class="cap-desc">Personnel, supplies, and equipment delivered anywhere on the planet, fast.</div><div class="cap-arrow">LEARN MORE →</div></div>
    </div>
  </div>
  <div class="divider"></div>
  <div class="section" style="position:relative;"><div class="sec-num">03</div>
    <p class="eyebrow" style="margin-bottom:20px;">In the field</p>
    <div style="display:grid;grid-template-columns:2fr 1fr 1fr;gap:3px;margin-bottom:3px;">
      <div style="height:320px;overflow:hidden;">${sImg(IMG.f3,'site-img','Field ops')}</div>
      <div style="height:320px;overflow:hidden;">${sImg(IMG.f35,'site-img','Training')}</div>
      <div style="height:320px;overflow:hidden;">${sImg(IMG.f16,'site-img','Team')}</div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr 2fr;gap:3px;">
      <div style="height:190px;overflow:hidden;">${sImg(IMG.f0541,'site-img','Ops')}</div>
      <div style="height:190px;overflow:hidden;">${sImg(IMG.f31,'site-img','Ops')}</div>
      <div style="height:190px;overflow:hidden;">${sImg(IMG.f13,'site-img','Team')}</div>
    </div>
  </div>
  <div class="divider-accent"></div>
  <div class="stats-bar"><div style="max-width:900px;margin:0 auto;display:grid;grid-template-columns:repeat(3,1fr);">
    <div class="stat-cell"><div class="stat-num">20+</div><div class="stat-lbl">Years of experience</div></div>
    <div class="stat-cell"><div class="stat-num">60+</div><div class="stat-lbl">Countries operated in</div></div>
    <div class="stat-cell" style="border-right:none;"><div class="stat-num">100%</div><div class="stat-lbl">Mission success rate</div></div>
  </div></div>
  <div class="donate-banner">
    <div><p style="font-family:var(--fu);font-weight:700;font-size:14px;color:var(--white);margin-bottom:4px;letter-spacing:1px;text-transform:uppercase;">Outer Heaven Foundation</p><p style="font-size:13px;color:var(--muted);">Helping veterans, first responders and their families through adrenaline-fueled philanthropy.</p></div>
    <a href="https://www.outerheavenfoundation.org" target="_blank" class="btn-outline">Donate →</a>
  </div>
  <div class="newsletter">
    <p class="eyebrow" style="justify-content:center;margin-bottom:12px;">Intel briefings</p>
    <div class="h-md" style="margin-bottom:8px;">Subscribe to the Method newsletter</div>
    <p style="font-family:var(--fu);font-size:12px;color:var(--muted);margin-bottom:28px;">Exclusive drops, early access, and Method operational news.</p>
    <div class="nl-form"><input type="email" id="nl-email" placeholder="your@email.com" /><button id="nl-submit-btn">Subscribe</button></div>
    <p id="nl-confirm" style="font-family:var(--fu);font-size:11px;color:var(--accent);margin-top:12px;letter-spacing:1px;display:none;">✓ Subscribed. Welcome to the network.</p>
  </div>`;
}

function buildShopPage() {
  return `<div class="section">
    <div class="section-head">
      <p class="eyebrow">Method Conflict Series</p>
      <div class="h-lg" style="margin-bottom:8px;">Gear &amp; Apparel</div>
      <p class="lead">Limited drops. Purpose-built. No compromises.</p>
    </div>
    <div class="filter-bar">
      <div class="search-wrap">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input type="text" id="shop-search" placeholder="Search gear…" />
      </div>
      <div id="cat-buttons" style="display:flex;gap:6px;flex-wrap:wrap;">
        <button class="cat-btn active" data-cat="All">All</button>
        <button class="cat-btn" data-cat="Apparel">Apparel</button>
        <button class="cat-btn" data-cat="Gear">Gear</button>
        <button class="cat-btn" data-cat="Collectibles">Collectibles</button>
      </div>
    </div>
    <div id="shop-grid" class="b-grid" style="display:grid;grid-template-columns:repeat(3,1fr);"></div>
  </div>`;
}

function buildTrainingPage() {
  return `<div class="section">
    <div class="section-head">
      <p class="eyebrow">Advise &amp; Assist</p>
      <div class="h-lg" style="margin-bottom:8px;">Training Programmes</div>
      <p class="lead" style="max-width:640px;">From military units to law enforcement and the private sector — we advise the highest trained organizations to be better and more capable than they were yesterday.</p>
    </div>
    <div id="training-grid" class="b-grid" style="display:grid;grid-template-columns:repeat(2,1fr);margin-bottom:32px;"></div>
    <div class="card-box" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;">
      <div><p style="font-family:var(--fu);font-weight:700;font-size:14px;color:var(--white);margin-bottom:4px;letter-spacing:1px;text-transform:uppercase;">Custom unit training packages</p><p style="font-size:13px;color:var(--muted);">Packages range from days to months and can be customised to fit unit or agency schedules.</p></div>
      <button class="btn-primary" data-page="inquire">Submit a Proposal →</button>
    </div>
  </div>`;
}

function buildMethodsPage() {
  return `
  <div class="hero" style="height:400px;">${sImg(IMG.f3,'site-img','Methods','position:absolute;inset:0;width:100%;height:100%;object-fit:cover;')}
    <div class="hero-overlay"></div><div class="corner-tl"></div><div class="corner-tr"></div>
    <div style="position:absolute;bottom:0;left:0;right:0;padding:40px 52px;"><p class="eyebrow">Method to the madness</p><div class="h-xl" style="margin-top:10px;">All Capability.<br><span style="color:var(--accent);">No Limitation.</span></div></div>
  </div>
  <div class="divider-accent"></div>
  <div class="section" style="max-width:1100px;">
    <div class="grid-2" style="margin-bottom:56px;position:relative;"><div class="sec-num" style="font-size:60px;">01</div>
      <div>
        <p class="eyebrow">Global response</p>
        <div class="stripe-head"><div class="h-md" style="margin-bottom:18px;">Rescue, Recovery<br>&amp; Evacuation</div></div>
        <p class="lead" style="margin-bottom:14px;">Method Endeavors conducts rescue and recovery operations in conflict zones globally. We specialize in personnel recovery and extraction, bringing all assets to bear to accomplish the safe exit from any high-threat environment.</p>
        <p class="lead" style="margin-bottom:14px;">Our team can be overt or covertly blend with civilians. Drawing from the special operations community, our expertise is unrivaled.</p>
        <div class="info-panel" style="margin-top:20px;"><div class="info-panel-label">Deployment readiness</div><p style="font-family:var(--fu);font-size:13px;color:var(--dim);">Global Response Staff deploys anywhere in the world within <span style="color:var(--accent);font-weight:700;">18 hours</span>.</p></div>
      </div>
      <div class="flex-col"><div style="height:200px;overflow:hidden;border:1px solid var(--border);">${sImg(IMG.f35,'site-img','Rescue ops')}</div><div style="height:150px;overflow:hidden;border:1px solid var(--border);">${sImg(IMG.f16,'site-img','Team')}</div></div>
    </div>
    <div class="divider"></div>
    <div class="grid-2" style="padding:52px 0;position:relative;"><div class="sec-num" style="font-size:60px;">02</div>
      <div class="flex-col"><div style="height:220px;overflow:hidden;border:1px solid var(--border);">${sImg(IMG.f0541,'site-img','Training')}</div><div style="height:140px;overflow:hidden;border:1px solid var(--border);">${sImg(IMG.f31,'site-img','Ops')}</div></div>
      <div>
        <p class="eyebrow">Advise &amp; assist</p>
        <div class="stripe-head"><div class="h-md" style="margin-bottom:18px;">Advanced Training</div></div>
        <p class="lead" style="margin-bottom:20px;">From military units to law enforcement and the private sector — we advise the highest trained organizations to be better and more capable than they were yesterday.</p>
        <div class="info-panel"><div class="info-panel-label">Special activities</div><p style="font-family:var(--fu);font-size:13px;color:var(--dim);">We operate where deniability is paramount — from basic surveillance &amp; tracking to full-scale deep cover and covert action.</p></div>
      </div>
    </div>
    <div class="divider"></div>
    <div style="padding:52px 0 0;position:relative;"><div class="sec-num" style="font-size:60px;">03</div>
      <p class="eyebrow" style="margin-bottom:8px;">Global logistics</p>
      <div class="stripe-head" style="margin-bottom:12px;"><div class="h-md">Personnel &amp; Supply — Anywhere. Fast.</div></div>
      <p class="lead" style="margin-bottom:36px;max-width:640px;">Our staff operate ground vehicles, maritime craft and aircraft. Logistical and shipping relationships ensure safety and success in short order, worldwide.</p>
      <div class="b-grid" style="display:grid;grid-template-columns:repeat(3,1fr);">
        <div class="domain-card"><div class="domain-header"><span class="domain-icon">〜</span><span class="tag gold">SEA</span></div><div class="h-sm" style="margin-bottom:8px;">From the sea</div><p style="font-size:12px;color:var(--muted);line-height:1.65;margin-bottom:14px;">Highly capable combat divers operating various craft across the waterways of the world to client requirements.</p><img class="domain-img" src="${IMG.ops9}" alt="Sea" ${onerr} /></div>
        <div class="domain-card"><div class="domain-header"><span class="domain-icon">◦</span><span class="tag gold">SAND</span></div><div class="h-sm" style="margin-bottom:8px;">Over land</div><p style="font-size:12px;color:var(--muted);line-height:1.65;margin-bottom:14px;">Ground Branch employs expert personnel for all terrain operations. Most engagements happen in this arena — we outfit accordingly.</p><img class="domain-img" src="${IMG.f3}" alt="Sand" ${onerr} /></div>
        <div class="domain-card" style="border-right:none;"><div class="domain-header"><span class="domain-icon">△</span><span class="tag gold">SKY</span></div><div class="h-sm" style="margin-bottom:8px;">From above</div><p style="font-size:12px;color:var(--muted);line-height:1.65;margin-bottom:14px;">Sky Branch delivers logistics, personnel drops, aerial observation and UAS capabilities globally.</p><img class="domain-img" src="${IMG.f0541}" alt="Sky" ${onerr} /></div>
      </div>
    </div>
  </div>`;
}

function buildAboutPage() {
  const exp = ['Protective security detail','Surveillance operations','Special activities','Counterterrorism','Advanced unit training','Diplomatic security','Personnel recovery','Global logistics'];
  return `
  <div class="hero" style="height:380px;">${sImg(IMG.f16,'site-img','About','position:absolute;inset:0;width:100%;height:100%;object-fit:cover;')}
    <div class="hero-overlay"></div><div class="corner-tl"></div><div class="corner-tr"></div>
    <div style="position:absolute;bottom:0;left:0;right:0;padding:40px 52px;"><p class="eyebrow">Service Disabled Veteran Owned · SDVOSB</p><div class="h-xl" style="margin-top:10px;">About Method<br><span style="color:var(--accent);">Endeavors</span></div></div>
  </div>
  <div class="divider-accent"></div>
  <div class="section" style="max-width:1060px;">
    <div class="grid-2" style="margin-bottom:52px;">
      <div>
        <p class="eyebrow">We create options</p>
        <p class="lead" style="margin-bottom:16px;">Method Endeavors provides high threat protection to diplomats, dignitaries and high net worth individuals around the globe. We are a Service Disabled Veteran Owned Small Business (SDVOSB) specializing in real world consultation, threat mitigation and advanced training of specialized units.</p>
        <p class="lead" style="margin-bottom:16px;">The company is comprised of current and former members of Special Operations — Navy SEALs, Army Rangers, Green Berets, Marine Special Operations, Intelligence community and support staff.</p>
        <p class="lead">Offices in South America, the US, Africa and Asia. Over two decades of experience in every major conflict since the Global War On Terror.</p>
      </div>
      <div class="flex-col"><div style="height:220px;overflow:hidden;border:1px solid var(--border);">${sImg(IMG.f31,'site-img','Team')}</div><div style="height:140px;overflow:hidden;border:1px solid var(--border);">${sImg(IMG.f13,'site-img','Ops')}</div></div>
    </div>
    <div class="divider"></div>
    <div style="padding:40px 0;"><p class="eyebrow" style="margin-bottom:24px;">Our expertise</p>
      <div class="b-grid" style="display:grid;grid-template-columns:repeat(4,1fr);">
        ${exp.map(e=>`<div class="exp-cell"><div class="exp-dot"></div><p>${e}</p></div>`).join('')}
      </div>
    </div>
    <div class="divider"></div>
    <div style="padding:40px 0;"><p class="eyebrow" style="margin-bottom:20px;">Global presence</p>
      <div class="b-grid" style="display:grid;grid-template-columns:repeat(4,1fr);">
        ${['Americas','Africa','Asia','Middle East'].map((r,i)=>`<div class="presence-cell"${i===3?' style="border-right:none;"':''}><div class="h-sm" style="margin-bottom:4px;">${r}</div><div class="small">Active operations</div></div>`).join('')}
      </div>
    </div>
    <div class="divider"></div>
    <div style="padding:40px 0 0;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;">
      <div><div class="h-sm" style="margin-bottom:4px;">Our experience is unrivaled. Our craft is unmatched.</div><p class="small">Above all — we create options.</p></div>
      <button class="btn-primary" data-page="inquire">Work With Us →</button>
    </div>
  </div>`;
}

function buildInquirePage() {
  return `
  <div class="hero" style="height:300px;">${sImg(IMG.f35,'site-img','Inquire','position:absolute;inset:0;width:100%;height:100%;object-fit:cover;')}
    <div class="hero-overlay"></div><div class="corner-tl"></div><div class="corner-tr"></div>
    <div style="position:absolute;bottom:0;left:0;right:0;padding:36px 52px;"><p class="eyebrow">Consultation, operations &amp; training</p><div class="h-lg" style="margin-top:10px;">Inquire With<br><span style="color:var(--accent);">Method Staff</span></div></div>
  </div>
  <div class="divider-accent"></div>
  <div class="section-sm">
    <p class="lead" style="margin-bottom:36px;">Contact Method staff regarding questions, orders, training and specific organisational needs. All inquiries are handled with full confidentiality.</p>
    <div id="inquire-success" class="success-box" style="display:none;">
      <div class="success-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg></div>
      <div class="h-md" style="margin-bottom:10px;">Message Received</div>
      <p class="lead" style="margin-bottom:28px;">A member of our team will be in contact shortly.</p>
      <button class="btn-outline" id="inquire-again-btn">Send Another →</button>
    </div>
    <div id="inquire-form" class="form-box">
      <div style="display:flex;flex-direction:column;gap:20px;">
        <div class="form-grid-2">
          <div class="form-group"><label class="form-label">Name</label><input class="form-input" type="text" id="inq-name" placeholder="Full name" /></div>
          <div class="form-group"><label class="form-label">Email</label><input class="form-input" type="email" id="inq-email" placeholder="your@email.com" /></div>
        </div>
        <div class="form-group"><label class="form-label">Organisation (optional)</label><input class="form-input" type="text" id="inq-org" placeholder="Unit, agency, or company" /></div>
        <div class="form-group"><label class="form-label">Nature of inquiry</label>
          <select class="form-select" id="inq-type">
            <option>Protective security / PSD</option><option>Training &amp; advise/assist</option>
            <option>Special activities</option><option>Personnel recovery / extraction</option>
            <option>Global logistics</option><option>General inquiry</option>
          </select>
        </div>
        <div class="form-group"><label class="form-label">Message</label><textarea class="form-textarea" rows="5" id="inq-msg" placeholder="Describe your situation, requirements, timeline and any relevant details…"></textarea></div>
        <button class="btn-primary" style="width:100%;justify-content:center;" id="inq-submit-btn">Send Secure Message →</button>
      </div>
    </div>
  </div>`;
}

// ── RENDER SHOP GRID ─────────────────────────────────────────
function renderShop() {
  const grid = el('shop-grid');
  if (!grid) return;
  const q = (el('shop-search') ? el('shop-search').value : '').toLowerCase();
  const filtered = SHOP_ITEMS.filter(s =>
    (activeCat === 'All' || s.cat === activeCat) &&
    s.name.toLowerCase().includes(q)
  );
  if (!filtered.length) {
    grid.innerHTML = '<p style="padding:28px;font-family:var(--fu);color:var(--muted);font-size:12px;letter-spacing:1px;text-transform:uppercase;">No items found.</p>';
    return;
  }
  grid.innerHTML = filtered.map(s => {
    const hasSizes = s.sizes && s.sizes.length > 0;
    const sizesHTML = hasSizes ? `
      <p class="expand-label">Select size</p>
      <div class="size-grid">
        ${s.sizes.map(sz => {
          const so = s.soldOut && s.soldOut.includes(sz);
          return `<button class="size-btn${so ? ' sold-out' : ''}" data-size="${sz}" data-item="${s.id}">${sz}${so ? '<br><span style="font-size:8px;">sold out</span>' : ''}</button>`;
        }).join('')}
      </div>
      <p class="size-error" id="size-err-${s.id}">⚠ Please select a size</p>
    ` : '';

    return `
    <div class="product-card" id="pcard-${s.id}">
      <img class="product-img" src="${s.img}" alt="${s.name}" ${onerr} />
      <div class="product-body">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;">
          <span style="font-family:var(--fu);font-size:10px;color:var(--muted);letter-spacing:1px;text-transform:uppercase;">${s.cat}</span>
          ${s.tag ? `<span class="tag ${s.tag==='New Drop'?'red':'gold'}">${s.tag}</span>` : ''}
        </div>
        <p style="font-family:var(--fu);font-weight:700;font-size:14px;color:var(--white);">${s.name}</p>
        <p style="font-size:12px;color:var(--muted);line-height:1.6;">${s.desc}</p>
        <div class="product-footer">
          <span class="price">$${s.price}</span>
          <button class="select-btn" data-toggle="${s.id}">Select →</button>
        </div>
        <div class="product-expand" id="pexpand-${s.id}">
          ${sizesHTML}
          <p class="expand-label">Quantity</p>
          <div class="qty-row">
            <button class="qty-btn" data-qchange="${s.id}" data-delta="-1">−</button>
            <div class="qty-display" id="pqty-${s.id}">1</div>
            <button class="qty-btn" data-qchange="${s.id}" data-delta="1">+</button>
          </div>
          <button class="add-to-cart-btn" data-additem="${s.id}">Add to Cart</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ── RENDER TRAINING GRID ─────────────────────────────────────
function renderTraining() {
  const grid = el('training-grid');
  if (!grid) return;
  grid.innerHTML = TRAINING_ITEMS.map(t => `
    <div class="training-card">
      <img class="training-img" src="${t.img}" alt="${t.name}" ${onerr} />
      <div class="training-body">
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <span class="tag ${t.level==='Advanced'||t.level==='Professional'?'gold':''}">${t.level}</span>
          <span class="tag">${t.dur}</span>
        </div>
        <p style="font-family:var(--fu);font-weight:700;font-size:15px;color:var(--white);">${t.name}</p>
        <p style="font-size:12px;color:var(--muted);line-height:1.65;">${t.desc}</p>
        <div class="training-footer">
          <span class="price" style="font-size:20px;">${t.price ? '$'+fmt(t.price) : 'Custom'}</span>
          <button class="select-btn" data-enroll="${t.id}">${t.price ? 'Enroll' : 'Inquire →'}</button>
        </div>
      </div>
    </div>
  `).join('');
}

// ── CART ─────────────────────────────────────────────────────
function addToCart(cartId, name, price, qty) {
  const ex = cart.find(i => i.cartId === cartId);
  if (ex) { ex.qty += qty; }
  else { cart.push({ cartId, name, price, qty }); }
  updateCartUI();
}
function removeFromCart(cartId) {
  cart = cart.filter(i => i.cartId !== cartId);
  updateCartUI();
}
function changeCartQty(cartId, delta) {
  const item = cart.find(i => i.cartId === cartId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(cartId);
  else updateCartUI();
}
function updateCartUI() {
  const count = cart.reduce((s,i) => s+i.qty, 0);
  el('cart-label').innerHTML = count > 0 ? `<span class="cart-badge">${count}</span>` : 'Cart';
  el('cart-heading').textContent = count > 0 ? `CART (${count})` : 'CART';
  renderCartBody();
}
function renderCartBody() {
  const body = el('cart-body');
  if (!cart.length) { body.innerHTML = '<p class="cart-empty">Your cart is empty.</p>'; return; }
  const total = cart.reduce((s,i) => s + i.price*i.qty, 0);
  body.innerHTML = `
    <div class="cart-items">
      ${cart.map(item => `
        <div class="cart-item">
          <div class="cart-item-top">
            <span class="cart-item-name">${item.name}</span>
            <button class="cart-item-remove" data-cartremove="${item.cartId}">Remove</button>
          </div>
          <div class="cart-item-bottom">
            <div class="cqty-wrap">
              <button class="cqty-btn" data-cartqty="${item.cartId}" data-delta="-1">−</button>
              <div class="cqty-num">${item.qty}</div>
              <button class="cqty-btn" data-cartqty="${item.cartId}" data-delta="1">+</button>
            </div>
            <span class="cart-item-price">$${fmt(item.price * item.qty)}</span>
          </div>
        </div>
      `).join('')}
    </div>
    <div class="cart-footer">
      <div class="cart-total-row"><span class="cart-total-lbl">Subtotal</span><span class="cart-total-val">$${fmt(total)}</span></div>
      <button class="checkout-btn" id="checkout-btn">Proceed to Checkout</button>
    </div>`;
}
function toggleCart() {
  el('cart-overlay').classList.toggle('open');
  renderCartBody();
}

// ── AUTH ─────────────────────────────────────────────────────
function openAuthModal()  { el('auth-modal').classList.add('open'); }
function closeAuthModal() { el('auth-modal').classList.remove('open'); }
function signIn() {
  const email = el('signin-email').value.trim();
  const pass  = el('signin-pass').value;
  const err   = el('signin-error');
  if (!email || !pass) { err.textContent='Please enter email and password.'; err.style.display='block'; return; }
  if (!accounts[email]) { err.textContent='No account found. Please create one.'; err.style.display='block'; return; }
  if (accounts[email].password !== pass) { err.textContent='Incorrect password.'; err.style.display='block'; return; }
  err.style.display='none';
  currentUser = accounts[email];
  closeAuthModal();
  updateNavProfile();
  openProfilePanel();
}
function signUp() {
  const name  = el('signup-name').value.trim();
  const email = el('signup-email').value.trim();
  const pass  = el('signup-pass').value;
  const err   = el('signup-error');
  if (!name||!email||!pass) { err.textContent='All fields are required.'; err.style.display='block'; return; }
  if (pass.length < 6) { err.textContent='Password must be at least 6 characters.'; err.style.display='block'; return; }
  if (accounts[email]) { err.textContent='An account with this email already exists.'; err.style.display='block'; return; }
  err.style.display='none';
  accounts[email] = { email, password:pass, name, subscribed:false, history:[] };
  currentUser = accounts[email];
  closeAuthModal();
  updateNavProfile();
  openProfilePanel();
}
function logout() {
  currentUser = null;
  closeProfilePanel();
  el('profile-nav-label').textContent = 'Sign In';
  el('profile-nav-btn').style.cssText = '';
}
function updateNavProfile() {
  if (!currentUser) return;
  el('profile-nav-label').textContent = currentUser.name.split(' ')[0];
  el('profile-nav-btn').style.borderColor = 'var(--accent)';
  el('profile-nav-btn').style.color = 'var(--accent)';
}

// ── PROFILE PANEL ────────────────────────────────────────────
function openProfilePanel() {
  if (!currentUser) { openAuthModal(); return; }
  const initials = currentUser.name.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2);
  el('profile-initials').textContent = initials;
  el('profile-name').textContent     = currentUser.name;
  el('profile-email').textContent    = currentUser.email;
  updateSubStatus();
  renderPurchaseHistory();
  el('profile-panel').classList.add('open');
}
function closeProfilePanel() { el('profile-panel').classList.remove('open'); }
function updateSubStatus() {
  if (!currentUser) return;
  const s = el('sub-status'), b = el('sub-toggle-btn');
  if (currentUser.subscribed) { s.textContent='✓ Subscribed'; s.style.color='var(--accent)'; b.textContent='Unsubscribe'; b.style.color='#e06060'; }
  else { s.textContent='Not subscribed'; s.style.color='var(--muted)'; b.textContent='Subscribe to Newsletter'; b.style.color='var(--muted)'; }
}
function toggleSubscription() {
  if (!currentUser) return;
  currentUser.subscribed = !currentUser.subscribed;
  updateSubStatus();
}
function renderPurchaseHistory() {
  const div = el('purchase-history');
  if (!currentUser.history.length) { div.innerHTML='<p style="font-family:var(--fu);font-size:11px;color:var(--muted);letter-spacing:1px;text-transform:uppercase;">No purchases yet.</p>'; return; }
  div.innerHTML = currentUser.history.map(h=>`<div class="history-item"><div class="history-item-name">${h.name}</div><div class="history-item-meta">${h.type} · $${fmt(h.price)} · Qty ${h.qty} · ${h.date}</div></div>`).join('');
}

// ── CHECKOUT ─────────────────────────────────────────────────
function handleCheckout() {
  if (!currentUser) { toggleCart(); openAuthModal(); return; }
  const now = new Date().toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
  cart.forEach(item => currentUser.history.unshift({ name:item.name, type:'Purchase', price:item.price, qty:item.qty, date:now }));
  cart = [];
  updateCartUI();
  toggleCart();
  alert('Order confirmed! View your purchase history in your profile.');
}

// ── NAVIGATION ───────────────────────────────────────────────
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = el('page-' + pageId);
  if (target) target.classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.page === pageId);
  });
  // Re-render dynamic grids when switching to those pages
  if (pageId === 'shop')     renderShop();
  if (pageId === 'training') renderTraining();
  window.scrollTo(0, 0);
}

// ── EVENT DELEGATION — single listener on document ───────────
document.addEventListener('click', function(e) {
  const t = e.target;

  // NAV buttons
  if (t.matches('.nav-btn[data-page]'))    { showPage(t.dataset.page); return; }
  if (t.matches('[data-page]'))            { showPage(t.dataset.page); return; }

  // CART
  if (t.closest('#cart-toggle-btn'))       { toggleCart(); return; }
  if (t.closest('#cart-backdrop') || t.closest('#cart-close-btn')) { toggleCart(); return; }
  if (t.matches('[data-cartremove]'))      { removeFromCart(t.dataset.cartremove); return; }
  if (t.matches('[data-cartqty]'))         { changeCartQty(t.dataset.cartqty, parseInt(t.dataset.delta)); return; }
  if (t.matches('#checkout-btn'))          { handleCheckout(); return; }

  // PROFILE
  if (t.closest('#profile-nav-btn'))       { openProfilePanel(); return; }
  if (t.closest('#profile-close-btn') || t.closest('#logout-btn')) {
    if (t.closest('#logout-btn')) logout();
    else closeProfilePanel();
    return;
  }
  if (t.matches('#sub-toggle-btn'))        { toggleSubscription(); return; }

  // AUTH MODAL
  if (t.matches('#auth-modal-close') || (t.matches('#auth-modal') && !t.closest('.modal-box'))) { closeAuthModal(); return; }
  if (t.matches('#tab-signin-btn'))        { el('tab-signin').classList.add('active'); el('tab-signup').classList.remove('active'); t.classList.add('active'); el('tab-signup-btn').classList.remove('active'); return; }
  if (t.matches('#tab-signup-btn'))        { el('tab-signup').classList.add('active'); el('tab-signin').classList.remove('active'); t.classList.add('active'); el('tab-signin-btn').classList.remove('active'); return; }
  if (t.matches('#signin-submit-btn'))     { signIn(); return; }
  if (t.matches('#signup-submit-btn'))     { signUp(); return; }

  // NEWSLETTER
  if (t.matches('#nl-submit-btn'))         { const e2=el('nl-email'); if(e2&&e2.value.trim()){el('nl-confirm').style.display='block';e2.value='';} return; }

  // INQUIRE
  if (t.matches('#inq-submit-btn'))        { el('inquire-form').style.display='none'; el('inquire-success').style.display='block'; return; }
  if (t.matches('#inquire-again-btn'))     { el('inquire-form').style.display='block'; el('inquire-success').style.display='none'; return; }

  // CAP CARDS
  if (t.closest('.cap-card[data-page]'))   { showPage(t.closest('.cap-card').dataset.page); return; }

  // SHOP — TOGGLE EXPAND
  if (t.matches('[data-toggle]')) {
    const id = parseInt(t.dataset.toggle);
    const panel = el('pexpand-' + id);
    if (!panel) return;
    const isOpen = panel.classList.contains('open');
    // Close all other panels
    document.querySelectorAll('.product-expand.open').forEach(p => {
      p.classList.remove('open');
      const otherId = p.id.replace('pexpand-','');
      const otherBtn = document.querySelector(`[data-toggle="${otherId}"]`);
      if (otherBtn) { otherBtn.textContent = 'Select →'; otherBtn.classList.remove('open'); }
    });
    if (!isOpen) {
      panel.classList.add('open');
      t.textContent = 'Close ✕';
      t.classList.add('open');
    }
    return;
  }

  // SHOP — SIZE SELECT
  if (t.matches('.size-btn:not(.sold-out)')) {
    const id = t.dataset.item;
    t.closest('.size-grid').querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
    t.classList.add('selected');
    if (!expandState[id]) expandState[id] = { qty:1, size:null };
    expandState[id].size = t.dataset.size;
    const errEl = el('size-err-' + id);
    if (errEl) errEl.style.display = 'none';
    return;
  }

  // SHOP — QTY CHANGE
  if (t.matches('[data-qchange]')) {
    const id    = t.dataset.qchange;
    const delta = parseInt(t.dataset.delta);
    if (!expandState[id]) expandState[id] = { qty:1, size:null };
    expandState[id].qty = Math.max(1, (expandState[id].qty || 1) + delta);
    const qEl = el('pqty-' + id);
    if (qEl) qEl.textContent = expandState[id].qty;
    return;
  }

  // SHOP — ADD TO CART
  if (t.matches('[data-additem]')) {
    const id   = parseInt(t.dataset.additem);
    const item = SHOP_ITEMS.find(s => s.id === id);
    if (!item) return;
    const st = expandState[id] || { qty:1, size:null };
    // Validate size
    if (item.sizes && item.sizes.length > 0 && !st.size) {
      const errEl = el('size-err-' + id);
      if (errEl) errEl.style.display = 'block';
      return;
    }
    const cartId = item.sizes ? `${id}-${st.size}` : `${id}`;
    const name   = item.sizes ? `${item.name} (${st.size})` : item.name;
    addToCart(cartId, name, item.price, st.qty || 1);
    // Reset
    expandState[id] = { qty:1, size:null };
    const qEl = el('pqty-' + id);
    if (qEl) qEl.textContent = 1;
    const panel  = el('pexpand-' + id);
    const togBtn = document.querySelector(`[data-toggle="${id}"]`);
    if (panel)  { panel.classList.remove('open'); }
    if (togBtn) { togBtn.textContent = '✓ Added'; togBtn.classList.remove('open'); togBtn.style.color='var(--accent)'; setTimeout(()=>{ togBtn.textContent='Select →'; togBtn.style.color=''; }, 1800); }
    // Clear size selection
    const sGrid = document.querySelector(`#pexpand-${id} .size-grid`);
    if (sGrid) sGrid.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
    return;
  }

  // TRAINING — ENROLL
  if (t.matches('[data-enroll]')) {
    const id = t.dataset.enroll;
    const item = TRAINING_ITEMS.find(i => i.id === id);
    if (!item) return;
    if (!item.price) { showPage('inquire'); return; }
    if (!currentUser) { openAuthModal(); return; }
    addToCart('training-' + id, item.name, item.price, 1);
    t.textContent = '✓ Enrolled';
    t.style.color = 'var(--accent)';
    setTimeout(() => { t.textContent = 'Enroll'; t.style.color = ''; }, 1800);
    return;
  }
});

// ── KEYBOARD: close modals with Escape ───────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeAuthModal(); closeProfilePanel(); if (el('cart-overlay').classList.contains('open')) toggleCart(); }
});

// ── INIT ─────────────────────────────────────────────────────
document.getElementById('root').innerHTML = buildStaticHTML();
// Both grids render immediately after HTML injection — no setTimeout needed
renderShop();
renderTraining();