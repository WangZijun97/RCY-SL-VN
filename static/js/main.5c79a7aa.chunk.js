(this["webpackJsonpsl-mc"]=this["webpackJsonpsl-mc"]||[]).push([[0],{21:function(t,e,o){},22:function(t,e,o){"use strict";o.r(e);var n=o(0),i=o(1),a=o.n(i),s=o(10),r=o.n(s),h=(o(21),o.p,o(9),o(5)),c=o(2),l={SESAME:"Sesame Street Children's Orphanage",SUNSHINE:"Sunshine Children's Home",AMONG_US:"Among Us",SOCCER:"Soccer",CHIT_CHAT:"Chit Chat",KITE:"Kite Fighting",songs:{K_POP:"K-pop",NDP:"National Day Songs",SCHOOL_SONG:"School Song + RC Song",RAP:"Rap",OLD:"80s Songs"},books:{SNOW_WHITE:"Snow White + Three Little Pigs",GERONIMO:"Geronimo Stilton + Enid Blyton",HARRY_POTTER:"Harry Potter + Percy Jackson",HARD_TRUTHS:"Hard Truths to Keep Singapore Going"},cadetgoal:{NCO:"Set by NCOs",CADET:"Set by cadets",BAD:"Set by cadets but bad",GOOD:"Set by cadets well"},GOOD:"good",EXCELLENT:"excellent"},d=function(t){var e=t.alt&&"",o="ext"in t?t.ext:"".concat("/RCY-SL-VN","/img/").concat(t.src),i=t.width,a=t.height;return Object(n.jsx)("img",{src:o,alt:e,width:i,height:a})},u={H0:{img:Object(n.jsx)(d,{src:"sl-gold.png",alt:"SL badge",width:"200"}),text:function(){return Object(n.jsxs)(a.a.Fragment,{children:[Object(n.jsx)("p",{children:"Welcome to the Service Learning VIA Adventure! This is a Choose Your Own Adventure-style of game. Be prepared to make a lot of choices. Some of these choices will matter, some of these won't."}),Object(n.jsx)("p",{children:"Press either button below to start."})]})},option:[{text:"Start",next:"H1"},{text:"START BUT IN CAPS",next:"H1"}]},H1:{img:Object(n.jsx)(d,{src:"school.jpg",alt:"Chai Chee Secondary School"}),text:"You are a VI attached to Chai Chee Secondary School. It is July 2021, and you unit needs to conduct one more VIA to fulfill the requirements for SL badges. Your teacher has asked you to recommend a VIA project for the unit to do.",option:[{text:"Home Visit",next:"H3"},{text:"First Aid Duty for Inter-School Sports Day",next:"H2"}]},H2:{img:Object(n.jsx)(d,{src:"pepecry.png"}),text:"Unfortunately, due to COVID, the event got cancelled :(",option:[{text:"Home Visit it is",next:"H3"}]},H3:{img:Object(n.jsxs)("div",{className:"img-group-h3",children:[Object(n.jsx)(d,{src:"sesamestreeticon.PNG",alt:"Sesame Street logo"}),Object(n.jsx)(d,{src:"sunshineicon.PNG",alt:"Sunshine logo"})]}),text:"Your teacher has identified 2 possible beneficiaries for your home visit. The first is Sesame Street Children's Orphanage that your unit has visited before in 2018 and 2019. The second option is Sunshine Children's Home, which your unit has never visited before, but is nearer to your school. Which beneficiary would you recommend?",option:[{text:l.SESAME,next:"L1",fx:function(t){t.name=l.SESAME}},{text:l.SUNSHINE,next:"L1",fx:function(t){t.name=l.SUNSHINE}}]}},x=o(6),g=o(11),m=function(t,e){return[].concat(Object(x.a)(t),[e])},f=function(t){var e=t.startOfConvo,o=t.speakerClass,i=t.convos,s=t.name,r=a.a.useReducer(m,[]),c=Object(h.a)(r,2),l=c[0],d=c[1],u=Object(g.a)("other-speech",o),f=Object(x.a)(Array(i.length)).map((function(t,e){return e})).filter((function(t){return l.indexOf(t)<0})),p=function(t){return function(){d(t)}};return Object(n.jsxs)("div",{class:"dialogue-container",children:[Object(n.jsxs)("div",{children:["You talk to ",s,"."]}),Object(n.jsx)("div",{class:u,children:e}),l.map((function(t){return Object(n.jsxs)(a.a.Fragment,{children:[Object(n.jsx)("div",{class:"self-speech",children:i[t].q}),i[t].a.map((function(t){return Object(n.jsx)("div",{class:u,children:t})}))]},t)})),Object(n.jsx)("div",{className:"btn-container",children:f.map((function(t){return Object(n.jsx)("button",{onClick:p(t),children:i[t].q},t)}))})]})},p=[{q:"What is your biggest worry about the home?",a:["My number one worry is the budget. We don't have enough donations, so we really cannot afford to overspend!"]},{q:"What do you think about volunteering?",a:["I would rather receive money than volunteers; we barely have enough to keep the lights on."]},{q:"How is the condition of the home?",a:["I live here too and the conditions are really... ugh.... It's not a topic for polite conversation."]},{q:"What are your hopes for the children?",a:["To be frank, I really hope that they will get adopted so that the budget can be spread less thinly.","It's quite sad that they have to live in such poor conditions. I feel bad for them, they deserve better lives than this..."]},{q:"How hard is it to manage the home?",a:["Well, honestly, I'm hoping that someone will come along to help me with managing the home. There's just too much work for the few of us. But with our budget, it's really hard to hire another person..."]},{q:"What are your hobbies?",a:["Hmm... Watching TV? Don't tell anyone, but I love romance series. It's just a shame that those don't come on Channel 5 often..."]}],y=[{q:"How's school?",a:["I go to Khairuddin Secondary School.","I don't really like school. I'm usually very tired in school, school is so boring...","My grades aren't really very good... Maybe it's because of how tired and hungry that I am all the time."]},{q:"What do you like to eat?",a:["I wouldn't really know... I don't have money for recess/lunch sometimes, often all I can buy is rice and one simple vegetable, Sometimes, I can't even afford that and just have to go hungry..."]},{q:"What do you do outside of school?",a:["I work to distribute newspapers very early in the morning to earn money.","In my little free time, I love playing soccer! Oh I also like to do kite fighting, if you know what that is hehe..."]},{q:"What are your plans for the future?",a:["I don't really know. I wonder what will happen to me once I have to leave the home once I am too old to stay here, there's no way I can afford a place to stay and have food...","But my dream is to become a chef so that I can cook my own great food someday! I watch Masterchef every time it comes on the TV."]}],b=[{q:"How's school?",a:["I don't go to school - I got like 130 or something for PSLE, then I dropped out of Secondary School."]},{q:"What do you do usually?",a:["I work part-time at several shops for some small amount to settle food.","How do I get hired while being so young? Don't tell anyone, but it's all sneaky sneaky. If anyone asks, I'm 16."]},{q:"What do you like to listen to?",a:["Rap music is the best! I first heard some of the popular rap songs while at work and really like them. I can really feel the meaning in the words for these songs!","I hope that one that I can become a rapper too, they are soooo cool."]},{q:"What do you do in your free time?",a:["Football? Go Chelsea!! I'm not really good at playing football, but it's still pretty fun. I like kite fighting too!"]}],j=[{q:"How's school?",a:["I go to Chai Chee Primary School. School's great, I think I'm doing pretty ok :D","I have a few friends in school. Not really in with the cool kids but not bullied or anything, schools fine."]},{q:"What's that you're reading?",a:["It's Harry Potter and the Prisoner of Azkaban! Harry Potter is one of my favourite series.","I love reading! Sadly it's so dark here with all the lights off that it's difficult to be able to read properly, but I still try."]},{q:"What do you think about the other children here?",a:["The others... they aren't that cool, seems like they usually spend their time earning money and doing chores. What a waste of time, they could be reading instead!"]},{q:"What do you do in your free time?",a:["As you can probably tell, I love reading! Hehe. Other than that... I don't really enjoy soccer, but kite-fighting is definitely ten out of ten fun!","It's also great fun to chit chat! Even if my life isn't very exactly interesting to talk about. Come back to talk to me again!"]}],O=[{q:"How's school?",a:["School? I go to Chai Chee Primary.","Yeah, I'm doing OK, not first place, but don't think I'm doing too bad... Oh? Yeah, I guess my uniform is pretty nasty looking; it's dirty and patched from all the times those evil P6 kids tear them."]},{q:"What do you wish to be?",a:["I wish I could be like Emily, she's doing so well in school, like a queen..."]},{q:"What do you like to watch?",a:["My favourite show is We Bare Bears! Oh my just look at Icebear he's sooooooo cute and his story is soooooo sad but beautiful.","As for movies... Cars is great. I used to have a toy car that looks just like the red one in the movie, but someone threw it away one day. How dare they :("]},{q:"What do you do outside of school?",a:["We all have to play a part in doing housework, so I do mine as best as I can, but sometimes I get injured especially in our really slippery kitchen. So I don't really like doing that.","But when I have free time... Football and kite-fighting are great fun!"]}],k={L1:{img:Object(n.jsx)(d,{src:"emergency-button.jpg",alt:"Emergency Button"}),text:function(t){return"Your NCOs are very excited! They would like to get started with planning immediately and are discussing all the fun activities they can do with the children at ".concat(t.name,". Should you intervene?")},option:[{text:"Yes",next:"L101"},{text:"No",next:"P1"}]},L101:{img:Object(n.jsx)(d,{src:"emergency-meeting.png",alt:"Emergency Button"}),text:function(t){return Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"How would you like to intervene?"}),""!==t.ncogoal&&Object(n.jsx)("p",{class:"informative",children:"[You have already set goals for the NCOs.]"})]})},option:[{text:"Research more",next:"L2"},{text:"Set goals",next:"L20",condition:function(t){return""===t.ncogoal}},{text:"I have completed the interventions that I want.",next:"P1"}]},L2:{text:function(t){return Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"What would you like your NCOs to do?"}),t.research.call&&Object(n.jsx)("p",{class:"informative",children:"[You have already called the home.]"}),t.research.recce&&Object(n.jsx)("p",{class:"informative",children:"[You have already visited the home physically.]"}),1===t.research.email&&Object(n.jsx)("p",{class:"informative",children:"[You have already waited 1 week for a reply to your email.]"}),2===t.research.email&&Object(n.jsx)("p",{class:"informative",children:"[Unfortunately, due to the 2 week delay, you don't have time to conduct a reccee.]"})]})},option:[{text:"Search the home on the internet",next:"L3",fx:function(t){t.research.brochure=!0}},{text:"Email the home to ask questions",next:"L4",condition:function(t){return 0===t.research.email},fx:function(t){t.research.email=1}},{text:"Wait another week for a reply to the email",next:"L5",condition:function(t){return 1===t.research.email},fx:function(t){t.research.email=2}},{text:"Send a second email",next:"L5",condition:function(t){return 1===t.research.email},fx:function(t){t.research.email=2}},{text:"Call the home to ask questions",next:"L8",condition:function(t){return!(t.research.call||t.research.recce)},fx:function(t){t.research.call=!0}},{text:"Physically visit the home for a recce",next:"L13",fx:function(t){t.research.recce=!0},condition:function(t){return t.research.email<2&&!t.research.recce}},{text:"Never mind, they're doing good (Back)",next:"L101"}]},L3:{img:function(t){return Object(n.jsx)(d,{src:t.name===l.SESAME?"qr-sesame.png":"qr-sunshine.png",alt:"QR code to brochure"})},text:function(t){return Object(n.jsxs)("p",{children:["You managed to find the website of the home and have found a brochure. ",Object(n.jsx)("br",{}),Object(n.jsx)("a",{target:"_blank",href:t.name===l.SESAME?"https://drive.google.com/file/d/1y9t6LN6cBId0RCxE4M-7f3DOcUal8K3X/view?usp=sharing":"https://drive.google.com/file/d/1gesm8PTUZaWnSfcy_KiPKF6H4oT86KGA/view?usp=sharing",children:"Link to brochure"})]})},option:[{text:"Proceed on",next:"L101"}]},L4:{img:Object(n.jsx)(d,{src:"one-week-later.jpg",width:"40%",alt:"Spongebob One Week Later"}),text:"It's been one week but the home hasn't replied you yet. What do you want to do?",option:[{text:"Continue waiting for a reply.",next:"L5",fx:function(t){t.research.email=2}},{text:"Send another email.",next:"L5",fx:function(t){t.research.email=2}},{text:"Go back to other research options.",next:"L101"}]},L5:{img:Object(n.jsx)("iframe",{src:"https://giphy.com/embed/3o6Ztke2ogPyvyhPXO",frameBorder:"0",title:"Time is ticking"}),text:"It's been another week but the home still hasn't replied you. What do you want to do?",option:[{text:"Continue waiting for a reply.",next:"L6"},{text:"Go back to other research options.",next:"L101"}]},L6:{img:Object(n.jsx)(d,{src:"wgt.jpg",alt:"where got time"}),text:"WHERE GOT TIME TO WAIT??",option:[{text:"BACK",next:"L5"}]},L8:{img:Object(n.jsx)(d,{src:"scrooge.jpg",alt:"scrooge"}),text:"Upon calling the home, you were able to speak to the Home Director, Mr Scrooge.",option:[{text:"Speak to Mr Scrooge",next:"L9"}]},L9:{img:function(){return k.L8.img},text:function(t){return k.L14.text(t)},option:[{text:"Continue",next:"L201"}]},L201:{img:function(){return k.L8.img},text:"You have time for one last question! What would you like to ask?",option:[{text:"What do the kids like to do in their free time?",next:"L10",fx:function(t){t.research.freeTime=!0}},{text:"What facilities are there at the home?",next:"L11"},{text:"Is there Wi-Fi at the home?",next:"L12"}]},L10:{img:Object(n.jsx)(d,{src:"soccer.png",alt:"soccer"}),text:"I think the kids like to play soccer.",option:[{text:"Proceed on",next:"L101"}]},L11:{img:Object(n.jsx)(d,{src:"just-for-laughs.png",alt:"just for laugh gags"}),text:"We have a TV, a phone and a kitchen. Nothing really interesting plays on TV though... it's usually Just for Laugh Gags.",option:[{text:"Proceed on",next:"L101"}]},L12:{text:"There is no Wi-Fi at the home.",option:[{text:"Proceed on",next:"L101"}]},L13:{text:"You have arrived at the home! You can speak to any of the children or the Home Director. Who would you like to speak to?",option:[{text:"Speak to Home Director, Mr Scrooge",next:"L14"},{text:"Speak to 16 year old Jonathan",next:"L15"},{text:"Speak to 14 year old Allam",next:"L16"},{text:"Speak to 10 year old Emily",next:"L17"},{text:"Speak to 9 year old Carmen",next:"L18"},{text:"I'm done, let's proceed on",next:"L101"}]},L14:{img:function(){return k.L8.img},text:function(t){return Object(n.jsx)(f,{startOfConvo:"Welcome to ".concat(t.name,"! I am Ebenzer Scrooge, the Home Director. Feel free to ask me anything about the home!"),speakerClass:"scrooge-speech",convos:p,name:"Mr. Scrooge"})},option:[{text:"Go back to talk to the others",next:"L13"}]},L15:{text:function(){return Object(n.jsx)(f,{startOfConvo:"Hi... I'm Jonathan, and I'm 16 years old.",speakerClass:"jon-speech",convos:y,name:"Jonathan"})},option:[{text:"Go back to talk to the others",next:"L13"}]},L16:{text:function(){return Object(n.jsx)(f,{startOfConvo:"Sup. I'm Allam, and I'm 14.",speakerClass:"allam-speech",convos:b,name:"Allam"})},option:[{text:"Go back to talk to the others",next:"L13"}]},L17:{text:function(){return Object(n.jsx)(f,{startOfConvo:"Umm... hello! I'm Emily!",speakerClass:"emily-speech",convos:j,name:"Emily"})},option:[{text:"Go back to talk to the others",next:"L13"}]},L18:{text:function(){return Object(n.jsx)(f,{startOfConvo:"I'm Carmen...",speakerClass:"carmen-speech",convos:O,name:"Carmen"})},option:[{text:"Go back to talk to the others",next:"L13"}]},L20:{img:Object(n.jsx)(d,{ext:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/thinking-face_1f914.png",alt:"Thinking emoji"}),text:"How do you want to set goals with the NCOs?",option:[{text:"Tell the NCOs what goals they should try to achieve.",next:"L21",fx:function(t){return t.ncogoal="by VIs"}},{text:"Facilitate the NCOs in setting their own goals for the VIA.",next:"L22"}]},L21:{img:Object(n.jsx)(d,{ext:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/yawning-face_1f971.png",alt:"Yawning emoji"}),text:"Some of the NCOs looked very bored after you told them that they should aim to put in their best as well as learn more from the stories of the residents...",option:[{text:"Proceed on",next:"L101"}]},L22:{text:function(){return Object(n.jsxs)(a.a.Fragment,{children:[Object(n.jsx)("p",{children:"You asked the NCOs to share their goals with you. This is what one of the NCOs told you."}),Object(n.jsx)(f,{startOfConvo:"My goal is to learn how to plan.",speakerClass:"nco-speech",convos:[],name:"the NCO"}),Object(n.jsx)("p",{children:"What do you think?"})]})},option:[{text:"I'm okay with it.",next:"L101",fx:function(t){return t.ncogoal="not specific"}},{text:"I don't like it.",next:"L23",fx:function(t){return t.ncogoal="by NCOs"}}]},L23:{text:"What do you want to tell the NCO?",option:[{text:"This is not specific enough. You need to set another goal.",next:"L24"},{text:"That's a good start. Let's try to use 3W1H to make this goal more specific!",next:"L25"}]},L24:{img:Object(n.jsx)(d,{src:"pepecry.png"}),text:"The NCO looks a bit sad. He sets another goal, to learn how to take calculated risks while planning. You are happy with this goal.",option:[{text:"Proceed on",next:"L101"}]},L25:{text:"The NCO thinks about it and enthusiastically responds that by the end of the VIA, he wants to learn how to appropriately delegate manpower based on need.",option:[{text:"Sounds great!",next:"L101"}]}},v=k,w={P1:{img:Object(n.jsx)(d,{src:"plan.jpg",alt:""}),text:function(t){return Object(n.jsxs)(a.a.Fragment,{children:[Object(n.jsx)("p",{children:"Time to get some planning done - here are some activities that your NCOs have proposed! They are seeking your opinion -- which one should they focus on?"}),(t.research.internet||t.research.freeTime||t.research.soccer)&&Object(n.jsx)("p",{class:"informative",children:"[You have unlocked additional options because of your NCOs' research.]"}),t.research.recce&&Object(n.jsx)("p",{class:"informative",children:"[You have unlocked additional options because of your NCOs' physical recce to the home.]"})]})},option:[{text:"Among Us!",next:"P3",fx:function(t){t.activity=l.AMONG_US}},{text:"Sing Songs",next:"P4"},{text:"Book Reading",next:"P2"},{text:"Play soccer",next:"P3",fx:function(t){t.activity=l.SOCCER},condition:function(t){return t.research.internet||t.research.freeTime||t.research.soccer||t.research.recce}},{text:"Chit Chat",next:"P3",fx:function(t){t.activity=l.CHIT_CHAT}},{text:"Bring PS5 and Switch to play games",next:"P6"},{text:"Kite Fighting",next:"P3",fx:function(t){t.activity=l.KITE},condition:function(t){return t.research.recce}}]},P2:{img:function(){return Object(n.jsxs)("div",{className:"book-catalogue",children:[Object(n.jsx)(d,{src:"snow-white.jpg",alt:"Snow White"}),Object(n.jsx)(d,{src:"three-little-pigs.jpg",alt:"Three Little Pigs"}),Object(n.jsx)(d,{src:"geronimo-stilton.jpg",alt:"Geronimo Stilton"}),Object(n.jsx)(d,{src:"enid-blyton.jpg",alt:"Enid Blyton"}),Object(n.jsx)(d,{src:"harry-potter.jpg",alt:"Harry Potter"}),Object(n.jsx)(d,{src:"percy-jackson.jpg",alt:"Percy Jackson"}),Object(n.jsx)(d,{src:"hard-truths.jpg",alt:"Hard Truths"})]})},text:"What books should the NCOs bring? They have time for two books:",option:[{text:"Snow White + Three Little Pigs",next:"P3",fx:function(t){t.activity=l.books.SNOW_WHITE}},{text:"Geronimo Stilton + Enid Blyton",next:"P3",fx:function(t){t.activity=l.books.GERONIMO}},{text:"Harry Potter + Percy Jackson",next:"P3",fx:function(t){t.activity=l.books.HARRY_POTTER}},{text:"Hard Truths to Keep Singapore Going (this book is thick enough on its own)",next:"P3",fx:function(t){t.activity=l.books.HARD_TRUTHS}},{text:"I don't like any of these choices (Back)",next:"P1"}]},P4:{img:Object(n.jsx)(d,{src:"singing.png",alt:""}),text:"The NCOs wonder what type of songs to sing. What will you suggest?",option:[{text:"K-pop",next:"P3",fx:function(t){t.activity=l.songs.K_POP}},{text:"National Day songs",next:"P3",fx:function(t){t.activity=l.songs.NDP}},{text:"School Song + Red Cross Song",next:"P3",fx:function(t){t.activity=l.songs.SCHOOL_SONG}},{text:"English Rap",next:"P3",fx:function(t){t.activity=l.songs.RAP}},{text:"Songs from the 80s",next:"P3",fx:function(t){t.activity=l.songs.OLD}},{text:"I don't like any of these choices (Back)",next:"P1"}]},P3:{text:"How many sessions should the cadets go?",option:[{text:"1x6h visit",next:"P5",fx:function(t){t.sessions="1"}},{text:"2x3h visits in the same month",next:"P5",fx:function(t){t.sessions="2 in a month"}},{text:"2x3h visits, one in March, one in June",next:"P5",fx:function(t){t.sessions="2 spread out"}},{text:"4x2h visits, one in each term",next:"P5",fx:function(t){t.sessions="4"}},{text:"0x8h visit",next:"P7"}]},P6:{img:Object(n.jsx)(d,{ext:"https://i.kym-cdn.com/photos/images/original/001/861/224/330.jpg",alt:"ps5 duck"}),text:"That's neat, but you don't have enough budget to buy those things (Besides, it's already a miracle if you even manage to find these in stock)",option:[{text:"Aww (choose something else)",next:"P1"}]},P7:{img:Object(n.jsx)(d,{ext:"https://i.kym-cdn.com/photos/images/original/001/779/895/752.jpg",alt:"not stonks"}),text:"Haha very funny - by not having the VIA, your unit's EUA dropped from Gold to Silver :( Your unit is very sad.",option:[{text:"Let's not do that (choose something else)",next:"P3"}]},P5:{img:Object(n.jsx)(d,{src:"time-flies.jpg",alt:"Time flies"}),text:"The NCOs are spending a lot of time on setting roles and goals. Should you intervene?",option:[{text:"Nah, they are doing fine.",next:"P9"},{text:"Yes",next:"P8"}]},P8:{img:function(){return w.P5.img},text:"What will you do?",option:[{text:"Tell them to stop wasting time and instead focus on making the activity as exciting as possible",next:"P11"},{text:"Give them roles and goals from last year's proposal and just ask them to copy it.",next:"P11"},{text:"Tell the OIC and O2ICs to set for the rest of the committee",next:"P9"},{text:"Actually, none of these",next:"P9"}]},P11:{img:Object(n.jsx)(d,{ext:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/thinking-face_1f914.png",alt:"Thinking emoji"}),text:"Well that got them to move on, but they don't seen too happy about it...",option:[{text:"Continue",next:"P12"}]},P12:{img:Object(n.jsx)("iframe",{src:"https://giphy.com/embed/XoM1eSwGMXK4huqV2E",frameBorder:"0",class:"giphy-embed",allowFullScreen:!0,title:"capoo sleeping"}),text:"OIC John complains to you that the rest of the NCOs are slacking off. What will you do?",option:[{text:"Assemble the rest of the NCOs and scold them",next:"P14",fx:function(t){t.rolesandgoals="Scold"}},{text:"Tell them off to the YO, this is getting out of your hands!",next:"P121",fx:function(t){t.rolesandgoals="YO Scold"}},{text:"Tell John to handle it himself - he is the OIC after all. At most get the chairperson Meiling to help him out.",next:"P122",fx:function(t){t.rolesandgoals="Nothing"}},{text:"Ask the rest of the NCOs: What's going on?",next:"P13",fx:function(t){t.rolesandgoals="Check on them"}}]},P13:{text:function(){return Object(n.jsxs)(a.a.Fragment,{children:[Object(n.jsx)(f,{startOfConvo:"Our jobs aren't really what we want to do or what we thought they would be like...",speakerClass:"nco-speech",convos:[],name:"the NCOs"}),Object(n.jsx)("p",{children:"How do you want to respond to them?"})]})},option:[{text:"Well, RnRs are always set like this and have worked previous years, so let's better just stick to it.",next:"P14",fx:function(t){t.rolesandgoals="Tradition"}},{text:"Oh if you really want, feel free to swap roles...",next:"P9"},{text:"Ok let's go back to setting your own roles and goals",next:"P9"}]},P9:{text:"The NCOs ask: What margin width should we use for our proposal?",option:[{text:"Default, of course",next:"P10"},{text:"Narrow to save some trees",next:"P10"},{text:'Exactly 0.75" just because',next:"P10"},{text:"Figure it out yourselves",next:"P10"}]},P10:{text:"Alright! Your NCOs have created a beautiful proposal which the teacher approves, with just a week to spare! All seems to be going well :D",option:[{text:"Nice ^__^",next:"A1"}]},P14:{text:"Your NCOs have finally finished off the proposal two nights before the VIA. It's not the best, but at least it's before the VIA. Let's hope the teacher find's this OK...",option:[{text:"Fingers crossed...",next:"A1"}]}},S=w,I=o.p+"static/media/timeline.4d343ec9.png",C=o.p+"static/media/footdrill.115dac5f.png",A=o.p+"static/media/NotLikeDuck.6c872f74.png",L=o.p+"static/media/sunset.0ffe2017.jpg",P={A1:{index:"A1",img:Object(n.jsx)("img",{src:I,alt:"Timeline. 1400-1430 Reporting Parade; 1430-1515 Briefing for VIA; 1515-1600 Buffer; 1600-1630 Dismissal Parade"}),text:"The home visit is soon approaching. You have requested your NCOs to prepare the unit for the VIA. This is their plan for the training right before the VIA. What feedback do you have for the training plan?",option:[{text:"It's very good, carry on.",next:"A3"},{text:"Reduce the time for the parades and give them to the briefing",next:"A3"},{text:"Reduce the buffer time for the briefing",next:"A3"},{text:"Get the NCOs to include more things during the training",next:"A2"}]},A2:{index:"A2",img:Object(n.jsx)("img",{}),text:"What would you like the NCOs to include in the training?",option:[{text:"The NCOs should tell the cadets what they should try and learn from the VIA",next:"A3",fx:function(t){return t.cadetgoal=l.cadetgoal.NCO}},{text:"A facilitation session for the cadets to set their own individual goals for the VIA",next:"A3",fx:function(t){return t.cadetgoal=l.cadetgoal.CADET}},{text:"Conduct a dry run of the activities during the VIA",next:"A3"},{text:"Bring the whole unit to the Red Cross Room to help pack the logistics for the VIA",next:"A3"}]},A3:{index:"A3",img:Object(n.jsx)("img",{src:C}),text:"It is the day of the training. During reporting parade, the NCOs observed that the cadets' foot drill standards are very bad and they want to spend the whole training revising foot drill. Should you intervene?",option:[{text:"Let the NCOs go ahead with the foot drill lesson",next:"A4"}].concat(Object(x.a)(["Let them spend 15 minutes on foot drill before carrying on with the original plan","Rush them through reporting parade"].map((function(t){return{text:t,next:function(t){switch(t.cadetgoal){case l.cadetgoal.CADET:return"A5";case l.cadetgoal.NCO:return"A7";default:return"A9"}}}}))))},A4:{index:"A4",img:Object(n.jsx)("img",{src:A,alt:"notlikeduck"}),text:"Your cadets are woefully unprepared for the VIA and it fails spectacularly.",option:[{text:"Let's not do that... (Back)",next:"A3"}]},A5:{index:"A5",img:Object(n.jsx)("img",{}),text:"The parade is done and the NCOs are starting the briefing session.",option:[{text:"Continue",next:function(t){switch(t.cadetgoal){case l.cadetgoal.CADET:return"A6";case l.cadetgoal.NCO:return"A8";default:return"A10"}}}]},A6:{index:"A6",img:Object(n.jsxs)("div",{className:"textbox",children:[Object(n.jsx)("div",{className:"qn",children:"What do you want to learn from this VIA visit?"}),Object(n.jsx)("div",{className:"ans",children:"I want to learn as much as possible."})]}),text:"During the facilitation session, one of your cadets set this goal for herself. Do you accept this goal?",option:[{text:"Yes",next:"A10",fx:function(t){return t.cadetgoal=l.cadetgoal.BAD}},{text:"No",next:"A7"}]},A7:{index:"A7",img:Object(n.jsxs)("div",{className:"textbox",children:[Object(n.jsx)("div",{className:"qn",children:"What do you want to learn from this VIA visit?"}),Object(n.jsx)("div",{className:"ans",children:"I want to learn the stories of the children at the home."})]}),text:"She comes up with a new goal. Are you happy with this goal?",option:[{text:"This goal is good!",next:"A9",fx:function(t){return t.cadetgoal=l.cadetgoal.GOOD}},{text:"How about something else? You caould try and learn how to solve the problems of the children.",next:"A8",fx:function(t){return t.cadetgoal=l.cadetgoal.NCO}}]},A8:{index:"A8",img:Object(n.jsx)("img",{src:L,alt:"sunset"}),text:"The training has ended and the cadets are clear of what will be happening during the VIA. However, the cadets looked quite bored when the NCOs tell them what their goal for the VIA should be...",option:[{text:"Continue",next:"S1"}]},A9:{index:"A9",img:Object(n.jsx)("img",{src:L,alt:"sunset"}),text:"The training has ended and the cadets are clear of what will be happening during the VIA. Everyone is very excited!",option:[{text:"Let's hope the VIA goes well too!",next:"S1"}]},A10:{index:"A10",img:Object(n.jsx)("img",{src:L,alt:"sunset"}),text:"The training has ended and the cadets are clear of what will be happening during the VIA.",option:[{text:"Continue",next:"S1"}]}},T={S1:{index:"S1",img:Object(n.jsx)("img",{}),text:"It is the day of the VIA! You board the bus with the unit to the VIA location.",option:[{text:"Exciting!",next:function(t){return t.name==l.SESAME?"S3":"S2"}}]},S2:{index:"S2",img:Object(n.jsx)("img",{}),text:"The children at Sunshine Home are a bit aloof and unfriendly towards the cadets as they have never seen them before.",option:[{text:"Aww...",next:"S3"}]},S3:{index:"S3",img:Object(n.jsx)("img",{}),text:"You start with the activities!",option:[{text:"Proceed",next:function(t){return t.activity==l.AMONG_US?"S4":Object.values(l.songs).includes(t.activity)?"S6":Object.values(l.books).includes(t.activity)?"S12":t.activity==l.SOCCER?"S17":t.activity==l.CHIT_CHAT?"S19":t.activity==l.KITE?"S101":void 0}}]},S4:{index:"S4",img:Object(n.jsx)("img",{}),text:"Oh dear, you discovered that most of the kids do not have smartphones...",option:[{text:"The cadets play and let the kids watch",next:"S18"},{text:"Let's just give up on this and chit chat with them instead...",next:"S19"}]},S6:{index:"S6",img:Object(n.jsx)("img",{}),text:"You begin with the sing-along session...",option:[{text:"Let's start singing!",next:function(t){return t.activity==l.songs.K_POP?"S7":t.activity==l.songs.NDP?"S8":t.activity==l.songs.RAP?"S9":t.activity==l.songs.OLD?"S10":t.activity==l.songs.SCHOOL_SONG?"S11":void 0}}]},S7:{index:"S7",img:Object(n.jsx)("img",{}),text:"Some of the kids sing along, but many of the rest go back to doing what they usually do instead...",option:[{text:"Let's just keep singing",next:"S18"},{text:"Start chit-chatting with the kids",next:"S19"}]},S8:{index:"S8",img:Object(n.jsx)("img",{}),text:"Some of the kids sing along, but many of the rest go back to doing what they usually do instead...",option:[{text:"Let's just keep singing",next:"S18"},{text:"Start chit-chatting with the kids",next:"S19"}]},S9:{index:"S9",img:Object(n.jsx)("img",{}),text:"You find that one of the kids, Allam, is really excited, and in fact sings some songs that even your cadets don't know. However, the rest of the kids quickly lose interest and turn back to their usual activities instead...",option:[{text:"Let's just keep singing",next:"S18"},{text:"Start chit-chatting with the kids",next:"S19"}]},S10:{index:"S10",img:Object(n.jsx)("img",{}),text:"Some of the kids sing along, but many of the rest go back to doing what they usually do instead...",option:[{text:"Let's just keep singing",next:"S18"},{text:"Start chit-chatting with the kids",next:"S19"}]},S11:{index:"S11",img:Object(n.jsx)("img",{}),text:"The kids look very confused at all of you, then go back to doing their usual activities...",option:[{text:"Let's just keep singing",next:"S18"},{text:"Start chit-chatting with the kids",next:"S19"}]},S12:{index:"S12",img:Object(n.jsx)("img",{}),text:"Your cadets start reading the books to the children...",option:[{text:"Continue...",next:function(t){return t.activity==l.books.SNOW_WHITE?"S13":t.activity==l.books.GERONIMO?"S14":t.activity==l.books.HARRY_POTTER?"S15":t.activity==l.books.HARD_TRUTHS?"S16":void 0}}]},S13:{index:"S13",img:Object(n.jsx)("img",{}),text:"The youngest kids listen attentively to the cadets reading, but the older ones got bored and quickly went back to what they were doing before.",option:[{text:"Let's continue reading",next:"S18"},{text:"Start chit-chatting with the kids",next:"S19"}]},S14:{index:"S14",img:Object(n.jsx)("img",{}),text:"The younger kids listen to the cadets reading, but the older ones got bored and went back to what they were doing previously.",option:[{text:"Let's continue reading",next:"S18"},{text:"Start chit-chatting with the kids",next:"S19"}]},S15:{index:"S15",img:Object(n.jsx)("img",{}),text:"Some of the older kids listen to the cadets reading, but the rest get bored and went back to doing their own things. The younger kids are quite confused about the story and frequently interrupt the cadets reading.",option:[{text:"Let's continue reading",next:"S18"},{text:"Start chit-chatting with the kids",next:"S19"}]},S16:{index:"S16",img:Object(n.jsx)("img",{}),text:"The kids looked very confused during the reading session and they went back to what they were doing previously quickly.",option:[{text:"Let's continue reading",next:"S18"},{text:"Start chit-chatting with the kids",next:"S19"}]},S17:{index:"S17",img:Object(n.jsx)("img",{}),text:"Many (but not all) of the kids are very excited to play soccer. The NCOs organized them into various age groups and the kids are having a great time. During the breaks in between some of the games, you start talking to some of the kids from the home...",option:[{text:"Continue...",next:"S19",fx:function(t){return t.result=l.GOOD}}]},S18:{index:"S18",img:Object(n.jsx)("img",{}),text:"The VIA is coming to its end. The unit wasn't able to engage the vast majority of the kids at the home. You feel disappointed by the VIA...",option:[{text:"Oh no...",next:"R1"}]},S101:{index:"S101",img:Object(n.jsx)("img",{}),text:"Incredibly, all of the kids are ecstatic to play kite-fighting. They start showing off their kites as well as the various techniques they use to defeat others' kites to your cadets. Everyone is enjoying themselves greatly. During the breaks in the game, you start talking to some of the kids from the home.",option:[{text:"Continue",next:"S19",fx:function(t){return t.result=l.EXCELLENT}}]},S19:{index:"S19",img:Object(n.jsx)("img",{}),text:"Which of the people at the home would you like to talk to?",option:[{text:"",next:""}]}},N=(o.p,o.p,o.p,{index:"oof",img:Object(n.jsx)("img",{}),text:"Still under development UwU. Please refresh page.",option:[]}),H=Object(c.a)(Object(c.a)(Object(c.a)(Object(c.a)(Object(c.a)({},u),v),S),P),T);function E(t){var e=H[t];return void 0===e?N:e}var W=o(12),R=o(13),q=o(3),Y=o(15),D=o(14),V=function(t){Object(Y.a)(o,t);var e=Object(D.a)(o);function o(t){var n;return Object(W.a)(this,o),(n=e.call(this,t)).handleClick=n.handleClick.bind(Object(q.a)(n)),n.textgen=n.textgen.bind(Object(q.a)(n)),n.buttongen=n.buttongen.bind(Object(q.a)(n)),n}return Object(R.a)(o,[{key:"handleClick",value:function(t){var e=this,o=t.next;return t.next instanceof Function&&(o=t.next(this.props.flags)),"fx"in t?function(){e.props.trigger(o),e.props.dispatch(t.fx)}:function(){return e.props.trigger(o)}}},{key:"imggen",value:function(t){return t instanceof Function?t(this.props.flags):void 0===t?Object(n.jsx)(a.a.Fragment,{}):t}},{key:"textgen",value:function(t){return t instanceof Function?t(this.props.flags):Object(n.jsx)("p",{children:t})}},{key:"buttongen",value:function(t){if(!("condition"in t)||t.condition(this.props.flags))return Object(n.jsx)("button",{onClick:this.handleClick(t),children:t.text instanceof Function?t.text(this.prop.flags):t.text})}},{key:"render",value:function(){var t=this;return Object(n.jsxs)("div",{className:"Node",children:[this.imggen(this.props.data.img),this.textgen(this.props.data.text),Object(n.jsx)("div",{class:"btn-container",children:this.props.data.option.map((function(e){return t.buttongen(e)}))})]})}}]),o}(a.a.Component),G={name:"default",research:{call:!1,freeTime:!1,recce:!1,brochure:!1,email:0},ncogoal:"",activity:"",cadetgoal:"",result:""},B=function(t,e){var o=Object(c.a)({},t);return e(o),o},M=function(){var t=a.a.useState("H0"),e=Object(h.a)(t,2),o=e[0],i=e[1],s=a.a.useReducer(B,G),r=Object(h.a)(s,2),c=r[0],l=r[1];return Object(n.jsx)(V,{trigger:i,data:E(o),flags:c,dispatch:l})};var _=function(){return Object(n.jsx)("div",{className:"App App-header",children:Object(n.jsx)(M,{})})},F=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,23)).then((function(e){var o=e.getCLS,n=e.getFID,i=e.getFCP,a=e.getLCP,s=e.getTTFB;o(t),n(t),i(t),a(t),s(t)}))};r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(_,{})}),document.getElementById("root")),F()},9:function(t,e,o){}},[[22,1,2]]]);
//# sourceMappingURL=main.5c79a7aa.chunk.js.map