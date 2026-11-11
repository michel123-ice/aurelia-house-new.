const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  toggle.textContent = open ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.textContent = "☰";
}));
const arrival = document.querySelector('input[name="arrival"]');
const departure = document.querySelector('input[name="departure"]');
const today = new Date().toISOString().split("T")[0];
arrival.min = today;
departure.min = today;
arrival.addEventListener("change", () => { departure.min = arrival.value || today; if (departure.value && departure.value <= arrival.value) departure.value = ""; });
document.querySelector("#booking-form").addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const note = document.querySelector("#form-note");
  note.textContent = `Thank you, ${data.get("name")}. Your enquiry has been prepared. This demo does not send bookings yet; connect a booking service or form endpoint to receive it.`;
  note.scrollIntoView({behavior:"smooth", block:"nearest"});
});