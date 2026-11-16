const challenges = [
  {id:1,title:"Understand priorities",manager:"Alex",description:"Clarify competing commitments, communicate your capacity and negotiate realistic priorities.",skill:"Prioritisation"},
  {id:2,title:"Manage expectations",manager:"Camille",description:"Communicate delivery risks, dependencies and uncertainty without making unsupported promises.",skill:"Expectation setting"},
  {id:3,title:"Communicate effectively",manager:"Daniel",description:"Adapt your message to the recipient without losing the information they need.",skill:"Communication"},
  {id:4,title:"Take ownership of problems",manager:"Priya",description:"Address problems proactively, communicate transparently and recognise when approval is needed.",skill:"Ownership"},
  {id:5,title:"Challenge constructively",manager:"Morgan",description:"Raise concerns with evidence, understand the objective and suggest workable alternatives.",skill:"Constructive challenge"},
  {id:6,title:"Build trust",manager:"Taylor",description:"Take responsibility for commitments, communicate delays and establish credible follow-through.",skill:"Reliability"}
];

const pages = ["home","challenges","guide"];
const navLinks = [...document.querySelectorAll(".nav-link")];
const pageEls = [...document.querySelectorAll(".page")];
const dialog = document.getElementById("challenge-dialog");

function showPage(name){
  if(!pages.includes(name)) name="home";
  pageEls.forEach(p=>p.classList.toggle("active",p.id===`page-${name}`));
  navLinks.forEach(a=>a.classList.toggle("active",a.dataset.page===name));
  document.querySelector(".main-nav").classList.remove("open");
  document.getElementById("menu-toggle").setAttribute("aria-expanded","false");
  if(location.hash!==`#${name}`) history.replaceState(null,"",`#${name}`);
  window.scrollTo({top:0,behavior:"smooth"});
}
function cardMarkup(c,mini=false){
  if(mini) return `<article class="mini-card"><span class="mini-num">${String(c.id).padStart(2,"0")}</span><div><strong>${c.title}</strong><small>${c.skill}</small></div></article>`;
  return `<button class="challenge-card" type="button" data-challenge="${c.id}">
    <span class="card-top"><span class="card-number">${String(c.id).padStart(2,"0")}</span><span class="status">Not started</span></span>
    <h2>${c.title}</h2><p>${c.description}</p>
    <span class="card-footer"><span>Manager: ${c.manager}</span><span class="card-arrow" aria-hidden="true">↗</span></span>
  </button>`;
}
document.getElementById("home-challenge-grid").innerHTML=challenges.map(c=>cardMarkup(c,true)).join("");
document.getElementById("challenge-grid").innerHTML=challenges.map(c=>cardMarkup(c)).join("");

function openChallenge(id){
  const c=challenges.find(item=>item.id===Number(id));
  if(!c)return;
  document.getElementById("dialog-number").textContent=`CHALLENGE ${String(c.id).padStart(2,"0")}`;
  document.getElementById("dialog-title").textContent=c.title;
  document.getElementById("dialog-description").textContent=c.description;
  document.getElementById("dialog-manager").textContent=c.manager;
  document.getElementById("dialog-avatar").style.background=`linear-gradient(145deg, ${["#bd8566","#d29b79","#b97859","#9b705b","#d19a75","#a66f55"][c.id-1]} 0 45%, ${["#315c61","#6b596e","#293c50","#58705f","#40546b","#6e5a49"][c.id-1]} 46%)`;
  dialog.showModal();
}
document.getElementById("challenge-grid").addEventListener("click",e=>{
  const card=e.target.closest("[data-challenge]");
  if(card)openChallenge(card.dataset.challenge);
});
document.getElementById("dialog-close").addEventListener("click",()=>dialog.close());
document.getElementById("dialog-ok").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close()});
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener("click",e=>{
    const name=a.getAttribute("href").slice(1);
    if(pages.includes(name)){e.preventDefault();showPage(name)}
  });
});
document.getElementById("menu-toggle").addEventListener("click",()=>{
  const nav=document.querySelector(".main-nav");
  const open=nav.classList.toggle("open");
  document.getElementById("menu-toggle").setAttribute("aria-expanded",String(open));
});
const initial=location.hash.replace("#","");
showPage(pages.includes(initial)?initial:"home");