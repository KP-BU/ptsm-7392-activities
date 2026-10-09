/* Faculty review block: "Would you like to use this activity?" + Copy my choices + how-to-send steps.
   Choices are saved in this browser (shared by the list page and every activity page). */
(function () {
  var CFG = {"code": "PTSM 7392", "title": "PTSM 7392 Sports and Christianity in Historical Perspective", "emailTo": "keith_pace@baylor.edu", "activities": [{"id": "w01", "module": "Week 1", "title": "Sport and the Church Through Time", "type": "Timeline"}, {"id": "w02", "module": "Week 2", "title": "Early Church Responses to Sport", "type": "Drag and Drop"}, {"id": "w03", "module": "Week 3", "title": "Medieval Play, Festivals and Tournaments", "type": "Flashcards"}, {"id": "w04", "module": "Week 4", "title": "Primary Source Analysis Practice", "type": "Guided Documentation"}, {"id": "w05", "module": "Week 5", "title": "Muscular Christianity, 1844–1895", "type": "Timeline"}, {"id": "w06", "module": "Week 6", "title": "Whose Muscular Christianity?", "type": "Dialog Cards"}, {"id": "w07", "module": "Week 7", "title": "Sport in the 1920s: Ally or Rival?", "type": "Drag and Drop"}, {"id": "w08", "module": "Week 8", "title": "Rickey, Robinson and 1947", "type": "Dropdown"}, {"id": "w09", "module": "Week 9", "title": "The Rise of Sports Ministry", "type": "Drag and Drop"}, {"id": "w10", "module": "Week 10", "title": "Jackie Robinson's Faith and Freedom", "type": "Drag the Words"}, {"id": "w11", "module": "Week 11", "title": "After Title IX: Theology or Culture?", "type": "Drag and Drop"}, {"id": "w12", "module": "Week 12", "title": "Course Names and Terms Crossword", "type": "Crossword"}, {"id": "w13", "module": "Week 13", "title": "Comparing Four Approaches", "type": "Guided Documentation"}, {"id": "w14", "module": "Week 14", "title": "The Sunday Tournament", "type": "Branching Scenario"}, {"id": "w15", "module": "Week 15", "title": "Biography Research Planner", "type": "Guided Documentation"}, {"id": "w15f", "module": "Week 15 · Final Week", "title": "Era-by-Era Exam Review", "type": "Flashcards"}]};
  var COURSE = CFG, A = CFG.activities;
  var KEY = "review:" + COURSE.code;
  var LABEL = { use: "Use it", no: "Don't use it", change: "Request a change" };

  var css =
    ".frv{--fn:#1f3150;--fg:#e9b04a;--fgi:#3a2a05;--fl:#cfd6e2;--fi:#1d2433;--fm:#4b5566;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:var(--fi);line-height:1.45;text-align:left}" +
    ".frv *{box-sizing:border-box}" +
    ".frv fieldset{border:1px solid var(--fl);border-radius:8px;padding:.4rem .9rem .9rem;margin:0;background:#fff;min-width:0}" +
    ".frv legend{font-weight:700;padding:0 .3rem;font-size:1rem;color:var(--fi)}" +
    ".frv .frv-opts{display:flex;flex-wrap:wrap;gap:8px;margin:.3rem 0 .7rem}" +
    ".frv .frv-opts label{display:inline-flex;align-items:center;gap:.45rem;border:1px solid var(--fl);border-radius:6px;padding:.5rem .8rem;font-weight:700;cursor:pointer;min-height:44px;background:#fff;color:var(--fi);font-size:1rem;margin:0}" +
    ".frv .frv-opts label:has(input:checked){border-color:var(--fn);background:#eef2f8}" +
    ".frv .frv-opts input{width:1.05rem;height:1.05rem;margin:0;accent-color:var(--fn)}" +
    ".frv textarea{display:block;width:100%;font:inherit;font-size:1rem;padding:.6rem .7rem;border:1px solid var(--fl);border-radius:6px;min-height:64px;resize:vertical;color:var(--fi);background:#fff}" +
    ".frv :focus-visible{outline:3px solid #1f5fbf;outline-offset:2px}" +
    ".frv .frv-btns{display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin-top:12px}" +
    ".frv .frv-btn{font:inherit;font-size:1rem;font-weight:700;border-radius:8px;padding:.7rem 1.1rem;cursor:pointer;border:2px solid var(--fn);background:#fff;color:var(--fn);min-height:44px;text-decoration:none;display:inline-flex;align-items:center}" +
    ".frv .frv-btn.primary{background:var(--fg);border-color:var(--fg);color:var(--fgi)}" +
    ".frv .frv-howwrap{flex-basis:100%;font-size:.95rem;color:var(--fi)}.frv .frv-howh{margin:0 0 .2rem;font-weight:700}.frv .frv-how{margin:0;padding-left:1.3rem}.frv .frv-how li{margin:.1rem 0}" +
    ".frv .frv-link{color:var(--fn);font-weight:700}" +
    ".frv .frv-count{font-weight:700;color:var(--fm);font-size:.95rem}" +
    ".frv-page{max-width:1080px;margin:28px auto 40px;padding:0 16px}" +
    ".frv-page h2{font-size:1.15rem;margin:0 0 .6rem;color:#1f3150}" +
    ".frv-card{margin-top:12px}" +
    ".frv-bar{position:fixed;left:0;right:0;bottom:0;background:#f3f5f9;border-top:1px solid #cfd6e2;display:flex;align-items:center;gap:12px;padding:12px 16px;flex-wrap:wrap;z-index:50}" +
    ".frv-bar .frv-count{margin-right:auto;color:#1d2433}" +
    ".frv-name{display:flex;align-items:center;gap:12px;flex-wrap:wrap;background:#fff;border:1px solid #cfd6e2;border-radius:8px;padding:14px 16px;margin-bottom:20px}" +
    ".frv-name label{font-weight:700}.frv-name input{flex:1;min-width:200px;font:inherit;padding:.6rem .75rem;border:1px solid #cfd6e2;border-radius:6px}" +
    ".frv-toast{position:fixed;bottom:84px;left:50%;transform:translateX(-50%);background:#1f3150;color:#fff;padding:.6rem 1rem;border-radius:8px;font-weight:600;opacity:0;transition:opacity .2s;pointer-events:none;max-width:90vw;z-index:60;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif}" +
    ".frv-toast.on{opacity:1}" +
    ".frv-fb{display:none;margin-top:12px}.frv-fb textarea{min-height:160px}" +
    ".frv-bar .frv-howwrap{font-size:.88rem}" +
    "@media (max-width:600px){.frv-bar .frv-count{width:100%}.frv-bar .frv-btn{flex:1;justify-content:center}.frv-bar .frv-how{display:block}}";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  function load() { try { return JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) { return {}; } }
  var state = load();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }
  function el(t, c, txt) { var e = document.createElement(t); if (c) e.className = c; if (txt != null) e.textContent = txt; return e; }
  function answered() { return A.filter(function (a) { return state[a.id] && state[a.id].choice; }).length; }
  function countText() { return answered() + " of " + A.length + " activities answered"; }
  var counters = [];
  function updCount() { counters.forEach(function (c) { c.textContent = countText(); }); }

  function summary() {
    var who = (state.__who || "").trim();
    var L = [COURSE.title + " — activity choices", "From: " + (who || "(name not given)"), "Answered: " + answered() + " of " + A.length, ""];
    A.forEach(function (a) {
      var s = state[a.id] || {};
      L.push(a.module); L.push("  " + a.title + " [" + a.type + "]");
      L.push("  Choice: " + (s.choice ? LABEL[s.choice] : "(no answer)"));
      if (s.note && s.note.trim()) L.push("  Note: " + s.note.trim().replace(/\s*\n\s*/g, " / "));
      L.push("");
    });
    return L.join("\n");
  }
  var toastEl;
  function toast(m) {
    if (!toastEl) { toastEl = el("div", "frv-toast"); toastEl.setAttribute("role", "status"); document.body.appendChild(toastEl); }
    var bb2 = document.querySelector(".frv-bar"); toastEl.style.bottom = ((bb2 ? bb2.offsetHeight : 0) + 16) + "px";
    toastEl.textContent = m; toastEl.classList.add("on");
    setTimeout(function () { toastEl.classList.remove("on"); }, 2600);
  }
  var fbBox;
  function fallback(txt, near) {
    if (!fbBox) {
      fbBox = el("div", "frv frv-fb");
      fbBox.appendChild(el("p", null, "Copy didn't work automatically. Select the text below and copy it."));
      fbBox.appendChild(document.createElement("textarea"));
      fbBox.lastChild.readOnly = true; fbBox.lastChild.setAttribute("aria-label", "Your choices");
      near.appendChild(fbBox);
    }
    var x = fbBox.lastChild; x.value = txt; fbBox.style.display = "block"; x.focus(); x.select();
  }
  function copyChoices(near) {
    var txt = summary();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(txt).then(function () { toast("Copied. Paste it into an email or message."); }, function () { fallback(txt, near); });
    } else fallback(txt, near);
  }
  function buttons(near, extra) {
    var b = el("div", "frv-btns");
    var c = el("button", "frv-btn", "Copy my choices"); c.type = "button"; c.addEventListener("click", function () { copyChoices(near); });
    b.appendChild(c);
    if (extra) b.appendChild(extra);
    var how = el("ol", "frv-how");
    how.appendChild(el("li", null, "For each activity, choose Use it, Don't use it, or Request a change (add a note if you like)."));
    how.appendChild(el("li", null, "Select Copy my choices."));
    var li = el("li", null, "Paste them into a new email to ");
    var ml = el("a", "frv-link", COURSE.emailTo); ml.href = "mailto:" + COURSE.emailTo + "?subject=" + encodeURIComponent(COURSE.code + " activity choices");
    ml.target = "_blank"; ml.rel = "noopener"; ml.title = "Opens a new email to " + COURSE.emailTo;
    li.appendChild(ml); li.appendChild(document.createTextNode(" and send it."));
    how.appendChild(li);
    var hw = el("div", "frv-howwrap"); hw.appendChild(el("p", "frv-howh", "How to send your choices")); hw.appendChild(how);
    b.appendChild(hw);
    return b;
  }
  var controls = {};
  function choiceBlock(a, onChange) {
    var s = state[a.id] || (state[a.id] = { choice: "", note: "" });
    var fs = el("fieldset"); fs.appendChild(el("legend", null, "Would you like to use this activity?"));
    var o = el("div", "frv-opts"), radios = [];
    ["use", "no", "change"].forEach(function (v) {
      var l = el("label"), r = document.createElement("input");
      r.type = "radio"; r.name = "frv-" + a.id; r.value = v; r.checked = s.choice === v;
      r.addEventListener("change", function () { state = load(); (state[a.id] = state[a.id] || { choice: "", note: "" }).choice = v; save(); updCount(); if (onChange) onChange(v); });
      l.appendChild(r); l.appendChild(document.createTextNode(LABEL[v])); o.appendChild(l); radios.push(r);
    });
    fs.appendChild(o);
    var ta = el("textarea"); ta.placeholder = "Optional note: what you'd change, or why"; ta.value = s.note || "";
    ta.setAttribute("aria-label", "Note about " + a.title);
    ta.addEventListener("input", function () { state = load(); (state[a.id] = state[a.id] || { choice: "", note: "" }).note = ta.value; save(); });
    fs.appendChild(ta);
    controls[a.id] = { radios: radios, ta: ta, onChange: onChange };
    return fs;
  }
  function refreshFromStorage() {
    state = load();
    A.forEach(function (a) {
      var c = controls[a.id]; if (!c) return; var s = state[a.id] || {};
      c.radios.forEach(function (r) { r.checked = r.value === s.choice; });
      if (document.activeElement !== c.ta) c.ta.value = s.note || "";
      if (c.onChange) c.onChange(s.choice || "");
    });
    if (nameInput && document.activeElement !== nameInput) nameInput.value = state.__who || "";
    updCount();
  }
  window.addEventListener("storage", function (e) { if (e.key === KEY) refreshFromStorage(); });
  window.addEventListener("pageshow", refreshFromStorage);

  var nameInput = null;
  var mount = document.getElementById("frv-activity");
  if (mount) {
    // Bottom of an activity page
    var a = A.filter(function (x) { return x.id === mount.dataset.id; })[0];
    var wrap = el("section", "frv frv-page"); wrap.setAttribute("aria-label", "Faculty review");
    wrap.appendChild(el("h2", null, "Faculty review"));
    wrap.appendChild(choiceBlock(a));
    var back = el("a", "frv-link", "Back to all activities"); back.href = "index.html";
    var cnt = el("span", "frv-count"); cnt.setAttribute("aria-live", "polite"); counters.push(cnt);
    var b = buttons(wrap, back); b.insertBefore(cnt, b.firstChild); cnt.style.flexBasis = "100%";
    wrap.appendChild(b);
    mount.appendChild(wrap);
    updCount();
    return;
  }
  // List page: a choice block in each card, a name box, and a sticky send bar
  var nm = document.getElementById("frv-name");
  if (nm) {
    nm.className = "frv frv-name";
    var lb = el("label", null, "Your name"); lb.htmlFor = "frv-who";
    nameInput = document.createElement("input"); nameInput.id = "frv-who"; nameInput.autocomplete = "name";
    nameInput.placeholder = "So we know who the choices are from"; nameInput.value = state.__who || "";
    nameInput.addEventListener("input", function () { state = load(); state.__who = nameInput.value; save(); });
    nm.appendChild(lb); nm.appendChild(nameInput);
  }
  document.querySelectorAll("[data-frv-card]").forEach(function (slot) {
    var a = A.filter(function (x) { return x.id === slot.dataset.frvCard; })[0]; if (!a) return;
    slot.className = "frv frv-card";
    var card = slot.closest(".card");
    slot.appendChild(choiceBlock(a, function (v) { if (card) card.setAttribute("data-choice", v || ""); }));
    if (card) card.setAttribute("data-choice", (state[a.id] && state[a.id].choice) || "");
  });
  var bar = el("div", "frv frv-bar"); bar.setAttribute("role", "region"); bar.setAttribute("aria-label", "Send your choices");
  var cnt2 = el("span", "frv-count"); cnt2.setAttribute("aria-live", "polite"); counters.push(cnt2);
  bar.appendChild(cnt2);
  var bb = buttons(document.querySelector("main") || document.body); bb.style.marginTop = "0";
  while (bb.firstChild) bar.appendChild(bb.firstChild);
  document.body.appendChild(bar);
  document.body.style.paddingBottom = (bar.offsetHeight + 24) + "px";
  updCount();
})();
