const DB_PHOTOS="krin_photos_v1", DB_REQUESTS="krin_requests_v1", DB_VIDEO="krin_video_v1";
const $=id=>document.getElementById(id);
let selectedPhoto=null;
function get(key,fallback=[]){try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}}
function renderGallery(){
 const grid=$("galleryGrid"), photos=get(DB_PHOTOS);
 if(!photos.length){grid.innerHTML='<div class="empty-state">No photos have been uploaded yet. Please check back soon.</div>';return}
 grid.innerHTML=photos.map(p=>`<article class="photo-card"><img src="${p.data}" alt="${escapeHtml(p.name)}"><div class="photo-info"><div><h3>${escapeHtml(p.name)}</h3><span>Original photo • 500 RWF</span></div><button class="buy-btn" data-id="${p.id}">Buy & download</button></div></article>`).join("");
 grid.querySelectorAll(".buy-btn").forEach(b=>b.addEventListener("click",()=>openPurchase(b.dataset.id)));
}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function openPurchase(id){
 selectedPhoto=get(DB_PHOTOS).find(p=>p.id===id);if(!selectedPhoto)return;
 $("chosenImage").src=selectedPhoto.data;$("chosenName").textContent=selectedPhoto.name;$("formNote").textContent="";$("requestForm").reset();$("purchaseModal").classList.remove("hidden");
}
$("closeModal").addEventListener("click",()=>$("purchaseModal").classList.add("hidden"));
$("purchaseModal").addEventListener("click",e=>{if(e.target===$("purchaseModal"))$("purchaseModal").classList.add("hidden")});
$("requestForm").addEventListener("submit",e=>{
 e.preventDefault();if(!selectedPhoto)return;
 const data=Object.fromEntries(new FormData(e.target).entries());
 const requests=get(DB_REQUESTS);requests.push({id:"req_"+Date.now(),photoId:selectedPhoto.id,photoName:selectedPhoto.name,customer:data.customer,phone:data.phone,reference:data.reference,status:"pending",created:new Date().toISOString()});
 localStorage.setItem(DB_REQUESTS,JSON.stringify(requests));
 $("formNote").textContent="Request submitted. Your download will become available after the admin verifies your payment. Keep your transaction reference.";
 e.target.reset();
});
function loadVideo(){const v=get(DB_VIDEO,null);if(v){$("promoVideo").src=v;$("videoPlaceholder").style.display="none"}}
$("year").textContent=new Date().getFullYear();renderGallery();loadVideo();