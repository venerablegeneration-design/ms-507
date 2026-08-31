function toggleMenu(){document.getElementById("navMenu").classList.toggle("active");}
document.querySelectorAll("#navMenu a").forEach(link=>link.addEventListener("click",()=>document.getElementById("navMenu").classList.remove("active")));

const eventDate=new Date("October 24, 2026 20:00:00").getTime();
function updateCountdown(){
  const distance=eventDate-new Date().getTime();
  if(distance<=0){["days","hours","minutes","seconds"].forEach(id=>document.getElementById(id).innerText="00");return;}
  const days=Math.floor(distance/(1000*60*60*24));
  const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
  const minutes=Math.floor((distance%(1000*60*60))/(1000*60));
  const seconds=Math.floor((distance%(1000*60))/1000);
  document.getElementById("days").innerText=String(days).padStart(2,"0");
  document.getElementById("hours").innerText=String(hours).padStart(2,"0");
  document.getElementById("minutes").innerText=String(minutes).padStart(2,"0");
  document.getElementById("seconds").innerText=String(seconds).padStart(2,"0");
}
setInterval(updateCountdown,1000); updateCountdown();

document.getElementById("contactForm").addEventListener("submit",function(e){e.preventDefault();alert("Terima kasih! Pesan kamu berhasil dikirim.");this.reset();});

const revealElements=document.querySelectorAll(".section-heading,.about-content,.event-card,.gallery-item,.timeline-item,.cta-content,.contact-grid");
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.style.opacity="1";entry.target.style.transform="translateY(0)";}}),{threshold:.15});
revealElements.forEach(el=>{el.style.opacity="0";el.style.transform="translateY(30px)";el.style.transition="opacity .8s ease, transform .8s ease";observer.observe(el);});