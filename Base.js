function pickMsg() {
    //Store messages in a array
    var textlist = [
        "a little knowledge can go a long way",
        
		"a lot of professionals are crackpots",
        
		"a name means a lot just by itself",
        
		"physical culture is second best",

        "planning for the future is escapism",

        "playing it safe can cause a lot of damage in the long run",

        "politics is used for personal gain",

        "potential counts for nothing until it's realized",

        "private property created crime",

        "pursuing pleasure for the sake of pleasure will ruin you",

        "push yourself to the limit as often as possible",

        "raise boys and girls the same way",

        "rechanneling destructive impulses is a sign of maturity",

        "recluses always get weak",

        "redistributing wealth is imperative",

        "relativity is no boon to mankind",

        "religion causes as many problems as it solves",

        "remember you always have freedom of choice",

        "repetition is the best way to learn",

        "resolutions serve to ease our conscience",

        "revolution begins with changes in the individual",

        "routine is a link with the past",

        "routine small excesses are worse than then the occasional debauch",

        "sacrificing yourself for a bad cause is not a moral act",

        "salvation can't be bought and sold",

        "self-awareness can be crippling",

        "self-contempt can do more harm than good",

        "selfishness is the most basic motivation",

        "selflessness is the highest achievement",

        "separatism is the way to a new beginning",

        "sin is a means of social control",

        "slipping into madness is good for the sake of comparison",

        "sloppy thinking gets worse over time",

        "solitude is enriching",

        "sometimes science advances faster than it should",

        "sometimes things seem to happen of their own accord",

        "spending too much time on self-improvement is antisocial",

        "starvation is nature's way",

        "stasis is a dream state",

        "sterilization is a weapon of the rulers",

        "strong emotional attachment stems from basic insecurity",

        "stupid people shouldn't breed",

        "survival of the fittest applies to men and animals",

        "symbols are more meaningful than things themselves",

        "taking a strong stand publicizes the opposite position",

        "talking is used to hide one's inability to act",

        "technology will make or break us",

        "the cruelest disappointment is when you let yourself down",

        "the desire to reproduce is a death wish",

        "the family is living on borrowed time",

        "the idea of revolution is an adolescent fantasy",

        "the idea of transcendence is used to obscure oppression",

        "the idiosyncratic has lost its authority",

        "the most profound things are inexpressible",

        "the mundane is to be cherished",

        "the new is nothing but a restatement of the old",

        "the only way to be pure is to stay by yourself",

        "the sum of your actions determines what you are",

        "the unattainable is invariable attractive",

        "the world operates according to discoverable laws",

        "there are too few immutable truths today",

        "there's nothing except what you sense",

        "there's nothing redeeming in toil",

        "thinking too much can only cause problems",

        "timidity is laughable",

        "to disagree presupposes moral integrity",

        "to volunteer is reactionary",

        "torture is barbaric",

        "trading a life for a life is fair enough",

        "true freedom is frightful",

        "unique things must be the most valuable",

        "unquestioning love demonstrates largesse of spirit",

        "using force to stop force is absurd",

        "violence is permissible even desirable occasionally",

        "war is a purification rite",

        "we must make sacrifices to maintain our quality of life",

        "when something terrible happens people wake up",

        "wishing things away is not effective",

        "with perseverance you can discover any truth",

        "words tend to be inadequate",

        "worrying can help you prepare",

        "you are a victim of the rules you live by",

        "you are guileless in your dreams",

        "you are responsible for constituting the meaning of things",

        "you are the past present and future",

        "you can live on through your descendants",

        "you can't expect people to be something they're not",

        "you can't fool others if you're fooling yourself",

        "you don't know what's what until you support yourself",

        "you have to hurt others to be extraordinary",

        "you must be intimate with a token few",

        "you must disagree with authority figures",

        "you must have one grand passion",

        "you must know where you stop and the world begins",

        "you owe the world not the other way around",

        "your actions are pointless if no one notices",

        "your oldest fears are the worst ones"
		
		"sonder - the realization that each random passerby is living a life as vivid and complex as your own; populated with their own ambitions, friends, routines, worries and inherited craziness. An epic story that continues invisibly around you like an anthill sprawling deep underground, with elaborate passageways to thousands of other lives that you’ll never know existed, in which you might appear only once, as an extra sipping coffee in the background, as a blur of traffic passing on the motorway, as a lighted window at dusk.",
    ];
    //Get a random number from 0 to the array length.
    var x = Math.floor((Math.random() * textlist.length));
    //Display
    document.getElementById("textmsgout").innerHTML = textlist[x];
    //Set the Title.. Because why not
    document.title = textlist[x];
};