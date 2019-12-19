define(['dart_sdk', 'packages/destini_challenge_starting/story'], function(dart_sdk, packages__destini_challenge_starting__story) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const story = packages__destini_challenge_starting__story.story;
  const story_brain = Object.create(dart.library);
  const $_get = dartx._get;
  let JSArrayOfStory = () => (JSArrayOfStory = dart.constFn(_interceptors.JSArray$(story.Story)))();
  const CT = Object.create(null);
  const _storyNumber = dart.privateName(story_brain, "_storyNumber");
  const _storyData = dart.privateName(story_brain, "_storyData");
  story_brain.StoryBrain = class StoryBrain extends core.Object {
    getStory() {
      return this[_storyData][$_get](this[_storyNumber]).storyTitle;
    }
    getChoice1() {
      return this[_storyData][$_get](this[_storyNumber]).choice1;
    }
    getChoice2() {
      return this[_storyData][$_get](this[_storyNumber]).choice2;
    }
  };
  (story_brain.StoryBrain.new = function() {
    this[_storyNumber] = 0;
    this[_storyData] = JSArrayOfStory().of([new story.Story.new({storyTitle: "Your car has blown a tire on a winding road in the middle of nowhere with no cell phone reception. You decide to hitchhike. A rusty pickup truck rumbles to a stop next to you. A man with a wide brimmed hat with soulless eyes opens the passenger door for you and asks: \"Need a ride, boy?\".", choice1: "I'll hop in. Thanks for the help!", choice2: "Better ask him if he's a murderer first."}), new story.Story.new({storyTitle: "He nods slowly, unphased by the question.", choice1: "At least he's honest. I'll climb in.", choice2: "Wait, I know how to change a tire."}), new story.Story.new({storyTitle: "As you begin to drive, the stranger starts talking about his relationship with his mother. He gets angrier and angrier by the minute. He asks you to open the glovebox. Inside you find a bloody knife, two severed fingers, and a cassette tape of Elton John. He reaches for the glove box.", choice1: "I love Elton John! Hand him the cassette tape.", choice2: "It's him or me! You take the knife and stab him."}), new story.Story.new({storyTitle: "What? Such a cop out! Did you know traffic accidents are the second leading cause of accidental death for most adult age groups?", choice1: "Restart", choice2: ""}), new story.Story.new({storyTitle: "As you smash through the guardrail and careen towards the jagged rocks below you reflect on the dubious wisdom of stabbing someone while they are driving a car you are in.", choice1: "Restart", choice2: ""}), new story.Story.new({storyTitle: "You bond with the murderer while crooning verses of \"Can you feel the love tonight\". He drops you off at the next town. Before you go he asks you if you know any good places to dump bodies. You reply: \"Try the pier\".", choice1: "Restart", choice2: ""})]);
    ;
  }).prototype = story_brain.StoryBrain.prototype;
  dart.addTypeTests(story_brain.StoryBrain);
  dart.setMethodSignature(story_brain.StoryBrain, () => ({
    __proto__: dart.getMethods(story_brain.StoryBrain.__proto__),
    getStory: dart.fnType(core.String, []),
    getChoice1: dart.fnType(core.String, []),
    getChoice2: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(story_brain.StoryBrain, "package:destini_challenge_starting/story_brain.dart");
  dart.setFieldSignature(story_brain.StoryBrain, () => ({
    __proto__: dart.getFields(story_brain.StoryBrain.__proto__),
    [_storyNumber]: dart.fieldType(core.int),
    [_storyData]: dart.fieldType(core.List$(story.Story))
  }));
  dart.trackLibraries("packages/destini_challenge_starting/story_brain", {
    "package:destini_challenge_starting/story_brain.dart": story_brain
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["story_brain.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;AAsCI,YAAO,AAAU,AAAe,yBAAd;IACpB;;AAGE,YAAO,AAAU,AAAe,yBAAd;IACpB;;AAGE,YAAO,AAAU,AAAe,yBAAd;IACpB;;;IA5CI,qBAAe;IAEP,mBAAa,qBACvB,iCAEQ,+SACK,8CACA,8CACb,iCACgB,sDACH,iDACA,wCACb,iCAEQ,0SACK,2DACA,sDACb,iCAEQ,6IACK,oBACA,MACb,iCAEQ,wLACK,oBACA,MACb,iCAEQ,yOACK,oBACA;;EAcjB","file":"story_brain.ddc.js"}');
  // Exports:
  return {
    story_brain: story_brain
  };
});

//# sourceMappingURL=story_brain.ddc.js.map
