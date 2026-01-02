document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.getElementById('nav-toggle');
  const nav=document.getElementById('nav');
  toggle && toggle.addEventListener('click',()=>nav.classList.toggle('show'));

  // set year
  const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();

  // simple contact form handler (no backend)
  const form=document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit',(e)=>{
      e.preventDefault();
      const data=new FormData(form);
      const name=data.get('name');
      // show quick confirmation
      const btn=form.querySelector('button');
      const old=btn.textContent; btn.textContent='กำลังส่ง...'; btn.disabled=true;
      setTimeout(()=>{
        alert(`ขอบคุณ ${name || ''}! เราได้รับคำขอแล้ว ทางเราจะติดต่อกลับผ่าน Facebook หรือโทรศัพท์ที่ให้ไว้`);
        form.reset(); btn.textContent=old; btn.disabled=false;
      },900);
    });
  }
});
