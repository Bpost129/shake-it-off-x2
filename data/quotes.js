
const quotes = [
  {isTaylor: true, text: "People haven't always been there for me but music always has."},
  {isTaylor: true, text: "I suffer from girlnextdooritis where the guy is friends with you and that's it."},
  {isTaylor: true, text: "This is a new year. A new beginning. And things will change."},
  {isTaylor: true, text: "I never want to change so much that people can't recognize me."},
  {isTaylor: true, text: "No matter what happens in life, be good to people. Being good to people is a wonderful legacy to leave behind."},
  {isTaylor: true, text: "I’m intimidated by the fear of being average."},
  {isTaylor: true, text: "Just be yourself, there is no one better."},
  {isTaylor: true, text: "It's hard to fight when the fight ain't fair."},
  {isTaylor: true, text: "The lesson I've learned the most often in life is that you're always going to know more in the future than you know now."},
  {isTaylor: true, text: "There's more to life than dating the boy on the football team."},
  {isTaylor: true, text: "If you're horrible to me, I'm going to write a song about it, and you won't like it. That's how I operate."},
  {isTaylor: true, text: "Being FEARLESS isn't being 100% Not FEARFUL, it's being terrified but you jump anyway..."},
  {isTaylor: true, text: "Giving up doesn't always mean your weak sometimes your just strong enough to let go."},
  {isTaylor: true, text: "I've wanted one thing for my whole life and I'm not going to be that girl who wants one thing her whole life then gets it and complains."},
  {isTaylor: true, text: "Love is the one wild card."},
  {isTaylor: true, text: "We should love, not fall in love, because everything that falls, gets broken."},
  {isTaylor: true, text: "Life isn't how to survive the storm, it's about how to dance in the rain."},
  {isTaylor: true, text: "If they don't like you for being yourself, be yourself even more."},
  {isTaylor: true, text: "I've always been a hugger. If we all hugged more, the world would be a better place :)"},
  {isTaylor: true, text: "I've found time can heal most anything and you just might find who you're supposed to be."},
  {isTaylor: true, text: "There are two different categories of love. The first category is called a fairytale. The second category of love is called just another lesson."},
  {isTaylor: true, text: "I haven't had that one great love, which is good. I don't want that to be in the past, I want it to be in the future."},
  {isTaylor: true, text: "To truly love is to have the courage to walk away and let the other person who wishes to be free go no matter how much it hurts."},
  {isTaylor: true, text: "At some point you have to forget about grudges because they only hurt."},
  {isTaylor: true, text: "In high school, I used to think it was so cool if a guy had an awesome car. Now none of that matters. These days I look for character and honesty and trust."},
  {isTaylor: true, text: "I love you all so much, I just wanted you to know."},
  {isTaylor: true, text: "Bring on all the pretenders!"},
  {isTaylor: true, text: "Just because as human beings, what we can't have is what we reply in our head over and over again before we go to sleep."},
  {isTaylor: true, text: "There are two ways you can go with pain: You can let it destroy you or you can use it as fuel to drive you..."},
  {isTaylor: true, text: "Real love still happens sometimes. It's not just something we make up when you're nine. I have to believe that. You do too."},
  {isTaylor: true, text: "I know my flaws before other people point them out to me."},
  {isTaylor: true, text: "You did a number on me, but honestly, baby, who’s counting?"},
  {isTaylor: false, text: "Take the words for what they are: A dwindling, mercurial high, a drug that only worked the first few hundred times."},
  {isTaylor: false, text: "Cyberwar does not determine who is right. Only who is left."},
  {isTaylor: false, text: "What's the difference between viruses, trojans, worms, etc? It doesn't matter. It's all crap no one wants on their computer. Stop teaching users worthless information they'll never use."},
  {isTaylor: true, text: "Don’t even get me started on wiretaps. It’s not a good thing for me to talk about socially. I freak out … I have to stop myself from thinking about how many aspects of technology I don’t understand."},
  {isTaylor: false, text: "The only thing not digital in cyberwar is the blood."},
  {isTaylor: false, text: "There are two kinds of people who ponder stories of a machine apocolypse: Those who fear an error in machine judgement, and those who fear humans being judged."},
  {isTaylor: false, text: "As the bulbs flash, I can't help but think of cyberwar - When the arching death of electric transformers will light the night, leaving our nation in darkness."},
  {isTaylor: false, text: "Some speak of an Armageddon; A time when humans will build machines they neither understand nor control. To myself I whisper, 'we already have'."},
  {isTaylor: false, text: "Only the dead have seen the end of cyberwar."}
]

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)]
}


export {
  getRandomQuote,
}