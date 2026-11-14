const $=id=>document.getElementById(id);
/* ===== CONFIG ===== */
const PASSWORD="prisha";
/* ===== SECTION 3: PHOTOS — add/replace entries; each photo is paired with its caption ===== */
const PHOTOS=[
{n:"01",photo:"[PHOTO 01 — ADD IMAGE HERE]",src:"assets/photos/photo-01.jpg",msg:"[MESSAGE 01 — ADD MATCHING CAPTION HERE]"},
{n:"02",photo:"[PHOTO 02 — ADD IMAGE HERE]",src:"assets/photos/photo-02.jpg",msg:"[MESSAGE 02 — ADD MATCHING CAPTION HERE]"},
{n:"03",photo:"[PHOTO 03 — ADD IMAGE HERE]",src:"assets/photos/photo-03.jpg",msg:"[MESSAGE 03 — ADD MATCHING CAPTION HERE]"},
{n:"04",photo:"[PHOTO 04 — ADD IMAGE HERE]",src:"assets/photos/photo-04.jpg",msg:"[MESSAGE 04 — ADD MATCHING CAPTION HERE]"},
{n:"05",photo:"[PHOTO 05 — ADD IMAGE HERE]",src:"assets/photos/photo-05.jpg",msg:"[MESSAGE 05 — ADD MATCHING CAPTION HERE]"},
{n:"06",photo:"[PHOTO 06 — ADD IMAGE HERE]",src:"assets/photos/photo-06.jpg",msg:"[MESSAGE 06 — ADD MATCHING CAPTION HERE]"},
{n:"07",photo:"[PHOTO 07 — ADD IMAGE HERE]",src:"assets/photos/photo-07.jpg",msg:"[MESSAGE 07 — ADD MATCHING CAPTION HERE]"}
];
/* ===== SECTION 4: QUIZ (a = index of correct option: A=0,B=1,C=2,D=3) ===== */
const QUIZ=[
{q:"What makes me instantly happy?",o:["Shopping","Food","Your attention and affection","Sleeping peacefully"],a:2},
{q:"What do I do when I'm angry?",o:["Stop talking completely","Start explaining everything","Act normal but overthink everything","Give you a long lecture"],a:0},
{q:"What do I love receiving from you the most?",o:["Random cute texts","Long calls","Reassurance and attention","Surprise gifts"],a:1},
{q:"What is my biggest weakness when it comes to you?",o:["Your smile","Your voice","Your hugs","Your cute behaviour"],a:2},
{q:"If I could teleport anywhere right now, where would I go?",o:["On a shopping spree","Straight into your arms","On a vacation","To my favourite food place"],a:1},
{q:"Who is more dramatic between us?",o:["Me","You","Both of us equally","Nobody, we're completely innocent"],a:1},
{q:"What do I want most from you?",o:["Expensive gifts","More time and attention","Constant reassurance","All of the above"],a:3},
{q:"What's my favourite kind of moment with you?",o:["Our late-night conversations","When we laugh over absolutely nothing","When we're being romantic","Every moment, even the silly ones"],a:2}];
const GOOD=["Awww, that's my boy! 🥺","Someone deserves extra kisses!","You know your girl pretty well, Doodoo!","Come here, you deserve a hug!"];
const BAD=["EXCUSE MEEEE?! Do you even know your girl, mister? 😭","Doodoo, seriously?! Try again! 😭","Wrong answer, baby. Think harder!","I'll remember this betrayal. 🤨","Acha ji, so that's what you think? 😂"];
const pick=a=>a[Math.floor(Math.random()*a.length)];
const REASONS=["I love about is that you care about me. Like I love the days when you cared about me and you right now actually do.","I love the way you act childish and kiddish in front of me.","The ways we get romantic and we do hugs and kisses and everything.","I love that you give me those surprise gifts even from a long distance.","I love the way when I sleep with you on video calls. Like I love your presence on video calls.","I love the way you handle my anger.","I love the way you treat me in my periods. You give me princess treatment and everything.","Little gestures by you, little things by you which you can't see but I love.","The way you support me in my career and everything, the way you think of my future. Nobody does that way.","You complete the place of my father and my mother. I know I can never be your father, but I promise I'll always try to give you that warmth, care and comfort that you deserve. I want you to know that you can always find a little home in me.","And I love you for everything you are, for all the little things you do, for the way you make me feel, and even for the things I can't put into words. I just love having you in my life."];
const STORY=[
["🎂","THE BIRTHDAY CAKE","First, we'd stand together in front of your birthday cake. I'd light the candles, hold your hand and ask you to make a wish. We'd blow them out together, and I'd probably be looking at you instead of the cake. I'd wish I could freeze that moment forever.","linear-gradient(#fde3c8,#f9d6dc)"],
["🤗","THE HUGS AND KISSES","Then I'd run straight into your arms. A really tight hug, followed by lots of kisses. I wouldn't want to let go of you so easily. I'd probably keep telling you how much I've missed having you this close.","linear-gradient(#f9d6dc,#f3b9c4)"],
["🎁","OPENING OUR GIFTS","After that, we'd sit together and open our gifts one by one. I'd watch your reactions, tease you about your expressions, and wait for you to see what I've picked for you. And obviously, I'd expect the same excitement when you open mine. Every little reaction would make the moment more special.","linear-gradient(#f3b9c4,#fbe3b8)"],
["💞","OUR ROMANTIC LITTLE WORLD","Then we'd forget about everything else for a while. Just you and me, cuddling, kissing, getting closer and enjoying the intimacy we've missed for so long. No distance, no screens, no goodbyes.","linear-gradient(#fbe3b8,#d99aa6)"],
["🕯️","OUR PRIVATE MOMENTS","And when the birthday celebrations are over, we'd have our own private time together. Just us, sharing our closeness, affection and desire, without having to hold back because of the distance.","linear-gradient(#d99aa6,#a4687a)"],
["🌙","THE QUIET MOMENT","And finally, my favourite part might be the simplest one. We'd lie beside each other, holding each other close, feeling each other's breathing and enjoying the silence. No need to talk, no need to do anything. Just knowing that you're right there beside me would be enough.","linear-gradient(#a4687a,#5a3a48);color:#fff"]];
/* ===== SECTION 7: LETTER — verbatim ===== */
const LETTER=`Dear pranu, 
Happy birthday My loml ❤️ I Love you my birthday twin ❤️ my other half and my soulmate ❤️🌏 ik things have been messed up but honestly It’s been a long journey and is point pe esa lagta hai husband ke sath banti nhi hai prr pyar bhout hai ❤️❤️ sahi btau pranay we need to have sex 😭😭 and itna zyada we need to have itna hardcore vala ki sab thik ho jayega ❤️😭 Pls come jldi and i cant wait to fuck you. Ik baby bhout kuch chal raha hai humare bich but i dont want ki apka din aj ka bekar jayee I want to mnaying your birthday very dhoom dhaam se ❤️❤️ I am very sorry jo bhi mere se galtiyan hui hai ya hongi pr pranu in the end, we will marry each other and prove sbhi ko galat 🥺 zyada nhi bolungi because ik bhout kuch kharab hua pda hai long distance ki vjh se prr i sware I cannot live without you baby❤️ happie birthday once again my lovee ❤️ tuu 20 sal ka hogya hai or meri bhi umar tujhe lag jaye teri health humesha achi rahe 🧿`;

/* ===== core ===== */
const bday=$('bday'),heer=$('heer'),mt=$('mt');
/* ===== AUDIO CONTROLLER: one shared state for transitions and the toggle ===== */
const A={tr:{bday,heer},cur:'bday',paused:false,timer:null,
play(k){const p=this.tr[k].play();p&&p.catch(e=>console.warn('Audio could not play — check the file path in audio/',e))},
start(){this.cur='bday';bday.volume=1;this.play('bday')},
switchTo(k){if(this.cur===k)return;const from=this.tr[this.cur],to=this.tr[k];this.cur=k;clearInterval(this.timer);to.volume=0;if(!this.paused)this.play(k);let v=0;
this.timer=setInterval(()=>{v=Math.min(1,v+.04);to.volume=v;from.volume=1-v;if(v>=1){clearInterval(this.timer);from.pause()}},100)},
toggle(){this.paused=!this.paused;this.paused?this.tr[this.cur].pause():this.play(this.cur);mt.textContent=this.paused?'🔇':'🎵';mt.setAttribute('aria-pressed',String(this.paused))}};
mt.onclick=()=>A.toggle();
function show(n){document.querySelectorAll('.sec').forEach(s=>s.classList.remove('on'));$('s'+n).classList.add('on');scrollTo(0,0)}
const fx=$('fx');
function drift(ch,cls,n,dur){for(let i=0;i<n;i++){const e=document.createElement('span');e.className=cls;e.textContent=pick(ch);e.style.left=Math.random()*100+'%';e.style.fontSize=(14+Math.random()*16)+'px';e.style.animationDuration=(dur+Math.random()*6)+'s';e.style.animationDelay=Math.random()*dur+'s';fx.appendChild(e);setTimeout(()=>e.remove(),(dur*2+8)*1000)}}
function ambient(){drift(['♡','✨','🦋','💗'],'fl',5,12);drift(['🌸','🌹'],'pt',3,14)}
ambient();setInterval(ambient,14000);
function burst(ch,n){const b=document.createElement('div');b.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:40';document.body.appendChild(b);for(let i=0;i<n;i++){const e=document.createElement('span');e.textContent=pick(ch);e.style.cssText=`position:absolute;left:50%;top:50%;font-size:${16+Math.random()*20}px;transition:all 2.2s ease-out;opacity:1`;b.appendChild(e);const a=Math.random()*6.28,d=80+Math.random()*180;setTimeout(()=>{e.style.transform=`translate(${Math.cos(a)*d}px,${Math.sin(a)*d-60}px)`;e.style.opacity=0},30)}setTimeout(()=>b.remove(),2500)}

/* 1 */
let pwDone=false;
function tryPw(){if($('pw').value.trim().toLowerCase()===PASSWORD){burst(['💗','❤️','✨'],26);if(pwDone)return;pwDone=true;A.start();mt.style.display='block';setTimeout(()=>show(2),1500)}else{$('err').style.display='block';$('pw').classList.add('shake');setTimeout(()=>$('pw').classList.remove('shake'),600)}}
$('unlock').onclick=tryPw;$('pw').onkeydown=e=>e.key=='Enter'&&tryPw();
/* 2 */
const fl=$('fl');[[88,34],[109,40],[130,46],[151,40],[172,34]].forEach(([x,h],i)=>{const t=126-h;
fl.insertAdjacentHTML('beforeend',`<g><rect x="${x-4}" y="${t}" width="8" height="${h}" rx="2" fill="${i%2?'#f6c9d0':'#fffaf5'}" stroke="#c8957f"/><ellipse class="flame" cx="${x}" cy="${t-9}" rx="6" ry="11" fill="url(#fm)" style="filter:drop-shadow(0 0 7px #ffd27a)"/><path class="smoke" d="M${x} ${t-10}q-8-12 0-22t0-22"/></g>`)});
let out=false,stream=null,ac=null;
function blow(){if(out)return;out=true;stream&&stream.getTracks().forEach(t=>t.stop());stream=null;ac&&ac.close().catch(()=>{});ac=null;$('cake').classList.add('out');$('blowb').style.display='none';burst(['🎉','💗','✨','❤️','🎊'],50);setTimeout(()=>$('after').style.display='flex',1800)}
$('bk').onclick=blow;
$('mic').onclick=async()=>{if(stream||out)return;
if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){$('mic').textContent='Mic not available — use the other button';return}
try{stream=await navigator.mediaDevices.getUserMedia({audio:true});ac=new(window.AudioContext||window.webkitAudioContext)(),an=ac.createAnalyser();an.fftSize=512;ac.createMediaStreamSource(stream).connect(an);const d=new Uint8Array(an.frequencyBinCount);$('mic').textContent='Blow now… 🌬️';let hold=0;
(function loop(){if(out)return;an.getByteFrequencyData(d);let lo=0,hi=0;for(let i=0;i<d.length;i++){i<20?lo+=d[i]:hi+=d[i]}lo/=20;hi/=(d.length-20);
/* blowing = sustained broadband low-frequency wind noise */
if(lo>110&&hi>25){hold+=1}else hold=Math.max(0,hold-2);if(hold>25){blow();return}requestAnimationFrame(loop)})()}
catch(e){stream=null;$('mic').textContent='Mic unavailable — tap Blow the Candles'}};
$('to3').onclick=()=>{show(3);A.switchTo('heer');startBook()};
/* 3 */
let bookStarted=false;
function startBook(){if(bookStarted)return;bookStarted=true;let i=0;const b=$('book');(function add(){if(i>=PHOTOS.length){$('to4').style.display='';return}const p=PHOTOS[i++];const d=document.createElement('div');d.className='pol';d.style.setProperty('--r',(Math.random()*8-4).toFixed(1)+'deg');
const ph=document.createElement('div');ph.className='ph';const im=new Image();im.src=p.src;im.alt='';im.onerror=()=>{im.remove();ph.textContent='♡ '+p.photo};ph.appendChild(im);const c=document.createElement('p');c.textContent=p.msg;d.append(ph,c);b.appendChild(d);setTimeout(add,6800)})()}
$('to4').onclick=()=>{show(4);qi=0;score=0;askQ()};
/* 4 */
let qi=0,score=0,tries=0;
function askQ(){tries=0;const q=QUIZ[qi];$('qn').textContent=`Question ${qi+1} of ${QUIZ.length}`;$('qt').textContent=q.q;$('react').textContent='';$('qo').innerHTML='';q.o.forEach((t,i)=>{const b=document.createElement('button');b.className='btn opt';b.textContent='ABCD'[i]+'. '+t;b.onclick=()=>answer(i,b);$('qo').appendChild(b)})}
function next(){qi++;qi<QUIZ.length?askQ():fin()}
function answer(i,b){const q=QUIZ[qi];tries++;const all=[...$('qo').children];
if(i===q.a){score++;b.classList.add('ok');all.forEach(x=>x.disabled=true);$('react').textContent='😘💗 '+pick(GOOD);burst(['😘','💗','💋'],18);setTimeout(next,2200)}
else{b.classList.add('no');b.disabled=true;if(tries<2){$('react').textContent='😤 '+pick(BAD);$('react').classList.add('shake');setTimeout(()=>$('react').classList.remove('shake'),600)}
else{all.forEach(x=>x.disabled=true);all[q.a].classList.add('ok');$('react').textContent='🥺 Aww, it was "'+q.o[q.a]+'", baby! Next time!';setTimeout(next,3200)}}}
function fin(){$('qn').textContent='';document.querySelector('#s4 .msg').style.display='none';$('react').textContent='';$('res').style.display='flex';$('sc').textContent=`${score}/${QUIZ.length}`;
$('rm').textContent=score==8?"Okayyy, someone knows his girl VERY well! 💋":score>=6?"Not bad, my love! You deserve some kisses.":score>=4?"Hmm, we need more long calls, mister! 🤭":"Excuse me?! We have some serious catching up to do! 😭"}
$('bonus').onclick=()=>{$('bk2').textContent='💋';$('bk2').style.animation='bt 1s 3';burst(['💗','💋','❤️','😘'],40)};
$('to5').onclick=()=>show(5);
/* 5 */
REASONS.forEach((t,i)=>{const c=document.createElement('div');c.className='card';c.innerHTML='<b>'+String(i+1).padStart(2,'0')+' ♡</b>';const p=document.createElement('span');p.textContent=t;c.appendChild(p);$('rs').appendChild(c)});
$('to6').onclick=()=>{show(6);watch()};
/* 6 */
STORY.forEach(([e,t,p,bg])=>{const d=document.createElement('div');d.className='sc fade';d.style.cssText='background:'+bg;d.innerHTML=`<div class="e">${e}</div><p class="hand" style="color:inherit;opacity:.8">${t}</p><p></p>`;d.lastChild.textContent=p;$('st').appendChild(d)});
function watch(){const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('v')),{threshold:.3});document.querySelectorAll('#s6 .fade').forEach(x=>io.observe(x))}
$('to7').onclick=()=>show(7);
/* 7 */
$('letter').textContent=LETTER;
function openEnv(){const e=$('env');if(e.classList.contains('open'))return;e.classList.add('pop');setTimeout(()=>e.classList.add('open'),500);
setTimeout(()=>{e.classList.add('gone');setTimeout(()=>{e.style.display='none';$('letter').style.display='block';setTimeout(()=>{$('lh').textContent='💗';$('lh').style.animation='bt 1.2s 4';$('to8').style.display=''},2200)},900)},3200)}
$('env').onclick=openEnv;$('env').onkeydown=e=>{if(e.key=='Enter'||e.key==' '){e.preventDefault();openEnv()}};
$('to8').onclick=()=>{show(8);const t=[400,1800,3800,6500,9500];setTimeout(()=>$('heart').classList.add('on'),200);['f1','f2','f3','f4','f5'].forEach((id,i)=>setTimeout(()=>$(id).classList.add('v'),t[i]+1000));
drift(['♡','💗'],'fl',14,8);drift(['🌸','🌹'],'pt',12,9);setTimeout(()=>burst(['💖','✨','💗','🌸'],60),5200)};
