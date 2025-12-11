let state = "title";
let timer = 30;
let timer2 = 30;
let timer3 = 20;
let timer4 = 20;
let timer3Max = 20;
let w3Max = 500;
let w3 = w3Max;
const EARLY_ZONE = 12; // timer3 > 12 = good
const PERFECT_ZONE = 7; // 12 >= timer3 > 7 = ok
const LATE_ZONE = 0; // timer3 <= 7 =bad
let barColor;
let currentZone = "none"; // "early", "good", "late"
const gameState = {
  affection: {
    fungus: 0,
    rancid: 0,
    gunther: 0,
  },
};



//love meters as bars
let fungusBar;
let rancidBar;
let guntherBar;

let index = 0;
let index1 = 0;
let order = 0;
let order2 = 0;

let frosting = false;
let frogleg = false;

let sugar = false;
let squidink = false;

let w = 0;
let w2 = 0;
//let w3 = 500;
let w4 = 500;

//for meat
let angle = 0;

//music
let isPlaying = false;
let titlebgm;
let introbgm;
let forestbgm;
let cafebgm;
let guntherbgm;
let fungusbgm;
let rancidbgm;
let scaredbgm;
let isekaisfx;
let cookingbgm;
let badsfx;
let goodsfx;
let chopsfx;
let dingsfx;

//intro no choices here
let dialogue = [
  `"FUUUUUUUUUUUUUUUUUUUUdging UGH. What do they 
mean I can't cook anything right?! What I make 
tastes good to me... but to everyone else, my 
dish smells like rotting corpses!"`, //0

  `"That’s the third cooking job in 2 months! *sighs* 
  I just wanna see people be happy when they’re eating 
  my food."`, //1

  `"Guess I’ll go home and make another bowl of depression 
  leftovers. Maybe it’ll finally take me out so I don’t 
  have to deal with this sh—---"`, //2

  `As Amy was walking home, a garbage truck runs her over.`, //3

  `"Oh NO"!`, //4

  `Amy wakes up  in another universe, a lush
fantastical forest, it’s night time and it’s 
dark out there.`, //5

  `*GASP* "..What? This isn’t the sketchy part 
of Oakland, what is this place? Er..where, 
I guess, is more likely? Did I die? Maybe 
that decaying lettuce really did curse me..."`, //6

  `"Hmm… Something smells…kinda good! Surprised 
I’m still hungry if I’m dead, but I guess I 
can’t die twice!”`, //7

  `Amy follows until she comes upon a garden 
stocked full of ripe vegetables and fruits 
growing in large pots and plots on the ground 
surrounded by a wooden fence. Her stomach 
grumbles looking at it all.`, //8

  `"It feels like it’s late at night, and there’s 
so much food here. I dunno who’s this stuff is,
but surely they won’t notice if I just take a 
few things, right..?”`, //9

  `As soon as she reaches towards a fruit, a 
porch spotlight comes on basking her in its 
glow and plays a short noise.`, //10

  `Shortly after, the large door swings open 
and a backlit silhouette stands in the doorway. 
The figure exhales a plume of angry steam.`, //11

  `“And what do we have here, hm? Another thief 
trying to steal MY precious crops? You look small…
fragile..barely any meat on ya. You’ll cook easily.”`, //12 Gunther

  `The owner stomps heavily towards Amy, dragging
a large axe behind him as it makes an 
earsplitting scraping noise.`, //13

  `"Hey hey hey now hold on just a second! *she 
waves her hands frantically* M-m-maybe we can 
work something out? Please?!"`, //14 Amy

  `"Your garden smelled so good I followed the 
smell here! I was looking for something to cook 
with, I’m starving! I can cook something for you, 
too! I’m a chef, I swear! I can’t die AGAIN!"`, //15

  `The owner swings the axe up, slicing the air 
beside Amy’s head as it lands against his shoulder
as he steps out into the light, now fully visible
to Amy.`, //16

  `"A chef, you say? Hmm.. *scratches his chin
  looking her over* You look human, are you
lost?"`, //17 Gunther

  `"Um, yes? Yes, I am. Both. And.. I died..and woke 
  up out here. Now, here I am."`, //18 Amy

  `“Interesting tale..not unheard of around these 
parts, if that’s true."`, //19 Gunther

  `He stares silently for a while longer then leans 
in close to Amy’s face so she now sees every scar, 
whisker, and wrinkle on this large orc’s droopy 
face.`, //20

  `"Then I’ll take you being here as a gift! You work 
for me now! I needed to hire a new chef anyway."`, //21

  `"Huh? You want ME, to be your chef?"`, //22

  `"Yep! This here is my Cafe!" This is where you’ll 
  stay too, in the guest room upstairs. The cafe is 
  downstairs along with the kitchen. Be grateful, 
  or be dinner, your choice!`, //23

  `"I'm grateful. So grateful. Is that...all you 
want me to do?"`, //24

  `"Yes.. Did you have something else in mind?"`, //25 Gunther

  `"No, I think you’re just different from 
otherworldly beings I’ve read about before.."`, //26 amy

  `"What material are you referring to? ..And why 
is your face doing that?"`, // 27 Gunther

  `"..No reason. So, when do I start cooking?"`, //28 amy

  `"Riiiight, well, you’ll get a night’s rest 
first. Then I’ll expect you bright and early 
in the kitchen to show you how I run things.
In you go, human. By the way, you can call me 
Gunther."`, //29 Gunther

  `(Wow, that's an oddly normal name.) Uhh… Hi
   Gunther! I’m Amy Rose!`, //30

  `Amy accepts her new life as a Monster Cafe Cook,
working with Gunther and meeting new Monsters
 each day...`, //31
];

let names = [
  //intro

  "Amy", //0
  "Amy", //1
  "Amy", //2
  "Narrator", //3
  "Amy", //4
  "Narrator", //5
  "Amy", //6
  "Amy", //7
  "Narrator", //8
  "Amy", //9
  "Narrator", //10
  "Narrator", //11
  "Orc??", //12
  "Narrator", //13
  "Amy", //14
  "Amy", //15
  "Narrator", //16
  "Orc??", //17
  "Amy", //18
  "Orc??", //19
  "Narrator", //20
  "Orc??", //21
  "Amy", //22
  "Orc??", //23
  "Amy", //24
  "Orc??", //25
  "Amy", //26
  "Orc??", //27
  "Amy", //28
  "Gunther", //29
  "Amy", //30
  "Narrator", //31
];

//day 1

let dialogue1 = [
  `"(sigh) Here we go, first day of work
...again.`, //0 amy
  `"Greetings human, you're up early.`, //1 Gunther
  `"Uhh I have a name, y'know. Its-"`, //2 amy
  `"Oh I know who you are, it's uhh....
it's uhhh...ummm...uhhhhhhh..."`, //3 monster
  `(Does this guys actually have dementia...?)`, //4 amy
  `"It's uhhhh...it's gotta be Monsterlady!
Yeah that's it, I'm sure of it."`, //5 monster
  `"Nuh-uh! My name is NOT Monsterlady, it’s-" `, //6 amy
  `"Right it’s Moblass. Anyways, Moblass,
I would teach you how to cook but uhh…
I forgot how to cook. "`, //7 monster
  `"Right, of course…"`, //8 amy
  `"Look there’s a customer, go and tend to em.
 I’ll be in the back… doing important stuff."`, //9 monster
  `A peculiar mushroom headed character approaches the 
  counter. He stares at Amy, smiling wide for a few 
  seconds before ordering.`, //10
  `"Apleasuretomeetyouhuman!Iwouldliketoorder
3froglegcupcakeswithfrostingwithacoffeeonthesideplease!"`, //11 fungus
  `"Umm ... what?"`, //12 amy
  `"DidIstutterhuman?IwouldhaveyouknowthatIfoughtin10,000
wars,won300knifefights,anddo200backflipseverysingleday!
Igotothislocationeverydayatthisexacttimeof8:05amjustto
order3froglegcupcakeswithfrostingandacoffeeontheside!"`, //13 fungus
  `"Can you please talk normally?"`, //14 amy
  `"Iexpectmymealtobedoneatexactly8:10amsoIcan
getonstraighttodoomscrollingattable3for3hours.
Donotkeepmewaitingandyesthisisathreat.`, //15 fungus
  `(Umm… What a wonderful start to my day! I should
 probably get to it before that mushroom kills me.
 If only Gunther actually showed me around the
 kitchen instead of wasting my time with his dementia.)`, //16 amy
  ``, //17
];

//names for Mushroom intro
let names1 = [
  "Amy", //0
  "Gunther", //1
  "Amy", //2
  "Gunther", //3
  "Amy", //4
  "Gunther", // 5
  "Amy", //6
  "Gunther", //7
  "Amy", //8
  "Gunther", //9
  "Mushroom??", //10
  "Mushroom??", //11
  "Amy", //12
  "Mushroom??", //13
  "Amy", //14
  "Mushroom??", //15
  "Amy", //16
  "", //17
];

let index1_1 = 0;

let dialogue1_1 = [
  `You finish making your meal to serve the mushroom.`, //0 narrator
  `"Umm… Here it is! Your 3 frogleg cupcakes with 
  frosting and a coffee!"`, //1 Amy
  `"Eww!WhatamIlookingat?Doyouattempttopoisonmehuman?!"`, //2 Mushroom
]; //-10

//deleted dialogue 1

let dialogue1_3 = [
  `You finish making your meal to serve the mushroom.`, //0 narrator
  `"Umm… Here it is! Your 3 frogleg cupcakes with 
  frosting and a coffee!"`, //1 Amy
  `"Huzzah!Thankyouhumanforthisgift!Timetodoomscroll!"`, //2 Mushroom
  ``, //3
]; //+20

let names1_1 = [
  "Narrator", //0
  "Amy", //1
  "Mushroom??", //2
  "Amy", //3
];

//talk to mush

let index1_talk = 0;

let dialogue1_talk = [
  `"Instead of doomscrolling, why not talk to me? 
It’s still a little early for customers-"`, //0 amy
  `"Butitwillstrayfrommyschedule-"`, //1 mush
  `"If you are going to doomscroll for 3 hours, 
we might as well talk for a little bit. So what 
is your name?"`, //2 amy
  `"Hmphfine.MynameisFunGus.Mydayconsistsofwaking
upat7am,gettingreadyby8amtowalkovertothiscafeand
ordermyusualat8:05amthenafterwardsdoomscroll
startingat8:10am."`, //3 fungus
  `"Ithengetupat11:10amthenwalkover
tomyjobandarriveat11:30amwhichIsigninandarriveat
mydeskat11:35am.AfterthatI-"`, //4 fungus
  `"I don’t think I need to know what you do 
throughout the entire day."`, //5 amy
  `"Wouldyounotwanttoknowmoreaboutme,human?
Somehowyourspeciesareallquiteungrateful."`, //6 fungus
  `"That’s not-"`, //7 amy
  `"LuckilyIamaskindasonecanbesoI’llgive
youanotherchance."`, //8 fungus
  ``, //9 amy choice
];

let names1_talk = [
  "Amy", //0
  "Mushroom??", //1
  "Amy", //2
  "Fun Gus", //3
  "Fun Gus", //4
  "Amy", //5
  "Fun Gus", //6
  "Amy", //7
  "Fun Gus", //8
  "Amy", //9
];

// day 1 choice +10

let index1_second = 0;

let dialogue1_second = [
  `"You know, you talk pretty funny."`, //0 amy
  `"Doyoudaremockme?"`, //1 fungus
  `"Not at all! I mean it in a fun… sort of way…"`, //2 amy
  `"WelltheycallmeFunGusforareason."`, //3 fungus
  `"Right…"`, //4 amy
  `"Doyoudislikepuns,dear?"`, //5 fungus
  `"Uhh… I don’t dislike them per say… They just 
make me groan internally."`, //6 amy
  `"HowaboutImakeyougroanexternally?"`, //7 fungus
  `"What?"`, //8 amy
  `"What?"`, //9 fungus
  `"Repeat that again?"`, //10 amy
  `"Youaresoeasytotease,it’sturningouttobemore
entertainingthandoomscrolling."`, //11 fungus
  `"I would hope so."`, //12 amy
  `"Thank you for the meal, erm… Moblass."`, //13 fungus
  `"Moblass? That’s not my name-"`, //14 amy
  `"Thatiswhatitsaysonyouruniform.Areyouperchance
illiterate?"`, //15 fungus
  `"I’ll have you know I consistently score 
95s on my essays-"`, //16 amy
  `"Wait… It actually does say Moblass- 
That stupid…"`, //17 amy
  `"IwouldnotwanttofaceyourwrathsoIwillbegoing
now.Goodbye,Lassmonster."`, //18 fungus
];

let names1_second = [
  "Amy", //0
  "Fun Gus", //1
  "Amy", //2
  "Fun Gus", //3
  "Amy", //4
  "Fun Gus", //5
  "Amy", //6
  "Fun Gus", //7
  "Amy", //8
  "Fun Gus", //9
  "Amy", //10
  "Fun Gus", //11
  "Amy", //12
  "Fun Gus", //13
  "Amy", //14
  "Fun Gus", //15
  "Amy", //16
  "Amy", //17
  "Fun Gus", //18
];

// day 1 choice +20

let index1_third = 0;

let dialogue1_third = [
  `"Do all mushrooms talk like this?"`, //0 amy
  `"Isthisyourattemptatbeingracist?"`, //1 fungus
  `"I’m not racist!"`, //2 amy
  `"Hmmsure…"`, //3 fungus
  `"JustkiddingIwasjustselfprojecting.Doyouwant
toknowthe36slursthatwefungicallhumans?"`, //4 fungus
  `"Why would I want to know that-"`, //5 amy
  `"Isthatayes?Wellthenallowme!******!***!*****!
*******!***!****!**!*****!***-"`, //6 fungus
  `(Oh god he is actually saying it wtf-)`, //7 amy
  `"And*****!"`, //8 fungus
  `"I honestly don’t know what to say anymore. 
Just… don’t use it to refer to me… or anyone else 
in this case."`, //9 amy
  `"Thatwouldbeentirelyonmymood.Sayingallofthose
slursdiduppenmymoodthoughsoyou’relucky."`, //10 fungus
  `"Umm… Good for you?"`, //11 amy
  `"IwouldsayyoudidquitedecentlyasahostsoImma
gonow.Takecarehuman."`, //12 fungus
];

let names1_third = [
  "Amy", //0
  "Fun Gus", //1
  "Amy", //2
  "Fun Gus", //3
  "Fun Gus", //4
  "Amy", //5
  "Fun Gus", //6
  "Amy", //7
  "Fun Gus", //8
  "Amy", //9
  "Fun Gus", //10
  "Amy", //11
  "Fun Gus", //12
];

//leave mush

let index1_leave = 0;

let dialogue1_leave = [
  `"Hmyesthatwasdecent.Seeyouatalaterdate,Moblass
whereyouwillhaveyetanotheropportunitytopleaseme."`, //0 fungus
  `"Ok b—oh he’s already gone."`, // 1 amy
];

let names1_leave = [
  "Fun Gus", //0
  "Amy", //1
];

//day 1 end

let index1_end = 0;

let dialogue1_end = [
  `As Fun Gus left the cafe, Gunther walked up 
to the order counter.`, //0 Narrator
  `"Moblass! How’d that first order go? Did you 
fill ‘em up?"`, //1 monster
  `"Please don’t call me or say that ever again, 
but yeah he seemed like he left happily."`, //2 amy
  `"Nice, nice. Ya know, it’s nice having somebody 
to work with. It’s been too long since I’ve had help."`, //3 monster
  `(If you can’t even get my name right, then I oh 
so wonder why…)`, //4 amy
  `"So what were you doing while I was working 
my ass off?"`, //5 amy
  `"You really want to know?"`, //6 monster
  `"I mean I asked you."`, //7 amy
  `"I just goofed off... for 5 hours straight."`, //8 monster
  `"Umm what?"`, //9 amy
  `"Yeah~ I was goofing off for so long I almost went 
out of my room going all freaky like eleleleelelel 
oluluululululu! If I went for a minute longer I 
would’ve monstered all over the floor-"`, //10 monster
  `(If I didn't know any better, I would think he downed 
  a bunch of Monster Energy drinks...`, //11 amy
  `"Umm… I don’t think I want to know about what 
you did anymore… That one customer tired me out 
so umm… I’m off the clock now."`, //12 amy
  `Amy left back to her room.`, //13 narrator
  `"My mind is going all blank… I think I monstered 
too hard today."`, //14 monster
];

let names1_end = [
  "Narrator", //0
  "Gunther", //1
  "Amy", //2
  "Gunther", //3
  "Amy", //4
  "Amy", //5
  "Gunther", //6
  "Amy", //7
  "Gunther", //8
  "Amy", //9
  "Gunther", //10
  "Amy", //11
  "Amy", //12
  "Narrator", //13
  "Gunther", //14
];

//day 2 opening

let index2_open = 0;

let dialogue2_open = [
  `Day 2: Amy comes to the kitchen to open the 
cafe and start preparing for the day when the 
bell above the door rings signaling customers 
are arriving.`, //0 Narrator
  `"Please be kinda normal, please…"`, //1 Amy
  `"Welcome to Monster Cafe, how can I help you.."`, //2 Amy
  `Amy sniffs the air as the scent of woods 
and leaves fills the room heavily. The 
smell is familiar..`, //3 Narrator
  `Sitting at the order counter is a man who 
seems to be actively decaying by the second. 
His skin is greenish blue and sagging in 
random places.`, //4 Narrator
  `He has a huge cut that looks half healed 
at the center of the top of his head. He’s 
dressed in a ratty old suit.`, //5 Narrator
  `"Hey baby girl, are you crap on a blanket 
because this fly is attracted to you!"`, //6 rancid
  `"..Sorry, what?"`, //7 amy
  `"You look like fresh meat… Haven’t seen 
you here before! The name, Sir Ranc.."`, //8 rancid
  `"Sir…what did you mumble in the last part?"`, //9 amy
  `"Sir Ranc…!"`, //10 rancid
  `"Sir… Siracha?"`, //11 amy
  `"SIR RANCID!"`, //12 rancid
  `He yells so loud his jaw dislocates and 
then takes a moment to pop it back into place.`, //13 Narrator
  `"Sorry hun, these lips aren’t as moist as 
they used to be. My lips get stuck to each 
other sometimes, maybe you could help me 
get 'em we—"`, //14 rancid
  `"ANYWAY. Sir Rancid, was it? Did you wanna 
order something?"`, //15 amy
  `"Ah yes, yes… I could actually use some 
braaiiseed meat. ..What?"`, //16 rancid
  `"I really thought you were gonna say ‘brains’."`, //17 amy
  `"That’s zombist!"`, //18 rancid
  `"Nah I’m kidding. Not today."`, //19 rancid
  `He attempts to wink but his eyelid gets stuck.`, //20 Narrator
];

let names2_open = [
  "Narrator", //0
  "Amy", //1
  "Amy", //2
  "Narrator", //3
  "Narrator", //4
  "Narrator", //5
  "Zombie??", //6
  "Amy", //7
  "Zombie??", //8
  "Amy", //9
  "Zombie??", //10
  "Amy", //11
  "Sir Rancid", //12
  "Narrator", //13
  "Sir Rancid", //14
  "Amy", //15
  "Sir Rancid", //16
  "Amy", //17
  "Sir Rancid", //18
  "Sir Rancid", //19
  "Narrator", //20
];

//day 2 rancid serve

let index2_1 = 0;

let dialogue2_1 = [
  `"Uuhh, here’s that braised meat!"`, //0 amy
  `"You must be pulling my leg, how did you
make something stinkier than me?!"`, //1 rancid
]; //-10

//deleted dialogue2_2

let dialogue2_3 = [
  `"Uuhh, here’s that braised meat!"`, //0 amy
  `"There’s that stench I love! Thanks, hun."`, //1 rancid
]; //+10

let names2_1 = [
  "Amy", //0
  "Sir Rancid", //1 rancid
  "Amy", //2
];

//day 2 talk to rancid

let index2_talk = 0;

let dialogue2_talk = [
  `"So~ you really like the smell of that 
dish, huh? I do too, but I can’t remember 
what I know it from."`, //0 amy
  `"Well, darlin’, that’s because I love anything 
that smells like the inside of my coffin. 
Been livin’ in that thing for hundreds of 
years, can’t bring myself to clean it, I 
think it’ll wash away the memories."`, //1 rancid
  `"You’re saying my best cooking reeks like 
the inside of your coffin?"`, //2 amy
  `"And don’t you forget it! It’s the smell of 
home. What does your home smell like?"`, //3 rancid
  `"My old home..smelled a lot like raw meat 
  and fried oil. I often smelled like the food 
  I made at work when I came home and the smell 
  was so hard to get out of my clothes that it 
  eventually clung to everything in the house."`, //4 amy
  `"Maybe they were right when they said my cooking 
  smelled like moldy dead people."`, //5 amy
  `"If that was a stab at you, then point me to 
  ‘em! I can offer them a free grave! And for you, 
  I’ll do ‘em for free—I mean IT for free."`, //6 rancid
  ``, //7 choices
];

let names2_talk = [
  "Amy", //0
  "Sir Rancid", //1
  "Amy", //2
  "Sir Rancid", //3
  "Amy", //4
  "Amy", //5
  "Sir Rancid", //6
  "Amy", //7
];

//day 2 leave to rancid

let index2_leave = 0;

let dialogue2_leave = [
  `"Ah, I almost feel alive again. Thanks for 
the grub, Moblass."`, //0 rancid
  `"I’m glad? You’re welcome? Neither of those 
sound better than the other."`, //1 amy
];

let names2_leave = [
  "Sir Rancid", //0
  "Amy", //1
];

//day 2 first option

//deleted first option

//day 2 second option

let index2_second = 0;

let dialogue2_second = [
  `"Do you have any zombie family here?"`, //0 amy
  `"Of course I do! Almost every family I’ve ever 
had that’s still intact is still around."`, //1 rancid
  `"I’m scared to ask what you mean by ‘intact’?"`, //2 amy
  `"See, a zombie is a person who kicked the bucket, 
simple as that, but not all of them come back. Ya 
get me?"`, //3 rancid
  `"Sometimes, they’re not all there in the end 
and the body doesn’t have the motivation to keep on 
keepin’ on after it bites the dust. Then when those 
lucky few come back, and they need a new family, we 
just adopt ‘em."`, //4 rancid
  `"In a weird way, that’s kind of sweet that you all 
look out for each other and help guide new people 
through their fresh afterlife."`, //5 amy
  `"Thank ya kindly, Monsterlady~."`, //6 rancid
  `He winks once again and his eyelid gets stuck 
closed, again. He keeps talking nonchalantly 
while he peels it off.`, //7 Narrator
  `"Fitting name for a young thing like yourself."`, //8 rancid
  `"Ok look, that’s Moblass to you—-Aw, crap now 
he’s got me saying it!"`, //9 amy
  `"It’s about that time to go to work and roll over into some 
graves I’m guarding tonight, see ya next time!"`, //10 rancid
  `Sir Rancid leaves.`, //11 narrator
];

let names2_second = [
  "Amy", //0
  "Rancid", //1
  "Amy", //2
  "Rancid", //3
  "Rancid", //4
  "Amy", //5
  "Rancid", //6
  "Narrator", //7
  "Rancid", //8
  "Amy", //9
  "Rancid", //10
  "Narrator", //11
];

//day 2 third option

let index2_third = 0;

let dialogue2_third = [
  `"How long do zombies live for?"`, //0 amy
  `"Potentially, as long as we want. Or as long 
as the body has yet to give. Whichever takes 
us first, ya know?"`, //1 rancid
  `"I’m morbidly curious, carry on."`, //2 amy
  `"We still have to take care of our bodies 
in the afterlife. Just because I’m dead doesn’t 
mean my body is frozen in the state that I died; 
it just means the heart gave up workin’."`, //3 rancid
  `"So, if I don’t try to nourish and care for 
what I have left, I will literally fall apart 
and cease to exist again, but permanently."`, //4 rancid
  `"Wow, never thought I’d be taking advice from 
a dead person. But then again, I guess you 
would know how to avoid a quicker end."`, //5 amy
  `"Oh baby, with me, there is no quick end. You 
know rigamortis is forever?"`, //6 rancid
  `"Ha—Aaaand there it is, ya ruined the nice 
moment we were having."`, //7 amy
  `"Aaaah but I made you laugh didn’t I? I’ll be 
back to get some more out of ya soon, Moblass!"`, //8 rancid
  `Sir Rancid leaves`, //9 Narrator
];

let names2_third = [
  "Amy", //0
  "Sir Rancid", //1
  "Amy", //2
  "Rancid", //3
  "Rancid", //4
  "Amy", //5
  "Sir Rancid", //6
  "Amy", //7
  "Sir Rancid", //8
  "Narrator", //9
];

// day 3 opening

let index3_open = 0;

let dialogue3_open = [
  `Day 3: Amy comes to the kitchen to open the 
cafe and start preparing for the day, however 
she’s surprised when an hour has passed and no 
customers have come in yet.`, //0 narrator
  `"Weird, no customers yet. Don’t tell me my 
cooking has scared everyone off again. 
I can’t lose this job too."`, //1 amy
  `Gunther steps out from the janitor’s closet, 
holding a broom. He tosses a strange smelling 
hand towel toward Amy and places a small water 
bucket on the counter.`, //2 narrator
  `"Uhh... what is this…? And isn't it weird how 
we haven’t had a single monster- I mean 
customer come in yet, Boss?"`, //3 amy
  `"Boss… I’ve never been called that before. 
It has a nice ring to it."`, //4 monster
  `"Er- uh but no. That’s not weird. We’re 
closed on Wednesdays. Now get to cleanin’."`, //5 monster
  `Amy looks at the crusty old rag and the 
small bucket with darkish grey water. She 
contemplates whether or not to clean and 
where to even start. It smells funny…`, //6 narrator
  ``, //7 choices
];

let names3_open = [
  "Narrator", //0
  "Amy", //1
  "Narrator", //2
  "Amy", //3
  "Gunther", //4
  "Gunther", //5
  "Narrator", //6
  "Amy", //7
];

// day 3 Gunther choice 1

let index3_monster1 = 0;

let dialogue3_monster1 = [
  `"Thanks Moblass, it’s nice to have 
an extra pair of hands around here. 
Most of my customers are real slobs."`, //0 monster
  `"Yeah, I noticed."`, //1 amy
  `"So you came from another world 
right? Were you a cook there too?"`, //2 monster
  `"Yeah, I worked at a lot of places, 
but it hasn’t always ended well…"`, //3 amy
  `"Wow I’ve worked here for as long 
as I can remember. It’s been a 
orc-family tradition to run this cafe."`, //4 monster
  `"The menu’s always been the same 
though..."`, //5 monster
  `"I’d kill for a frog smash burger 
with monster sauce instead sometime."`, //6 monster
  `Amy tenses up at the word “kill”, 
but thinks for a bit about trying 
to cheer up Gunther.`, //7
];

let names3_monster1 = [
  "Gunther", //0
  "Amy", //1
  "Gunther", //2
  "Amy", //3
  "Gunther", //4
  "Gunther", //5
  "Gunther", //6
  "Narrator", //7
  "Amy", //8
];

// day 3 Gunther choice 2

let index3_monster2 = 0;

let dialogue3_monster2 = [
  `Amy changed out the dirty water 
then got a fresher towel before 
cleaning.`, //0 narrator
  `"Wow, what’s that foamy stuff 
you’re cleaning with? It’s making 
the counter shinier than ever!"`, //1 Gunther
  `"You mean the suds? It’s dish soap."`, //2 amy
  `"It smells so good, I wonder if 
that’d go well on a frog smash burger?"`, //3 Gunther
  `"It’s lemon scented…not flavored.`, // 4 amy
  `"Wait, have you never cleaned this 
place with soap before…?"`, //5 amy
  `"So you don't think it’d go well 
on a frog smash burger then? That’s 
what Mama used to say too."`, //6 monster
  `"Stick to monster tradition she’d say… 
I’d kill for a frog smash burger 
with monster sauce instead sometime."`, //7 monster
  `Amy feels a little weird being 
compared to Gunther’s mother, 
and thinks of a way to cheer him up.`, //8 narrator
];

let names3_monster2 = [
  "Narrator", //0
  "Gunther", //1
  "Amy", //2
  "Gunther", //3
  "Amy", //4
  "Amy", //5
  "Gunther", //6
  "Gunther", //7
  "Narrator", //8
  "Amy", //9
];

// day 3 Gunther choice 3

let index3_monster3 = 0;

let dialogue3_monster3 = [
  `Amy, realizing it is her day 
  off, refuses to clean.`, //0 narrator
  `"Huh?! Whaddya mean, you lazy 
punk? Alright, you’ve got gumption, 
I’ll give you that. But if you’re 
not gonna help me then get outta 
my face."`, //1 Gunther
];

let names3_monster3 = [
  "Narrator", //0
  "Gunther", //1
];

//day 3 Gunther choice 4

let index3_monster4 = 0;

let dialogue3_monster4 = [
  `"You’re the boss. Just add that 
to the menu."`, //0 amy
  `"You’re right! I’m the boss, the 
big Orc in charge. My old Mama 
can’t stop me from changing up the 
menu anymore!"`, //1 Gunther
  `"Haha, yeah! You’re the boss. 
Do whatever you want."`, //2 amy
  `"Wait Mama what now…?"`, //3 amy
  `"Yeah! Mama always said the 
menu shouldn’t be like a box of 
chocolates, that way customers 
will always know what they’re 
gonna get."`, //4 monster
  `"I don’t think that’s how the 
saying goes…"`, //5 amy
  `"You’re too young to have seen 
Forest Gun, huh Moblass?"`, //6 monster
  `"Again it’s not Moblass! IT’S- 
ahh whatever."`, //7 amy
];

let names3_monster4 = [
  "Amy", //0
  "Gunther", //1
  "Amy", //2
  "Amy", //3
  "Gunther", //4
  "Amy", //5
  "Gunther", //6
  "Amy", //7
];

// day 3 Gunther choice 5

let index3_monster5 = 0;

let dialogue3_monster5 = [
  `"Maybe I could make it for you 
sometime."`, //0 amy
  `"R-really? Just like my Great 
Gran-Mama used to make?!"`, //1 monster
  `"Uhhh- I don’t know about that. But 
I could try my best."`, //2 amy
  `"Thanks Moblass, that’s all that 
would really matter. You’re alright 
in my book."`, //3 monster
  `"Again it’s not Moblass! IT’S- 
ahh whatever."`, //4 amy
  `The two continue to clean and 
  share recipes and cooking stories.`, //5 narrator
];

let names3_monster5 = [
  "Amy", //0
  "Gunther", //1
  "Amy", //2
  "Gunther", //3
  "Amy", //4
  "Narrator", //5
];

// day 3 Gunther choice 6

let index3_monster6 = 0;

let dialogue3_monster6 = [
  `"Making different recipes complicates 
things. Stick to tradition."`, //0 amy
  `"You’re right. It’s what Mama 
would want. You remind me a lot of 
her. You cook by the recipe and it 
always tastes great."`, //1 monster
  `"Oh! Uh…thanks? No one's ever said 
that about me and my cooking before."`, //2 amy
  `"Really? Your food is always so 
spongy and bitter, and smells so 
pungent. Who wouldn't love it?"`, //3 monster
  `"Wow. I really don’t know what to 
say to that."`, //4 amy
  `"You’re welcome, Moblass."`, //5 Gunther
  `"Again it’s not Moblass! IT’S- 
ahh whatever."`, //6 amy
  `The two continue to clean and share 
recipes and cooking stories.`, //7 narrator
];

let names3_monster6 = [
  "Amy", //0
  "Gunther", //1
  "Amy", //2
  "Gunther", //3
  "Amy", //4
  "Gunther", //5
  "Amy", //6
  "Narrator", //7
];

// day 3 fungus if his points are higher

let index3_fungus = 0;

let dialogue3_fungus = [
  `Amy walks outside of the cafe, trying to get 
some fresh air.`, //0 narrator
  `"*sigh* Who knew I would be out here dying 
then somehow working for some demented man child…"`, //1 amy
  `"Havingalittletroubleinthere,eh?"`, //2 fungus
  `"Oh it’s you again. You do realize that the 
cafe is closed today, right?"`, //3 amy
  `"Ididnotcomeformyordertoday.Ihavedecidedto
gooutsideofmyscheduletotalktoyou."`, //4 fungus
  `"But isn’t your schedule super important? 
Why go outside of that for me?"`, //5 amy
  `"Hmm…whocansay…"`, //6 fungus
  `(Great, this guy is being cryptic again…)`, //7 amy
  `"Since we have nothing to do, why don’t we 
do something together?"`, //8 amy
  `"Whatdoyoupropose?"`, //9 fungus
  ``, //10 amy
];

names3_fungus = [
  "Narrator", //0
  "Amy", //1
  "Fun Gus", //2
  "Amy", //3
  "Fun Gus", //4
  "Amy", //5
  "Fun Gus", //6
  "Amy", //7
  "Amy", //8
  "Fun Gus", //9
  "Amy", //10
];

//fungus choices for date
//choice 1 dinner date go out to eat

let index3_fungus1 = 0;

let dialogue3_fungus1 = [
  `"Why don’t we go eat out?"`, //0 amy
  `"Now that I think about it, I don’t think I’ve
   ever gone beyond these woods. This would be a 
   good opportunity to explore."`, //1 amy
  `"Iamquitehungrysolet’sgo.Let’seatsomewhere
  wheretheyservemeat."`, //2 fungus
  `"I don’t mind meat but why specifically meat?"`, //3 amy
  `"Doyouexpectmetoeatmyownkind?"`, //4 fungus
  `"Good point… Uhh... I actually don’t know where to go eat. 
  Do you know any good places?"`, //5 amy
  `"HowaboutItreatyoutosomeplacefun?"`, //6 fungus
  `"I don’t usually think of eating as fun but… 
  ehh, what the hell, sure."`, //7 amy
  `Both leave together toward downtown Monster City,
  and stop at a place called Fungal Garden.`, //8 Narrator
  `(So this is their version of Olive Garden.
  Ooh I wonder if they serve breadsticks… just thinking 
  about the saltiness in my mouth…)`, //9 amy
  `"Tomaximizeefficiency,Ipreorderedeverything.Quiteironic
  itismeservingyouthistime."`, //10 fungus
  `As Amy took a look at the plates in front of her, there were 
  goblin burgers made with slime buns, spaghetti made out of 
  jellyfish tentacles with zebra meatballs, and gargoyle wings.`, //11 Narrator
  `"Uhh… I don’t know if I can eat this… but if Fun Gus 
really did go through this effort to preorder this then… I guess 
I have to eat."`, //12 Amy
  `Amy took a bite of faith into each food item. While the jellyfish 
tentacles spaghetti with zebra meatballs tasted surprisingly good, 
everything else was practically inedible.`, // 13 Narrator
  `"Blaaaarrrggghhh!!!" (How surprising that the only thing that is 
edible here are the animals that I am aware of…)`, // 14 Amy
  `"Ohdear,thatwasnotmyintention.AreyoualrightMoblass?"`, //15 Fun
  `"For the last time my name is not… BLAAAARGGGHHH!!!"`, //16 amy
  `"Whileitisamusingtowatchyousuffer,IbelieveIcan
finishtherestwhileyoucangohome.Iwasplanningtotakethis
foodbackhomeanyways."`, //17 fung
  `"Could you at least take me back 
to the cafe before you go?
I don’t think I can walk…"`, //18 amy
  `"DoIhavesomethingtogainfrom
takingyouback?"`, //19 fun
  `"You’re seriously asking for something 
while I have stomach cramps?"`, //20 amy
  `"Youaresoeasytoragebait.I’mnotthatheartless.Let’sgoback."`, //21 fung
  `Fun Gus carries Amy on his back, chuckling and 
yapping all the way back about random fungus facts.
 Gunther is waiting for them outside. He
 looks worried.`, //22 Narrator
  `"Are you alright, Moblass? I saw you disappear but then you-"`, //23 Gun
  `"No, I’m not well, I had fudging goblin burgers with slime
buns and a whole bunch of stuff I don’t know… Blaaargghh… "`, //24 amy
  `"Oh... so you went on a date to eat goblin burgers 
with him of all monsters... that's my 
favorite grub, y'know."`, //25 Gun
  `"Asyoucansee,sheisaliveandwell.Youmaytakeherbackfor
Iwillvisithereonceagaintomorrow."`, //26 fung
  `Fun Gus leaves with the leftover food.
 He sticks his tongue out at Gunther
and blows Amy a kiss.`, //27 Narrator
  `"Do I still have to clean the cafe?"`, //28 amy
  `"I already finished cleaning the cafe. Besides, even if I 
wasn’t done, there’s no way I would let you work when you are 
unwell. That is not the Gun way."`, //29 Gun
  `"Thanks Gunther, you are already better than my manager. He 
made me call in even when I had COVID."`, //30 amy
  `"I dunno what a COVID is but you are my worker now. If you 
need anything, just let me know. You are my most valuable 
employee."`, //31 gun
  `"Thanks and see you tomorrow."`, //32 amy
  `(That’s not a very high bar to clear when I am your only
 employee but whatever.)`, //33 amy
];

let names3_fungus1 = [
  "Amy", //0
  "Amy", //1
  "Fun Gus", //2
  "Amy", //3
  "Fun Gus", //4
  "Amy", //5
  "Fun Gus", //6
  "Amy", //7
  "Narrator", //8
  "Amy", //9
  "Fun Gus", //10
  "Narrator", //11
  "Amy", //12
  "Narrator", //13
  "Amy", //14
  "Fun Gus", //15
  "Amy", //16
  "Fun Gus", //17
  "Amy", //18
  "Fun Gus", //19
  "Amy", //20
  "Fun Gus", //21
  "Narrator", //22
  "Gunther", //23
  "Amy", //24
  "Gunther", //25
  "Fun Gus", //26
  "Narrator", //27
  "Amy", //28
  "Gunther", //29
  "Amy", //30
  "Gunther", //31
  "Amy", //32
  "Amy", //33
];

//choice 2 room date

let index3_fungus2 = 0;

let dialogue3_fungus2 = [
  `"What do you want to do?"`, //0 amy
  `"Iaskedyouwhatyoudoandyourespondwithasking
  mewhatIwant?Obviouslywebothwantdifferentthings
  sowhywouldyouaskmewhatIwant?"`, //1 fun
  `"For the sake of my sanity, please answer the 
  question…"`, //2 amy
  `"Hmphfine.I’dsaywecangoinsideofyourroom.Youpractically
  liveherenowright?"`, //3 fun
  `"I mean I eat, sleep, and work here so I guess… But 
  why do you want to go inside my room? It’s really messy 
  and-"`, //4 am
  `"Wefungilikethemesssothatjustmeansmorescrapsformeto
  feedon.Maybetherearesomeexpiredgoblinburgerpattiesforme
  tofeaston."`, //5 fun
  `"Why- Oh forget it, my brain will hurt more if I try 
  to question everything here… "`, //6 am
];

let names3_fungus2 = [
  "Amy", //0
  "Fun Gus", //1
  "Amy", //2
  "Fun Gus", //3
  "Amy", //4
  "Fun Gus", //5
  "Amy", //6
];

// choice 2_1 agree to room date
let index3_fungus2_1 = 0;

let dialogue3_fungus2_1 = [
  `"Fine, you can come in… "`, //0 amy
  `"Huzzah!Timetorummagethroughyourcloset!"`, //1 fun
  `Fun Gus hurriedly went inside of the cafe to 
Amy’s room.`, //2 narr
  `"Hey! Not my closet!"`, //3 amy
  `Amy follows suit, trying to catch up to Fun
   Gus.`, //4 narr
  `"Hmm…Foraroomyouarenotsokeentoshowme,itlooks
  ratherdull."`, //5 fun
  `"Well of course it’s dull, I haven't been
  here for long..."`, //6 am
  `"CanIrollinyourbed?"`, //7 fun
  `"ABSOLUTELY NOT! MY BED IS A SANCTUARY 
  THAT YOU CAN ONLY ENTER ONCE YOU SHOWER!"`, // 8 Amy
  `"HowaboutIshowerhere?"`, //9 f
  `"You’ve got to be joking…"`, //10 a
  `"Youaresofuntomesswithhehe!"`, //11 fu
  `"Don’t you have anything better to do? You know… 
like a job?"`, //12 am
  `"OhyeahyouknowthatjobItoldyouabout?Igotfiredaswell.
ApparentlyIlaughedsohardthatIreleasedtoomany
poisonoussporesintomyboss’sroom."`, // 13
  `(How does that even happen? Whatever… it’s none of 
my business… Since he’s always trying to make me mad,
I’ll try to make him mad.)"`, //14
  `"Deserved."`, // 15 amy
  `"Isthatyourattemptinragebaitingme?2/10ragebaittry
harder."`, //16 fu
  `"Grrr…. "`, //17 a
  `"AnywaysIjustwantedtogoinsideofyourroom,that’sit.
Untilwemeetagain,Moblass…"`, //18 fu
  `Satisfied, Fun Gus blows Amy a sporey mushroom kiss 
and leaves.`, //19 na
  `"I can’t believe a mushroom out of all things made
 me mad…"`, //20
];

let names3_fungus2_1 = [
  "Amy", //0
  "Fun Gus", //1
  "Narrator", //2
  "Amy", //3
  "Narrator", //4
  "Fun Gus", //5
  "Amy", //6
  "Fun Gus", //7
  "Amy", //8
  "Fun Gus", //9
  "Amy", //10
  "Fun Gus", //11
  "Amy", //12
  "Fun Gus", //13
  "Amy", //14
  "Amy", //15
  "Fun Gus", //16
  "Amy", //17
  "Fun Gus", //18
  "Narrator", //19
  "Amy", //20
];

//choice 2_2 don't agree to room date

let index3_fungus2_2 = 0;

let dialogue3_fungus2_2 = [
  `"No, you can’t go inside of my room. Please leave."`, //0 amy
  `"Aww…FineIwilltryagaintomorrow."`, //1 fun
  `Fun Gus leaves to go back home, disappointed.`, //2 narr
];

let names3_fungus2_2 = [
  "Amy", //0
  "Fun Gus", //1
  "Narrator", //2
];

//choice 3 shopping date

let index3_fungus3 = 0;

let dialogue3_fungus3 = [
  `"Let’s do some shopping."`, //0 amy
  `"(Shopping…ugh…)Huh,shopwhat?"`, //1 fun
  `"Clothes obviously. I’m sick of wearing my old 
  clothes all day and night."`, //2 am
  `"Youhumansaresoextra,whydon’tyoujustgoaroundnaked?"`, //3 fun
  `"Um what?"`, //4 am
  `"What?"`, //5 fun
  `(Playing all innocent, are we? Fine, be that way…)`, //6 amy
  `"If we leave now, I’ll forget what you said."`, //7 amy
  `"Ididn’tsayanythingsuspiciousbutokee-dokey…"`, //8 fung
  `Both leave together to shop in downtown Monster City.`, //9 narra
  `"Umm… There aren’t as many clothing shops around."`, //10 am
  `"Wellyoumayhavenoticedbutwedonotchangeclothesasofte
  nasyouhumans.Wechangeclothesmaybeeveryweekatmost."`, //11 fun
  `"You wear the same dirty clothes multiple days in a 
  row? Eww…"`, //12 Amy
  `"Youknowwhattheysay:Thesweatierthepits,thesweeterthe
  fruit."`, // 13 fun
  `"That’s very gross but look, that shop has some really
   cute clothes, let’s take a look!"`, // 14 Amy
  `"Ugh…"`, //15 Fun
  `Amy grabs Fun Gus's clammy hand, and drags him in with
   her. Three hours pass...`, //16 nar
  `(Dammit, three hours later and these clothes I find are
   either not my size, have unnecessary holes, or just plain 
   ugly.)`, //17 amy
  `"Isthishowlonghumanstaketopickclothes?"`, //18 fung
  `"If we could actually find something, then I’d say it 
  would take even longer. Shopping is an endless adventure."`, //19 amy
  `"Yousoundlikemymom,despicable.Soarewedoneyet?"`, //20 fun
  `"It’s getting late so I guess we will have to end it
   here… I’ll see you at the cafe another time I guess."`, //21 amy
  `"Indeed.Untilwemeetagain."`, //22 fun
  `"The two go their seperate ways, both unsatisfied."`, //23 narr
];

let names3_fungus3 = [
  "Amy", //0
  "Fun Gus", //1
  "Amy", //2
  "Fun Gus", //3
  "Amy", //4
  "Fun Gus", //5
  "Amy", //6
  "Amy", //7
  "Fun Gus", //8
  "Narrator", //9
  "Amy", //10
  "Fun Gus", //11
  "Amy", //12
  "Narrator", //12
  "Fun Gus", //13
  "Amy", //14
  "Fun Gus", //15
  "Narrator", //16
  "Amy", //17
  "Fun Gus", //18
  "Amy", //19
  "Fun Gus", //20
  "Amy", //21
  "Narrator", //23
];

//day 3 rancid, if his points are higher

let index3_rancid = 0;

let dialogue3_rancid = [
  `Amy steps outside to get some fresh air, however
 a horrid yet familiar stench wafts by...`, // 0 narr
  `"Good day, Moblass~. I told ya I’d be back.`, //1 ranc
  `"I can smell- I mean see that! No graves need- 
um, holding today?"`, //2 amy
  `"Well actually, that’s what I came to ask you about. 
How would you like to help me on a job?`, //3 ranc
  `"I’m not doing your drugs."`, //4 amy
  `"HA! No, no dear, I’m not asking that, unless you want to, 
of course."`, //5 ranc
  `"Ok… So then what’s this job offer?"`, //6 amy
  `"I have this family asking for my services, but as you can 
see, I’m only one body. So how would you like to be part of 
the action tonight?"`, //7 ranc
  `"What action am I getting? …Ya know what, don’t answer that."`, //8 amy
];

let names3_rancid = [
  "Narrator", //0
  "Sir Rancid", //1
  "Amy", //2
  "Sir Rancid", //3
  "Amy", //4
  "Sir Rancid", //5
  "Amy", //6
  "Sir Rancid", //7
  "Amy", //8
  "Amy", //9
];

//choice 1 make him a to go plate
let index3_rancid1 = 0;

let dialogue3_rancid1 = [
  `"How about I make you something to go, instead? 
  It’ll be like I’m there in spirit."`, // 0 Amy
  `"Edging me with your spirit, eh? Fine, fine. I’ll 
  take what I can get."`, // 0 Sir Rancid
  `"Ok. cool let me just pack this up.. aand done! 
  There ya go, Sir! Enjoy! Oh, and I hope you really 
  get to… fold, lots of graves tonight."`, // 2 Amy
  `"Hey! Look at that, you even signed it “With love, 
  Moblass” I knew I liked you."`, // 3 ranc
  `"Yeah, right, there’s no love in sight here."`, //4 amy
  `"I’ll get you there, Moblass, you’ll see!"`, //5 ranc
  `"Amy decided not to go on a date with Sir Rancid...
Perhaps her heart is elsewhere..."`, //6 narrator
];
let names3_rancid1 = [
  "Amy", //0
  "Sir Rancid", //1
  "Amy", //2
  "Sir Rancid", //3
  "Amy", //4
  "Sir Rancid", //5
  "Narrator", //6
];

//choice 2 go on a date with him
let index3_rancid2 = 0;
let dialogue3_rancid2 = [
  `"Screw it! Why not? Let’s go fold in some 
  graves."`, //0 amy
  `"Excellent! I’ll teach you the ways of the 
  lean-"`, //1 ranc
  `"I said no drugs!"`, //2 amy
  `"Not that kind of lean, darlin’. I’m gonna 
  teach you the stance of the Fent Master!"`, //3 ranc
  `"I think I’m regretting this."`, //4 amy
  `"And I think, this is a date!"`, // 5 ranc
  `"The two leave the cafe together to enjoy 
  their first date."`, //6 nar
  //not sure if there should be more here
];

let names3_rancid2 = [
  "Amy", //0
  "Sir Rancid", //1
  "Amy", //2
  "Sir Rancid", //3
  "Amy", //4
  "Sir Rancid", //5
  "Narrator", //6
];

//choice 3 tell him to leave
let index3_rancid3 = 0;

let dialogue3_rancid3 = [
  `"Realistically, I think I would rather 
  get hit by a truck all over again than do 
  that."`, //0 amy
  `"Wow, harsh. Kinky, but harsh. Whatever 
  floats your boat, lassy. But alright, 
  see you later!"`, // 1 sir ranc
  `"Amy decided not to go on a date with Sir Rancid...
Perhaps her heart is elsewhere..."`, //2 narrator
];

let names3_rancid3 = [
  "Amy", //0
  "Sir Rancid", //1
  "Narrator", //2
];

//day 4 event double date?
let index4_open = 0;

let dialogue4_talk = [
  `Amy endures another busy day of cooking. Halfway through
 her shift, she smells and sees two familiar faces
 hanging around the back of the cafe. They finally come
 up to say hi when she waves at them.`, //0 narr

  `"Hey, you guys ordering or hanging out?"`, //1 amy

  `"Here to bother you mostly."`, //2 ranc

  `"Yesyeswhatthesquishyonesaid."`, //3 fung

  `"Nothing gets by you, huh? Anyway, what are you guys up 
 to tonight? Anything fun?"`, //4 amy

  `"You’re fun."`, //5 ranci

  `"Seconded!"`, //6 fung
  `"You guys are so weird, but whatever, I’ll appreciate the 
  company, I think."`, //7 am
  `"Whereisthelargerone?Thebigdumborcman."`, // 8 fung
  `"Probably doing something gross and unholy in his room."`, //9 amy
  `"Do you not partake? Do we not get dinner and a show?"`, //10 ranc
  `"Whatkindofshowareyoureferringto? Soundslikesomething
thatwouldbeanuisancedistractingmefrommydedicated
doomscrollingtime."`, //11 fung
  `"Oh, you naive shroom, care to find out? I could teach you
  a thing or two."`, //12 ranc
  `"NOT AT MY COUNTER YOU’RE NOT! If you wanna do that 
  you can go home!"`, //13 amy
  `Fun Gus and Sir Rancid laugh at Amy’s reaction. And 
  eventually she joins them. The three enjoy a night of 
  hanging out, chatting, and enjoying some monster drinks
  together.`, //14 narr
];

let names4_double = [
  "Narrator", //0
  "Amy", //1
  "Sir Rancid", //2
  "Fun Gus", //3
  "Amy", //4
  "Sir Rancid", //5
  "Fun Gus", //6
  "Amy", //7
  "Fun Gus", //8
  "Amy", //9
  "Sir Rancid", //10
  "Fun Gus", //11
  "Sir Rancid", //12
  "Amy", //13
  "Narrator", //14
];

//day 4 night gunther
let index4_gunther = 0;

let dialogue4_gunther = [
  `Eventually, as the night goes on, the trio 
  grows tired. Fun Gus and Sir Rancid leave the 
  Cafe. Gunther had joined at some point, enjoying 
  in the monster drinks with the gang. As Amy waves 
  goodbye, Gunther whistles at her.`, //0 narr

  `"You’re great for business, Moblass. I can’t 
  remember having this many repeat customers 
  coming back to the cafe."`, //1 gunther

  `"Uhh... you get why they were here right?"`, //2 amy

  `"Because they love your cooking right?"`, //3 gu

  `(Gosh, he's so dense. It's kind of cute though...) 
 "Er uh right…"`, //4 amy

  `"Two guys fighting over your cooking. Kinda makes 
  me jealous. Honestly, I’ve kinda been wishing it 
  was me."`, //5 gunty

  `"Huh?! Wait, you’re jealous?"`, //6 amy

  `"Yeah, I forgot how to cook, and just eat whatever 
  I can find haha. Some days I want to be the customer 
  and have someone bring me my meals."`, //7 gun

  `" Ohhh… that’s what you mean… Right."`, //8 amy
  `"Yeah it's so much work. Oh, what did you think 
  I meant, Moblass?`, // 9 g
  `"N-nothing. And I told you to stop calling me that. 
  If you want to be treated like a customer so badly, 
  then sit down and I’ll cook you something so you 
  can shut up about it."`, //10 amy
  `"Really?! I finally get to have you cook for me 
  again?? Well hurry up, I'm starvin!'`, //11 gunther
  `"Gosh, just shut up and sit down, you monster."`, // 12 amy
  `"Wow, you already remind me so much of my Mama."`, //13 gunth

  `Gunther happily stands behind the counter ready to 
  order. He gives Amy a wide toothy grin as she walks 
  behind the counter, tying on her apron.`, //14 narr
  `"Welcome to Monster Cafe. How can I help you?"`, //15 am
  `"Whoa, I get why those guys are always coming back. 
  I’m drooling already."`, //16 gun

  `"I’ll fudging spit in your food."`, //17 am
  `"*sigh* Just like my old Mama used to say. Hell yeah, 
  I’ll take a frogleg smash burger with extra of that 
  monstersauce, just like she used to make."`, //18 gun
  `"Wait, I've never actually made a smash burger before… 
  I don’t know if I’d make it as well as she did…"`, //19 amy

  `Amy wonders whether she should ask for help, just 
  wing it, or make the same frogleg cupcakes.`, //20 narr
];

let names4_gunther = [
  "Narrator", //0
  "Gunther", //1
  "Amy", //2
  "Gunther", //3
  "Amy", //4
  "Gunther", //5
  "Amy", //6
  "Gunther", //7
  "Amy", //8
  "Gunther", //9
  "Amy", //10
  "Gunther", //11
  "Amy", //12
  "Gunther", //13
  "Narrator", //14
  "Amy", //15
  "Gunther", //16
  "Amy", //17
  "Gunther", //18
  "Amy", //19
  "Narrator", //20
  "Amy", //21
];

//day 4 gunther choices
//choice 1 make the same frog leg cupcakes
let index4_gunther1 = 0;

let dialogue4_gunther1 = [
  `Amy goes to the kitchen and comes back messy and 
  with a twitching, frog leg cupcake.`, //0 narr

  `"Here you go, I hope it’s okay."`, //1 amy

  `Gunther sniffs the frogleg cupcake, and taps the leg. It 
  twitches and a croak emits from within the wrapped treat. 
  He licks his lips and takes a huge bite. His eyes get all 
  starry and he moans loudly before scarfing down the rest 
  of the cupcake.`, //2 narr

  `"Uh… it seems like you’re enjoying that a little 
  too much…"`, //3 amy

  `"It’s delicious and super slimy. Even better than the
   first time you made it for me."`, //4 gun

  `"Aww, thanks Boss. That means a lot. Back home, no 
  one ever enjoyed my cooking as much as you and the 
  other guys do. It makes me feel like I kind of belong
   here."`, //5 amy

  `"Well, you do, you’re mine."`, //6 gun

  `"Yeah… wait what?!"`, //7 amy

  `"Haha! Well you randomly showed up at my back door, 
  you live here for free, you cook for me and my 
  customers, and you always come back here to sleep 
  after the dates with those other monster guys."`, //8 gun

  `" Uh… not dates. And don’t say it like that… Gosh, 
  I shouldn’t have gotten all sappy, pervy Orc.`, // 9 amy

  `"Bottom line, you’re kinda like my-"`, //10 gun

  `"You’re what?'`, //11 amy

  `"My pet, I guess."`, // 12 gu

  `"Why did I even ask?!"`, //13 amy

  `"Like a pet cat! You’re just like a cat! Haha!"`, //14 gun

  `He laughs and continues munching on frogleg 
  cupcakes as Amy gets up and stomps away, fuming 
  and face flushed.`, //15 narr
];

let names4_gunther1 = [
  "Narrator", //0
  "Amy", //1
  "Narrator", //2
  "Amy", //3
  "Gunther", //4
  "Amy", //5
  "Gunther", //6
  "Amy", //7
  "Gunther", //8
  "Amy", //9
  "Gunther", //10
  "Amy", //11
  "Gunther", //12
  "Amy", //13
  "Gunther", //14
  "Narrator", //15
];

//choice 2 ask for help
let index4_gunther2 = 0;

let dialogue4_gunther2 = [
  `"Maybe you could teach me how to make it?" `, //0 amy

  `"Uh… remember how I said I forgot how to cook 
  before? I wasn’t lying…"`, //1 gun

  `Yeah, so. You at least have to know what 
  ingredients she used right? Like spices or 
  the steps to make it? Just walk me through it."`, //2 amy

  `"I have the memory of a goldfish, too many 
  clubs to the head. But I guess I could hold your
  hand through it. Maybe it’ll help me remember
  how to cook."`, //3 gunth

  `Both go to the kitchen and begin preparing 
  ingredients. It’s a strange array of suspicious 
  looking bottles of liquids, spices, and twitching 
  meats.`, //4 narr

  `"So your… Mama used all this for just burgers?"`, //5 amy

  `"Haha impressive, huh? Oh wait, we're missing one
   thing. It’s that jar of slime goo on the shelf 
   up there. Use the step stool to go grab it."`, //6 gun

  `Amy walks over to the shelf and uses a stepping 
  stool to reach up to the cabinet.`, //7narr

  `"W-Whoa!"`, //8 amy

  `"Watch out!`, // 9 gun

  `The stepping stool wobbles and one of the legs snaps. Amy
  goes towards the floor until Gunther swoops in to catch her 
  as she falls. They look into each other's eyes and realize 
  they’ve never been this close before. After a few seconds, 
they let go and re-collect themselves.`, //10 narr

  `"I- uh hope you're not hurt."`, //11 gun

  `"Y-yeah, I'm fine. Thanks for catching me."`, // 12 amy

  `"Of course, I'll step back behind the counter for 
  now haha..."`, //13 gunt

  `Amy carries on in the kitchen and comes back messy and 
  with a twitching, frog leg burger with a strange white 
  sauce oozing out from the side.`, //14 narr

  `"Here you go, I hope it’s okay."`, //15 amy

  `Gunther sniffs the burger, and taps the leg. It twitches 
  and a croak emits from the smashed patty meat. He licks his
 lips and takes a huge bite. His eyes get all starry and moans
loudly before scarfing down the rest of the burger.`, // 16 narr

  `"Uh…it seems like you’re enjoying that a little too much…"`, //17 aamy

  `" It’s even better than my Mama’s! Just uh, don't ever 
  tell 'er I said that."`, //18 gunt

  `"Implying I'll meet your mom someday is very 
  forward... Wait, really? You like the burger 
  that much?"`, //19 amy

  `"Really! It’s the best I’ve ever had. You even made sure to 
  keep the mucus on the frogs. And they were still croakin! If 
  this is what it’s like being your customer, then could we uh..."`, //20 gun

  `"…What?"`, //21 amy

  `"Maybe this could be something we do every now and again. 
  Maybe once a week? Like a ... dinner date... roleplaying 
  thing...? Whaddya say?"`, //22 gun

  `"There’s probably a word for how wrong this is, but if 
  I say no you’ll probably eat me, huh.."`, // 23 amy

  `"In what way would you like? If you keep serving me like 
  this, then-"`, //24 gun

  `"Gosh, you monsters are all so gross!"`, //25 amy

  `"Heh, can’t blame a orc for trying."`, //26 gunther

  `Both laugh and spend the rest of the night enjoying 
  stories about Gunther's Mama's cooking.`, //27 nar
];

let names4_gunther2 = [
  "Amy", //0
  "Gunther", //1
  "Amy", //2
  "Gunther", //3
  "Narrator", //4
  "Amy", //5
  "Gunther", //6
  "Narrator", //7
  "Amy", //8
  "Gunther", //9
  "Narrator", //10
  "Gunther", //11
  "Amy", //12
  "Gunther", //13
  "Narrator", //14
  "Amy", //15
  "Narrator", //16
  "Amy", //17
  "Gunther", //18
  "Amy", //19
  "Gunther", // 20
  "Amy", //21
  "Gunther", //22
  "Amy", //23
  "Gunther", //24
  "Amy", //25
  "Gunther", //26
  "Narrator", //27
];

//day 5 proposals

let index5_open = 0;

let dialogue5_talk = [
  `The fifth day goes on with it's usual hustle and bustle, and 
 Amy is exhausted. Towards the end of her shift, two familiar faces
 come in again, out of breath as if they were racing each other to 
 the Monster Cafe.`, //0 narr

  `"Another day, another couple of goofy monsters…"`, //1 amy

  `"Hey Moblass! Look who’s here to see you!"`, //2 gun

  `"Greetings,itisIagain."`, //3 fung

  `"Hey, my favorite babygirl, Moblass~ 
 What’s poppin- I mean cookin?"`, //4 ranc

  `"Are you deadass..? And after so many customers 
  today? Ugh…"`, //5 amy

  `"If you need help, I’ll take care 
  of one while you take care of the other."`, //6 gun
  `Will Amy choose to serve Fun Gus, Sir 
  Rancid, or manage to serve everyone at 
  the same time?`, //7 narr
];

let names5_all = [
  "Narrator", //0
  "Amy", //1
  "Gunther", //2
  "Fun Gus", //3
  "Sir Rancid", //4
  "Amy", //5
  "Gunther", //6
  "Narrator", //7
  "Amy", //8
];

//day 5 choices
//fun gus if love points are higher than 36?
let index5_fungus1 = 0;

let dialogue5_fungus1 = [
  `Amy chooses to serve her favorite monster, Fun Gus.`, //0 narr
  `"So that's who she's chosen..."`, //1 Gunther
  `"Oh, she's breakin' my heart...`, // 2 Sir Rancid

  `"Ah,soyou’vechosenme,haveyou?"`, //3 fun

  `"I dunno if I’d say ‘chosen’, ya weirdo.. 
  But yeah, here I am, with your order, as usual."`, //4amy

  `"Yesyes,butnooneheremakesitthe
  samewayyoudo,thusitisthebestway."`, //5 fung

  `"Now you’re just saying nonsense again, but I 
 appreciate it anyway.."`, //6 amy

  `"Youlooksad,doyouwantoneofmyemotional
  supporttoxicshrooms?"`, //7 fun

  `"Oh my goodness, no, I don’t want your toxic 
  pocket shrooms."`, //8 amy

  `"I’mnottryingtopoisonyou,ifthat’syourconcern,
  I’mtryingtoshareonewithyoubecausetheycomfortmeso
  whyshouldn’ttheycomfortyou!"`, //9 fun
  `"Oh.. Oh! Yes okay, I get it. Then sure, I 
  guess I’ll take one, if you really mean it."`, //10 amy
  `*Fun Gus gently places a tiny mushroom in Amy’s 
  apron pocket.* `, //11 narr
  `"Yougocomfortthishuman,understood,Mushmush?"`, //12 fun
  `"Have you ever given anyone a pocket shroom 
  before? I feel like this is kinda big for you..."`, //13 amy
  `"Hm,nowthatIthinkaboutit,no. No,Ihavenotevergiven
  someoneoneofmypreciousesbefore."`, //14 fung
  `"Hehe, I think you like me. Don't you?"`, //15 amy
  `"Tobeblunt,yes.Inyourhumanwords,Idolikeyou."`, //16 fung
  `"I don’t know how your people take this next 
  step, but, would you wanna go out again sometime?"`, //17 amy
  `"We’realreadyout,arewenot?"`, //18 fun
  `"No, shroom-for-brains, like on a date?"`, //19 amy
  `"Morehumanmannerisms,hm?Alrightfine,
  weshalldatethen."`, //20 fun

  `From then on a mushy lovestory sprouted for 
  Amy and Fun Gus. Play again to see 
  the other endings. Part 2 coming in 2030 maybe ~ `, //21 narr
];

let names5_fungus1 = [
  "Narrator", //0
  "Gunther", //1
  "Sir Rancid", //2
  "Fun Gus", //3
  "Amy", //4
  "Fun Gus", //5
  "Amy", //6
  "Fun Gus", //7
  "Amy", //8
  "Fun Gus", //9
  "Amy", //10
  "Narrator", //11
  "Fun Gus", //12
  "Amy", //13
  "Fun Gus", //14
  "Amy", //15
  "Fun Gus", //16
  "Amy", //17
  "Fungus", //18
  "Amy", //19
  "Fun Gus", //20
  "Narrator", //21
];

//fun gus  love points are lower than 35

let index5_fungus2 = 0;

let dialogue5_fungus2 = [
  `Amy chooses to serve the her favorite monster, Fun Gus.`, //0 narr
  `"So that's who she's chosen..."`, //1 Gunther
  `"Oh, she's breakin' my heart...`, // 2 Sir Rancid

  `"Whereismyorder,Moblass?"`, //3 fun

  `"It’s right here, jeez."`, //4amy

  `"She’scuttingintomyscrolltime,Shroomy."`, //5 fung

  `"Who are you talking to, Fun Gus?"`, //6 amy

  `"Mypocketshroomsofcourse!"`, //7 fun

  `"Your what? You carry around little yous in 
  your pocket? Do you not have any like, real 
  friends to talk to?"`, //8 amy

  `"Youdareinsultmeandmyshroomfriends? TothinkIevenshared
  theirpresencewithyou!Attackher,myminions! 
  I’mnotafraidtogobacktoprison!"`, //9 fun

  `*Fun Gus throws his pocket shrooms at Amy 
  and promptly leaves. They spore cloud her into a coma.*
  Play again to see the other endings. Part 2 
  coming in 2030 maybe ~ `, //10 narr
];

let names5_fungus2 = [
  "Narrator", //0
  "Gunther", //1
  "Sir Rancid", //2
  "Fun Gus", //3
  "Amy", //4
  "Fun Gus", //5
  "Amy", //6
  "Fun Gus", //7
  "Amy", //8
  "Fun Gus", //9
  "Narrator", //10
];

//choice 5 rancid good above 36
let index5_rancid1 = 0;

let dialogue5_rancid1 = [
  `Amy chooses to serve the her favorite monster, 
  Sir Rancid. `, //0 narr
  `"So that's who she's chosen..."`, //1 Gunther
  `"Quitethedisappointment...`, // 2 fung

  `"Hey, sweet cheeks, how’s it hangin’?"`, //3 ran

  `"Gonna hang up my apron after I give you 
  tonight’s order. I’m so tired!"`, //4amy

  `"That sounds like a good idea, you’re always 
  taking care of us around here everyday, you 
  deserve some rest too, hun."`, //5 ranc

  `"Yeah, you got any plans tonight? Any more graves 
 need your special attention?"`, //6 amy

  `"Nah, not tonight, decided on taking it 
  easy tonight as well. Why? Are you trying to 
  invite me to your evening plans?"`, //7 ranc

  `"I guess, maybe? Would you be interested?"`, //8 amy

  `"Depends, what were you thinking?"`, //9 ranc
  `" I might want to give some recipes from home a 
try, if I can remember how to make anything from my 
world, that is."`, //10 amy
  `"Sounds like I’m eating well tonight! I’m sure 
it’s gonna be great! Everything you make is great!"`, //11 ranc
  `"Aw, you’re just saying that, I basically died 
because my food was so bad. That’s how I got here 
in the first place!"`, //12 amy
  `"I think you were meant to be here instead. To be 
 with us, where we can appreciate you and your 
 creations. Or at least, maybe, be with me?"`, //13 ranc
  `"You know what? I think you’re right, Sir Rancid, 
 at least I’d like to think so."`, //14 amy
  `"Oh, I know so, darlin’. Now, come on, let’s go, I 
 want to try everything!"`, // 15 ranc

  `From then on, the layers of Sir Rancid and 
  Amy's love begin to peel open like an onion.
  Each one stinkier, yet sweeter than the last. 
  Play again to see the other endings. Part 2 
  coming in 2030 maybe ~ `, //16 narr
];

let names5_rancid1 = [
  "Narrator", //0
  "Gunther", //1
  "Fun Gus", //2
  "Sir Rancid", //3
  "Amy", //4
  "Sir Rancid", //5
  "Amy", //6
  "Sir Rancid", //7
  "Amy", //8
  "Sir Rancid", //9
  "Amy", //10
  "Sir Rancid", //11
  "Amy", //12
  "Sir Rancid", //13
  "Amy", //14
  "Sir Rancid", //15
  "Narrator", //16
];

//choice 5 rancid bad below 35
let index5_rancid2 = 0;

let dialogue5_rancid2 = [
  `Amy chooses to serve her favorite monster, 
  Sir Rancid. `, //0 narr
  `"So that's who she's chosen..."`, //1 Gunther
  `"Quitethedisappointment...`, // 2 fung

  `"Come on, lass, I’m super dead and not as slow 
  as you."`, //3 ran

  `"I’m going as fast as I can, dude! Did you not 
  see all the creatures in here before you?"`, //4amy

  `"If they’re not paying me, I don’t pay them any mind."`, //5 ranc

  `"Of course, you don’t. Do you not have any more 
 working brain cells up there in that rotting 
 brain of yours, huh?"`, //6 amy

  `"Ya know, I know no one requested my services 
  tonight, but I think I can make myself a job 
  right now."`, //7 ranc

  `"What do you mean? Whose grave are you grabbing now?"`, //8 amy

  `"Yours. You said my brain wasn’t working and 
  maybe you’re right, I think I need a new one."`, //9 ranc

  `*Sir Rancid jumps up towards Amy moaning for 
  ‘Braaaaaaaiiins’. Amy runs into the back of the 
  restaurant and Sir Rancid brushes off his jacket 
  and swiftly leaves the Cafe.* Play again to see 
  the other endings. Part 2 coming in 2030 maybe ~ `, //10 narr
];

let names5_rancid2 = [
  "Narrator", //0
  "Gunther", //1
  "Fun Gus", //2
  "Sir Rancid", //3
  "Amy", //4
  "Sir Rancid", //5
  "Amy", //6
  "Sir Rancid", //7
  "Amy", //8
  "Sir Rancid", //9
  "Narrator", //10
];

//choice 5 gunther good above 36
let index5_gunther1 = 0;

let dialogue5_gunther1 = [
  `Amy doesn't pick, but instead musters the 
strength to serve both, despite how tired she was. 
Gunther was impressed by this.`, //0 narr
  `"Always the sweetest thing on the menu. See you 
tomorrow, hun."`, //1 ranc
  `"Iamsatisfied. Iwillcomebacktomorrowformore.`, // 2 fung

  `"Hey! There’s my pet!"`, //3 gun

  `"Dude, not today, ok? It’s been really long 
  and I’m not in the mood."`, //4amy

  `"Wait, what? Aw c’mon, I didn’t mean it in a 
  bad way, I was still joking from earlier! 
  I’m sorry.."`, //5 gun

  `"It’s alright, Gunther, I know. Just pick another 
 name for right now, ok?"`, //6 amy

  `"Oh, ok. Well, then what about Wife?"`, //7 gun

  `"Did you just inadvertently ask me to 
  marry you?"`, //8 amy

  `"I mean, totally! Why not? You live here already, 
  we share my family business, the customers 
  love you and you fit right in! Plus.. I really 
like having you around.`, //9 gun

  `"I actually don’t know what to say. I didn’t know 
you thought about me like that."`, //10 amy

  `"How can I not? Life’s been way more fun ever 
since you got here. It’s a no-brainer!"`, //11 gun

  `"I guess I am here for the rest of my questionable life. 
And I do actually really like it here. And.. I also agree with that 
idea, my time spent here has made me way happier than I was 
in my own world. I don’t think I’d want to go back, even 
 if that were possible."`, //12 amy

  `"That’s my Moblass. Thank you for trying to 
 steal my vegetables that day."`, //13 gun
  `"Haha, it was my pleasure."`, //14 amy

  `From then on, the Monster Cafe continued 
  to grow with the love that Gunther and Amy shared.
   Play again to see the other endings. 
   Part 2 coming in 2030 maybe ~ `, //15 narr
];

let names5_gunther1 = [
  "Narrator", //0
  "Sir Rancid", //1
  "Fun Gus", //2
  "Gunther", //3
  "Amy", //4
  "Gunther", //5
  "Amy", //6
  "Gunther", //7
  "Amy", //8
  "Gunther", //9
  "Amy", //10
  "Gunther", //11
  "Amy", //12
  "Gunther", //13
  "Amy", //14
  "Narrator", //15
];

//choice 5 gunther bad below 36
let index5_gunther2 = 0;

let dialogue5_gunther2 = [
  `Amy doesn't pick, but instead musters the 
strength to serve both, despite how tired she was. 
Gunther was impressed by this.`, //0 narr
  `"Always the sweetest thing on the menu. See you 
tomorrow, hun."`, //1 ranc
  `"Iamsatisfied. Iwillcomebacktomorrowformore."`, // 2 fung

  `"Finally, time for bed."`, //3 amy

  `"Hey, pet~ Don’t forget to clean up before you 
  go to bed! The place is a mess!"`, //4 gun

  `"Or, or, you could get off your butt and clean 
  because unlike you, I’ve been cooking and serving 
  people all day."`, //5 amy

  `"Yeeaaah, but you’re like, good at it, though. 
 And I don’t wanna. So, technically, 
 you made the mess. So, you gotta clean it."
`, //6 amy

  `"Excuse me? This is your business! Shouldn’t 
  you do some of the work around here, too?"`, //7 gun

  `"Nah, that’s why I have you! Remember, 
  you owe me!~"`, //8 gun

  `"So, what? Am I just enslaved to you forever?"`, //9 amy

  `"You know it, baby!"`, //10 gun

  `From then on, Amy continued to work for 
  Monster Cafe, as Gunther's lackey. She 
  prayed for another truck to one day drive her 
  way...Play again to see the other endings. 
  Part 2 coming in 2030 maybe ~ `, //11 narr
];

let names5_gunther2 = [
  "Narrator", //0
  "Sir Rancid", //1
  "Fun Gus", //2
  "Amy", //3
  "Gunther", //4
  "Amy", //5
  "Gunther", //6
  "Amy", //7
  "Gunther", //8
  "Amy", //9
  "Gunther", //10
  "Narrator", //11
];

function preload() {
  
  monster = loadImage("assets/MCtitlescreen.png");
  //backgrounds
  bg1 = loadImage("assets/citybg.jpg");
  bg2 = loadImage("assets/truckkun.jpg");
  bg3 = loadImage("assets/cafenight.png");
  bg4 = loadImage("assets/bedroom.jpg");
  bg5 = loadImage("assets/cafeday.jpg");
  bg6 = loadImage("assets/forestnight.PNG");
  bg7 = loadImage("assets/cafenight.png");
  bg8 = loadImage("assets/fungalforest.jpg");
  bg9 = loadImage("assets/citynight.jpg");

  text_box = loadImage("assets/text_box.png");
  name_tag = loadImage("assets/name_tag.png");
  dialogue_choice = loadImage("assets/dialogue_choice.png");

  //Amy

  wamy1 = loadImage("assets/amy/wc_amy_normal.png");
  wamy2 = loadImage("assets/amy/wc_amy_angry.png");
  wamy3 = loadImage("assets/amy/wc_amy_flustered.png");
  wamy4 = loadImage("assets/amy/wc_amy_nervous.png");
  wamy5 = loadImage("assets/amy/wc_amy_happy.png");
  wamy6 = loadImage("assets/amy/wc_amy_sad.png");
  wamy7 = loadImage("assets/amy/wc_amy_surprised.png");
  wamy8 = loadImage("assets/amy/wc_amy_sigh.png");
  wamy9 = loadImage("assets/amy/wc_amy_unwell.png");

  amy1 = loadImage("assets/amy/amy_normal.png");
  amy2 = loadImage("assets/amy/amy_angry.png");
  amy3 = loadImage("assets/amy/amy_flustered.png");
  amy4 = loadImage("assets/amy/amy_nervous.png");
  amy5 = loadImage("assets/amy/amy_happy.png");
  amy6 = loadImage("assets/amy/amy_sad.png");
  amy7 = loadImage("assets/amy/amy_surprised.png");
  amy8 = loadImage("assets/amy/amy_sigh.png");
  amy9 = loadImage("assets/amy/amy_unwell.png");

  //Gunther

  monster1 = loadImage("assets/Gunther/Gunther_normal.png");
  monster2 = loadImage("assets/Gunther/Gunther_angry.png");
  monster3 = loadImage("assets/Gunther/Gunther_pumped.png");
  monster4 = loadImage("assets/Gunther/Gunther_silly.png");
  monster5 = loadImage("assets/Gunther/Gunther_sad.png");
  monster6 = loadImage("assets/Gunther/Gunther_surprised.png");
  monster7 = loadImage("assets/Gunther/Gunther_thinking.png");
  monster8 = loadImage("assets/Gunther/Gunther_hungover.png");
  monster9 = loadImage("assets/Gunther/Gunther_happy.png");

  gunthermini1 = loadImage("assets/Gunther/Gunther_mini.png");
  gunthermini2 = loadImage("assets/Gunther/Gunther_mini2.png");

  //Fun Gus

  fungus1 = loadImage("assets/fungus/fungus_normal.png");
  fungus2 = loadImage("assets/fungus/fungus_happy.png");
  fungus3 = loadImage("assets/fungus/fungus_angry.png");
  fungus4 = loadImage("assets/fungus/fungus_worried.png");
  fungus5 = loadImage("assets/fungus/fungus_pout.png");
  fungus6 = loadImage("assets/fungus/fungus_nervous.png");
  fungus7 = loadImage("assets/fungus/fungus_thinking.png");
  fungus8 = loadImage("assets/fungus/fungus_smug.png");

  // Sir Rancid

  rancid1 = loadImage("assets/rancid/rancid_normal.png");
  rancid2 = loadImage("assets/rancid/rancid_happy.png");
  rancid3 = loadImage("assets/rancid/rancid_angry.png");
  rancid4 = loadImage("assets/rancid/rancid_surprised.png");
  rancid5 = loadImage("assets/rancid/rancid_disappointed.png");
  rancid6 = loadImage("assets/rancid/rancid_yelling.png");
  rancid7 = loadImage("assets/rancid/rancid_flirting.png");

  // cooking

  cupcakebase = loadImage("assets/cook/cupcake_base.png");
  cupcakefrosted = loadImage("assets/cook/cupcake_frosted.png");
  cupcakefinished = loadImage("assets/cook/cupcake_finished.png");

  frost = loadImage("assets/cook/frosting.png");
  frog = loadImage("assets/cook/frogleg.png");

  rawMeat = loadImage("assets/cook/raw_meat.png");
  choppedMeat1 = loadImage("assets/cook/chopped_meat1.png");
  choppedMeat2 = loadImage("assets/cook/chopped_meat2.png");
  choppedMeat3 = loadImage("assets/cook/chopped_meat3.png");
  cookMeat1 = loadImage("assets/cook/cook_meat1.png");
  cookMeat2 = loadImage("assets/cook/cook_meat2.png");
  cookMeat3 = loadImage("assets/cook/cook_meat3.png");
  frypan = loadImage("assets/cook/frypan.png");
  sugarTop = loadImage("assets/cook/sugar.png");
  inkTop = loadImage("assets/cook/squid_ink.png");
  coffee = loadImage("assets/cook/Coffee.png");
  coffeeSugar = loadImage("assets/cook/coffee_sugar.png");
  coffeeFinished = loadImage("assets/cook/coffee_finished.png");
  knife = loadImage("assets/cook/chop.png");
  hammer = loadImage("assets/cook/hammer.png");

  trash = loadImage("assets/cook/trash.png");
  next = loadImage("assets/cook/next.png");
  finishorder = loadImage("assets/cook/finish_order.png");

  //musica

  titlebgm = loadSound("assets/music/Track 1.mp3");
  introbgm = loadSound("assets/music/opening(story of seasons).mp3");
  forestbgm = loadSound("assets/music/Track 2.mp3");
  scaredbgm = loadSound("assets/music/scared.mp3");
  cafebgm = loadSound(
    "assets/music/A Nervous Love - Harvest Moon_ A Wonderful Life OST.mp3"
  );
  guntherbgm = loadSound("assets/music/Track 4 Twinkle.mp3");
  fungusbgm = loadSound("assets/music/Track 6.mp3");
  rancidbgm = loadSound("assets/music/Track 7.mp3");
  cookingbgm = loadSound("assets/music/Track 8.mp3");
  badsfx = loadSound("assets/music/Oh No Fail.mp3");
  goodsfx = loadSound("assets/music/Win.mp3");
  chopsfx = loadSound("assets/music/Cutting Sounds.mp3");
  dingsfx = loadSound("assets/music/Ding.mp3");
  isekaisfx = loadSound("assets/music/Sad Noise.mp3");
  chopsfx = loadSound("assets/music/Cutting Sounds.mp3");
  sizzlesfx = loadSound(
    "assets/music/Minecraft Creeper Pre-Explosion Sound Effect.mp3"
  );
}

function setup() {
  createCanvas(1200, 850);

  outputVolume(0.2); //lowering audio a bit, could play around with that
 

  fungusBar = new LoveBar("Fun Gus", 20, 20);
  rancidBar = new LoveBar("Rancid", 20, 60);
  guntherBar = new LoveBar("Gunther", 20, 100);
}

function draw() {
  background(69);
  console.log(state);

  if (state === "title") {
    title();
  } else if (state == "opening") {
    opening();
  } else if (state == "d1open") {
    d1open();
  } else if (state == "d1talk") {
    d1talk();
  } else if (state == "d1leave") {
    d1leave();
  } else if (state == "d1second") {
    d1second();
  } else if (state == "d1third") {
    d1third();
  } else if (state == "d1end") {
    d1end();
  } else if (state == "d2open") {
    d2open();
  } else if (state == "d2talk") {
    d2talk();
  } else if (state == "d2leave") {
    d2leave();
  } else if (state == "d2first") {
    d2first();
  } else if (state == "d2second") {
    d2second();
  } else if (state == "d2third") {
    d2third();
  } else if (state == "d3open") {
    d3open();
  } else if (state == "d3monster1") {
    d3monster1();
  } else if (state == "d3monster2") {
    d3monster2();
  } else if (state == "d3monster3") {
    d3monster3();
  } else if (state == "d3monster4") {
    d3monster4();
  } else if (state == "d3monster5") {
    d3monster5();
  } else if (state == "d3monster6") {
    d3monster6();
  } else if (state == "d3rancid") {
    d3rancid();
  } else if (state == "d3fungus") {
    d3fungus();
  } else if (state == "d3fungus1") {
    d3fungus1();
  } else if (state == "d3fungus2") {
    d3fungus2();
  } else if (state == "d3rancid") {
    d3rancid();
  } else if (state == "d3rancid1") {
    d3rancid1();
  } else if (state == "d3rancid2") {
    d3rancid2();
  } else if (state == "d3rancid3") {
    d3rancid3();
  } else if (state == "cupcake") {
    cupcake();
  } else if (state == "coffeeBrew") {
    coffeeBrew();
  } else if (state == "coffeeTop") {
    coffeeTop();
  } else if (state === "beatMeat") {
    beatMeat();
  } else if (state === "chopMeat") {
    chopMeat();
  } else if (state === "cookMeat") {
    cookMeat();
  } else if (state == "d3fungus2_first") {
    d3fungus2_first();
  } else if (state == "d3fungus2_second") {
    d3fungus2_second();
  } else if (state == "d3fungus3") {
    d3fungus3();
  } else if (state == "d4open") {
    d4open();
  } else if (state == "d4gunther") {
    d4gunther();
  } else if (state == "d4gunther1") {
    d4gunther1();
  } else if (state == "d4gunther2") {
    d4gunther2();
  } else if (state == "d4end") {
    d4end();
  } else if (state == "d5open") {
    d5open();
  } else if (state == "d5fungus1") {
    d5fungus1();
  } else if (state == "d5fungus2") {
    d5fungus2();
  } else if (state == "d5rancid1") {
    d5rancid1();
  } else if (state == "d5rancid2") {
    d5rancid2();
  } else if (state == "d5gunther1") {
    d5gunther1();
  } else if (state == "d5gunther2") {
    d5gunther2();
  } else if (state == "fungusserve") {
    fungusserve();
  } else if (state == "rancidserve") {
    rancidserve();
  }

  // draw love bars could draw later when meeting love interest in that game state
  fungusBar.draw();
  rancidBar.draw();
  guntherBar.draw();
}

function title() {
  image(monster, 0, 0, 1200, 850);

  
reset();


  if (!titlebgm.isPlaying()) {
    titlebgm.play();
  }

  push();
  textSize(80);
  textAlign(CENTER);
  fill(67);
  stroke(255, 223, 0);
  strokeWeight(1);
  //text("Monster Cafe", width / 2, height / 2);
  pop();

  //old start text, replaced witth button
  //push();
  //fill(32);
  //textSize(55);
  //textAlign(CENTER);
  //text("Press Start", width / 2, height / 2 + 200);

  //pop();

  push();
  //button
  // button properties
  let x = 500,
    y = 620,
    w = 250,
    h = 80,
    r = 20;
  // detect hover
  let hovering = mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;

  // style changes on hover
  if (hovering) fill(191, 64, 191);
  else fill(112, 41, 99);
  if (hovering) cursor(HAND);
  else cursor(ARROW);

  stroke(255);
  strokeWeight(4);
  rect(x, y, w, h, r);
  noStroke();
  fill(255);
  textSize(50);
  textAlign(CENTER, CENTER);
  text("Start!", x + w / 2, y + h / 2);

  pop();

  //press start and change cursor
  if (
    mouseX >= 500 &&
    mouseX <= 745 &&
    mouseY >= 625 &&
    mouseY <= 700 &&
    mouseIsPressed == true
  ) {
    state = "opening";
    titlebgm.stop();
    introbgm.play();
    //add a sound for clicking title
    cursor(ARROW);
  }
} ////////////////////////

function opening() {
  background(0);

  //could add another track for when isekai'd or car honk sound
  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

  //Background Images
  if (index < 3) {
    image(bg1, 0, 0, 1200, 850); //city
  }

  if (index > 2 && index < 5) {
    image(bg2, 0, 0, 1200, 850); //truck
  }

  //tint affect
  if (index > 4 && index <= 30) {
    image(bg6, 0, 0, 1200, 850); //forest
  } else if (index > 30 && index <= 33) {
    push();
    tint(60);
    image(bg6, 0, 0, 1200, 850); //forest
    pop();
  } else noTint();

  //portraits

  if (index < 3) {
    image(wamy2, 370, -50, 400, 600);
  } else if (index === 4) {
    image(wamy7, 370, -50, 400, 600);
  } else if (index > 5 && index < 8) {
    image(wamy7, 370, -50, 400, 600);
  } else if (index === 9) {
    image(wamy4, 370, -50, 400, 600);
  } else if (index === 12) {
    image(monster2, 450, -50, 400, 600);
  } else if (index > 13 && index < 16) {
    image(wamy4, 370, -50, 400, 600);
  } else if (index === 17) {
    image(monster6, 450, -50, 400, 600);
  } else if (index === 18) {
    image(wamy3, 370, -50, 400, 600);
  } else if (index > 18 && index < 20) {
    image(monster7, 450, -50, 400, 600);
  } else if (index === 21) {
    image(monster9, 450, -50, 400, 600);
  } else if (index === 22) {
    image(wamy7, 370, -50, 400, 600);
  } else if (index === 23) {
    image(monster9, 450, -50, 400, 600);
  } else if (index === 24) {
    image(wamy4, 370, -50, 400, 600);
  } else if (index === 25) {
    image(monster9, 450, -50, 400, 600);
  } else if (index === 26) {
    image(wamy3, 370, -50, 400, 600);
  } else if (index === 27) {
    image(monster6, 450, -50, 400, 600);
  } else if (index === 28) {
    image(wamy3, 370, -50, 400, 600);
  } else if (index === 29) {
    image(monster3, 450, -50, 400, 600);
  } else if (index === 30) {
    image(wamy5, 370, -50, 400, 600);
  }

  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(dialogue[index], 600, 625);
  text(names[index], 600, 540);

  //highlight and cursor change, index press
  if (index === 31) {
    push();

    if (mouseX >= 1050 && mouseX <= 1130 && mouseY >= 720 && mouseY <= 800) {
      push();

      image(next, 1050, 740, 80, 80);
      pop();
      cursor(HAND);
    } else {
      push();
      tint(70);
      image(next, 1050, 740, 80, 80);
      pop();
      cursor(ARROW);
    } ///////////////////////////////////

    if (
      mouseX >= 1050 &&
      mouseX <= 1130 &&
      mouseY >= 720 &&
      mouseY <= 900 &&
      mouseIsPressed
    ) {
      state = "d1open";
    }
  }
  pop();

  //console.log(mouseX, mouseY);
} //////////////////

function d1open() {
  push();
    background(12, 124, 100);
  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

  cursor(ARROW);
  //Background Images

  if (index1 === 0) {
    image(bg4, 0, 0, 1200, 850);
  } else if (index1 > 0 <= 38) {
    image(bg5, 0, 0, 1200, 850);
  }

  //portraits

  if (index1 === 0) {
    image(amy8, 370, -50, 400, 600);
  } else if (index1 === 1) {
    image(monster1, 450, -50, 400, 600);
  }
  if (index1 === 2) {
    image(amy2, 370, -50, 400, 600);
  } else if (index1 === 3) {
    image(monster7, 450, -50, 400, 600);
  }
  if (index1 === 4) {
    image(amy8, 370, -50, 400, 600);
  } else if (index1 === 5) {
    image(monster9, 450, -50, 400, 600);
  }
  if (index1 === 6) {
    image(amy2, 370, -50, 400, 600);
  } else if (index1 === 7) {
    image(monster7, 450, -50, 400, 600);
  }
  if (index1 === 8) {
    image(amy3, 370, -50, 400, 600);
  } else if (index1 === 9) {
    image(monster1, 450, -50, 400, 600);
  } else if (index1 === 10) {
    image(fungus1, 350, -50, 400, 600);
  } else if (index1 === 11) {
    image(fungus2, 350, -50, 400, 600);
  } else if (index1 === 12) {
    image(amy4, 370, -50, 400, 600);
  } else if (index1 === 13) {
    image(fungus3, 350, -50, 400, 600);
  } else if (index1 === 14) {
    image(amy2, 370, -50, 400, 600);
  } else if (index1 === 15) {
    image(fungus1, 350, -50, 400, 600);
  } else if (index1 === 16) {
    image(amy3, 370, -50, 400, 600);
  }

  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(dialogue1[index1], 600, 625);
  text(names1[index1], 600, 540);
  pop();

  if (index1 === 16) {
    push();

    if (mouseX >= 1050 && mouseX <= 1190 && mouseY >= 720 && mouseY <= 800) {
      push();
      image(next, 1100, 740, 80, 80);
      pop();
      cursor(HAND);
    } else {
      push();
      tint(70);
      image(next, 1100, 740, 80, 80);
      pop();
      cursor(ARROW);
    }
    if (
      mouseX >= 1050 &&
      mouseX <= 1190 &&
      mouseY >= 720 &&
      mouseY <= 900 &&
      mouseIsPressed
    ) {
      state = "cupcake";

      fungusbgm.stop();

      if (!cookingbgm.isPlaying()) {
        cookingbgm.play();
      }
    }
  }
  pop()
;} //////////////////

function d1talk() {
  background(69);

  cafebgm.stop();
  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

  //Background Images

  if (index1_talk <= 9) {
    image(bg5, 0, 0, 1200, 850);
  }

  //portraits

  if (index1_talk === 0) {
    image(amy4, 370, -50, 400, 600);
  } else if (index1_talk === 1) {
    image(fungus5, 350, -50, 400, 600);
  } else if (index1_talk === 2) {
    image(amy8, 370, -50, 400, 600);
  } else if (index1_talk > 2 && index1_talk < 5) {
    image(fungus1, 350, -50, 400, 600);
  } else if (index1_talk === 5) {
    image(amy4, 370, -50, 400, 600);
  } else if (index1_talk === 6) {
    image(fungus3, 350, -50, 400, 600);
  } else if (index1_talk === 7) {
    image(amy3, 370, -50, 400, 600);
  } else if (index1_talk === 8) {
    image(fungus8, 350, -50, 400, 600);
  } else if (index1_talk === 9) {
    image(amy1, 370, -50, 400, 600);
  }

  if (index1 > 2) {
    fungusBar.show();
  }

  if (!fungusbgm.isPlaying()) {
    fungusbgm.play();
  }

  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names1_talk[index1_talk], 600, 540);
  text(dialogue1_talk[index1_talk], 600, 625);
  pop();

  //choices

  push();
  textSize(30);
  textAlign(CENTER);
  if (index1_talk === 9) {
    image(dialogue_choice, 50, 650, 540, 100);
    image(dialogue_choice, 620, 650, 540, 100);
    fill(0);

    text(`"You know, you talk pretty funny."`, 320, 710);
    text(`"Do all mushrooms talk like this?"`, 870, 710);
    if (
      mouseX >= 50 &&
      mouseX <= 590 &&
      mouseY >= 650 &&
      mouseY <= 750 &&
      mouseIsPressed
    ) {
      state = "d1second";
      fungusBar.add(10);
    } else if (
      mouseX >= 620 &&
      mouseX <= 1160 &&
      mouseY >= 650 &&
      mouseY <= 750 &&
      mouseIsPressed
    ) {
      state = "d1third";
      fungusBar.add(20);
    }
  }
  pop();
} //////////////////

function d1leave() {
  //keep playing fungus music until next scene
  background(69);

  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

  //Background Images

  if (index1_leave <= 1) {
    image(bg5, 0, 0, 1200, 850);
  }

  //portraits

  if (index1_leave === 0) {
    image(fungus8, 350, -50, 400, 600);
  } else if (index1_leave === 1) {
    image(amy7, 370, -50, 400, 600);
  }

  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names1_leave[index1_leave], 600, 540);
  text(dialogue1_leave[index1_leave], 600, 625);
  pop();

  if (index1_leave === 2) {
    state = "d1end";
    fungusbgm.stop();
    cafebgm.play();
  }
} //////////////////

function d1second() {
  //keep playing fungus music until next scene
  background(69);

  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

  //Background Images

  if (index1_second <= 18) {
    image(bg5, 0, 0, 1200, 850);
  } else if (index1_second <= 20) {
    push();
    tint(60);
    image(bg5, 0, 0, 1200, 850);
    pop();
  } else noTint();

  //portraits

  if (index1_second === 0) {
    image(amy1, 370, -50, 400, 600);
  } else if (index1_second === 1) {
    image(fungus3, 350, -50, 400, 600);
  } else if (index1_second === 2) {
    image(amy4, 370, -50, 400, 600);
  } else if (index1_second === 3) {
    image(fungus8, 350, -50, 400, 600);
  } else if (index1_second === 4) {
    image(amy4, 370, -50, 400, 600);
  } else if (index1_second === 5) {
    image(fungus8, 350, -50, 400, 600);
  } else if (index1_second === 6) {
    image(amy8, 370, -50, 400, 600);
  } else if (index1_second === 7) {
    image(fungus8, 350, -50, 400, 600);
  } else if (index1_second === 8) {
    image(amy2, 370, -50, 400, 600);
  } else if (index1_second === 9) {
    image(fungus6, 350, -50, 400, 600);
  } else if (index1_second === 10) {
    image(amy2, 370, -50, 400, 600);
  } else if (index1_second === 11) {
    image(fungus2, 350, -50, 400, 600);
  } else if (index1_second === 12) {
    image(amy8, 370, -50, 400, 600);
  } else if (index1_second === 13) {
    image(fungus2, 350, -50, 400, 600);
  } else if (index1_second === 14) {
    image(amy2, 370, -50, 400, 600);
  } else if (index1_second === 15) {
    image(fungus8, 350, -50, 400, 600);
  } else if (index1_second === 16) {
    image(amy2, 370, -50, 400, 600);
  } else if (index1_second === 17) {
    image(amy2, 370, -50, 400, 600);
  } else if (index1_second === 18) {
    image(fungus4, 350, -50, 400, 600);
  }

  fungusBar.show();

  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names1_second[index1_second], 600, 540);
  text(dialogue1_second[index1_second], 600, 625);
  if (index1_second === 19) {
    push();

    if (mouseX >= 1050 && mouseX <= 1130 && mouseY >= 720 && mouseY <= 800) {
      push();

      image(next, 1050, 740, 80, 80);
      pop();
      cursor(HAND);
    } else {
      push();
      tint(70);
      image(next, 1050, 740, 80, 80);
      pop();
      cursor(ARROW);
    }

    if (
      mouseX >= 1050 &&
      mouseX <= 1130 &&
      mouseY >= 720 &&
      mouseY <= 900 &&
      mouseIsPressed
    ) {
      if (index1_second === 19) {
        state = "d1end";
        fungusbgm.stop();
      }
    }

    pop();
  }
} //////////////////
function d1third() {
  //keep playing fungus music until next scene

  background(69);

  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

  //Background Images

  if (index1_third <= 12) {
    image(bg5, 0, 0, 1200, 850);
  } else if (index1_talk <= 13) {
    push();
    tint(60);
    image(bg5, 0, 0, 1200, 850);
    pop();
  } else noTint();

  //portraits

  if (index1_third === 0) {
    image(amy1, 370, -50, 400, 600);
  } else if (index1_third === 1) {
    image(fungus3, 350, -50, 400, 600);
  } else if (index1_third === 2) {
    image(amy2, 370, -50, 400, 600);
  } else if (index1_third === 3) {
    image(fungus7, 350, -50, 400, 600);
  } else if (index1_third === 4) {
    image(fungus2, 350, -50, 400, 600);
  } else if (index1_third === 5) {
    image(amy2, 370, -50, 400, 600);
  } else if (index1_third === 6) {
    image(fungus2, 350, -50, 400, 600);
  } else if (index1_third === 7) {
    image(amy7, 370, -50, 400, 600);
  } else if (index1_third === 8) {
    image(fungus2, 350, -50, 400, 600);
  } else if (index1_third === 9) {
    image(amy9, 370, -50, 400, 600);
  } else if (index1_third === 10) {
    image(fungus8, 350, -50, 400, 600);
  } else if (index1_third === 11) {
    image(amy3, 370, -50, 400, 600);
  } else if (index1_third === 12) {
    image(fungus8, 350, -50, 400, 600);
  }

  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names1_third[index1_third], 600, 540);
  text(dialogue1_third[index1_third], 600, 625);
  if (index1_third === 13) {
    push();

    if (mouseX >= 1050 && mouseX <= 1130 && mouseY >= 720 && mouseY <= 800) {
      push();

      image(next, 1050, 740, 80, 80);
      pop();
      cursor(HAND);
    } else {
      push();
      tint(70);
      image(next, 1050, 740, 80, 80);
      pop();
      cursor(ARROW);
    }

    if (
      mouseX >= 1050 &&
      mouseX <= 1130 &&
      mouseY >= 720 &&
      mouseY <= 900 &&
      mouseIsPressed
    ) {
      if (index1_third === 13) {
        state = "d1end";
        fungusbgm.stop();
      }
    }
  }
  pop();
} //////////////////

function d1end() {
  background(69);

  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

  //Background Images

  if (index1_end <= 14) {
    image(bg3, 0, 0, 1200, 850);
  } else if (index1_end === 14) {
    push();
    tint(60);
    image(bg3, 0, 0, 1200, 850); //forest
    pop();
  } else noTint();

  //portraits

  if (index1_end === 1) {
    image(monster9, 450, -50, 400, 600);
  } else if (index1_end === 2) {
    image(amy8, 370, -50, 400, 600);
  } else if (index1_end === 3) {
    image(monster1, 450, -50, 400, 600);
  } else if (index1_end === 4) {
    image(amy2, 370, -50, 400, 600);
  } else if (index1_end === 5) {
    image(amy2, 370, -50, 400, 600);
  } else if (index1_end === 6) {
    image(monster7, 450, -50, 400, 600);
  } else if (index1_end === 7) {
    image(amy8, 370, -50, 400, 600);
  } else if (index1_end === 8) {
    image(monster1, 450, -50, 400, 600);
  } else if (index1_end === 9) {
    image(amy3, 370, -50, 400, 600);
  } else if (index1_end === 10) {
    image(monster4, 450, -50, 400, 600);
  } else if (index1_end === 11) {
    image(amy9, 370, -50, 400, 600);
  } else if (index1_end === 12) {
    image(amy8, 370, -50, 400, 600);
  } else if (index1_end === 14) {
    image(monster8, 450, -50, 400, 600);
  }

  fungusBar.hide();

  if (!cafebgm.isPlaying()) {
    cafebgm.play();
  }

  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names1_end[index1_end], 600, 540);
  text(dialogue1_end[index1_end], 600, 625);
  pop();

  //added a highlighted next button that only triggers when that hitbox is pressed and hovered over
  if (index1_end === 14) {
    push();

    if (mouseX >= 1050 && mouseX <= 1130 && mouseY >= 720 && mouseY <= 800) {
      push();

      image(next, 1050, 740, 80, 80);
      pop();
      cursor(HAND);
    } else {
      push();
      tint(70);
      image(next, 1050, 740, 80, 80);
      pop();
      cursor(ARROW);
    }
    if (
      mouseX >= 1050 &&
      mouseX <= 1130 &&
      mouseY >= 720 &&
      mouseY <= 900 &&
      mouseIsPressed
    ) {
      state = "d2open";
      //cafebgm.play();
    }
  }
} //////////////////

function d2open() {
  background(69);
cafebgm.stop()
;  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

  //Background Images

  if (index2_open <= 20) {
    image(bg5, 0, 0, 1200, 850);
  }

  //portraits

  if (index2_open === 1) {
    image(amy8, 370, -50, 400, 600);
  } else if (index2_open === 2) {
    image(amy5, 370, -50, 400, 600);
  } else if (index2_open === 6) {
    image(rancid2, 350, -50, 400, 600);
  } else if (index2_open > 5 && index2_open < 7) {
    image(rancid7, 350, -50, 400, 600);
  } else if (index2_open === 7) {
    image(amy4, 370, -50, 400, 600);
  } else if (index2_open === 8) {
    image(rancid7, 350, -50, 400, 600);
  } else if (index2_open === 9) {
    image(amy3, 370, -50, 400, 600);
  } else if (index2_open === 10) {
    image(rancid3, 350, -50, 400, 600);
  } else if (index2_open === 11) {
    image(amy3, 370, -50, 400, 600);
  } else if (index2_open === 12) {
    image(rancid6, 350, -50, 400, 600);
  } else if (index2_open === 14) {
    image(rancid7, 350, -50, 400, 600);
  } else if (index2_open === 15) {
    image(amy4, 370, -50, 400, 600);
  } else if (index2_open === 16) {
    image(rancid2, 350, -50, 400, 600);
  } else if (index2_open === 17) {
    image(amy7, 370, -50, 400, 600);
  } else if (index2_open === 18) {
    image(rancid3, 350, -50, 400, 600);
  } else if (index2_open === 19) {
    image(rancid7, 350, -50, 400, 600);
  }

  if (index2_open > 11) {
    rancidBar.show();
  }

  if (!rancidbgm.isPlaying()) {
    rancidbgm.play(); //looping iffy
  }

  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names2_open[index2_open], 600, 540);
  text(dialogue2_open[index2_open], 600, 625);
  pop();

  if (index2_open === 20) {
    push();

    if (mouseX >= 1050 && mouseX <= 1130 && mouseY >= 720 && mouseY <= 800) {
      push();

      image(next, 1050, 740, 80, 80);
      pop();
      cursor(HAND);
    } else {
      push();
      tint(70);
      image(next, 1050, 740, 80, 80);
      pop();
      cursor(ARROW);
    } ///////////////////////////////////

    if (
      mouseX >= 1050 &&
      mouseX <= 1130 &&
      mouseY >= 720 &&
      mouseY <= 900 &&
      mouseIsPressed
    ) {
      state = "beatMeat";
      rancidBar.hide();
      cookingbgm.play();
      rancidbgm.stop();
    }
  }
} //////////////////

function d2talk() {
  background(69);
  cursor(ARROW);

  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

  //Background Images

  if (index2_talk <= 7) {
    image(bg5, 0, 0, 1200, 850);
  }

  //portraits

  if (index2_talk === 0) {
    image(amy5, 370, -50, 400, 600);
  } else if (index2_talk === 1) {
    image(rancid7, 350, -50, 400, 600);
  } else if (index2_talk === 2) {
    image(amy3, 370, -50, 400, 600);
  } else if (index2_talk === 3) {
    image(rancid7, 350, -50, 400, 600);
  } else if (index2_talk === 4) {
    image(amy1, 370, -50, 400, 600);
  } else if (index2_talk === 5) {
    image(amy6, 370, -50, 400, 600);
  } else if (index2_talk === 6) {
    image(rancid7, 350, -50, 400, 600);
  } else if (index2_talk === 7) {
    image(amy1, 370, -50, 400, 600);
  }

  rancidBar.show();
  if (!rancidbgm.isPlaying()) {
    rancidbgm.play();
  }

  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names2_talk[index2_talk], 600, 540);
  text(dialogue2_talk[index2_talk], 600, 625);
  pop();

  //choices

  push();
  textSize(30);
  textAlign(CENTER);
  if (index2_talk === 7) {
    image(dialogue_choice, 50, 650, 540, 100);
    image(dialogue_choice, 620, 650, 540, 100);
    text(`"Do you have any zombie family here?"`, 320, 710);
    text(`"How long do zombies live for?"`, 870, 710);
    if (
      mouseX >= 50 &&
      mouseX <= 590 &&
      mouseY >= 650 &&
      mouseY <= 750 &&
      mouseIsPressed
    ) {
      state = "d2second";
      rancidBar.add(10);
    } else if (
      mouseX >= 620 &&
      mouseX <= 1160 &&
      mouseY >= 650 &&
      mouseY <= 750 &&
      mouseIsPressed
    ) {
      state = "d2third";
      rancidBar.add(20);
    }
  }
  pop();
} //////////////////

function d2leave() {
  background(69);

  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

  //Background Images

  if (index2_leave <= 2) {
    image(bg5, 0, 0, 1200, 850);
  } else if (index >= 2) {
    push();
    tint(60);
    image(bg5, 0, 0, 1200, 850);
    pop();
  } else noTint();

  //portraits

  if (index2_leave === 0) {
    image(rancid2, 350, -50, 400, 600);
  } else if (index2_leave === 1) {
    image(amy3, 370, -50, 400, 600);
  }

  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names2_leave[index2_leave], 600, 540);
  text(dialogue2_leave[index2_leave], 600, 625);

  if (index2_leave === 2) {
    push();

    if (mouseX >= 1050 && mouseX <= 1130 && mouseY >= 720 && mouseY <= 800) {
      push();

      image(next, 1050, 740, 80, 80);
      pop();
      cursor(HAND);
    } else {
      push();
      tint(70);
      image(next, 1050, 740, 80, 80);
      pop();
      cursor(ARROW);
    }
    if (
      mouseX >= 1050 &&
      mouseX <= 1130 &&
      mouseY >= 720 &&
      mouseY <= 900 &&
      mouseIsPressed
    ) {
      if (!rancidbgm.isPlaying()) {
        rancidbgm.play();
        state = "d3open";
        cafebgm.play();
        rancidBar.hide();
        rancidbgm.stop();
      }
    }
  }
  pop();
}

function d2second() {
  background(69);

  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

  //Background Images

  if (index2_second <= 10) {
    image(bg5, 0, 0, 1200, 850);
  } else if (index2_second >= 11) {
    push();
    tint(60);
    image(bg5, 0, 0, 1200, 850);
    pop();
  } else noTint();
  //portraits

  if (index2_second === 0) {
    image(amy1, 370, -50, 400, 600);
  } else if (index2_second === 1) {
    image(rancid2, 350, -50, 400, 600);
  } else if (index2_second === 2) {
    image(amy4, 370, -50, 400, 600);
  } else if (index2_second === 3) {
    image(rancid1, 350, -50, 400, 600);
  } else if (index2_second === 4) {
    image(rancid1, 350, -50, 400, 600);
  } else if (index2_second === 5) {
    image(amy1, 370, -50, 400, 600);
  } else if (index2_second === 6) {
    image(rancid7, 350, -50, 400, 600);
  } else if (index2_second === 8) {
    image(rancid7, 350, -50, 400, 600);
  } else if (index2_second === 9) {
    image(amy8, 370, -50, 400, 600);
  } else if (index2_second === 10) {
    image(rancid7, 350, -50, 400, 600);
  }

  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names2_second[index2_second], 600, 540);
  text(dialogue2_second[index2_second], 600, 625);
  pop();

  if (index2_second === 11) {
    push();

    if (mouseX >= 1050 && mouseX <= 1190 && mouseY >= 720 && mouseY <= 800) {
      push();
      image(next, 1100, 740, 80, 80);
      pop();
      cursor(HAND);
    } else {
      push();
      tint(70);
      image(next, 1100, 740, 80, 80);
      pop();
      cursor(ARROW);
    }
    if (
      mouseX >= 1050 &&
      mouseX <= 1190 &&
      mouseY >= 720 &&
      mouseY <= 900 &&
      mouseIsPressed
    ) {
      if (index2_second === 11) {
        state = "d3open";
        rancidBar.hide();
        rancidbgm.stop();
        cafebgm.play();
      }
    }
    pop();
  }
} //////////////////

function d2third() {
  background(69);

  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();
  //Background Images
  if (index2_third <= 8) {
    image(bg5, 0, 0, 1200, 850);
  } else if (index2_third >= 9) {
    push();
    tint(60);
    image(bg5, 0, 0, 1200, 850);
    pop();
  } else noTint();

  //portraits

  if (index2_third === 0) {
    image(amy7, 370, -50, 400, 600);
  } else if (index2_third === 1) {
    image(rancid1, 350, -50, 400, 600);
  } else if (index2_third === 2) {
    image(amy7, 370, -50, 400, 600);
  } else if (index2_third === 3) {
    image(rancid1, 350, -50, 400, 600);
  } else if (index2_third === 4) {
    image(rancid1, 350, -50, 400, 600);
  } else if (index2_third === 5) {
    image(amy7, 370, -50, 400, 600);
  } else if (index2_third === 6) {
    image(rancid7, 350, -50, 400, 600);
  } else if (index2_third === 7) {
    image(amy8, 370, -50, 400, 600);
  } else if (index2_third === 8) {
    image(rancid7, 350, -50, 400, 600);
  }

  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names2_third[index2_third], 600, 540);
  text(dialogue2_third[index2_third], 600, 625);
  pop();
  if (index2_third === 9) {
    push();

    if (mouseX >= 1050 && mouseX <= 1130 && mouseY >= 720 && mouseY <= 800) {
      push();
      image(next, 1050, 740, 80, 80);
      pop();
      cursor(HAND);
    } else {
      push();
      tint(70);
      image(next, 1050, 740, 80, 80);
      pop();
      cursor(ARROW);
    }
    if (
      mouseX >= 1050 &&
      mouseX <= 1130 &&
      mouseY >= 720 &&
      mouseY <= 900 &&
      mouseIsPressed
    ) {
      if (index2_third === 9) {
        state = "d3open";
        rancidBar.hide();
        rancidbgm.stop();
        cafebgm.play();
      }
    }
    pop();
  }
} //////////////////

function d3open() {
  background(69);

  //can use these to test branches
  // fungusBar.value = 10;
  //rancidBar.value = 20;
  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

  //Background Images

  if (index3_open <= 7) {
    image(bg5, 0, 0, 1200, 850);
  }

  //portraits

  if (index3_open === 1) {
    image(amy6, 370, -50, 400, 600);
  } else if (index3_open === 3) {
    image(amy3, 370, -50, 400, 600);
  } else if (index3_open === 4) {
    image(monster9, 450, -50, 400, 600);
  } else if (index3_open === 5) {
    image(monster1, 450, -50, 400, 600);
  } else if (index3_open === 7) {
    image(amy9, 370, -50, 400, 600);
  }

  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names3_open[index3_open], 600, 540);
  text(dialogue3_open[index3_open], 600, 625);
  pop();

  //choices

  push();
  textSize(30);
  textAlign(CENTER);
  if (index3_open === 7) {
    image(dialogue_choice, 50, 590, 540, 100);
    image(dialogue_choice, 620, 590, 540, 100);
    image(dialogue_choice, 320, 710, 540, 100);
    fill(0);
    text(
      `Pick up the smelly rag 
and clean the counter`,
      320,
      630
    );
    text(
      `Change out the dirty water and 
get a fresher towel first, then clean`,
      890,
      630
    );
    text(`Don’t clean, it’s your day off.`, 600, 770);
    if (
      mouseX >= 50 &&
      mouseX <= 590 &&
      mouseY >= 590 &&
      mouseY <= 690 &&
      mouseIsPressed
    ) {
      state = "d3monster1";
      guntherBar.add(10);
      guntherBar.show();
      guntherbgm.play();
    } else if (
      mouseX >= 620 &&
      mouseX <= 1160 &&
      mouseY >= 590 &&
      mouseY <= 690 &&
      mouseIsPressed
    ) {
      state = "d3monster2";
      guntherBar.add(20);
      guntherBar.show();
      guntherbgm.play();
    } else if (
      mouseX >= 320 &&
      mouseX <= 860 &&
      mouseY >= 710 &&
      mouseY <= 810 &&
      mouseIsPressed
    ) {
      state = "d3monster3";
      guntherBar.add(-10);
      guntherBar.hide();
    }
  }
} //////////////////

function d3monster1() {
  background(69);

  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

  //Background Images

  if (index3_monster1 <= 8) {
    image(bg5, 0, 0, 1200, 850);
  }

  //portraits

  if (index3_monster1 === 0) {
    image(monster9, 450, -50, 400, 600);
  } else if (index3_monster1 === 1) {
    image(amy8, 370, -50, 400, 600);
  } else if (index3_monster1 === 2) {
    image(monster1, 450, -50, 400, 600);
  } else if (index3_monster1 === 3) {
    image(amy8, 370, -50, 400, 600);
  } else if (index3_monster1 === 4) {
    image(monster6, 450, -50, 400, 600);
  } else if (index3_monster1 === 5) {
    image(monster1, 450, -50, 400, 600);
  } else if (index3_monster1 === 6) {
    image(monster5, 450, -50, 400, 600);
  } else if (index3_monster1 === 8) {
    image(amy1, 370, -50, 400, 600);
  }

  if (!guntherbgm.isPlaying()) {
    guntherbgm.play(); //looping iffy
  }
  cafebgm.stop();

  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names3_monster1[index3_monster1], 600, 540);
  text(dialogue3_monster1[index3_monster1], 600, 625);
  pop();

  push();
  textSize(30);
  textAlign(CENTER);
  if (index3_monster1 === 8) {
    image(dialogue_choice, 50, 590, 540, 100);
    image(dialogue_choice, 620, 590, 540, 100);
    image(dialogue_choice, 320, 710, 540, 100);
    text(
      `"You’re the boss. 
Just add that to the menu."`,
      320,
      630
    );
    text(
      `"Maybe I could make 
it for you sometime."`,
      900,
      630
    );
    text(
      `"Making different recipes
complicates things. Stick to tradition."`,
      600,
      750
    );
    if (
      mouseX >= 50 &&
      mouseX <= 590 &&
      mouseY >= 590 &&
      mouseY <= 690 &&
      mouseIsPressed
    ) {
      state = "d3monster4";
      guntherBar.add(10);
    } else if (
      mouseX >= 620 &&
      mouseX <= 1160 &&
      mouseY >= 590 &&
      mouseY <= 690 &&
      mouseIsPressed
    ) {
      state = "d3monster5";
      guntherBar.add(20);
    } else if (
      mouseX >= 320 &&
      mouseX <= 860 &&
      mouseY >= 710 &&
      mouseY <= 810 &&
      mouseIsPressed
    ) {
      state = "d3monster6";
      guntherBar.add(5);
    }
    pop();
  }
}

function d3monster2() {
  background(69);

  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

  //Background Images

  if (index3_monster2 <= 9) {
    image(bg5, 0, 0, 1200, 850);
  }

  //portraits

  if (index3_monster2 === 1) {
    image(monster9, 450, -50, 400, 600);
  } else if (index3_monster2 === 2) {
    image(amy1, 370, -50, 400, 600);
  } else if (index3_monster2 === 3) {
    image(monster3, 450, -50, 400, 600);
  } else if (index3_monster2 === 4) {
    image(amy8, 370, -50, 400, 600);
  } else if (index3_monster2 === 5) {
    image(amy7, 370, -50, 400, 600);
  } else if (index3_monster2 === 6) {
    image(monster5, 450, -50, 400, 600);
  } else if (index3_monster2 === 7) {
    image(monster5, 450, -50, 400, 600);
  } else if (index3_monster2 === 9) {
    image(amy1, 370, -50, 400, 600);
  }

  if (!guntherbgm.isPlaying()) {
    guntherbgm.play(); //looping iffy
  }
  cafebgm.stop();
  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names3_monster2[index3_monster2], 600, 540);
  text(dialogue3_monster2[index3_monster2], 600, 625);
  pop();

  push();
  textSize(30);
  textAlign(CENTER);
  if (index3_monster2 === 9) {
    image(dialogue_choice, 50, 590, 540, 100);
    image(dialogue_choice, 620, 590, 540, 100);
    image(dialogue_choice, 320, 710, 540, 100);
    fill(0);
    text(
      `"You’re the boss. 
Just add that to the menu."`,
      320,
      630
    );
    text(
      `"Maybe I could make 
it for you sometime."`,
      900,
      630
    );
    text(
      `"Making different recipes
complicates things. Stick to tradition."`,
      600,
      750
    );
    if (
      mouseX >= 50 &&
      mouseX <= 590 &&
      mouseY >= 590 &&
      mouseY <= 690 &&
      mouseIsPressed
    ) {
      state = "d3monster4";
      guntherBar.add(10);
    } else if (
      mouseX >= 620 &&
      mouseX <= 1160 &&
      mouseY >= 590 &&
      mouseY <= 690 &&
      mouseIsPressed
    ) {
      state = "d3monster5";
      guntherBar.add(20);
    } else if (
      mouseX >= 320 &&
      mouseX <= 860 &&
      mouseY >= 710 &&
      mouseY <= 810 &&
      mouseIsPressed
    ) {
      state = "d3monster6";
      guntherBar.add(5);
    }
    pop();
  }
}

//gunther choice 1 (don't clean)
function d3monster3() {
  background(69);

  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

  //Background Images

  if (index3_monster3 <= 2) {
    image(bg5, 0, 0, 1200, 850);
  } else if (index3_monster3 >= 2) {
    push();
    tint(70);
    image(bg5, 0, 0, 1200, 850);
    pop();
  } else noTint();


  //portraits

  if (index3_monster3 === 1) {
    image(monster2, 450, -50, 400, 600);
  }

  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names3_monster3[index3_monster3], 600, 540);
  text(dialogue3_monster3[index3_monster3], 600, 625);
  
  if (index3_monster3 === 2) {
if (mouseX >= 1050 && mouseX <= 1190 && mouseY >= 720 && mouseY <= 800) {
      push();
      image(next, 1100, 740, 80, 80);
      pop();
      cursor(HAND);
    } else {
      push();
      tint(70);
      image(next, 1100, 740, 80, 80);
      pop();
      cursor(ARROW);
    }
    if (
      mouseX >= 1050 &&
      mouseX <= 1190 &&
      mouseY >= 720 &&
      mouseY <= 900 &&
      mouseIsPressed
    ) {
  //
  if (index3_monster3 === 2) {
    guntherbgm.stop();
      if (
          rancidBar.value ===
            fungusBar.value 
        ) {
          state = "d4open";
          
        } else if (rancidBar.value < fungusBar.value) {
          state = "d3rancid";
          cafebgm.stop();
       forestbgm.play();
        } else if (rancidBar.value > fungusBar.value){
          state = "d3fungus";
          forestbgm.play();
          cafebgm.stop();
        }
  }
}
}
pop()
;}

//gunther choice 2 ()
function d3monster4() {
fungusBar.value = 0;
rancidBar.value = 0;
  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();


  //Background Images

  if (index3_monster4 <= 7) {
    image(bg5, 0, 0, 1200, 850);
  } else if (index3_monster4 >= 8) {
    push();
    tint(70);
    image(bg5, 0, 0, 1200, 850);
    pop();
  } else noTint();

  //portraits

  if (index3_monster4 === 0) {
    image(amy1, 370, -50, 400, 600);
  } else if (index3_monster4 === 1) {
    image(monster3, 450, -50, 400, 600);
  } else if (index3_monster4 === 2) {
    image(amy4, 370, -50, 400, 600);
  } else if (index3_monster4 === 3) {
    image(amy7, 370, -50, 400, 600);
  } else if (index3_monster4 === 4) {
    image(monster9, 450, -50, 400, 600);
  } else if (index3_monster4 === 5) {
    image(amy4, 370, -50, 400, 600);
  } else if (index3_monster4 === 6) {
    image(monster9, 450, -50, 400, 600);
  } else if (index3_monster4 === 7) {
    image(amy2, 370, -50, 400, 600);
  }

  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names3_monster4[index3_monster4], 600, 540);
  text(dialogue3_monster4[index3_monster4], 600, 625);
 

  if (index3_monster4 === 8) {
    push();

    if (mouseX >= 1050 && mouseX <= 1190 && mouseY >= 720 && mouseY <= 800) {
      push();
      image(next, 1100, 740, 80, 80);
      pop();
      cursor(HAND);
    } else {
      push();
      tint(70);
      image(next, 1100, 740, 80, 80);
      pop();
      cursor(ARROW);
    }
    pop();
    if (index3_monster4 === 8) {
    
    if (
      mouseX >= 1050 &&
      mouseX <= 1190 &&
      mouseY >= 720 &&
      mouseY <= 900 &&
      mouseIsPressed
    ) {
      
        guntherbgm.stop();
        if (
          rancidBar.value ===
            fungusBar.value 
        ) {
          state = "d4open";
          cafebgm.play();
        } else if (rancidBar.value < fungusBar.value) {
          state = "d3rancid";
            forestbgm.play();
        } else if (rancidBar.value > fungusBar.value){
          state = "d3fungus";
          forestbgm.play();
        }
      
    }
  
  } 
  pop();
}}


//gunther choice 3
function d3monster5() {
  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

  //Background Images

  if (index3_monster5 <= 4) {
    image(bg5, 0, 0, 1200, 850);
  } else if (index3_monster5 >= 5) {
    push();
    tint(60);
    image(bg5, 0, 0, 1200, 850);
    pop();
  } else noTint();

  //portraits

  if (index3_monster5 === 0) {
    image(amy1, 370, -50, 400, 600);
  } else if (index3_monster5 === 1) {
    image(monster3, 450, -50, 400, 600);
  } else if (index3_monster5 === 2) {
    image(amy4, 370, -50, 400, 600);
  } else if (index3_monster5 === 3) {
    image(monster9, 450, -50, 400, 600);
  } else if (index3_monster5 === 4) {
    image(amy2, 370, -50, 400, 600);
  }

  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names3_monster5[index3_monster5], 600, 540);
  text(dialogue3_monster5[index3_monster5], 600, 625);
  pop();
  if (index3_monster5 === 5) {
    push();

    if (mouseX >= 1050 && mouseX <= 1130 && mouseY >= 720 && mouseY <= 800) {
      push();

      image(next, 1050, 740, 80, 80);
      pop();
      cursor(HAND);
    } else {
      push();
      tint(70);
      image(next, 1050, 740, 80, 80);
      pop();
      cursor(ARROW);
    } ///////////////////////////////////

    if (
      mouseX >= 1050 &&
      mouseX <= 1130 &&
      mouseY >= 720 &&
      mouseY <= 900 &&
      mouseIsPressed
    ) {
      guntherbgm.stop();
      if (
          rancidBar.value ===
            fungusBar.value 
        ) {
          state = "d4open";
          cafebgm.play();
        } else if (rancidBar.value < fungusBar.value) {
          state = "d3rancid";
           forestbgm.play();
        } else if (rancidBar.value > fungusBar.value){
          state = "d3fungus";
          forestbgm.play();
        }
    }
  }
}
//gunther choice 4
function d3monster6() {
  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

  //Background Images

  if (index3_monster6 <= 6) {
    image(bg5, 0, 0, 1200, 850);
  } else if (index3_monster6 >= 7) {
    push();
    tint(60);
    image(bg5, 0, 0, 1200, 850); 
    pop();
  } else noTint();

  //portraits

  if (index3_monster6 === 0) {
    image(amy1, 370, -50, 400, 600);
  } else if (index3_monster6 === 1) {
    image(monster1, 450, -50, 400, 600);
  } else if (index3_monster6 === 2) {
    image(amy4, 370, -50, 400, 600);
  } else if (index3_monster6 === 3) {
    image(monster6, 450, -50, 400, 600);
  } else if (index3_monster6 === 4) {
    image(amy4, 370, -50, 400, 600);
  } else if (index3_monster6 === 5) {
    image(monster9, 450, -50, 400, 600);
  } else if (index3_monster6 === 6) {
    image(amy2, 370, -50, 400, 600);
  }

  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names3_monster6[index3_monster6], 600, 540);
  text(dialogue3_monster6[index3_monster6], 600, 625);
  pop();
 if (index3_monster6 === 7 ){
    push();

    if (mouseX >= 1050 && mouseX <= 1130 && mouseY >= 720 && mouseY <= 800) {
      push();

      image(next, 1050, 740, 80, 80);
      pop();
      cursor(HAND);
    } else {
      push();
      tint(70);
      image(next, 1050, 740, 80, 80);
      pop();
      cursor(ARROW);
    } ///////////////////////////////////

    if (
      mouseX >= 1050 &&
      mouseX <= 1130 &&
      mouseY >= 720 &&
      mouseY <= 900 &&
      mouseIsPressed
    ) { guntherBar.hide();
      guntherbgm.stop();
       if (
          rancidBar.value ===
            fungusBar.value 
        ) {
          state = "d4open";
          cafebgm.play();
        } else if (rancidBar.value < fungusBar.value) {
          state = "d3rancid";
           forestbgm.play();
        } else if (rancidBar.value > fungusBar.value){
          state = "d3fungus";
          forestbgm.play();
        }
  }
    }
  }



//if sir rancid's love bar value is higher

function d3rancid() {
  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

  //Background Images

  if (index3_rancid <= 10) {
    image(bg6, 0, 0, 1200, 850);
  }

  //portraits

   if (index3_rancid === 1) {
  image(rancid7, 350, -50, 400, 600);
} else if (index3_rancid === 2) {
    image(amy8, 370, -50, 400, 600);
  } else if (index3_rancid === 3) {
    image(rancid1, 350, -50, 400, 600);
  } else if (index3_rancid === 4) {
    image(amy3, 370, -50, 400, 600);
  } else if (index3_rancid === 5) {
    image(rancid2, 350, -50, 400, 600);
  } else if (index3_rancid === 6) {
    image(amy7, 370, -50, 400, 600);
  } else if (index3_rancid === 7) {
    image(rancid2, 350, -50, 400, 600);
  } else if (index3_rancid >=8) {
    image(amy3, 370, -50, 400, 600);
  }
  if (index3_rancid > 1) {
    rancidBar.show();
  }

  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names3_rancid[index3_rancid], 600, 540);
  text(dialogue3_rancid[index3_rancid], 600, 625);
  pop();

  push();
  textSize(30);
  textAlign(CENTER);
  if (index3_rancid === 9) {
    image(dialogue_choice, 50, 590, 540, 100);
    image(dialogue_choice, 620, 590, 540, 100);
    image(dialogue_choice, 320, 710, 540, 100);
    text(
      `How about I make you 
      something to go, instead?`,
      320,
      630
    );
    text(`Sounds gross and fun. I'm in!`, 890, 640);
    text(
      `I think I would rather get hit by a 
truck all over again than do that`,
      600,
      750
    );
    if (
      mouseX >= 50 &&
      mouseX <= 590 &&
      mouseY >= 590 &&
      mouseY <= 690 &&
      mouseIsPressed
    ) {
      state = "d3rancid1"; //give him a togo  plate
      rancidBar.add(10);
    } else if (
      mouseX >= 620 &&
      mouseX <= 1160 &&
      mouseY >= 590 &&
      mouseY <= 690 &&
      mouseIsPressed
    ) {
      state = "d3rancid2"; //go on date
      rancidBar.add(20);
    } else if (
      mouseX >= 320 &&
      mouseX <= 860 &&
      mouseY >= 710 &&
      mouseY <= 810 &&
      mouseIsPressed
    ) {
      state = "d3rancid3"; //tell him to leave
      rancidBar.add(-10);
    }
  }
  pop();
}

//to go plate
function d3rancid1() {
  background(69);

  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

  //Background Images

  if (index3_rancid1 <= 5) {
    image(bg6, 0, 0, 1200, 850);
  }else if (index3_rancid1 >= 6) {
    push();
    tint(60);
    image(bg6, 0, 0, 1200, 850); //forest
    pop();
  } else noTint();

  //portraits

  if (index3_rancid1 === 0) {
    image(amy4, 370, -50, 400, 600);
  } else if (index3_rancid1 === 1) {
    image(rancid1, 350, -50, 400, 600);
  } else if (index3_rancid1 === 2) {
    image(amy8, 370, -50, 400, 600);
  } else if (index3_rancid1 ===3 ) {
    image(rancid1, 350, -50, 400, 600);
  } else if (index3_rancid1 ===4 ) {
    image(rancid2, 350, -50, 400, 600);
  }else if (index3_rancid1 === 5) {
    image(amy4, 370, -50, 400, 600);
  } 

  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names3_rancid1[index3_rancid1], 600, 540);
  text(dialogue3_rancid1[index3_rancid1], 600, 625);
  pop();

  
  if (index3_rancid1 === 6) {
    if (mouseX >= 1050 && mouseX <= 1130 && mouseY >= 720 && mouseY <= 800) {
      push();

      image(next, 1050, 740, 80, 80);
      pop();
      cursor(HAND);
    } else {
      push();
      tint(70);
      image(next, 1050, 740, 80, 80);
      pop();
      cursor(ARROW);
    } ///////////////////////////////////

    if (
      mouseX >= 1050 &&
      mouseX <= 1130 &&
      mouseY >= 720 &&
      mouseY <= 900 &&
      mouseIsPressed
    ) {
    state = "d4open";
    rancidbgm.stop(); forestbgm.stop(); 
  }}
} ///////////////////////////

//date
function d3rancid2() {
  background(69);
  guntherBar.hide();
  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

  //Background Images

  if (index3_rancid2 <= 5) {
    image(bg6, 0, 0, 1200, 850);
  } else if (index3_rancid2 >= 6) {
    push();
    tint(60);
    image(bg6, 0, 0, 1200, 850); //forest
    pop();
  } else noTint();

  //portraits

  if (index3_rancid2 === 0) {
    image(amy4, 370, -50, 400, 600);
  } else if (index3_rancid2 === 1) {
    image(rancid1, 350, -50, 400, 600);
  } else if (index3_rancid2 === 2) {
    image(amy8, 370, -50, 400, 600);
  } else if (index3_rancid2 === 3) {
    image(rancid1, 350, -50, 400, 600);
  } else if (index3_rancid2 === 4) {
    image(amy4, 370, -50, 400, 600);
  } else if (index3_rancid2 === 5) {
    image(rancid2, 350, -50, 400, 600);
  }

  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names3_rancid2[index3_rancid2], 600, 540);
  text(dialogue3_rancid2[index3_rancid2], 600, 625);
  pop();

  if (index3_rancid2 === 6) {
    if (mouseX >= 1050 && mouseX <= 1130 && mouseY >= 720 && mouseY <= 800) {
      push();

      image(next, 1050, 740, 80, 80);
      pop();
      cursor(HAND);
    } else {
      push();
      tint(70);
      image(next, 1050, 740, 80, 80);
      pop();
      cursor(ARROW);
    } ///////////////////////////////////

    if (
      mouseX >= 1050 &&
      mouseX <= 1130 &&
      mouseY >= 720 &&
      mouseY <= 900 &&
      mouseIsPressed
    ) {
    state = "d4open";
    rancidbgm.stop();
    forestbgm.stop(); 
   }}
} ///////////////////////////
//leave
function d3rancid3() {
  guntherBar.hide();
  background(69);
cafebgm.stop();
  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

  //Background Images

  if (index3_rancid3 <= 3) {
    image(bg6, 0, 0, 1200, 850);
  }else if (index3_rancid3 >= 4) {
    push();
    tint(60);
    image(bg6, 0, 0, 1200, 850); //forest
    pop();
  } else noTint();

  //portraits

  if (index3_rancid3 === 0) {
    image(amy4, 370, -50, 400, 600);
  } else if (index3_rancid3 === 1) {
    image(rancid1, 350, -50, 400, 600);
  }

  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names3_rancid3[index3_rancid3], 600, 540);
  text(dialogue3_rancid3[index3_rancid3], 600, 625);
  pop();

  if (index3_rancid3 === 2) {
    if (mouseX >= 1050 && mouseX <= 1130 && mouseY >= 720 && mouseY <= 800) {
      push();

      image(next, 1050, 740, 80, 80);
      pop();
      cursor(HAND);
    } else {
      push();
      tint(70);
      image(next, 1050, 740, 80, 80);
      pop();
      cursor(ARROW);
    } ///////////////////////////////////

    if (
      mouseX >= 1050 &&
      mouseX <= 1130 &&
      mouseY >= 720 &&
      mouseY <= 900 &&
      mouseIsPressed
    ) {
    state = "d4open";
    rancidbgm.stop();
    forestbgm.stop();
    rancidBar.hide();
  }}
} ///////////////////////////

function d3fungus() {
  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();
cafebgm.stop();
  //Background Images

  if (index3_fungus <= 10) {
    image(bg6, 0, 0, 1200, 850); //forest night
  }

  //portraits

  if (index3_fungus === 1) {
    image(amy8, 370, -50, 400, 600);
  } else if (index3_fungus === 2) {
    image(fungus8, 350, -50, 400, 600);
  } else if (index3_fungus === 3) {
    image(amy3, 370, -50, 400, 600);
  } else if (index3_fungus === 4) {
    image(fungus1, 350, -50, 400, 600);
  } else if (index3_fungus === 5) {
    image(amy7, 370, -50, 400, 600);
  } else if (index3_fungus === 6) {
    image(fungus8, 350, -50, 400, 600);
  } else if (index3_fungus === 7) {
    image(amy8, 370, -50, 400, 600);
  } else if (index3_fungus === 8) {
    image(amy4, 370, -50, 400, 600);
  } else if (index3_fungus === 9) {
    image(fungus1, 350, -50, 400, 600);
  } else if (index3_fungus === 10) {
    image(amy1, 370, -50, 400, 600);
  }

  guntherBar.hide();
  if (index3_fungus > 1) {
    fungusBar.show();
  }

  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names3_fungus[index3_fungus], 600, 540);
  text(dialogue3_fungus[index3_fungus], 600, 625);
  pop();

  push();
  textSize(30);
  textAlign(CENTER);
  if (index3_fungus === 10) {
    image(dialogue_choice, 50, 590, 540, 100);
    image(dialogue_choice, 620, 590, 540, 100);
    image(dialogue_choice, 320, 710, 540, 100);
    text(`Why don't we go eat out?`, 320, 630);
    text(`What do you want to do?`, 890, 630);
    text(`Let's do some shopping!`, 600, 770);
    if (
      mouseX >= 50 &&
      mouseX <= 590 &&
      mouseY >= 590 &&
      mouseY <= 690 &&
      mouseIsPressed
    ) {
      state = "d3fungus1"; //out to eat
      fungusBar.add(10);
      forestbgm.stop();
      } else if (
      mouseX >= 620 &&
      mouseX <= 1160 &&
      mouseY >= 590 &&
      mouseY <= 690 &&
      mouseIsPressed
    ) {
      state = "d3fungus2"; //go to room
      fungusBar.add(20);
       forestbgm.stop();
    } else if (
      mouseX >= 320 &&
      mouseX <= 860 &&
      mouseY >= 710 &&
      mouseY <= 810 &&
      mouseIsPressed
    ) {
      state = "d3fungus3"; //go shopping
      fungusBar.add(-10);
       forestbgm.stop();

    }
  }
  pop();
}

//go out to eat
function d3fungus1() {
  background(69);

  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

  //Background Images

  if (index3_fungus1 <= 7) {
    image(bg6, 0, 0, 1200, 850); //forest
  } else if (index3_fungus1 <= 21) {
    image(bg8, 0, 0, 1200, 850); //fungal garden
  } else if (index3_fungus1 <= 33) {
    image(bg3, 0, 0, 1200, 850); //cafe
  } else if (index3_fungus1 <= 35) {
    push();
    tint(60);
    image(bg3, 0, 0, 1200, 850);
    pop();
  } else noTint();

  if (!fungusbgm.isPlaying()) {
    fungusbgm.play();
  }

  //portraits
  if (index3_fungus1 === 0) {
    image(amy5, 370, -50, 400, 600);
  } else if (index3_fungus1 === 1) {
    image(amy1, 370, -50, 400, 600);
  } else if (index3_fungus1 === 2) {
    image(fungus2, 350, -50, 400, 600);
  } else if (index3_fungus1 === 3) {
    image(amy3, 370, -50, 400, 600);
  } else if (index3_fungus1 === 4) {
    image(fungus4, 350, -50, 400, 600);
  } else if (index3_fungus1 === 5) {
    image(amy7, 370, -50, 400, 600);
  } else if (index3_fungus1 === 6) {
    image(fungus8, 350, -50, 400, 600);
  } else if (index3_fungus1 === 7) {
    image(amy8, 370, -50, 400, 600);
  } else if (index3_fungus1 === 9) {
    image(amy7, 370, -50, 400, 600);
  } else if (index3_fungus1 === 10) {
    image(fungus8, 350, -50, 400, 600);
  } else if (index3_fungus1 === 12) {
    image(amy9, 370, -50, 400, 600);
  } else if (index3_fungus1 === 14) {
    image(amy9, 370, -50, 400, 600);
  } else if (index3_fungus1 === 15) {
    image(fungus4, 370, -50, 400, 600);
  } else if (index3_fungus1 === 16) {
    image(amy9, 370, -50, 400, 600);
  } else if (index3_fungus1 === 17) {
    image(fungus2, 370, -50, 400, 600);
  } else if (index3_fungus1 === 18) {
    image(amy9, 370, -50, 400, 600);
  } else if (index3_fungus1 === 19) {
    image(fungus8, 370, -50, 400, 600);
  } else if (index3_fungus1 === 20) {
    image(amy2, 370, -50, 400, 600);
  } else if (index3_fungus1 === 21) {
    image(fungus8, 370, -50, 400, 600);
  } else if (index3_fungus1 === 23) {
    image(monster6, 370, -50, 400, 600);
  } else if (index3_fungus1 === 24) {
    image(amy9, 370, -50, 400, 600); //sick
  } else if (index3_fungus1 === 25) {
    image(monster5, 370, -50, 400, 600); //sad
  } else if (index3_fungus1 > 25 && index3_fungus1 < 27) {
    image(fungus8, 370, -50, 400, 600);
  } else if (index3_fungus1 === 28) {
    image(amy6, 370, -50, 400, 600);
  } else if (index3_fungus1 === 29) {
    image(monster7, 370, -50, 400, 600);
  } else if (index3_fungus1 === 30) {
    image(amy5, 370, -50, 400, 600);
  } else if (index3_fungus1 === 31) {
    image(monster9, 370, -50, 400, 600); //happy
  } else if (index3_fungus1 === 32) {
    image(amy5, 370, -50, 400, 600); //happy
  } else if (index3_fungus1 === 33) {
    image(amy8, 370, -50, 400, 600); //sigh
  }

  guntherBar.hide();

  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names3_fungus1[index3_fungus1], 600, 540);
  text(dialogue3_fungus1[index3_fungus1], 600, 625);
  pop();
  //added a highlighted next button that only triggers when that hitbox is pressed and hovered over
  if (index3_fungus1 === 34) {
    push();

    if (mouseX >= 1050 && mouseX <= 1130 && mouseY >= 720 && mouseY <= 800) {
      push();

      image(next, 1050, 740, 80, 80);
      pop();
      cursor(HAND);
    } else {
      push();
      tint(70);
      image(next, 1050, 740, 80, 80);
      pop();
      cursor(ARROW);
    }
    if (
      mouseX >= 1050 &&
      mouseX <= 1130 &&
      mouseY >= 720 &&
      mouseY <= 900 &&
      mouseIsPressed
    ) {
      state = "d4open";
      cafebgm.play();
      fungusbgm.stop();
      fungusBar.hide();
    }
  }
}
///////////////////////

//room date "what do you want to do"
function d3fungus2() {
  background(69);

  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

  //Background Images

  if (index3_fungus1 <= 7) {
    image(bg6, 0, 0, 1200, 850); //forest
  } else if (index3_fungus1 <= 22) {
    image(bg8, 0, 0, 1200, 850); //fungal garden
  } else if (index3_fungus1 <= 7) {
    image(bg3, 0, 0, 1200, 850); //cafe
  }

  //portraits
  if (index3_fungus2 === 0) {
    image(amy5, 370, -50, 400, 600);
  } else if (index3_fungus2 === 1) {
    image(fungus5, 350, -50, 400, 600);
  } else if (index3_fungus2 === 2) {
    image(amy8, 370, -50, 400, 600);
  } else if (index3_fungus2 === 3) {
    image(fungus7, 350, -50, 400, 600);
  } else if (index3_fungus2 === 4) {
    image(amy3, 370, -50, 400, 600);
  } else if (index3_fungus2 === 5) {
    image(fungus2, 350, -50, 400, 600);
  } else if (index3_fungus2 <= 6) {
    image(amy7, 370, -50, 400, 600);
  } else if (index3_fungus2 <= 7) {
    image(amy8, 370, -50, 400, 600);
  }
  guntherBar.hide();

  if (!fungusbgm.isPlaying()) {
    fungusbgm.play(); //looping iffy
  }
  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names3_fungus2[index3_fungus2], 600, 540);
  text(dialogue3_fungus2[index3_fungus2], 600, 625);
  pop();

  push();
  textSize(30);
  textAlign(CENTER);
  if (index3_fungus2 === 7) {
    image(dialogue_choice, 50, 590, 540, 100);
    image(dialogue_choice, 620, 590, 540, 100);
    text(`"Fine, you can come in..."`, 885, 650);
    text(`"Uh actually, nevermind. "`, 320, 650);
    if (
      mouseX >= 620 &&
      mouseX <= 1160 &&
      mouseY >= 590 &&
      mouseY <= 690 &&
      mouseIsPressed
    ) {
      state = "d3fungus2_first";
      fungusBar.add(10);
     
    } else if (
      mouseX >= 50 &&
      mouseX <= 590 &&
      mouseY >= 590 &&
      mouseY <= 690 &&
      mouseIsPressed
    ) {
      state = "d3fungus2_second";
      fungusBar.add(-10);
      badsfx.play();
    }
  }
  pop();
} /////////////////////////////

//agree to room date
function d3fungus2_first() {
  background(69);

  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

  //Background Images

  if (index3_fungus2_1 <= 1) {
    image(bg6, 0, 0, 1200, 850); //forest
  }
  if (index3_fungus2_1 > 1 && index3_fungus2_1 < 21) {
    image(bg4, 0, 0, 1200, 850); //bedroom
  } else if (index3_fungus2_1 >= 21) {
    push();
    tint(60);
    image(bg4, 0, 0, 1200, 850); //forest
    pop();
  } else noTint();

  //portraits

  if (index3_fungus2_1 === 0) {
    image(amy4, 370, -50, 400, 600);
  } else if (index3_fungus2_1 === 1) {
    image(fungus2, 350, -50, 400, 600);
  } else if (index3_fungus2_1 === 3) {
    image(amy2, 370, -50, 400, 600);
  } else if (index3_fungus2_1 === 5) {
    image(fungus7, 370, -50, 400, 600);
  } else if (index3_fungus2_1 === 6) {
    image(amy3, 350, -50, 400, 600);
  } else if (index3_fungus2_1 === 7) {
    image(fungus8, 370, -50, 400, 600);
  } else if (index3_fungus2_1 === 8) {
    image(amy2, 350, -50, 400, 600);
  } else if (index3_fungus2_1 === 9) {
    image(fungus8, 370, -50, 400, 600);
  } else if (index3_fungus2_1 === 10) {
    image(amy2, 350, -50, 400, 600);
  } else if (index3_fungus2_1 === 11) {
    image(fungus2, 370, -50, 400, 600);
  } else if (index3_fungus2_1 === 12) {
    image(amy8, 350, -50, 400, 600);
  } else if (index3_fungus2_1 === 13) {
    image(fungus1, 370, -50, 400, 600);
  } else if (index3_fungus2_1 === 14) {
    image(amy1, 350, -50, 400, 600);
  } else if (index3_fungus2_1 === 15) {
    image(amy1, 350, -50, 400, 600);
  } else if (index3_fungus2_1 === 16) {
    image(fungus8, 370, -50, 400, 600);
  } else if (index3_fungus2_1 === 17) {
    image(amy2, 350, -50, 400, 600);
  } else if (index3_fungus2_1 === 18) {
    image(fungus2, 370, -50, 400, 600);
  } else if (index3_fungus2_1 === 20) {
    image(amy8, 350, -50, 400, 600);
  }

  forestbgm.stop();
  if (!fungusbgm.isPlaying()) {
    fungusbgm.play(); //looping iffy
  }
  fungusBar.show();
  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names3_fungus2_1[index3_fungus2_1], 600, 540);
  text(dialogue3_fungus2_1[index3_fungus2_1], 600, 625);
  pop();
  if (index3_fungus2_1 === 21) {
    push();

    if (mouseX >= 1050 && mouseX <= 1130 && mouseY >= 720 && mouseY <= 800) {
      push();

      image(next, 1050, 740, 80, 80);
      pop();
      cursor(HAND);
    } else {
      push();
      tint(70);
      image(next, 1050, 740, 80, 80);
      pop();
      cursor(ARROW);
    }
    if (
      mouseX >= 1050 &&
      mouseX <= 1130 &&
      mouseY >= 720 &&
      mouseY <= 900 &&
      mouseIsPressed
    ) {
      state = "d4open";
      cafebgm.play();
      fungusbgm.stop();
      fungusBar.hide();
      pop();
    }
  }
} ///////////////////////////

function d3fungus2_second() {
  background(69);

  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

  //Background Images

  if (index3_fungus2_2 <= 1) {
    image(bg6, 0, 0, 1200, 850);
  } else if (index3_fungus2_2 >= 2) {
    push();
    tint(60);
    image(bg6, 0, 0, 1200, 850); //forest
    pop();
  } else noTint();

  //portraits

  if (index3_fungus2_2 === 0) {
    image(amy4, 370, -50, 400, 600);
  } else if (index3_fungus2_2 === 1) {
    image(fungus5, 350, -50, 400, 600);
  }

  fungusBar.hide();
  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names3_fungus2_2[index3_fungus2_2], 600, 540);
  text(dialogue3_fungus2_2[index3_fungus2_2], 600, 625);
  pop();

  if (index3_fungus2_2 === 2) {
    push();

    if (mouseX >= 1050 && mouseX <= 1130 && mouseY >= 720 && mouseY <= 800) {
      push();
      image(next, 1050, 740, 80, 80);
      pop();
      cursor(HAND);
    } else {
      push();
      tint(70);
      image(next, 1050, 740, 80, 80);
      pop();
      cursor(ARROW);
    } ///////////////////////////////////

    if (
      mouseX >= 1050 &&
      mouseX <= 1130 &&
      mouseY >= 720 &&
      mouseY <= 900 &&
      mouseIsPressed
    ) {
      guntherBar.hide();
      if (index3_fungus2_2 === 2) {
        state = "d4open";
        cafebgm.play();
        fungusbgm.stop()
;      }
    }
  }
  pop();
} ////////////////////////////////

//day 3 choice 3 shopping
function d3fungus3() {
  background(69);
  cursor(ARROW);

  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

 if (!fungusbgm.isPlaying()) {
    fungusbgm.play();
  }

  //Background Images

  if (index3_fungus3 <= 7) {
    image(bg6, 0, 0, 1200, 850); //forest
  } else if (index3_fungus3 < 25) {
    image(bg9, 0, 0, 1200, 850); //mall
  } else if (index3_fungus3 >= 23) {
    push();
    tint(60);
    image(bg9, 0, 0, 1200, 850); //forest
    pop();
  } else noTint();

   //portraits
  if (index3_fungus3 === 0) {
    image(amy5, 370, -50, 400, 600);
  } else if (index3_fungus3 === 1) {
    image(fungus2, 350, -50, 400, 600);
  } else if (index3_fungus3 === 2) {
    image(amy3, 370, -50, 400, 600);
  } else if (index3_fungus3 === 3) {
    image(fungus4, 350, -50, 400, 600); 
  } else if (index3_fungus3 === 4) {
    image(amy7, 370, -50, 400, 600);
  } else if (index3_fungus3 === 5) {
    image(fungus8, 350, -50, 400, 600); 
  } else if (index3_fungus3 === 6) {
    image(amy8, 370, -50, 400, 600);
  } else if (index3_fungus3 ===7) {
    image(amy7, 370, -50, 400, 600); 
  } else if (index3_fungus3 === 8) {
    image(fungus8, 350, -50, 400, 600);
  } else if (index3_fungus3 === 10) {
    image(amy7, 370, -50, 400, 600);
  } else if (index3_fungus3 === 11) {
    image(fungus4, 370, -50, 400, 600);
  } else if (index3_fungus3 === 12) {
    image(amy9, 370, -50, 400, 600);
  } else if (index3_fungus3 === 13) {
    image(fungus2, 370, -50, 400, 600);
  } else if (index3_fungus3 === 14) {
    image(amy9, 370, -50, 400, 600);
  } else if (index3_fungus3 === 15) {
    image(fungus8, 370, -50, 400, 600);
  } else if (index3_fungus3 === 17) {
    image(amy2, 370, -50, 400, 600); 
  } else if (index3_fungus3 === 18) {
    image(fungus5, 370, -50, 400, 600);
  } else if (index3_fungus3 === 19) {
    image(amy8, 370, -50, 400, 600);
   } else if (index3_fungus3 === 20) {
    image(fungus5, 370, -50, 400, 600);
    } else if (index3_fungus3 === 21) {
    image(amy8, 370, -50, 400, 600);
 } else if (index3_fungus3 === 22) {
    image(fungus1, 370, -50, 400, 600);
 }
  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names3_fungus3[index3_fungus3], 600, 540);
  text(dialogue3_fungus3[index3_fungus3], 600, 625);
  pop();

  
if (index3_fungus3 === 23) {
    push();

    if (mouseX >= 1050 && mouseX <= 1190 && mouseY >= 720 && mouseY <= 800) {
      push();
      image(next, 1100, 740, 80, 80);
      pop();
      cursor(HAND);
    } else {
      push();
      tint(70);
      image(next, 1100, 740, 80, 80);
      pop();
      cursor(ARROW);
    }
    if (
      mouseX >= 1050 &&
      mouseX <= 1190 &&
      mouseY >= 720 &&
      mouseY <= 900 &&
      mouseIsPressed
    ) {
      
  if (index3_fungus3 === 23) {
    state = "d4open";
    cafebgm.play();
    fungusbgm.stop();
    fungusBar.hide(); 
   }
}
    pop();
  }
}

//day 4
//probably add a cooking event. the player wouldn't  have cooked for a while by this point
function d4open() {
  background(69);
  cursor(ARROW);

  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

  //Background Images

  if (index4_open <= 14) {
    image(bg3, 0, 0, 1200, 850); //cafe
  } else if (index4_open > 13 && index <= 15) {
    push();
    tint(60);
    image(bg3, 0, 0, 1200, 850);
    pop();
  } else noTint();

  //portraits
  if (index4_open === 1) {
    image(amy1, 370, -50, 400, 600);
  } else if (index4_open === 2) {
    image(rancid2, 350, -50, 400, 600);
  } else if (index4_open === 3) {
    image(fungus2, 370, -50, 400, 600);
  } else if (index4_open === 4) {
    image(amy5, 350, -50, 400, 600);
  } else if (index4_open === 5) {
    image(rancid7, 370, -50, 400, 600);
  } else if (index4_open === 6) {
    image(fungus8, 350, -50, 400, 600);
  } else if (index4_open === 7) {
    image(amy5, 370, -50, 400, 600);
  } else if (index4_open === 8) {
    image(fungus4, 370, -50, 400, 600);
  } else if (index4_open === 9) {
    image(amy8, 370, -50, 400, 600);
  } else if (index4_open === 10) {
    image(rancid7, 370, -50, 400, 600);
  } else if (index4_open === 11) {
    image(fungus7, 370, -50, 400, 600);
  } else if (index4_open === 12) {
    image(rancid7, 350, -50, 400, 600);
  } else if (index4_open === 13) {
    image(amy2, 370, -50, 400, 600);
  }

  if (!cafebgm.isPlaying()) {
    cafebgm.play();
  }

  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names4_double[index4_open], 600, 540);
  text(dialogue4_talk[index4_open], 600, 625);
  pop();

  //use these to enable extra gunther scene while playtesting
  //rancidBar.value = 40;
  //fungusBar.value = 40;
  if (index4_open === 14) {
    push();

    if (mouseX >= 1050 && mouseX <= 1130 && mouseY >= 720 && mouseY <= 800) {
      push();

      image(next, 1050, 740, 80, 80);
      pop();
      cursor(HAND);
    } else {
      push();
      tint(70);
      image(next, 1050, 740, 80, 80);
      pop();
      cursor(ARROW);
    }
    if (
      mouseX >= 1050 &&
      mouseX <= 1130 &&
      mouseY >= 720 &&
      mouseY <= 800 &&
      mouseIsPressed
    ) {
      if (index4_open === 14) {
        if ((rancidBar.value = fungusBar.value)) {
          state = "d4gunther";
          cafebgm.stop();
          guntherbgm.play();
          guntherBar.show();
        } else {
          state = "d5open";
        }
      }
    }
  }
}

function d4gunther() {
  background(69);

  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

  //Background Images

  if (index4_gunther < 22) {
    image(bg3, 0, 0, 1200, 850); //cafe
  }

  //portraits
  if (index4_gunther === 1) {
    image(monster9, 450, -50, 400, 600);
  } else if (index4_gunther === 2) {
    image(amy4, 370, -50, 400, 600);
  } else if (index4_gunther === 3) {
    image(monster1, 450, -50, 400, 600);
  } else if (index4_gunther === 4) {
    image(amy4, 370, -50, 400, 600); //worried
  } else if (index4_gunther === 5) {
    image(monster1, 450, -50, 400, 600); //surprised
  } else if (index4_gunther === 6) {
    image(amy7, 370, -50, 400, 600); //smug
  } else if (index4_gunther === 7) {
    image(monster5, 450, -50, 400, 600); //sigh
  } else if (index4_gunther === 8) {
    image(amy7, 370, -50, 400, 600); //sigh
  } else if (index4_gunther === 9) {
    image(monster5, 450, -50, 400, 600); //surprise
  } else if (index4_gunther === 10) {
    image(amy8, 370, -50, 400, 600);
  } else if (index4_gunther === 11) {
    image(monster3, 450, -50, 400, 600);
  } else if (index4_gunther === 12) {
    image(amy8, 370, -50, 400, 600); //sick
  } else if (index4_gunther === 13) {
    image(monster3, 450, -50, 400, 600); //sigh
  } else if (index4_gunther === 15) {
    image(amy1, 370, -50, 400, 600); //sigh
  } else if (index4_gunther === 16) {
    image(monster3, 450, -50, 400, 600);
  } else if (index4_gunther === 17) {
    image(amy2, 370, -50, 400, 600); //sigh
  } else if (index4_gunther === 18) {
    image(monster9, 450, -50, 400, 600); //sigh
  } else if (index4_gunther === 19) {
    image(amy7, 370, -50, 400, 600); //sigh
  } else if (index4_gunther === 21) {
    image(amy7, 370, -50, 400, 600); //sigh
  }

  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names4_gunther[index4_gunther], 600, 540);
  text(dialogue4_gunther[index4_gunther], 600, 625);
  pop();

  //choices
  push();
  textSize(30);
  textAlign(CENTER);
  if (index4_gunther === 21) {
    image(dialogue_choice, 50, 650, 540, 100);
    image(dialogue_choice, 620, 650, 540, 100);
    text(`Make the same frogleg cupcakes`, 320, 710);
    text(`Ask for help`, 870, 710);
    if (
      mouseX >= 50 &&
      mouseX <= 590 &&
      mouseY >= 650 &&
      mouseY <= 750 &&
      mouseIsPressed
    ) {
      state = "d4gunther1";
      guntherBar.add(0);
    } else if (
      mouseX >= 620 &&
      mouseX <= 1160 &&
      mouseY >= 650 &&
      mouseY <= 750 &&
      mouseIsPressed
    ) {
      state = "d4gunther2";
      guntherBar.add(20);
    }
  }
  pop();
}

//choice 1 make the same frog legs
function d4gunther1() {
  background(69);

  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

  //Background Images

  if (index4_gunther1 < 15) {
    image(bg3, 0, 0, 1200, 850); //cafe night
  }
  //tint affect
  else if (index4_gunther1 <= 16) {
    push();
    tint(60);
    image(bg3, 0, 0, 1200, 850); //forest
    pop();
  } else noTint();

  //portraits
  if (index4_gunther1 === 1) {
    image(amy5, 370, -50, 400, 600);
  } else if (index4_gunther1 === 3) {
    image(amy3, 370, -50, 400, 600);
  } else if (index4_gunther1 === 4) {
    image(monster3, 450, -50, 400, 600);
  } else if (index4_gunther1 === 5) {
    image(amy3, 370, -50, 400, 600);
  } else if (index4_gunther1 === 6) {
    image(monster9, 450, -50, 400, 600);
  } else if (index4_gunther1 === 7) {
    image(amy7, 370, -50, 400, 600);
  } else if (index4_gunther1 === 8) {
    image(monster9, 450, -50, 400, 600);
  } else if (index4_gunther1 === 9) {
    image(amy8, 370, -50, 400, 600);
  } else if (index4_gunther1 === 10) {
    image(monster1, 450, -50, 400, 600);
  } else if (index4_gunther1 === 11) {
    image(amy3, 370, -50, 400, 600);
  } else if (index4_gunther1 === 12) {
    image(monster7, 450, -50, 400, 600);
  } else if (index4_gunther1 === 13) {
    image(amy3, 370, -50, 400, 600);
  } else if (index4_gunther1 === 14) {
    image(monster9, 450, -50, 400, 600);
  }
  if (!guntherbgm.isPlaying()) {
    guntherbgm.play(); //looping iffy
  }
  cafebgm.stop();
  cursor(ARROW);

  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names4_gunther1[index4_gunther1], 600, 540);
  text(dialogue4_gunther1[index4_gunther1], 600, 625);
  pop();

  if (index4_gunther1 === 15) {
    push();

    if (mouseX >= 1050 && mouseX <= 1130 && mouseY >= 720 && mouseY <= 800) {
      push();

      image(next, 1050, 740, 80, 80);
      pop();
      cursor(HAND);
    } else {
      push();
      tint(70);
      image(next, 1050, 740, 80, 80);
      pop();
      cursor(ARROW);
    }

    if (
      mouseX >= 1050 &&
      mouseX <= 1130 &&
      mouseY >= 720 &&
      mouseY <= 900 &&
      mouseIsPressed
    ) {
      state = "d5open";
      guntherbgm.stop();
      guntherBar.hide();
    }
  }
}

//choice 2 wing it
function d4gunther2() {
  background(69);

  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

  //Background Images

  if (index4_gunther2 < 27) {
    image(bg3, 0, 0, 1200, 850); //cafe
  } else if (index4_gunther2 <= 27) {
    push();
    tint(60);
    image(bg3, 0, 0, 1200, 850);
    pop();
  } else noTint();

  //portraits
  if (index4_gunther2 === 0) {
    image(amy5, 370, -50, 400, 600);
  } else if (index4_gunther2 === 1) {
    image(monster7, 450, -50, 400, 600);
  } else if (index4_gunther2 === 2) {
    image(amy3, 350, -50, 400, 600);
  } else if (index4_gunther2 === 3) {
    image(monster1, 450, -50, 400, 600);
  } else if (index4_gunther2 === 5) {
    image(amy7, 370, -50, 400, 600);
  } else if (index4_gunther2 === 6) {
    image(monster9, 450, -50, 400, 600);
  } else if (index4_gunther2 === 8) {
    image(amy7, 370, -50, 400, 600);
  } else if (index4_gunther2 === 9) {
    image(monster6, 450, -50, 400, 600);
  } else if (index4_gunther2 === 11) {
    image(monster1, 450, -50, 400, 600);
  } else if (index4_gunther2 === 12) {
    image(amy3, 370, -50, 400, 600);
  } else if (index4_gunther2 === 13) {
    image(monster1, 450, -50, 400, 600);
  } else if (index4_gunther2 === 15) {
    image(amy3, 370, -50, 400, 600);
  } else if (index4_gunther2 === 17) {
    image(amy5, 370, -50, 400, 600);
  } else if (index4_gunther2 === 18) {
    image(monster3, 450, -50, 400, 600);
  } else if (index4_gunther2 === 19) {
    image(amy7, 370, -50, 400, 600);
  } else if (index4_gunther2 === 20) {
    image(monster3, 450, -50, 400, 600);
  } else if (index4_gunther2 === 21) {
    image(amy4, 370, -50, 400, 600);
  } else if (index4_gunther2 === 22) {
    image(monster9, 450, -50, 400, 600);
  } else if (index4_gunther2 === 23) {
    image(amy8, 370, -50, 400, 600);
  } else if (index4_gunther2 === 24) {
    image(monster3, 450, -50, 400, 600);
  } else if (index4_gunther2 === 25) {
    image(amy8, 370, -50, 400, 600);
  } else if (index4_gunther2 === 26) {
    image(monster9, 450, -50, 400, 600);
  }

  if (!guntherbgm.isPlaying()) {
    guntherbgm.play(); //looping iffy
  }
  cafebgm.stop();
  guntherBar.show();
  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names4_gunther2[index4_gunther2], 600, 540);
  text(dialogue4_gunther2[index4_gunther2], 600, 625);

  if (index4_gunther2 === 27) {
    push();

    if (mouseX >= 1050 && mouseX <= 1130 && mouseY >= 720 && mouseY <= 800) {
      push();

      image(next, 1050, 740, 80, 80);
      pop();
      cursor(HAND);
    } else {
      push();
      tint(70);
      image(next, 1050, 740, 80, 80);
      pop();
      cursor(ARROW);
    } ///////////////////////////////////

    if (
      mouseX >= 1050 &&
      mouseX <= 1130 &&
      mouseY >= 720 &&
      mouseY <= 900 &&
      mouseIsPressed
    ) {
      state = "d5open";
      guntherbgm.stop();
      guntherBar.hide();
    }
  }
  pop();
  pop();
}

function d5open() {
  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

  //Background Images

  if (index5_open < 9) {
    image(bg5, 0, 0, 1200, 850);
  }

  //portraits

  if (index5_open === 1) {
    image(amy8, 370, -50, 400, 600);
  } else if (index5_open === 2) {
    image(monster9, 350, -50, 400, 600);
  } else if (index5_open === 3) {
    image(fungus2, 370, -50, 400, 600);
  } else if (index5_open === 4) {
    image(rancid7, 350, -50, 400, 600);
  } else if (index5_open === 5) {
    image(amy8, 370, -50, 400, 600);
  } else if (index5_open === 6) {
    image(monster3, 350, -50, 400, 600);
  } else if (index5_open === 7) {
    image(amy8, 370, -50, 400, 600);
  } else if (index5_open === 8) {
    image(amy1, 370, -50, 400, 600);
  }

  if (!cafebgm.isPlaying()) {
    cafebgm.play();
  }

  if (index5_open > 7) {
    rancidBar.show();
    fungusBar.show();
    guntherBar.show();
  }

  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names5_all[index5_open], 600, 540);
  text(dialogue5_talk[index5_open], 600, 625);
  pop();

  push();
  textSize(40);
  textAlign(CENTER);
  if (index5_open === 8) {
    image(dialogue_choice, 50, 590, 540, 100);
    image(dialogue_choice, 620, 590, 540, 100);
    image(dialogue_choice, 320, 710, 540, 100);
    text(`Serve Fun Gus`, 320, 650);
    text(`Serve Sir Rancid`, 890, 650);
    text(`Serve everyone`, 600, 770);
    if (
      mouseX >= 50 &&
      mouseX <= 590 &&
      mouseY >= 590 &&
      mouseY <= 690 &&
      mouseIsPressed &&
      fungusBar.value >= 36
    ) {
      state = "d5fungus1"; // fun gus good

      guntherBar.hide();
      rancidBar.hide();
    } else if (
      mouseX >= 50 &&
      mouseX <= 590 &&
      mouseY >= 590 &&
      mouseY <= 690 &&
      mouseIsPressed &&
      fungusBar.value <= 35
    ) {
      state = "d5fungus2"; // fun gus bad

      guntherBar.hide();
      rancidBar.hide();
    } else if (
      mouseX >= 620 &&
      mouseX <= 1160 &&
      mouseY >= 590 &&
      mouseY <= 690 &&
      mouseIsPressed &&
      rancidBar.value >= 36
    ) {
      state = "d5rancid1"; // sir rancid good
      fungusBar.hide();
      guntherBar.hide();
    } else if (
      mouseX >= 620 &&
      mouseX <= 1160 &&
      mouseY >= 590 &&
      mouseY <= 690 &&
      mouseIsPressed &&
      rancidBar.value <= 35
    ) {
      state = "d5rancid2"; // sir rancid bad
      fungusBar.hide();
      guntherBar.hide();
    } else if (
      mouseX >= 320 &&
      mouseX <= 860 &&
      mouseY >= 710 &&
      mouseY <= 810 &&
      mouseIsPressed &&
      guntherBar.value >= 36
    ) {
      state = "d5gunther1"; //gunther good
      rancidBar.hide();
      fungusBar.hide();
    } else if (
      mouseX >= 320 &&
      mouseX <= 860 &&
      mouseY >= 710 &&
      mouseY <= 810 &&
      mouseIsPressed &&
      guntherBar.value <= 35
    ) {
      state = "d5gunther2"; //gunther bad
      rancidBar.hide();
      fungusBar.hide();
    }
  }
  pop();
}

function d5fungus1() {
  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

  //Background Images

  if (index5_fungus1 < 21) {
    image(bg3, 0, 0, 1200, 850);
  }else if (index5_fungus1 >=21) {
    push();
    tint(60);
    image(bg5, 0, 0, 1200, 850); 
    pop();
  } else noTint();

  //portraits //changed these to sir rancid (ny)

  if (index5_fungus1 === 1) {
    image(monster5, 450, -50, 400, 600);
  } else if (index5_fungus1 === 2) {
    image(rancid5, 350, -50, 400, 600);
  } else if (index5_fungus1 === 3) {
    image(fungus8, 370, -50, 400, 600);
  } else if (index5_fungus1 === 4) {
    image(amy8, 370, -50, 400, 600);
  } else if (index5_fungus1 === 5) {
    image(fungus2, 350, -50, 400, 600);
  } else if (index5_fungus1 === 6) {
    image(amy6, 370, -50, 400, 600);
  } else if (index5_fungus1 === 7) {
    image(fungus4, 350, -50, 400, 600);
  } else if (index5_fungus1 === 8) {
    image(amy4, 370, -50, 400, 600);
  } else if (index5_fungus1 === 9) {
    image(fungus1, 350, -50, 400, 600);
  } else if (index5_fungus1 === 10) {
    image(amy7, 370, -50, 400, 600);
  } else if (index5_fungus1 === 12) {
    image(fungus1, 350, -50, 400, 600);
  } else if (index5_fungus1 === 13) {
    image(amy7, 370, -50, 400, 600);
  } else if (index5_fungus1 === 14) {
    image(fungus7, 350, -50, 400, 600);
  } else if (index5_fungus1 === 15) {
    image(amy5, 370, -50, 400, 600);
  } else if (index5_fungus1 === 16) {
    image(fungus1, 350, -50, 400, 600);
  } else if (index5_fungus1 === 17) {
    image(amy4, 370, -50, 400, 600);
  } else if (index5_fungus1 === 18) {
    image(fungus7, 350, -50, 400, 600);
  } else if (index5_fungus1 === 19) {
    image(amy3, 370, -50, 400, 600);
  } else if (index5_fungus1 === 20) {
    image(fungus2, 350, -50, 400, 600);
  }

  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names5_fungus1[index5_fungus1], 600, 540);
  text(dialogue5_fungus1[index5_fungus1], 600, 625);
  pop();

  if (index5_fungus1 === 21) {
    if (mouseX >= 1050 && mouseX <= 1130 && mouseY >= 720 && mouseY <= 800) {
      push();

      image(next, 1050, 740, 80, 80);
      pop();
      cursor(HAND);
    } else {
      push();
      tint(70);
      image(next, 1050, 740, 80, 80);
      pop();
      cursor(ARROW);
    } ///////////////////////////////////

    if (
      mouseX >= 1050 &&
      mouseX <= 1130 &&
      mouseY >= 720 &&
      mouseY <= 900 &&
      mouseIsPressed
    ) {
    state = "title"; reset();
  }
}
}

function d5fungus2() {
  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

  //Background Images

  if (index5_fungus2 < 10) {
    image(bg5, 0, 0, 1200, 850);
  }else if (index5_fungus2 >=10) {
    push();
    tint(60);
    image(bg5, 0, 0, 1200, 850); 
    pop();
  } else noTint();

  //portraits //

  if (index5_fungus2 === 1) {
    image(monster5, 450, -50, 400, 600);
  } else if (index5_fungus2 === 2) {
    image(rancid5, 350, -50, 400, 600);
  } else if (index5_fungus2 === 3) {
    image(fungus5, 350, -50, 400, 600);
  } else if (index5_fungus2 === 4) {
    image(amy8, 370, -50, 400, 600);
  } else if (index5_fungus2 === 5) {
    image(fungus5, 350, -50, 400, 600);
  } else if (index5_fungus2 === 6) {
    image(amy4, 370, -50, 400, 600);
  } else if (index5_fungus2 === 7) {
    image(fungus8, 350, -50, 400, 600);
  } else if (index5_fungus2 === 8) {
    image(amy4, 370, -50, 400, 600);
  } else if (index5_fungus2 === 9) {
    image(fungus3, 350, -50, 400, 600);
  }

  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names5_fungus2[index5_fungus2], 600, 540);
  text(dialogue5_fungus2[index5_fungus2], 600, 625);
  pop();

  if (index5_fungus2 === 10) {
    if (mouseX >= 1050 && mouseX <= 1130 && mouseY >= 720 && mouseY <= 800) {
      push();

      image(next, 1050, 740, 80, 80);
      pop();
      cursor(HAND);
    } else {
      push();
      tint(70);
      image(next, 1050, 740, 80, 80);
      pop();
      cursor(ARROW);
    } ///////////////////////////////////

    if (
      mouseX >= 1050 &&
      mouseX <= 1130 &&
      mouseY >= 720 &&
      mouseY <= 900 &&
      mouseIsPressed
    ) {
    state = "title"; reset();
  }
}
}

function d5rancid1() {
  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

  //Background Images

  if (index5_rancid1 < 16) {
    image(bg3, 0, 0, 1200, 850);
  } else if (index5_rancid1 >=16) {
    push();
    tint(60);
    image(bg5, 0, 0, 1200, 850); 
    pop();
  } else noTint();

  //portraits //

  if (index5_rancid1 === 1) {
    image(monster5, 450, -50, 400, 600);
  } else if (index5_rancid1 === 2) {
    image(fungus5, 350, -50, 400, 600);
  } else if (index5_rancid1 === 3) {
    image(rancid7, 350, -50, 400, 600);
  } else if (index5_rancid1 === 4) {
    image(amy8, 370, -50, 400, 600);
  } else if (index5_rancid1 === 5) {
    image(rancid7, 350, -50, 400, 600);
  } else if (index5_rancid1 === 6) {
    image(amy1, 370, -50, 400, 600);
  } else if (index5_rancid1 === 7) {
    image(rancid4, 350, -50, 400, 600);
  } else if (index5_rancid1 === 8) {
    image(amy4, 370, -50, 400, 600);
  } else if (index5_rancid1 === 9) {
    image(rancid4, 350, -50, 400, 600);
  } else if (index5_rancid1 === 10) {
    image(amy1, 370, -50, 400, 600);
  } else if (index5_rancid1 === 11) {
    image(rancid2, 350, -50, 400, 600);
  } else if (index5_rancid1 === 12) {
    image(amy4, 370, -50, 400, 600);
  } else if (index5_rancid1 === 13) {
    image(rancid7, 350, -50, 400, 600);
  } else if (index5_rancid1 === 14) {
    image(amy4, 370, -50, 400, 600);
  } else if (index5_rancid1 === 15) {
    image(rancid2, 350, -50, 400, 600);
  }

  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names5_rancid1[index5_rancid1], 600, 540);
  text(dialogue5_rancid1[index5_rancid1], 600, 625);
  pop();

  if (index5_rancid1 === 16) {
    if (mouseX >= 1050 && mouseX <= 1130 && mouseY >= 720 && mouseY <= 800) {
      push();

      image(next, 1050, 740, 80, 80);
      pop();
      cursor(HAND);
    } else {
      push();
      tint(70);
      image(next, 1050, 740, 80, 80);
      pop();
      cursor(ARROW);
    } ///////////////////////////////////

    if (
      mouseX >= 1050 &&
      mouseX <= 1130 &&
      mouseY >= 720 &&
      mouseY <= 900 &&
      mouseIsPressed
    ) {
    state = "title"; reset();
  }
}
}

function d5rancid2() {
  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

  //Background Images

  if (index5_rancid2 < 10) {
    image(bg5, 0, 0, 1200, 850);
  }else if (index5_rancid2 >=10) {
    push();
    tint(60);
    image(bg5, 0, 0, 1200, 850); 
    pop();
  } else noTint();

  //portraits //
  if (index5_rancid2 === 1) {
    image(monster5, 370, -50, 400, 600);
  } else if (index5_rancid2 === 2) {
    image(fungus5, 350, -50, 400, 600);
  } else if (index5_rancid2 === 3) {
    image(rancid6, 370, -50, 400, 600);
  } else if (index5_rancid2 === 4) {
    image(amy2, 370, -50, 400, 600);
  } else if (index5_rancid2 === 5) {
    image(rancid5, 350, -50, 400, 600);
  } else if (index5_rancid2 === 6) {
    image(amy8, 370, -50, 400, 600);
  } else if (index5_rancid2 === 7) {
    image(rancid5, 350, -50, 400, 600);
  } else if (index5_rancid2 === 8) {
    image(amy8, 370, -50, 400, 600);
  } else if (index5_rancid2 === 9) {
    image(rancid6, 350, -50, 400, 600);
  }
  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names5_rancid2[index5_rancid2], 600, 540);
  text(dialogue5_rancid2[index5_rancid2], 600, 625);
  pop();

  if (index5_rancid2 === 10) {
    if (mouseX >= 1050 && mouseX <= 1130 && mouseY >= 720 && mouseY <= 800) {
      push();

      image(next, 1050, 740, 80, 80);
      pop();
      cursor(HAND);
    } else {
      push();
      tint(70);
      image(next, 1050, 740, 80, 80);
      pop();
      cursor(ARROW);
    } ///////////////////////////////////

    if (
      mouseX >= 1050 &&
      mouseX <= 1130 &&
      mouseY >= 720 &&
      mouseY <= 900 &&
      mouseIsPressed
    ) {
    state = "title"; reset();
  }
}
}

function d5gunther1() {
  if (index5_gunther1 < 15) {
    image(bg5, 0, 0, 1200, 850);
  } else if (index5_gunther1 >=15) {
    push();
    tint(60);
    image(bg5, 0, 0, 1200, 850); 
    pop();
  } else noTint();

  //portraits //

  if (index5_gunther1 === 1) {
    image(rancid7, 350, -50, 400, 600);
  } else if (index5_gunther1 === 2) {
    image(fungus8, 350, -50, 400, 600);
  } else if (index5_gunther1 === 3) {
    image(monster9, 450, -50, 400, 600);
  } else if (index5_gunther1 === 4) {
    image(amy8, 370, -50, 400, 600);
  } else if (index5_gunther1 === 5) {
    image(monster5, 450, -50, 400, 600);
  } else if (index5_gunther1 === 6) {
    image(amy8, 370, -50, 400, 600);
  } else if (index5_gunther1 === 7) {
    image(monster9, 450, -50, 400, 600);
  } else if (index5_gunther1 === 8) {
    image(amy4, 370, -50, 400, 600);
  } else if (index5_gunther1 === 9) {
    image(monster9, 450, -50, 400, 600);
  } else if (index5_gunther1 === 10) {
    image(amy4, 370, -50, 400, 600);
  } else if (index5_gunther1 === 11) {
    image(monster9, 450, -50, 400, 600);
  } else if (index5_gunther1 === 12) {
    image(amy4, 370, -50, 400, 600);
  } else if (index5_gunther1 === 13) {
    image(monster9, 370, -50, 400, 600);
  } else if (index5_gunther1 === 14) {
    image(amy5, 370, -50, 400, 600);
  }

  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names5_gunther1[index5_gunther1], 600, 540);
  text(dialogue5_gunther1[index5_gunther1], 600, 625);
  pop();

  if (index5_gunther1 === 15) {
    if (mouseX >= 1050 && mouseX <= 1130 && mouseY >= 720 && mouseY <= 800) {
      push();

      image(next, 1050, 740, 80, 80);
      pop();
      cursor(HAND);
    } else {
      push();
      tint(70);
      image(next, 1050, 740, 80, 80);
      pop();
      cursor(ARROW);
    } ///////////////////////////////////

    if (
      mouseX >= 1050 &&
      mouseX <= 1130 &&
      mouseY >= 720 &&
      mouseY <= 900 &&
      mouseIsPressed
    ) {
    state = "title"; reset();
  }
}}

function d5gunther2() {
  if (index5_gunther2 < 11) {
    image(bg5, 0, 0, 1200, 850);
  }else if (index5_gunther2 >=11) {
    push();
    tint(60);
    image(bg5, 0, 0, 1200, 850); 
    pop();
  } else noTint();

  //portraits //

  if (index5_gunther2 === 1) {
    image(rancid7, 350, -50, 400, 600);
  } else if (index5_gunther2 === 2) {
    image(fungus8, 350, -50, 400, 600);
  } else if (index5_gunther2 === 3) {
    image(amy8, 370, -50, 400, 600);
  } else if (index5_gunther2 === 4) {
    image(monster1, 450, -50, 400, 600);
  } else if (index5_gunther2 === 5) {
    image(amy2, 370, -50, 400, 600);
  } else if (index5_gunther2 === 6) {
    image(monster7, 450, -50, 400, 600);
  } else if (index5_gunther2 === 7) {
    image(amy2, 370, -50, 400, 600);
  } else if (index5_gunther2 === 8) {
    image(monster9, 450, -50, 400, 600);
  } else if (index5_gunther2 === 9) {
    image(amy2, 370, -50, 400, 600);
  } else if (index5_gunther2 === 10) {
    image(monster9, 450, -50, 400, 600);
  }

  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names5_gunther2[index5_gunther2], 600, 540);
  text(dialogue5_gunther2[index5_gunther2], 600, 625);
  pop();

  if (index5_gunther2 === 11) {
    if (mouseX >= 1050 && mouseX <= 1130 && mouseY >= 720 && mouseY <= 800) {
      push();

      image(next, 1050, 740, 80, 80);
      pop();
      cursor(HAND);
    } else {
      push();
      tint(70);
      image(next, 1050, 740, 80, 80);
      pop();
      cursor(ARROW);
    } ///////////////////////////////////

    if (
      mouseX >= 1050 &&
      mouseX <= 1130 &&
      mouseY >= 720 &&
      mouseY <= 900 &&
      mouseIsPressed
    ) {
    state = "title"; reset();
    }
}}

//cooking cupcake, brewing coffee, beating meat

function cupcake() {
  push();
  
  //music
  if (!cookingbgm.isPlaying()) {
    cookingbgm.play();
    outputVolume(0.6);
  }

  // ui
  push();

  background(210, 209, 187);
  rectMode(LEFT);
  textAlign(CENTER);
  fill(195, 168, 144); //table
  rect(0, 300, 1200, 600); //table
  image(cupcakebase, 400, 0, 400, 640);
  pop();

  //console.log(mouseX, mouseY);

  //tint
  push();

  tint(90);
  image(frost, 840, 450, 200, 200);
  image(frog, 840, 200, 200, 200);
  image(trash, 130, 620, 150, 200);
  pop();

  if (mouseX >= 130 && mouseX <= 310 && mouseY >= 620 && mouseY <= 820) {
    push();
    noTint();
    image(trash, 130, 620, 150, 200);
    pop();
  }

  if (
    mouseX >= 840 &&
    mouseX <= 1040 &&
    mouseY >= 450 &&
    mouseY <= 650 &&
    frosting == false
  ) {
    push();
    noTint();
    image(frost, 840, 450, 200, 200);
    pop();
  }
  if (
    mouseX >= 840 &&
    mouseX <= 1040 &&
    mouseY >= 200 &&
    mouseY <= 400 &&
    frogleg == false &&
    frosting == true
  ) {
    push();
    noTint();
    image(frog, 840, 200, 200, 200);
    pop();
  }
  push();
  if (order < 3) {
    push();
    tint(20);
    image(next, 820, 20, 250, 140);
    if (frogleg === true && frosting === true) {
      noTint();
      image(next, 820, 20, 250, 140);
    }
   
    pop();
  }

  textSize(40);

  fill(0);
  textAlign(CENTER);
  text(timer + " sec", 150, 50);
  text("Done: " + order, 150, 100);
  if (frameCount % 60 === 0 && timer > 0) {
    timer--;
    if (timer === 0) {
      state = "coffeeBrew";
      dingsfx.play();
      fungusBar.add(-5)
    }
  }
  pop();

  // console.log(mouseX, mouseY);

  //adding cursor changes
  if (mouseX >= 130 && mouseX <= 310 && mouseY >= 620 && mouseY <= 820) {
    cursor("grab");
    noTint(); //trash
  } else if (
    mouseX >= 840 &&
    mouseX <= 1040 &&
    mouseY >= 450 &&
    mouseY <= 650 &&
    frosting === false
  ) {
    cursor("grab"); //frosting
  } else if (
    mouseX >= 840 &&
    mouseX <= 1040 &&
    mouseY >= 200 &&
    mouseY <= 400 &&
    frosting === true &&
    frogleg === false
  ) {
    cursor("grab"); //frogleg
  } else if (
    frogleg === true &&
    frosting === true &&
    mouseX >= 820 &&
    mouseX <= 1070 &&
    mouseY >= 20 &&
    mouseY <= 160
  ) {
    cursor(HAND); //next bar
  } else {
    cursor(ARROW);
  }

  //click on items
  if (
    mouseX >= 130 &&
    mouseX <= 310 &&
    mouseY >= 620 &&
    mouseY <= 820 &&
    mouseIsPressed
  ) {
    frosting = false;
    frogleg = false;
    isekaisfx.play();
  } //trash

  if (
    frosting === false &&
    mouseX >= 840 &&
    mouseX <= 1040 &&
    mouseY >= 450 &&
    mouseY <= 650 &&
    mouseIsPressed
  ) {
    frosting = true;
  } //frosting

  if (
    frogleg === false &&
    frosting === true &&
    mouseX >= 840 &&
    mouseX <= 1040 &&
    mouseY >= 200 &&
    mouseY <= 400 &&
    mouseIsPressed
  ) {
    frogleg = true;
  } //frog leg

  if (frosting === true) {
    image(cupcakefrosted, 400, 0, 400, 640);
  }

  if (frogleg === true) {
    image(cupcakefinished, 400, 0, 400, 640);
  }

  if (
    frogleg === true &&
    frosting === true &&
    mouseX >= 820 &&
    mouseX <= 1070 &&
    mouseY >= 20 &&
    mouseY <= 160 &&
    mouseIsPressed
  ) {
    order++;
    dingsfx.play();
    frogleg = false;
    frosting = false;
  } // next and finish button

  if (order === 3) {
    state = "coffeeBrew";
    if (timer >= 15) {
      fungusBar.add(5);
      console.log("Gus's Love increased! Now:", fungusBar.value);
      goodsfx.play();
    } else if (timer === 0) {
      fungusBar.subtract(5);
      console.log("Gus's Love decreased! Now:", fungusBar.value);
      badsfx.play();
    }
    pop();
  }

  push();
  //HELP ME GUNTHER AHHHH
  textAlign(CENTER);
  fill(174, 213, 129);
  ellipse(80, 160, 75, 75);
  textSize(40);
  fill(0);
  text("i", 78, 170);

  if (mouseX >= 43 && mouseX <= 117 && mouseY >= 137 && mouseY <= 197) {
    drawCafeTextbox(
      25,
      350,
      370,
      160,
      `"I dunno anything about
cooking but I do know they 
like it fast. ORDER Up!"`,
      "Gunther's Tip"
    );
    image(gunthermini1, 310, 390, 75, 100);
  }
  pop();
  //End of help bubble
} //////////////////

function coffeeBrew() {
  //music
  if (!cookingbgm.isPlaying()) {
    cookingbgm.play();
  }

  push();

  background(210, 209, 187);
  rectMode(LEFT);
  textAlign(LEFT);
  fill(195, 168, 144); //table
  rect(0, 300, 1200, 600); //table
  //image(trash, 130, 620, 150, 200);
  fill(80);
  image(coffee, 450, 120, 300, 400);

  console.log(mouseX, mouseY);

  push();
  //HELP ME GUNTHER AHHHH

  fill(174, 213, 129);
  ellipse(80, 160, 75, 75);
  textSize(40);
  fill(0);
  text("i", 75, 170);

  if (mouseX >= 43 && mouseX <= 117 && mouseY >= 137 && mouseY <= 197) {
    drawCafeTextbox(
      25,
      350,
      370,
      160,
      `"Gotta time this one I think. 
  Then grab it when it's hot!"`
    );
    image(gunthermini1, 310, 390, 75, 100);
  }

  //End of help bubble

  pop();

  //grey background bar
  push();
  fill(80);
  rect(350, 550, 500, 50); //progress bar
  pop();

  //colored bar on top

  push();
  //coffee ready button

  let x1 = 880,
    y1 = 420,
    w1 = 250,
    h1 = 80,
    r1 = 20;
  // detect hover
  let hovering1 =
    mouseX > x1 && mouseX < x1 + w1 && mouseY > y1 && mouseY < y1 + h1;
  // style changes on hover
  if (hovering1) fill(211, 152, 88);
  else fill(133, 67, 30);
  if (hovering1) cursor(HAND);
  else cursor(ARROW);

  stroke(255);
  strokeWeight(4);
  rect(x1, y1, w1, h1, r1);
  noStroke();
  fill(255);
  textSize(50);
  textAlign(CENTER, CENTER);
  text("Ready!", x1 + w1 / 2, y1 + h1 / 2);
  pop();
  push();
  if (timer4 === 11) {
    dingsfx.play();
  }
  if (timer4 === 2) {
    dingsfx.play();
  }

  if (timer4 <= 20 && timer4 >= 12) {
    fill(255, 180, 80);
    rect(350, 550, w4, 50); //progress bar 2
  } else if (timer4 <= 11 && timer4 >= 7) {
    fill(0, 255, 0);

    rect(350, 550, w4, 50); //progress bar 2
  } else if (timer4 <= 6) {
    fill(255, 0, 0);
    rect(350, 550, w4, 50); //progress bar 2
  }

  pop();

  if (state === "coffeeBrew") {
    if (frameCount % 60 === 0 && timer4 > 0) {
      timer4--;
      w4 -= 25;
    }
    if (timer4 <= 0) {
      fungusBar.add(-10);
      state = "coffeeTop";
      badsfx.play();
    }
    if (timer4 <= 20 && timer4 >= 12) {
      if (
        mouseX > x1 &&
        mouseX < x1 + w1 &&
        mouseY > y1 &&
        mouseY < y1 + h1 &&
        mouseIsPressed
      ) {
        fungusBar.add(-5);
        state = "coffeeTop";
        badsfx.play();
      }
    } else if (timer4 <= 11 && timer4 >= 7) {
      if (
        mouseX > x1 &&
        mouseX < x1 + w1 &&
        mouseY > y1 &&
        mouseY < y1 + h1 &&
        mouseIsPressed
      ) {
        fungusBar.add(15);
        state = "coffeeTop";
        goodsfx.play();
      }
    } else if (timer4 <= 6) {
      if (
        mouseX > x1 &&
        mouseX < x1 + w1 &&
        mouseY > y1 &&
        mouseY < y1 + h1 &&
        mouseIsPressed
      ) {
        fungusBar.add(-5);
        state = "coffeeTop";
        badsfx.play();
      }
    } 
  }
}

function coffeeTop() {
  push();
  background(210, 209, 187);
  rectMode(LEFT);
  textAlign(LEFT);
  fill(195, 168, 144); //table
  rect(0, 300, 1200, 600); //table

  fill(80);
  image(coffee, 450, 120, 300, 400);
  pop();
  //tint could probably combine this with the grab block but no time now
  push();
  tint(90);
  image(sugarTop, 840, 450, 200, 200);
  image(inkTop, 840, 200, 200, 200);
  image(trash, 130, 620, 150, 200);

  if (mouseX >= 130 && mouseX <= 310 && mouseY >= 620 && mouseY <= 820) {
    push();
    noTint();
    image(trash, 130, 620, 150, 200);
    pop();
  }

  if (
    mouseX >= 870 &&
    mouseX <= 1010 &&
    mouseY >= 540 &&
    mouseY <= 620 &&
    sugar == false
  ) {
    push();
    noTint();
    image(sugarTop, 840, 450, 200, 200);
    pop();
  }
  if (
    mouseX >= 840 &&
    mouseX <= 1040 &&
    mouseY >= 280 &&
    mouseY <= 400 &&
    squidink == false &&
    sugar == true
  ) {
    push();
    noTint();
    image(inkTop, 840, 200, 200, 200);
    pop();
  }
  pop();

  //adding cursor changes
  if (mouseX >= 130 && mouseX <= 310 && mouseY >= 620 && mouseY <= 820) {
    cursor("grab");
    noTint(); //trash
  } else if (
    mouseX >= 870 &&
    mouseX <= 1010 &&
    mouseY >= 540 &&
    mouseY <= 620 &&
    sugar === false
  ) {
    cursor("grab"); //sugar
  } else if (
    mouseX >= 840 &&
    mouseX <= 1040 &&
    mouseY >= 270 &&
    mouseY <= 400 &&
    squidink == false &&
    sugar == true
  ) {
    cursor("grab"); //squidink
  } else if (
    squidink === true &&
    sugar === true &&
    mouseX >= 820 &&
    mouseX <= 1070 &&
    mouseY >= 20 &&
    mouseY <= 160
  ) {
    //done bar
    cursor(HAND);
  } else {
    cursor(ARROW);
  }

  push();
  tint(20);

  image(finishorder, 820, 20, 250, 140);
  if (squidink === true && sugar === true) {
    noTint();

    image(finishorder, 820, 20, 250, 140);
  }

  pop();
  push();
  //HELP ME GUNTHER AHHHH

  fill(174, 213, 129);
  ellipse(80, 160, 75, 75);
  textSize(40);
  fill(0);
  text("i", 75, 170);

  if (mouseX >= 43 && mouseX <= 117 && mouseY >= 137 && mouseY <= 197) {
    drawCafeTextbox(
      25,
      350,
      370,
      160,
      `"You just do the same thing 
as you did with the cupcake."`
    );
    image(gunthermini1, 315, 390, 75, 100);
  }

  //End of help bubble

  pop();

  push();
  textSize(40);
  fill(0);
  text(timer2 + " sec", 50, 50);

  pop();
  push();
  if (frameCount % 60 === 0 && timer2 > 0) {
    timer2--;
    if (timer2 === 0) {
      state = "fungusserve";
      noTint();
    }
  }
  pop();
  //click on items
  if (
    mouseX >= 130 &&
    mouseX <= 310 &&
    mouseY >= 620 &&
    mouseY <= 820 &&
    mouseIsPressed
  ) {
    sugar = false;
    squidink = false;
    isekaisfx.play();
  } //trash

  if (
    sugar === false &&
    mouseX >= 870 &&
    mouseX <= 1010 &&
    mouseY >= 530 &&
    mouseY <= 630 &&
    mouseIsPressed
  ) {
    sugar = true;
    console.log("sweet!");
  } //sugar

  if (
    squidink === false &&
    sugar === true &&
    mouseX >= 840 &&
    mouseX <= 1040 &&
    mouseY >= 270 &&
    mouseY <= 400 &&
    mouseIsPressed
  ) {
    squidink = true;
    console.log("inked!");
  } //ink

  if (sugar === true) {
    image(coffeeSugar, 450, 120, 300, 400);
  }

  console.log(mouseX, mouseY);
  if (squidink === true) {
    image(coffeeFinished, 450, 120, 300, 400);
  }

  if (
    squidink === true &&
    sugar === true &&
    mouseX >= 820 &&
    mouseX <= 1070 &&
    mouseY >= 20 &&
    mouseY <= 160 &&
    mouseIsPressed
  ) {
    order2++;
    dingsfx.play();
    squidink = false;
    sugar = false;
  }

  if (order2 === 1) {
    state = "fungusserve";
    noTint();
    if (timer2 >= 15) {
      fungusBar.add(5);
      cookingbgm.stop();
    } else if (timer2 === 0) {
      fungusBar.add(-5);
      badsfx.play();
      cookingbgm.stop();
    }
  }
  pop();
}

function beatMeat() {
  cafebgm.stop();
  push();
  background(210, 209, 187);
  rectMode(LEFT);
  textAlign(LEFT);
  fill(195, 168, 144); //table
  rect(0, 300, 1200, 600); //table
  image(trash, 130, 620, 150, 200);
  fill(80);
  image(rawMeat, 400, 300, 400, 200); //meat
  rect(350, 600, 500, 50); //progress bar
  fill(0, 255, 0);
  rect(350, 600, w, 50); //progress bar 2
  if (w > 500) {
    state = "chopMeat";
    rancidBar.add(5);
  }
  pop();

  //console.log(mouseX, mouseY);

  //beat it hammer time
  push();
  translate(760, 340); // pivot point of the hammer
  rotate(angle);
  imageMode(CENTER);
  image(hammer, 0, 0, 250, 250);

  pop();
  push();

  //HELP ME GUNTHER AHHHH

  fill(174, 213, 129);
  ellipse(80, 160, 75, 75);
  textSize(40);
  fill(0);
  text("i", 78, 170);

  if (mouseX >= 43 && mouseX <= 117 && mouseY >= 137 && mouseY <= 197) {
    textSize(25);

    drawCafeTextbox(
      25,
      350,
      370,
      160,
      `"Here's a SPACE to beat
    the meat! How? I forgot?`,
      "Gunther's Tip"
    );
    image(gunthermini1, 300, 390, 75, 100);
  }

  //End of help bubble

  pop();
}

function chopMeat() {
  push();
  background(210, 209, 187);
  rectMode(LEFT);
  textAlign(LEFT);
  fill(195, 168, 144); //table
  rect(0, 300, 1200, 600); //table
  image(trash, 130, 620, 150, 200);
  fill(80);

  if (w2 === 0) {
    image(rawMeat, 400, 300, 400, 200); //meat
  } else if (w2 === 200) {
    image(choppedMeat1, 400, 300, 400, 200); //meat
  } else if (w2 === 400) {
    image(choppedMeat2, 400, 300, 400, 200); //meat
  } else if (w2 >= 500) {
    image(choppedMeat3, 400, 300, 400, 200); //meat
  }

  rect(350, 600, 500, 50); //progress bar
  fill(0, 255, 0);
  rect(350, 600, w2, 50); //progress bar 2
  if (w2 > 500) {
    state = "cookMeat";
    rancidBar.add(5);
    //dingsfx.play();
  }
  pop();

  push();
  translate(760, 340);
  rotate(angle);
  imageMode(CENTER);
  image(knife, 0, 0, 250, 250);
  pop();

  push();
  //HELP ME GUNTHER AHHHH

  fill(174, 213, 129);
  ellipse(80, 160, 75, 75);
  textSize(40);
  fill(0);
  text("i", 75, 170);

  if (mouseX >= 43 && mouseX <= 117 && mouseY >= 137 && mouseY <= 197) {
    drawCafeTextbox(
      25,
      350,
      370,
      160,
      `"Haha chop chop! The 
      customer's waitin'!"`,
      "Gunther's Tip"
    );
    image(gunthermini2, 280, 390, 75, 100);
  }

  //End of help bubble

  pop();
}

function cookMeat() {
  chopsfx.stop();

  // determine which zone timer3 is currently in
  let newZone;

  if (timer3 > 12) {
    newZone = "early";
  } else if (timer3 > 7) {
    newZone = "good";
  } else {
    newZone = "late";
  }

  // play sound when entering the good zone
  if (newZone !== currentZone) {
    if (newZone === "early" || newZone === "good" || newZone === "late") {
      sizzlesfx.play();
    }
  }

  // update zone
  currentZone = newZone;

  push();
  background(210, 209, 187);
  rectMode(LEFT);
  textAlign(LEFT);
  fill(195, 168, 144); //table
  rect(0, 300, 1200, 600); //table
  image(trash, 130, 620, 150, 200);
  fill(80);
  image(frypan, 380, 300, 700, 250); //pan
  image(cookMeat1, 400, 300, 400, 200); //meat

  pop();

  if (state === "cookMeat" && timer3 > 0) {
    timer3 -= deltaTime / 1000; // subtract real seconds
    if (timer3 < 0) timer3 = 0;

    // update bar width
    w3 = map(timer3, 0, timer3Max, 0, w3Max);
  }

  push();
  fill(80);
  rect(350, 600, 500, 50); //progress bar
  pop();

  //i think it'd be funny if he was happier with raw meat. so early is good
  if (timer3 > EARLY_ZONE) {
    // early — perf
    barColor = color(0, 255, 0); // green
  } else if (timer3 > PERFECT_ZONE) {
    // perfect — GOOD zone
    barColor = color(255, 180, 80); // orange
  } else {
    // late — bad zone
    barColor = color(255, 80, 80); // red
  }
  push();
  fill(barColor);
  rect(350, 600, w3, 50);
  pop();

  push();
  //meat ready button

  let x2 = 880,
    y2 = 420,
    w2 = 250,
    h2 = 80,
    r2 = 20;
  // detect hover
  let hovering1 =
    mouseX > x2 && mouseX < x2 + w2 && mouseY > y2 && mouseY < y2 + h2;
  if (hovering1) fill(211, 152, 88);
  else fill(133, 67, 30);
  if (hovering1) cursor(HAND);
  else cursor(ARROW);

  stroke(255);
  strokeWeight(4);
  rect(x2, y2, w2, h2, r2);
  noStroke();
  fill(255);
  textSize(50);
  textAlign(CENTER, CENTER);
  text("Ready!", x2 + w2 / 2, y2 + h2 / 2);

  pop();

  if (timer3 === 5) {
    sizzlesfx.play();
  }

  push();
  //HELP ME GUNTHER AHHHH

  fill(174, 213, 129);
  ellipse(80, 160, 75, 75);
  textSize(40);
  fill(0);
  text("i", 75, 170);
  console.log(mouseX, mouseY);
  if (mouseX >= 43 && mouseX <= 117 && mouseY >= 137 && mouseY <= 197) {
    drawCafeTextbox(
      25,
      350,
      370,
      160,
      `"Watch the meat's color!"
    What would a Zombie want?`,
      "Gunther's Tip"
    );
    image(gunthermini2, 315, 390, 75, 100);
  }

  //End of help bubble

  pop();

  //change meat image
  push();

  if (timer3 <= 20 && timer3 >= 12) {
    image(cookMeat1, 400, 300, 400, 200);
  } else if (timer3 <= 12 && timer3 >= 7) {
    image(cookMeat2, 400, 300, 400, 200);
  } else if (timer3 <= 6) {
    image(cookMeat3, 400, 300, 400, 200);
  }
  pop();
}

function fungusserve() {
  noTint();
  cafebgm.stop();
  cursor(ARROW);
  //background(69);

  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

  //Background Images

  if (index1_1 <= 3) {
    image(bg5, 0, 0, 1200, 850);
  }

  //portraits

  if (index1_1 === 1) {
    image(amy3, 370, -50, 400, 600);
  } else if (index1_1) {
    if (fungusBar.value > 10) {
      image(fungus2, 350, -50, 400, 600);
    } else {
      image(fungus3, 350, -50);
    }
  } else if (index1_1 === 3) {
    image(amy1, 370, -50, 400, 600);
  }
  if (index1_1 > 2) {
    fungusBar.show();
  }

  //dialogue
  push();
  noTint();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  //fill(0);
  textSize(40);
  fill(0);
  text(names1_1[index1_1], 600, 540);
  if (fungusBar.value > 10) {
    text(dialogue1_3[index1_1], 600, 625);
  } else {
    text(dialogue1_1[index1_1], 600, 625);
  }
  pop();

  //dialogue choices

  push();
  textSize(30);
  textAlign(CENTER);
  if (index1_1 === 3) {
    image(dialogue_choice, 50, 650, 540, 100);
    image(dialogue_choice, 620, 650, 540, 100);
    fill(0);
    text("Talk more to the mushroom", 320, 710);
    text("Leave the mushroom be", 870, 710);
    if (
      mouseX >= 50 &&
      mouseX <= 590 &&
      mouseY >= 650 &&
      mouseY <= 750 &&
      mouseIsPressed
    ) {
      state = "d1talk";
      fungusBar.add(10);
      console.log("Fun Gus's Love increased! Now:", fungusBar.value);
    } else if (
      mouseX >= 620 &&
      mouseX <= 1160 &&
      mouseY >= 650 &&
      mouseY <= 750 &&
      mouseIsPressed
    ) {
      state = "d1leave";
      fungusBar.add(-5);
      badsfx.play();
      console.log("Fun Gus's Love decreased! Now:", fungusBar.value);
      fungusbgm.stop();
    }
  }

  pop();
} //////////////////

function rancidserve() {
  background(69);

  //formatting
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);
  pop();

  //Background Images

  if (index2_1 <= 3) {
    image(bg5, 0, 0, 1200, 850);
  }

  //portraits

  if (index2_1 === 0) {
    image(amy3, 370, -50, 400, 600);
  } else if (index2_1 === 1) {
    if (rancidBar.value >= 10) {
      image(rancid2, 350, -50, 400, 600);
    } else {
      image(rancid5, 350, -50, 400, 600);
    }
  } else if (index2_1 === 2) {
    image(amy1, 370, -50, 400, 600);
  }

  rancidBar.show();

  //dialogue
  push();
  textAlign(CENTER);
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(names2_1[index2_1], 600, 540);
  if (rancidBar.value >= 10) {
    text(dialogue2_3[index2_1], 600, 625);
  } else {
    text(dialogue2_1[index2_1], 600, 625);
  }
  pop();

  //dialogue choices

  push();
  textSize(30);
  textAlign(CENTER);
  if (index2_1 === 2) {
    image(dialogue_choice, 50, 650, 540, 100);
    image(dialogue_choice, 620, 650, 540, 100);
    fill(0);
    text("Talk more to the zombie", 320, 710);
    text("Leave the zombie be", 870, 710);
    if (
      mouseX >= 50 &&
      mouseX <= 590 &&
      mouseY >= 650 &&
      mouseY <= 750 &&
      mouseIsPressed
    ) {
      state = "d2talk";
      rancidBar.add(10);
      console.log("Sir Rancid's Love increased! Now:", rancidBar.value);
    } else if (
      mouseX >= 620 &&
      mouseX <= 1160 &&
      mouseY >= 650 &&
      mouseY <= 750 &&
      mouseIsPressed
    ) {
      state = "d2leave";
      rancidBar.add(-5);
      rancidBar.hide();
      badsfx.play();
      console.log("Sir Rancid's Love decreased! Now:", rancidBar.value);
    }
  }

  pop();
} //////////////////

function mousePressed() {
  if (state === "title") {
    //for start button
    // button properties
    let x = 500,
      y = 620,
      w = 250,
      h = 80,
      r = 20;
    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
      console.log("Button clicked! Begin game!");
    }
  }

  if (state === "coffeeBrew") {
    //coffee button

    let x1 = 880,
      y1 = 420,
      w1 = 250,
      h1 = 80,
      r1 = 20;
    if (mouseX > x1 && mouseX < x1 + w1 && mouseY > y1 && mouseY < y1 + h1) {
      console.log("Button clicked! Finish coffee!");
    }
  }

  if (state === "cookMeat") {
    //meat button

    let x2 = 880,
      y2 = 420,
      w2 = 250,
      h2 = 80,
      r2 = 20;
    if (mouseX > x2 && mouseX < x2 + w2 && mouseY > y2 && mouseY < y2 + h2) {
      console.log("Button clicked! Finish meat!"); cookingbgm.stop();
      if (timer3 <= 20 && timer3 >= 12) {
        if (mouseIsPressed) {
          rancidBar.add(10);
          state = "rancidserve"; //raw
        }
      } else if (timer3 < 12 && timer3 > 6) {
        if (mouseIsPressed) {
          rancidBar.add(-5);
          state = "rancidserve"; //medium
        }
      } else if (timer3 <= 6) {
        if (mouseIsPressed) {
          rancidBar.add(-15);
          state = "rancidserve"; //well done
        }
      }
    }
  }

  //scene switches

  if (state === "opening" && index < 31) {
    index++;
  } //has next

  if (state === "d1open" && index1 < 16) {
    index1++;
  } //has next

  if (state === "fungusserve" && index1_1 < 3) {
    index1_1++;
  }

  if (state === "d1talk" && index1_talk < 9) {
    index1_talk++;
  }

  if (state === "d1leave" && index1_leave < 2) {
    index1_leave++;
  }

  if (state === "d1second" && index1_second < 19) {
    index1_second++;
  }

  if (state === "d1third" && index1_third < 13) {
    index1_third++;
  }

  if (state === "d1end" && index1_end < 14) {
    index1_end++;
  }

  if (state === "d2open" && index2_open < 20) {
    index2_open++;
  }

  if (state === "rancidserve" && index2_1 < 2) {
    index2_1++;
  }

  if (state === "d2talk" && index2_talk < 7) {
    index2_talk++;
  }

  if (state === "d2leave" && index2_leave < 2) {
    index2_leave++;
  }
  if (state === "d2second" && index2_second < 11) {
    index2_second++;
  } //has next

  if (state === "d2third" && index2_third < 9) {
    index2_third++;
  } //has next

  if (state === "d3open" && index3_open < 7) {
    index3_open++;
  }
 if (state === "d3monster1" && index3_monster1 < 8) {
    index3_monster1++;
  } //no next i think

  if (state === "d3monster2" && index3_monster2 < 9) {
    index3_monster2++;
  } //no next i think

  if (state === "d3monster3" && index3_monster3 < 2) {
    index3_monster3++;
  } //has next

  if (state === "d3monster4" && index3_monster4 < 8) {
    index3_monster4++;
  } //has next

  if (state === "d3monster5" && index3_monster5 < 5) {
    index3_monster5++;
  } //has next

   if (state === "d3monster6" && index3_monster6 < 7) {
    index3_monster6++;
  } //has next

  if (state === "d3rancid" && index3_rancid < 9) {
    index3_rancid++;
  }

  if (state === "d3rancid1" && index3_rancid1 < 6) {
    index3_rancid1++;
  }

  if (state === "d3rancid2" && index3_rancid2 < 6) {
    index3_rancid2++;
  }

  if (state === "d3rancid3" && index3_rancid3 < 2) {
    index3_rancid3++;
  }

  if (state === "d3fungus" && index3_fungus < 10) {
    index3_fungus++;
  }

  if (state === "d3fungus1" && index3_fungus1 < 34) {
    index3_fungus1++;
  }

  if (state === "d3fungus2" && index3_fungus2 < 7) {
    index3_fungus2++;
  }

  if (state === "d3fungus2_first" && index3_fungus2_1 < 21) {
    index3_fungus2_1++;
  }
  if (state === "d3fungus2_second" && index3_fungus2_2 < 2) {
    index3_fungus2_2++;
  }

  if (state === "d3fungus3" && index3_fungus3 < 23) {
    index3_fungus3++;
  }

  if (state === "d4open" && index4_open < 14) {
    index4_open++;
  }

  if (state === "d4gunther" && index4_gunther < 21) {
    index4_gunther++;
  }
  if (state === "d4gunther1" && index4_gunther1 < 15) {
    index4_gunther1++;
  }
  if (state === "d4gunther2" && index4_gunther2 < 27) {
    index4_gunther2++;
  }

  if (state === "d5open" && index5_open < 8) {
    index5_open++;
  }

  if (state === "d5fungus1" && index5_fungus1 < 21) {
    index5_fungus1++;
  }

  if (state === "d5fungus2" && index5_fungus2 < 10) {
    index5_fungus2++;
  }

  if (state === "d5rancid1" && index5_rancid1 < 16) {
    index5_rancid1++;
  }

  if (state === "d5rancid2" && index5_rancid2 < 10) {
    index5_rancid2++;
  }
  if (state === "d5gunther1" && index5_gunther1 < 15) {
    index5_gunther1++;
  }
  if (state === "d5gunther2" && index5_gunther2 < 11) {
    index5_gunther2++;
  }

  //music and sfx best and quickest way I could load em without crashing my browser
  if (state === "opening" && index === 3) {
    isekaisfx.play();
  }
  if (state === "opening" && index === 4) {
    isekaisfx.stop();
  }
  if (state === "opening" && index === 5) {
    if (!forestbgm.isPlaying()) {
      forestbgm.play();
    }
    introbgm.stop();
  }

  if (state === "opening" && index === 10) {
    scaredbgm.play();
    forestbgm.stop();
  }
  if (state === "opening" && index === 20) {
    scaredbgm.stop();
    cafebgm.play();
  }

  if (state === "d1open" && index1 === 10) {
    if (!fungusbgm.isPlaying()) {
      fungusbgm.play(); //trying to get looping to work, iffy
    }
    cafebgm.stop();
  }

  if (state === "fungusserve" && index1_1 === 1) {
    if (!cafebgm.isPlaying()) {
      cafebgm.play(); //trying to get looping to work, iffy
    }
    if (state === "d2open" && index2_open === 6) {
      if (!rancidbgm.isPlaying()) {
        rancidbgm.play();
      }
      cafebgm.stop();
    }


    if (state === "d3fungus" && index3_fungus === 2) {
      forestbgm.stop();
      cafebgm.stop();
      guntherbgm.stop();
      if (!fungusbgm.isPlaying()) {
        fungusbgm.play(); //looping iffy
      }
    }
  }
}

//tilt on keypress
function keyPressed() {
  if (state === "beatMeat" && keyCode === 32) {
    angle = radians(-45);
    w += 15;
    //chopsfx.play();
    console.log("beat!");
    if (w > 500) {
      w = 501;
      dingsfx.play();
    }
  }

  if (state === "chopMeat" && keyCode === 32) {
    angle = radians(-45);
    w += 15;
    console.log("chop!");
    chopsfx.play();
    w2 += 200;
    if (w2 > 500) {
      w2 = 501;
      dingsfx.play();
    }
  }
}

function keyReleased() {
  if (state === "beatMeat" && keyCode === 32) {
    angle = 0;
  }
  if (state === "chopMeat" && keyCode === 32) {
    angle = 0;
  }
}
class LoveBar {
  constructor(label, x, y, maxValue = 100) {
    this.label = label;
    this.x = x;
    this.y = y;
    this.width = 200;
    this.height = 20;
    this.value = 0;
    this.maxValue = maxValue;
  }

  add(amount) {
    this.value += amount;
    this.value = constrain(this.value, 0, this.maxValue);
    console.log(`${this.label} love now: ${this.value}`);
  }

  subtract(amount) {
    this.value -= amount;
    this.value = constrain(this.value, 0, this.maxValue);
    console.log(`${this.label} love now: ${this.value}`);
  }

  set(value) {
    this.value = constrain(value, 0, this.maxValue);
  }

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }

  draw() {
    if (!this.visible) return; // <- don’t draw if hidden
    push(); //may have to look into this section later
    if (
      state !== "title" ||
      state !== "cupcake" ||
      state !== "coffeeBrew" ||
      state !== "coffeeTop" ||
      state !== "beatMeat" ||
      state !== "chopMeat" ||
      state !== "cookMeat"
    ) {
      // background bar
      fill(80);
      rect(this.x, this.y, this.width, this.height, 5);

      // filled amount
      const w = map(this.value, 0, this.maxValue, 0, this.width);
      fill(255, 120, 160);
      rect(this.x, this.y, w, this.height, 5);

      // label + number
      fill(255);
      textAlign(LEFT); //left or else text will shift one new state
      textSize(14);
      text(`${this.label}: ${this.value}`, this.x, this.y - 5);
      pop(); //needs this or else text options won't show
    }
  }
}

function addLove(charKey, amount) {
  gameState.affection[charKey] += amount;
  gameState.affection[charKey] = constrain(
    gameState.affection[charKey],
    0,
    100
  );

  if (charKey === "fungus") fungusBar.set(gameState.affection.fungus);
  if (charKey === "rancid") rancidBar.set(gameState.affection.rancid);
  if (charKey === "monster") guntherBar.set(gameState.affection.monster);
}

function drawCafeTextbox(x3, y3, w3, h3, msg3, title3 = "Gunther's Tip") {
  push();

  // Colors
  let border = color(120, 90, 70);
  let bg = color(245, 235, 220);
  let headerBg = color(205, 180, 150);
  let accent = color(174, 213, 129); // your green accent

  // Drop shadow
  noStroke();
  fill(0, 50);
  rect(x3 + 8, y3 + 8, w3, h3, 14);

  // Main box
  stroke(border);
  strokeWeight(3);
  fill(bg);
  rect(x3, y3, w3, h3, 14);

  // Header strip
  noStroke();
  fill(headerBg);
  rect(x3, y3, w3, 40, 14, 14, 0, 0);

  // Accent line under header
  stroke(accent);
  strokeWeight(3);
  line(x3 + 15, y3 + 32, x3 + w3 - 15, y3 + 32);

  // Title
  noStroke();
  fill(60, 40, 30);
  textSize(18);
  textAlign(LEFT, CENTER);
  textStyle(BOLD);
  text(title3, x3 + 18, y3 + 20);

  // Body text
  fill(50);
  textSize(22);
  textAlign(LEFT, TOP);
  textStyle(NORMAL);
  textWrap(WORD);
  text(msg3, x3 + 20, y3 + 60, w3 - 40, h3 - 60);

  pop();
}

function reset() {

//fix loops
  cafebgm.stop();
  fungusBar.value = 0;
  rancidBar.value = 0;
  guntherBar.value = 0;
  fungusBar.hide();
  rancidBar.hide();
  guntherBar.hide();
timer = 30;
 timer2 = 30;
timer3 = 20;
timer4 = 20;
timer3Max = 20;
w3Max = 500;
w3 = w3Max;
currentZone = null;
frosting = false;
frogleg = false;
sugar = false;
squidink = false;
timer3Max = 20;
w3 = w3Max;
 order = 0;
order2 = 0;
w = 0;
w2 = 0;
 w4 = 500;
  index = 0;
  index1 = 0;
  index1_1 = 0;
  index1_1 = 0;
  index1_talk = 0;
  index1_leave = 0;
  index1_second = 0;
  index1_third = 0;
  index1_end = 0;
  index2_open = 0;
  index2_1 = 0;
index2_talk= 0;
index2_leave= 0;
index2_second= 0;
index2_third= 0;
index3_open= 0;
index3_open= 0;
index3_monster2= 0;
index3_monster3= 0;
index3_monster4= 0;
index3_monster5= 0;
index3_monster6= 0;
index3_rancid= 0;
index3_rancid1= 0;
index3_rancid2= 0;
index3_rancid3= 0;
index3_fungus= 0;
index3_fungus1= 0;
index3_fungus2= 0;
index3_fungus2_1= 0;
index3_fungus2_2= 0;
index3_fungus3= 0;
index4_open= 0;
index4_gunther= 0;
index4_gunther1= 0;
index4_gunther2= 0;
index5_open= 0;
index5_fungus1= 0;
index5_fungus2= 0;
index5_rancid= 0;
index5_gunther1= 0;
index5_gunther2= 0;







}