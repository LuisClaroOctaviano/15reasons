const reasons = [
  { title: "Your smile", art: "☼", text: "Ang ganda mo kapag nakangiti ka. There's something about your smile that makes everything feel a little lighter, and I catch myself hoping I get to see it more often." },
  { title: "Your personality", art: "✿", text: "I like how you are just being yourself. You don't have to try to be someone else to be interesting to me. The person you already are is someone I genuinely want to know." },
  { title: "Your kindness", art: "♡", text: "I admire the way you treat other people. The kindness you show, even in little moments, says a lot about your heart. It makes me appreciate you more than you probably realize." },
  { title: "Your determination", art: "✧", text: "I like how you keep trying your best kahit may mga times na nahihirapan ka. Even when things aren't easy, you still try and I think there's something really beautiful about that." },
  { title: "Your intelligence", art: "☾", text: "I admire how hardworking you are and how serious you are about your future. I like hearing your thoughts and seeing how much you care about the things you want to achieve." },
  { title: "Your little stories", art: "❀", text: "I enjoy listening to your kwentos, kahit random lang or simpleng nangyari sa araw mo. Somehow, even the smallest chika becomes something I want to listen to, simply because it's coming from you." },
  { title: "Your laugh", art: "♫", text: "Kasi ang saya lang kapag napapatawa kita or nakikita kang tumatawa." },
  { title: "Your honesty", art: "♡", text: "I appreciate it when you're being real with me. Gusto kong maramdaman mong you can be yourself around me without worrying na kailangan mong magpanggap or itago kung sino ka talaga. You deserve to feel safe being honest." },
  { title: "Your strength", art: "☀", text: "I admire how you handle things, kahit may mga pagkakataong mabigat na para sa'yo. Pero gusto ko ring malaman mo na hindi mo kailangang maging strong palagi kapag kasama mo ako. You can rest, too." },
  { title: "Your soft side", art: "୨୧", text: "I want to know the side of you na hindi mo basta-basta ipinapakita sa lahat. And I hope na habang tumatagal, mas maging comfortable ka na ipakita sa'kin kahit yung vulnerable side mo at your own pace." },
  { title: "Your dreams", art: "☄", text: "I like hearing about the things you want to achieve in life. I hope you get to see your hard work turn into the things you've been wishing for, and I would love to cheer you on along the way." },
  { title: "The little moments", art: "☕", text: "Minsan, simpleng pag-uusap lang natin is enough to make my day better.Just talking to you is already a happy part of my day." },
  { title: "Your little quirks", art: "✧", text: "Yung mga random na ginagawa mo, little habits mo, and even yung mga bagay na baka normal lang para sa'yo. I find them cute because they're part of what makes you, you." },
  { title: "How I feel with you", art: "☁", text: "Hindi nakakapagod kausapin ka. In fact, mas gumagaan pa nga yung araw ko kapag nakakausap kita. Kaya minsan, kahit wala naman akong importanteng sasabihin, gusto pa rin kitang kausapin." },
  { title: "Because you're you", art: "♡", text: "Sa lahat ng reasons na sinabi ko, ito siguro yung pinaka-importante. I like you not because you have to be perfect or because you always have to make me happy. Gusto kita dahil sa kung sino ka, and the more I get to know you, the more I want to stay, make memories with you, and see where this connection takes us." }
];

const intro = document.getElementById("intro");
const section = document.getElementById("reasons");
const ending = document.getElementById("ending");
const title = document.getElementById("reasonTitle");
const text = document.getElementById("reasonText");
const art = document.getElementById("reasonArt");
const number = document.getElementById("reasonNumber");
const count = document.getElementById("progressCount");
const fill = document.getElementById("progressFill");
const prev = document.getElementById("prevBtn");
const next = document.getElementById("nextBtn");
const footnote = document.getElementById("footnote");
const toast = document.getElementById("toast");
let current = 0;
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}
function renderReason(index) {
  current = index;
  const item = reasons[index];
  const card = document.getElementById("reasonCard");
  card.classList.remove("card-change");
  title.textContent = item.title;
  text.textContent = item.text;
  art.textContent = item.art;
  number.textContent = `REASON NO. ${String(index + 1).padStart(2, "0")}`;
  count.innerHTML = `${String(index + 1).padStart(2, "0")} <i>/ 15</i>`;
  fill.style.width = `${((index + 1) / reasons.length) * 100}%`;
  prev.disabled = index === 0;
  if (index === reasons.length - 1) {
    next.innerHTML = 'One last thing <span>♡</span>';
    footnote.textContent = "The last reason, but never the only one.";
  } else {
    next.innerHTML = 'Next reason <span>→</span>';
    footnote.textContent = "There are 15, and each one is yours.";
  }
  void card.offsetWidth;
  card.animate([{ opacity: .55, transform: "translateY(7px) scale(.99)" }, { opacity: 1, transform: "translateY(0) scale(1)" }], { duration: 350, easing: "ease-out" });
}
document.getElementById("beginBtn").addEventListener("click", () => {
  intro.classList.add("hidden");
  ending.classList.add("hidden");
  section.classList.remove("hidden");
  renderReason(0);
  window.scrollTo({ top: 0, behavior: "smooth" });
});
prev.addEventListener("click", () => { if (current > 0) renderReason(current - 1); });
next.addEventListener("click", () => {
  if (current < reasons.length - 1) renderReason(current + 1);
  else {
    section.classList.add("hidden");
    ending.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
    showerPetals(26);
  }
});
document.getElementById("replayBtn").addEventListener("click", () => {
  ending.classList.add("hidden");
  section.classList.remove("hidden");
  renderReason(0);
  window.scrollTo({ top: 0, behavior: "smooth" });
});
document.getElementById("sparkleBtn").addEventListener("click", () => {
  showerPetals(14);
  showToast("A little wish, just for you ✨");
});
document.getElementById("petalsBtn").addEventListener("click", () => {
  showerPetals(42);
  showToast("A tiny garden, sent with care ✿");
});
function showerPetals(amount) {
  const symbols = ["✿", "❀", "♡", "✧", "❋"];
  for (let i = 0; i < amount; i++) {
    const petal = document.createElement("span");
    petal.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    Object.assign(petal.style, {
      position: "fixed", zIndex: 20, left: `${Math.random() * 100}vw`, top: "-30px",
      color: ["#e9c2f5", "#cba5f2", "#f3c6e7", "#ffffff"][Math.floor(Math.random() * 4)],
      fontSize: `${12 + Math.random() * 20}px`, pointerEvents: "none",
      textShadow: "0 0 12px #d7a4ff88"
    });
    document.body.appendChild(petal);
    const duration = 2600 + Math.random() * 2800;
    petal.animate([
      { transform: `translate3d(0,0,0) rotate(0deg)`, opacity: 0 },
      { opacity: 1, offset: .12 },
      { transform: `translate3d(${(Math.random() - .5) * 220}px, ${window.innerHeight + 70}px, 0) rotate(${Math.random() * 650 - 325}deg)`, opacity: 0 }
    ], { duration, easing: "cubic-bezier(.2,.65,.35,1)" }).onfinish = () => petal.remove();
  }
}
document.addEventListener("keydown", (event) => {
  if (section.classList.contains("hidden")) return;
  if (event.key === "ArrowRight" && current < reasons.length - 1) renderReason(current + 1);
  if (event.key === "ArrowLeft" && current > 0) renderReason(current - 1);
});
