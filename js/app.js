/* ============================================================
   Maddhoram · Desi Swaad — menu data, filtering, tray & interactions
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Category metadata (packaging-box product lines) ---------- */
  const CATS = {
    sweets:    { label: "Traditional Sweets",           t1: "#8a2233", t2: "#571022" },
    savoris:   { label: "Savoris",                      t1: "#8a2233", t2: "#571022" },
    dryfruits: { label: "Dry Fruits & Confectioneries", t1: "#8a2233", t2: "#571022" },
    mains:     { label: "Main Course",                  t1: "#8a2233", t2: "#571022" },
    breads:    { label: "Breads & Rice",                t1: "#8a2233", t2: "#571022" },
    beverages: { label: "Beverages",                    t1: "#8a2233", t2: "#571022" }
  };

  /* ---------- Menu (56 items) ---------- */
  const MENU = [
    // — Traditional Sweets —
    { id: "gulab-jamun",   name: "Gulab Jamun · 2 pcs",   cat: "sweets", price: 60,  veg: true, best: true,  desc: "Golden-fried milk dumplings soaked in rose-scented sugar syrup." },
    { id: "rasgulla",      name: "Rasgulla · 2 pcs",      cat: "sweets", price: 50,  veg: true, best: false, desc: "Feather-light chenna patties, spongy and lightly sweet." },
    { id: "jalebi",        name: "Jalebi · plate",        cat: "sweets", price: 80,  veg: true, best: true,  desc: "Crisp, syrup-drenched spirals — fried fresh every morning." },
    { id: "gajar-halwa",   name: "Gajar ka Halwa",        cat: "sweets", price: 120, veg: true, best: false, desc: "Red carrots slow-cooked with milk, ghee and dry fruits." },
    { id: "malai-barfi",   name: "Malai Barfi",           cat: "sweets", price: 60,  veg: true, best: false, desc: "Thick, milky fudge with a hint of cardamom." },
    { id: "kheer",         name: "Kheer / Payasam",       cat: "sweets", price: 90,  veg: true, best: false, desc: "Creamy rice pudding with saffron and toasted nuts." },
    { id: "sandesh",       name: "Sandesh",               cat: "sweets", price: 55,  veg: true, best: false, desc: "Soft chenna sweet, delicately sweetened — a Bengal favourite." },
    { id: "mysore-pak",    name: "Mysore Pak",            cat: "sweets", price: 70,  veg: true, best: false, desc: "Famous gram-flour and ghee sweet from Karnataka." },
    { id: "soan-papdi",    name: "Soan Papdi",            cat: "sweets", price: 65,  veg: true, best: false, desc: "Flaky crisp layers soaked in syrup, topped with nuts." },
    { id: "mathura-peda",  name: "Mathura Peda",          cat: "sweets", price: 50,  veg: true, best: false, desc: "Dense, grainy milk sweet — the pride of Mathura." },
    { id: "shrikhand",     name: "Shrikhand · bowl",      cat: "sweets", price: 100, veg: true, best: false, desc: "Hung-curd dessert, thick and creamy — kesar or mango." },
    { id: "rabri",         name: "Rabri · bowl",          cat: "sweets", price: 110, veg: true, best: false, desc: "Milk reduced for hours, layered and sweetened, topped with nuts." },
    { id: "motichoor-laddu", name: "Motichoor Laddu",     cat: "sweets", price: 40,  veg: true, best: false, desc: "Melt-in-the-mouth gram-flour ladoos, pure ghee fried." },
    { id: "besan-laddu",   name: "Besan Laddu",           cat: "sweets", price: 40,  veg: true, best: false, desc: "Nutty, crumbly and rich — the classic celebration laddu." },
    // — Dry Fruits & Confectioneries —
    { id: "kaju-katli",    name: "Kaju Katli",            cat: "dryfruits", price: 45,  veg: true, best: true,  desc: "Silky cashew fudge finished with edible silver varak." },
    { id: "badam-katli",   name: "Badam Katli",           cat: "dryfruits", price: 50,  veg: true, best: false, desc: "Rich almond fudge, cut into delicate diamonds." },
    { id: "pista-roll",    name: "Pista Roll",            cat: "dryfruits", price: 55,  veg: true, best: false, desc: "Flaky pastry layered with pistachio and cardamom." },
    { id: "anjeer-roll",   name: "Anjeer Roll",           cat: "dryfruits", price: 60,  veg: true, best: false, desc: "Soft fig and dry-fruit preserve rolled in pastry." },
    { id: "dry-fruit-barfi", name: "Dry Fruit Barfi",     cat: "dryfruits", price: 70,  veg: true, best: false, desc: "Milk fudge loaded with cashews, almonds and pistachios." },
    { id: "kesar-pista-katli", name: "Kesar Pista Katli", cat: "dryfruits", price: 55,  veg: true, best: false, desc: "Saffron-kissed cashew-pistachio fudge." },
    { id: "dry-fruit-laddu", name: "Dry Fruit Laddu",     cat: "dryfruits", price: 45,  veg: true, best: false, desc: "Dates and nuts bound with ghee and coconut." },
    { id: "nariyal-barfi", name: "Coconut Barfi",         cat: "dryfruits", price: 50,  veg: true, best: false, desc: "Snowy coconut fudge — melts on the tongue." },
    // — Savoris —
    { id: "samosa",        name: "Samosa · 2 pcs",        cat: "savoris", price: 40, veg: true, best: true,  desc: "Crisp pastry stuffed with spiced potato and peas." },
    { id: "kachori",       name: "Kachori · 2 pcs",       cat: "savoris", price: 45, veg: true, best: false, desc: "Flaky shells filled with spiced lentils, served with chutney." },
    { id: "paneer-pakora", name: "Paneer Pakora",         cat: "savoris", price: 90, veg: true, best: false, desc: "Cottage cheese fritters, golden outside and soft inside." },
    { id: "onion-pakora",  name: "Onion Pakora · plate",  cat: "savoris", price: 60, veg: true, best: false, desc: "Monsoon favourite — crisp gram-flour fritters with chutney." },
    { id: "bread-pakora",  name: "Bread Pakora · 2 pcs",  cat: "savoris", price: 50, veg: true, best: false, desc: "Stuffed bread fritters — a rainy-day classic." },
    { id: "dhokla",        name: "Khaman Dhokla · 2 pcs", cat: "savoris", price: 60, veg: true, best: false, desc: "Soft, spongy Gujarati steamed cake, tempered with mustard seeds." },
    { id: "dahi-puri",     name: "Dahi Puri · 4 pcs",     cat: "savoris", price: 80, veg: true, best: false, desc: "Hollow puris filled with potato, yogurt and chutneys." },
    { id: "sev-puri",      name: "Sev Puri · 4 pcs",      cat: "savoris", price: 70, veg: true, best: false, desc: "Puris topped with potato, sev, onion and tamarind chutney." },
    { id: "papdi-chaat",   name: "Papdi Chaat · plate",   cat: "savoris", price: 75, veg: true, best: false, desc: "Crisp wafers, chickpeas, yogurt and three chutneys." },
    { id: "aloo-tikki",    name: "Aloo Tikki Chaat",      cat: "savoris", price: 85, veg: true, best: false, desc: "Crisp potato patties with chole, chutneys and sev." },
    // — Main Course —
    { id: "paneer-butter-masala", name: "Paneer Butter Masala",      cat: "mains", price: 220, veg: true,  best: true,  desc: "Cottage cheese in a rich tomato-butter gravy." },
    { id: "dal-makhani",   name: "Dal Makhani",           cat: "mains", price: 180, veg: true,  best: false, desc: "Black lentils slow-simmered overnight with cream and butter." },
    { id: "chana-masala",  name: "Chana Masala",          cat: "mains", price: 160, veg: true,  best: false, desc: "Punjabi chickpeas in a tangy, spiced gravy." },
    { id: "palak-paneer",  name: "Palak Paneer",          cat: "mains", price: 210, veg: true,  best: false, desc: "Fresh spinach gravy with soft paneer cubes." },
    { id: "aloo-gobi",     name: "Aloo Gobi",             cat: "mains", price: 150, veg: true,  best: false, desc: "Potato and cauliflower with cumin and turmeric." },
    { id: "rajma-chawal",  name: "Rajma Chawal",          cat: "mains", price: 170, veg: true,  best: false, desc: "Kidney beans in a thick gravy, served with steamed rice." },
    { id: "veg-biryani",   name: "Veg Biryani",           cat: "mains", price: 200, veg: true,  best: true,  desc: "Fragrant basmati layered with vegetables and saffron." },
    { id: "chicken-biryani", name: "Hyderabadi Chicken Biryani", cat: "mains", price: 280, veg: false, best: true, desc: "Aromatic basmati and marinated chicken, dum-cooked." },
    { id: "butter-chicken", name: "Butter Chicken",       cat: "mains", price: 260, veg: false, best: false, desc: "Tandoor chicken in a velvety tomato-makhan gravy." },
    { id: "masala-dosa",   name: "Masala Dosa",           cat: "mains", price: 120, veg: true,  best: false, desc: "Crisp rice crepe stuffed with spiced potato, with sambar." },
    { id: "idli-sambar",   name: "Idli Sambhar · 2 pcs",  cat: "mains", price: 80,  veg: true,  best: false, desc: "Soft steamed rice cakes with lentil sambar and chutney." },
    { id: "pav-bhaji",     name: "Pav Bhaji",             cat: "mains", price: 140, veg: true,  best: false, desc: "Spiced vegetable mash with butter-toasted pav." },
    // — Breads & Rice —
    { id: "tandoori-roti", name: "Tandoori Roti",         cat: "breads", price: 30,  veg: true, best: false, desc: "Whole-wheat roti baked in the clay tandoor." },
    { id: "butter-naan",   name: "Butter Naan",           cat: "breads", price: 45,  veg: true, best: false, desc: "Soft, pillowy leavened bread brushed with butter." },
    { id: "garlic-naan",   name: "Garlic Naan",           cat: "breads", price: 55,  veg: true, best: false, desc: "Naan topped with fresh garlic and coriander." },
    { id: "laccha-paratha", name: "Laccha Paratha",       cat: "breads", price: 50,  veg: true, best: false, desc: "Layered, flaky whole-wheat paratha." },
    { id: "jeera-rice",    name: "Jeera Rice",            cat: "breads", price: 120, veg: true, best: false, desc: "Basmati rice tempered with cumin." },
    { id: "steamed-rice",  name: "Steamed Rice",          cat: "breads", price: 80,  veg: true, best: false, desc: "Plain, fluffy basmati — the perfect companion." },
    // — Beverages —
    { id: "masala-chai",   name: "Masala Chai",           cat: "beverages", price: 25,  veg: true, best: true,  desc: "Ginger-cardamom tea brewed fresh with milk." },
    { id: "filter-coffee", name: "Filter Coffee",         cat: "beverages", price: 30,  veg: true, best: false, desc: "South Indian decoction frothed with hot milk." },
    { id: "mango-lassi",   name: "Mango Lassi",           cat: "beverages", price: 80,  veg: true, best: false, desc: "Thick yogurt blended with ripe mangoes." },
    { id: "falooda",       name: "Rose Falooda",          cat: "beverages", price: 110, veg: true, best: false, desc: "Vermicelli, basil seeds, rose milk and ice cream." },
    { id: "badam-milk",    name: "Badam Milk · hot",      cat: "beverages", price: 90,  veg: true, best: false, desc: "Warm milk with saffron and ground almonds." },
    { id: "jaljeera",      name: "Jaljeera",              cat: "beverages", price: 40,  veg: true, best: false, desc: "Tangy cumin-mint cooler — the perfect summer sip." }
  ];

  /* ---------- State & helpers ---------- */
  const state = { cat: "all", q: "" };
  const cart = new Map();

  const store = {
    get() { try { return JSON.parse(localStorage.getItem("maddhoram-tray") || "[]"); } catch (e) { return []; } },
    set(v) { try { localStorage.setItem("maddhoram-tray", JSON.stringify(v)); } catch (e) { /* private mode */ } }
  };
  store.get().forEach(function (pair) {
    if (MENU.some(function (m) { return m.id === pair[0]; })) cart.set(pair[0], pair[1]);
  });

  const $ = function (s, el) { return (el || document).querySelector(s); };
  const grid = $("#menuGrid"), countEl = $("#resultCount"), emptyEl = $("#emptyState");
  const tabsEl = $("#tabs"), searchInput = $("#searchInput");

  const initials = function (name) {
    return name.split(/\s+/)
      .filter(function (w) { return /[A-Za-z]/.test(w); })
      .slice(0, 2)
      .map(function (w) { return w[0].toUpperCase(); })
      .join("");
  };

  /* ---------- Tabs ---------- */
  const tabDefs = [{ key: "all", label: "All" }].concat(
    Object.keys(CATS).map(function (k) { return { key: k, label: CATS[k].label }; })
  );
  tabsEl.innerHTML = tabDefs.map(function (t) {
    const active = t.key === "all";
    return '<button class="tab' + (active ? " active" : "") + '" data-cat="' + t.key + '" aria-pressed="' + active + '">' + t.label + "</button>";
  }).join("");

  /* ---------- Menu rendering ---------- */
  function stepperHTML(id) {
    const qty = cart.get(id) || 0;
    if (qty === 0) return '<button class="add-btn" data-add="' + id + '">Add&nbsp;+</button>';
    return '<div class="qty-stepper" role="group" aria-label="Quantity for this item">' +
      '<button class="qty-btn" data-dec="' + id + '" aria-label="Decrease quantity">−</button>' +
      '<span class="qty-num">' + qty + '</span>' +
      '<button class="qty-btn" data-inc="' + id + '" aria-label="Increase quantity">+</button>' +
      '</div>';
  }

  function syncCardSteppers() {
    grid.querySelectorAll("[data-stepper]").forEach(function (el) {
      el.innerHTML = stepperHTML(el.dataset.stepper);
    });
  }

  function cardHTML(item) {
    const c = CATS[item.cat];
    return (
      '<article class="card reveal">' +
        '<div class="card-top" style="--t1:' + c.t1 + ";--t2:" + c.t2 + '">' +
          '<span class="card-mono">' + initials(item.name) + "</span>" +
          (item.best ? '<span class="badge-best">★ Bestseller</span>' : "") +
          '<span class="veg' + (item.veg ? "" : " nonveg") + '" role="img" aria-label="' + (item.veg ? "Vegetarian" : "Non-vegetarian") + '"><i></i></span>' +
        "</div>" +
        '<div class="card-body">' +
          '<div class="card-title-row"><h3>' + item.name + '</h3><span class="price">₹' + item.price + "</span></div>" +
          '<p class="card-desc">' + item.desc + "</p>" +
          '<div class="card-foot">' +
            '<span class="card-cat">' + c.label + "</span>" +
            '<span class="card-step" data-stepper="' + item.id + '">' + stepperHTML(item.id) + '</span>' +
          "</div>" +
        "</div>" +
      "</article>"
    );
  }

  let revealObs = null;
  function observeReveals() {
    if (!revealObs) {
      revealObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add("visible"); revealObs.unobserve(en.target); }
        });
      }, { threshold: 0.1 });
    }
    document.querySelectorAll(".reveal:not(.visible)").forEach(function (el) { revealObs.observe(el); });
  }

  function render(animate) {
    if (animate === undefined) animate = true;
    const q = state.q.trim().toLowerCase();
    const items = MENU.filter(function (m) {
      const inCat = state.cat === "all" || m.cat === state.cat;
      const hay = (m.name + " " + m.desc + " " + CATS[m.cat].label).toLowerCase();
      return inCat && (!q || hay.indexOf(q) !== -1);
    });
    grid.innerHTML = items.map(cardHTML).join("");
    emptyEl.hidden = items.length > 0;
    countEl.textContent = "Showing " + items.length + " of " + MENU.length + " items";
    if (animate) observeReveals();
    else grid.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("visible"); });
  }

  tabsEl.addEventListener("click", function (e) {
    const btn = e.target.closest(".tab");
    if (!btn) return;
    tabsEl.querySelectorAll(".tab").forEach(function (t) {
      const on = t === btn;
      t.classList.toggle("active", on);
      t.setAttribute("aria-pressed", on);
    });
    state.cat = btn.dataset.cat;
    render(true);
  });

  searchInput.addEventListener("input", function () {
    state.q = searchInput.value;
    render(false);
  });

  /* ---------- Tray (cart) ---------- */
  const drawer = $("#cartDrawer"), overlay = $("#overlay"), drawerItems = $("#drawerItems");
  const cartCount = $("#cartCount"), cartTotal = $("#cartTotal"), deliveryNote = $("#deliveryNote");
  const drawerEmpty = $("#drawerEmpty"), drawerFoot = $("#drawerFoot");
  const drawerCount = $("#drawerCount");
  const cartBar = $("#cartBar"), cartBarCount = $("#cartBarCount"), cartBarTotal = $("#cartBarTotal");

  function saveCart() { store.set(Array.from(cart.entries())); }

  function openDrawer() { drawer.classList.add("open"); overlay.classList.add("show"); document.body.classList.add("tray-open"); document.body.style.overflow = "hidden"; }
  function closeDrawer() { drawer.classList.remove("open"); overlay.classList.remove("show"); document.body.classList.remove("tray-open"); document.body.style.overflow = ""; }

  $("#cartOpenBtn").addEventListener("click", openDrawer);
  $("#drawerClose").addEventListener("click", closeDrawer);
  $("#cartBarView").addEventListener("click", openDrawer);
  overlay.addEventListener("click", closeDrawer);

  function updateCartUI(pulse) {
    const count = Array.from(cart.values()).reduce(function (a, b) { return a + b; }, 0);
    let total = 0;
    cart.forEach(function (qty, id) {
      const m = MENU.find(function (x) { return x.id === id; });
      if (m) total += m.price * qty;
    });

    cartCount.hidden = count === 0;
    cartCount.textContent = count;
    if (pulse && count > 0) {
      cartCount.classList.remove("pulse");
      void cartCount.offsetWidth;
      cartCount.classList.add("pulse");
    }

    drawerCount.hidden = count === 0;
    drawerCount.textContent = count + (count === 1 ? " item" : " items");

    cartBarCount.textContent = count + (count === 1 ? " item" : " items");
    cartBarTotal.textContent = "₹" + total;
    cartBar.hidden = count === 0;
    document.body.classList.toggle("cart-bar-visible", count > 0);
    syncCardSteppers();

    if (cart.size === 0) {
      drawerItems.querySelectorAll(".drawer-item").forEach(function (el) { el.remove(); });
      drawerEmpty.hidden = false;
      drawerFoot.hidden = true;
      return;
    }
    drawerEmpty.hidden = true;
    drawerFoot.hidden = false;

    const rows = Array.from(cart.entries()).map(function (pair) {
      const m = MENU.find(function (x) { return x.id === pair[0]; });
      const qty = pair[1];
      const c = CATS[m.cat];
      return (
        '<div class="drawer-item" data-id="' + m.id + '">' +
          '<span class="di-dot" style="background:linear-gradient(135deg,' + c.t1 + "," + c.t2 + ')"></span>' +
          '<div class="di-info"><strong>' + m.name + "</strong><span>₹" + m.price + " each</span></div>" +
          '<div class="di-qty">' +
            '<button data-act="dec" aria-label="Decrease quantity">−</button>' +
            "<span>" + qty + "</span>" +
            '<button data-act="inc" aria-label="Increase quantity">+</button>' +
          "</div>" +
          '<span class="di-price">₹' + (m.price * qty) + "</span>" +
        "</div>"
      );
    });
    drawerItems.querySelectorAll(".drawer-item").forEach(function (el) { el.remove(); });
    drawerItems.insertAdjacentHTML("beforeend", rows.join(""));

    cartTotal.textContent = "₹" + total;
    if (total >= 500) {
      deliveryNote.textContent = "🎉 You've unlocked free delivery!";
      deliveryNote.classList.add("free");
    } else {
      deliveryNote.textContent = "Add ₹" + (500 - total) + " more for free delivery";
      deliveryNote.classList.remove("free");
    }
  }

  function changeQty(id, delta) {
    const cur = cart.get(id) || 0;
    const next = cur + delta;
    if (next <= 0) cart.delete(id); else cart.set(id, next);
    saveCart();
    updateCartUI(delta > 0);
    if (delta > 0 && cur === 0) {
      const item = MENU.find(function (m) { return m.id === id; });
      toast(item.name.split("·")[0].trim() + " added to your tray");
    }
  }

  grid.addEventListener("click", function (e) {
    const addBtn = e.target.closest("[data-add]");
    if (addBtn) { changeQty(addBtn.dataset.add, 1); return; }
    const incBtn = e.target.closest("[data-inc]");
    if (incBtn) { changeQty(incBtn.dataset.inc, 1); return; }
    const decBtn = e.target.closest("[data-dec]");
    if (decBtn) { changeQty(decBtn.dataset.dec, -1); return; }
  });

  drawerItems.addEventListener("click", function (e) {
    const btn = e.target.closest("button");
    if (!btn) return;
    const id = btn.closest(".drawer-item").dataset.id;
    if (btn.dataset.act === "inc") cart.set(id, cart.get(id) + 1);
    else {
      const q = cart.get(id) - 1;
      if (q <= 0) cart.delete(id); else cart.set(id, q);
    }
    saveCart();
    updateCartUI(false);
  });

  $("#checkoutBtn").addEventListener("click", function () {
    if (cart.size === 0) return;
    const items = Array.from(cart.entries()).map(function (pair) {
      const m = MENU.find(function (x) { return x.id === pair[0]; });
      return { name: m.name, qty: pair[1], price: m.price, cat: m.cat };
    });
    const total = items.reduce(function (a, i) { return a + i.price * i.qty; }, 0);
    const orderId = "MD-" + Math.floor(1000 + Math.random() * 9000);
    closeDrawer();
    cart.clear();
    saveCart();
    updateCartUI(false);
    startOrderFlow(items, total, orderId);
  });

  /* ---------- Toast ---------- */
  const toastWrap = $("#toastWrap");
  function toast(msg) {
    const el = document.createElement("div");
    el.className = "toast";
    el.innerHTML = '<span class="tick">✓</span><span></span>';
    el.lastElementChild.textContent = msg;
    toastWrap.appendChild(el);
    setTimeout(function () {
      el.classList.add("out");
      setTimeout(function () { el.remove(); }, 320);
    }, 2600);
  }

  /* ---------- Header, scroll-spy, back-to-top ---------- */
  const header = $("#siteHeader"), toTop = $("#toTop");
  const navLinkEls = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));
  const sections = navLinkEls
    .map(function (a) { return $(a.getAttribute("href")); })
    .filter(Boolean);

  const spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        navLinkEls.forEach(function (a) {
          a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id);
        });
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach(function (s) { spy.observe(s); });

  window.addEventListener("scroll", function () {
    header.classList.toggle("scrolled", window.scrollY > 10);
    toTop.classList.toggle("show", window.scrollY > 600);
  }, { passive: true });

  toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  /* ---------- Mobile navigation ---------- */
  const navToggle = $("#navToggle"), navLinksEl = $("#navLinks");
  function closeMobileNav() {
    navLinksEl.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
  navToggle.addEventListener("click", function () {
    const open = navLinksEl.classList.toggle("open");
    navToggle.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  });
  navLinksEl.addEventListener("click", function (e) { if (e.target.closest("a")) closeMobileNav(); });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { closeDrawer(); closeMobileNav(); if (!orderFlow.hidden) closeOrderFlow(); }
  });

  /* ---------- Contact form ---------- */
  $("#contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    toast("Thank you! We'll get back to you within a day.");
    form.reset();
  });

  /* ============================================================
     Order flow — packing animation + live tracking + sweets chat
     ============================================================ */

  /* Small digital SVG icons, one per category */
  const ITEM_ICONS = {
    sweets: '<svg viewBox="0 0 48 48" aria-hidden="true"><ellipse cx="24" cy="41" rx="14" ry="3.5" fill="rgba(0,0,0,.15)"/><circle cx="24" cy="25" r="14" fill="#c98a3d"/><circle cx="19" cy="20" r="2" fill="#a5642a"/><circle cx="28" cy="18" r="2" fill="#a5642a"/><circle cx="24" cy="29" r="2" fill="#a5642a"/><circle cx="31" cy="27" r="1.6" fill="#a5642a"/><circle cx="17" cy="28" r="1.6" fill="#a5642a"/><path d="M17 15a12 12 0 0 1 9-4" stroke="#e8b96a" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>',
    dryfruits: '<svg viewBox="0 0 48 48" aria-hidden="true"><ellipse cx="24" cy="41" rx="13" ry="3.5" fill="rgba(0,0,0,.15)"/><rect x="13" y="13" width="22" height="22" rx="4" transform="rotate(45 24 24)" fill="#f2d98f" stroke="#b3872e" stroke-width="2"/><circle cx="24" cy="24" r="4" fill="#b3872e"/></svg>',
    savoris: '<svg viewBox="0 0 48 48" aria-hidden="true"><ellipse cx="24" cy="41" rx="14" ry="3.5" fill="rgba(0,0,0,.15)"/><path d="M24 8 41 38H7z" fill="#e0a23c" stroke="#b3872e" stroke-width="2" stroke-linejoin="round"/><path d="M24 8v12M17 23l7-6 7 6" stroke="#b3872e" stroke-width="1.6" fill="none"/></svg>',
    mains: '<svg viewBox="0 0 48 48" aria-hidden="true"><ellipse cx="24" cy="41" rx="15" ry="3.5" fill="rgba(0,0,0,.15)"/><path d="M9 24h30c0 8-6.5 13-15 13S9 32 9 24z" fill="#9c2438"/><ellipse cx="24" cy="24" rx="15" ry="4.5" fill="#fbf3e4"/><circle cx="19" cy="23" r="1.6" fill="#c98a3d"/><circle cx="25" cy="25" r="1.6" fill="#c98a3d"/><circle cx="30" cy="23" r="1.6" fill="#c98a3d"/><path d="M18 14c-2-3 2-4 0-7M30 14c-2-3 2-4 0-7" stroke="#f2d98f" stroke-width="2" fill="none" stroke-linecap="round"/></svg>',
    breads: '<svg viewBox="0 0 48 48" aria-hidden="true"><ellipse cx="24" cy="41" rx="14" ry="3.5" fill="rgba(0,0,0,.15)"/><path d="M24 10c10 0 16 7 16 15 0 6-7 11-16 11S8 31 8 25c0-8 6-15 16-15z" fill="#e8b96a" stroke="#b3872e" stroke-width="2"/><path d="M17 22c2 2 5 2 7 0M27 28c2 2 4 2 6 0" stroke="#b3872e" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>',
    beverages: '<svg viewBox="0 0 48 48" aria-hidden="true"><ellipse cx="24" cy="41" rx="12" ry="3.5" fill="rgba(0,0,0,.15)"/><path d="M15 14h18l-2.5 24h-13z" fill="#fbf3e4" stroke="#b3872e" stroke-width="2" stroke-linejoin="round"/><ellipse cx="24" cy="14" rx="9" ry="3" fill="#c98a3d"/><path d="M20 8c-1.5-2 1.5-3 0-5M28 8c-1.5-2 1.5-3 0-5" stroke="#f2d98f" stroke-width="1.8" fill="none" stroke-linecap="round"/></svg>'
  };

  /* Packing-scene SVGs */
  const BOX_SVG = '<svg viewBox="0 0 360 280" aria-hidden="true">' +
    '<g class="box-lid"><rect x="126" y="150" width="108" height="28" rx="4" fill="#c9a06b" stroke="#b3872e" stroke-width="2"/><rect x="172" y="150" width="16" height="28" fill="#e3bd63"/></g>' +
    '<rect x="128" y="176" width="104" height="76" rx="6" fill="#d9b382" stroke="#b3872e" stroke-width="2"/>' +
    '<line x1="131" y1="198" x2="229" y2="198" stroke="#b3872e" stroke-width="1.4" opacity=".45"/>' +
    '<g class="box-sticker"><circle cx="180" cy="218" r="15" fill="#e3bd63" stroke="#b3872e" stroke-width="2"/><text x="180" y="224" text-anchor="middle" font-size="17" font-family="Georgia,serif" font-weight="700" fill="#571022">M</text></g>' +
    '</svg>';

  const BAGBACK_SVG = '<svg viewBox="0 0 360 280" aria-hidden="true">' +
    '<ellipse cx="180" cy="277" rx="86" ry="7" fill="rgba(0,0,0,.22)"/>' +
    '<path d="M148 154c0-26 64-26 64 0" fill="none" stroke="#e3bd63" stroke-width="6" stroke-linecap="round"/>' +
    '<rect x="124" y="150" width="112" height="128" rx="8" fill="#8a2233" stroke="#571022" stroke-width="2"/>' +
    '<line x1="126" y1="178" x2="234" y2="178" stroke="#571022" stroke-width="2" opacity=".55"/>' +
    '</svg>';

  const BAGFRONT_SVG = '<svg viewBox="0 0 360 280" aria-hidden="true">' +
    '<rect x="120" y="206" width="120" height="74" rx="8" fill="#571022"/>' +
    '<rect x="120" y="206" width="120" height="9" fill="#3f0a16"/>' +
    '<path d="M180 220l5.5 5.5-5.5 5.5-5.5-5.5z" fill="#e3bd63"/>' +
    '<text x="180" y="246" text-anchor="middle" font-size="12" font-weight="700" letter-spacing="2.5" fill="#e3bd63">MADDHORAM</text>' +
    '<text x="180" y="262" text-anchor="middle" font-size="7.5" letter-spacing="3.5" fill="#f2d98f">DESI SWAAD</text>' +
    '</svg>';

  const SCOOTER_SVG = '<svg viewBox="0 0 360 280" aria-hidden="true"><g class="scooter">' +
    '<rect x="304" y="192" width="42" height="36" rx="5" fill="#571022" stroke="#e3bd63" stroke-width="2"/>' +
    '<text x="325" y="215" font-size="13" font-family="Georgia,serif" font-weight="700" fill="#e3bd63" text-anchor="middle">M</text>' +
    '<path d="M246 252c8-24 32-34 58-32l32 5c15 2 24 11 24 22l-5 7H252z" fill="#9c2438"/>' +
    '<rect x="250" y="214" width="42" height="9" rx="4.5" fill="#3f0a16"/>' +
    '<path d="M262 216c-3-20 7-33 23-35l15 3c11 2 15 11 12 22l-5 12z" fill="#e3bd63"/>' +
    '<circle cx="286" cy="177" r="12" fill="#f2d98f" stroke="#b3872e" stroke-width="2"/>' +
    '<path d="M294 199l-24 15" stroke="#e3bd63" stroke-width="6" stroke-linecap="round"/>' +
    '<path d="M262 216l-14-6" stroke="#3f0a16" stroke-width="5" stroke-linecap="round"/>' +
    '<circle cx="266" cy="257" r="15" fill="#2b060d" stroke="#e3bd63" stroke-width="3"/><circle cx="266" cy="257" r="5" fill="#e3bd63"/>' +
    '<circle cx="330" cy="257" r="15" fill="#2b060d" stroke="#e3bd63" stroke-width="3"/><circle cx="330" cy="257" r="5" fill="#e3bd63"/>' +
    '</g></svg>';

  const BAG_SVG = '<svg viewBox="0 0 120 132" aria-hidden="true">' +
    '<path d="M40 36c0-18 40-18 40 0" fill="none" stroke="#e3bd63" stroke-width="5" stroke-linecap="round"/>' +
    '<path d="M22 36h76l-6 92H28z" fill="#7a1a2e" stroke="#571022" stroke-width="2"/>' +
    '<path d="M22 36h76l-1.6 12H23.6z" fill="#571022"/>' +
    '<circle cx="60" cy="62" r="7" fill="none" stroke="#e3bd63" stroke-width="2.5"/><circle cx="60" cy="62" r="2" fill="#e3bd63"/>' +
    '<text x="60" y="92" text-anchor="middle" font-size="11" font-weight="700" letter-spacing="1.8" fill="#e3bd63">MADDHORAM</text>' +
    '<text x="60" y="106" text-anchor="middle" font-size="6.5" letter-spacing="2.6" fill="#f2d98f">DESI SWAAD</text>' +
    '</svg>';

  const STEPS = [
    { title: "Order placed",     sub: "We've received your order" },
    { title: "Packing",          sub: "Freshly packed in a Maddhoram gift box" },
    { title: "Bagged",           sub: "Wrapped in our signature crimson bag" },
    { title: "Picked up",        sub: "Handed to our delivery partner" },
    { title: "Out for delivery", sub: "Riding your way, nice and fresh" },
    { title: "Delivered",        sub: "Enjoy every bite!" }
  ];

  const CHAT_LINES = [
    "Psst… where are they?",
    "Why haven't they picked us up yet?",
    "I hope they're well and coming soon…",
    "Can't wait to meet them!"
  ];

  const orderFlow = $("#orderFlow"), ofSceneWrap = $("#ofSceneWrap"), ofScene = $("#ofScene");
  const ofTrack = $("#ofTrack"), ofCaption = $("#ofCaption");
  const pBagGroup = $("#pBagGroup"), pBox = $("#pBox"), pBagBack = $("#pBagBack"), pBagFront = $("#pBagFront"), pScooter = $("#pScooter");
  const ofSteps = $("#ofSteps"), ofOrderId = $("#ofOrderId"), ofStatusTitle = $("#ofStatusTitle"), ofStatusSub = $("#ofStatusSub");
  const ofEtaChip = $("#ofEtaChip"), ofCountdown = $("#ofCountdown"), ofCountChip = $("#ofCountChip");
  const ofBagWrap = $("#ofBagWrap"), ofBubble = $("#ofBubble"), ofBubbleText = $("#ofBubbleText"), ofTyping = $("#ofTyping"), ofChatHint = $("#ofChatHint");
  const ofSummary = $("#ofSummary");

  const orderTimers = { timeouts: [], intervals: [] };
  let orderSpeakers = [];
  let etaSecs = 35 * 60;
  let cdInterval = null;

  function clearOrderTimers() {
    orderTimers.timeouts.forEach(clearTimeout);
    orderTimers.intervals.forEach(clearInterval);
    orderTimers.timeouts = [];
    orderTimers.intervals = [];
    if (cdInterval) { clearInterval(cdInterval); cdInterval = null; }
  }

  function openOrderFlow() { orderFlow.hidden = false; document.body.classList.add("order-open"); }
  function closeOrderFlow() {
    clearOrderTimers();
    orderFlow.hidden = true;
    document.body.classList.remove("order-open");
  }

  function setCaption(t) {
    ofCaption.style.opacity = "0";
    orderTimers.timeouts.push(setTimeout(function () {
      ofCaption.textContent = t;
      ofCaption.style.opacity = "1";
    }, 220));
  }

  function markStep(doneCount) {
    ofSteps.querySelectorAll(".of-step").forEach(function (li, idx) {
      li.classList.toggle("done", idx < doneCount);
      li.classList.toggle("active", idx === doneCount && doneCount < STEPS.length);
      li.classList.toggle("todo", idx > doneCount);
    });
  }

  function setStatus(i) {
    ofStatusTitle.textContent = STEPS[i].title;
    ofStatusSub.textContent = STEPS[i].sub;
  }

  function buildSceneItems(items) {
    ofScene.querySelectorAll(".p-item").forEach(function (el) { el.remove(); });
    const sxs = [-128, -86, -43, 0, 43, 86, 128];
    items.slice(0, 7).forEach(function (it, i) {
      const d = document.createElement("div");
      d.className = "p-item";
      d.style.setProperty("--sx", sxs[i] + "px");
      d.style.animationDelay = (0.15 + i * 0.2) + "s";
      d.innerHTML = ITEM_ICONS[it.cat] || ITEM_ICONS.sweets;
      ofScene.appendChild(d);
    });
    if (items.length > 7) {
      const more = document.createElement("div");
      more.className = "p-item p-more";
      more.style.setProperty("--sx", "0px");
      more.style.animationDelay = (0.15 + 7 * 0.2) + "s";
      more.textContent = "+" + (items.length - 7) + " more";
      ofScene.appendChild(more);
    }
  }

  function buildTracking(items, total, orderId) {
    ofOrderId.textContent = "#" + orderId;
    ofEtaChip.textContent = "~35 min";
    etaSecs = 35 * 60;
    ofCountdown.textContent = "35:00";
    ofSteps.innerHTML = STEPS.map(function (s) {
      return '<li class="of-step todo"><span class="of-dot"></span><div><strong>' + s.title + '</strong><span>' + s.sub + '</span></div></li>';
    }).join("");
    ofBagWrap.querySelectorAll("svg").forEach(function (el) { el.remove(); });
    ofBagWrap.insertAdjacentHTML("beforeend", BAG_SVG);
    ofBubble.hidden = true;
    ofBubbleText.textContent = "";
    ofTyping.style.display = "none";
    ofChatHint.textContent = "💬 Your sweets start chatting in about 2 minutes…";
    ofChatHint.classList.remove("live");
    ofBagWrap.classList.remove("chatting");
    const count = items.reduce(function (a, i) { return a + i.qty; }, 0);
    ofCountChip.textContent = count + (count === 1 ? " item" : " items");
    ofCountChip.hidden = false;
    ofSummary.innerHTML =
      '<p class="of-sum-head">' + count + (count === 1 ? " item" : " items") + " · ₹" + total + "</p>" +
      items.map(function (i) {
        return '<div class="of-row"><span class="di-dot"></span><span class="of-row-name">' + i.name + '</span><span class="of-row-qty">× ' + i.qty + '</span><span class="of-row-price">₹' + (i.price * i.qty) + "</span></div>";
      }).join("") +
      '<div class="of-row of-row-total"><span class="of-row-name">Total</span><span class="of-row-price">₹' + total + "</span></div>";
  }

  function startCountdown() {
    if (cdInterval) clearInterval(cdInterval);
    cdInterval = setInterval(function () {
      etaSecs = Math.max(0, etaSecs - 1);
      const m = String(Math.floor(etaSecs / 60)).padStart(2, "0");
      const s = String(etaSecs % 60).padStart(2, "0");
      ofCountdown.textContent = m + ":" + s;
    }, 1000);
    orderTimers.intervals.push(cdInterval);
  }

  function sayLine(idx) {
    const speaker = orderSpeakers.length ? orderSpeakers[Math.floor(Math.random() * orderSpeakers.length)] : "A sweet";
    ofBubbleText.innerHTML = "";
    const b = document.createElement("strong");
    b.textContent = speaker + ": ";
    ofBubbleText.appendChild(b);
    ofBubbleText.appendChild(document.createTextNode(CHAT_LINES[idx % CHAT_LINES.length]));
    ofBubble.classList.remove("pop");
    void ofBubble.offsetWidth;
    ofBubble.classList.add("pop");
  }

  function startChat() {
    ofChatHint.textContent = "Shh… the sweets inside are chatting…";
    ofChatHint.classList.add("live");
    ofBagWrap.classList.add("chatting");
    ofBubble.hidden = false;
    ofTyping.style.display = "inline-flex";
    ofBubbleText.textContent = "";
    orderTimers.timeouts.push(setTimeout(function () {
      ofTyping.style.display = "none";
      sayLine(0);
      let idx = 0;
      const iv = setInterval(function () {
        idx = (idx + 1) % CHAT_LINES.length;
        sayLine(idx);
      }, 4500);
      orderTimers.intervals.push(iv);
    }, 1400));
  }

  function showTracking() {
    ofSceneWrap.hidden = true;
    ofTrack.hidden = false;
    markStep(4);
    setStatus(4);
    startCountdown();
    // the sweets start talking after 2+ minutes
    orderTimers.timeouts.push(setTimeout(startChat, 120000));
    // delivered a little later
    orderTimers.timeouts.push(setTimeout(function () {
      markStep(STEPS.length);
      setStatus(STEPS.length - 1);
      ofEtaChip.textContent = "Delivered ✓";
      if (cdInterval) { clearInterval(cdInterval); cdInterval = null; }
      ofCountdown.textContent = "00:00";
      ofChatHint.textContent = "Your sweets made it. Enjoy every bite! 🎉";
      ofBubbleText.innerHTML = "";
      const b = document.createElement("strong");
      b.textContent = "The sweets: ";
      ofBubbleText.appendChild(b);
      ofBubbleText.appendChild(document.createTextNode("We made it! Enjoy!"));
      ofBubble.classList.remove("pop");
      void ofBubble.offsetWidth;
      ofBubble.classList.add("pop");
    }, 200000));
  }

  function startOrderFlow(items, total, orderId) {
    orderSpeakers = [];
    items.forEach(function (i) {
      const n = i.name.split("·")[0].trim();
      if (orderSpeakers.indexOf(n) === -1 && orderSpeakers.length < 4) orderSpeakers.push(n);
    });
    buildTracking(items, total, orderId);
    buildSceneItems(items);
    pBox.classList.remove("sealed");
    pBagGroup.classList.remove("bagged", "handover", "exit");
    pScooter.classList.remove("in", "exit");
    ofSceneWrap.hidden = false;
    ofTrack.hidden = true;
    const itemCount = items.reduce(function (a, i) { return a + i.qty; }, 0);
    ofCaption.textContent = "Packing your " + itemCount + (itemCount === 1 ? " item" : " items") + " fresh…";
    ofCaption.style.opacity = "1";
    openOrderFlow();
    markStep(1);
    setStatus(1);

    orderTimers.timeouts.push(setTimeout(function () {
      pBox.classList.add("sealed");
      setCaption("Sealing the gift box…");
      markStep(2);
    }, 2200));
    orderTimers.timeouts.push(setTimeout(function () {
      pBagGroup.classList.add("bagged");
      setCaption("Wrapping it in our signature bag…");
      markStep(3);
    }, 3000));
    orderTimers.timeouts.push(setTimeout(function () {
      pScooter.classList.add("in");
      setCaption("Our delivery partner is arriving…");
    }, 3600));
    orderTimers.timeouts.push(setTimeout(function () {
      pBagGroup.classList.add("handover");
      setCaption("Handing over to our delivery partner…");
      markStep(4);
    }, 4300));
    orderTimers.timeouts.push(setTimeout(function () {
      pScooter.classList.add("exit");
      pBagGroup.classList.add("exit");
      setCaption("On the way to you!");
    }, 5200));
    orderTimers.timeouts.push(setTimeout(showTracking, 6200));
  }

  $("#ofDone").addEventListener("click", function () {
    closeOrderFlow();
    toast("Order placed — enjoy your sweets!");
  });

  /* ---------- Init ---------- */
  pBox.innerHTML = BOX_SVG;
  pBagBack.innerHTML = BAGBACK_SVG;
  pBagFront.innerHTML = BAGFRONT_SVG;
  pScooter.innerHTML = SCOOTER_SVG;
  render(true);
  updateCartUI(false);
})();
