define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const story = Object.create(dart.library);
  const CT = Object.create(null);
  const storyTitle$ = dart.privateName(story, "Story.storyTitle");
  const choice1$ = dart.privateName(story, "Story.choice1");
  const choice2$ = dart.privateName(story, "Story.choice2");
  story.Story = class Story extends core.Object {
    get storyTitle() {
      return this[storyTitle$];
    }
    set storyTitle(value) {
      this[storyTitle$] = value;
    }
    get choice1() {
      return this[choice1$];
    }
    set choice1(value) {
      this[choice1$] = value;
    }
    get choice2() {
      return this[choice2$];
    }
    set choice2(value) {
      this[choice2$] = value;
    }
  };
  (story.Story.new = function(opts) {
    let storyTitle = opts && 'storyTitle' in opts ? opts.storyTitle : null;
    let choice1 = opts && 'choice1' in opts ? opts.choice1 : null;
    let choice2 = opts && 'choice2' in opts ? opts.choice2 : null;
    this[storyTitle$] = storyTitle;
    this[choice1$] = choice1;
    this[choice2$] = choice2;
    ;
  }).prototype = story.Story.prototype;
  dart.addTypeTests(story.Story);
  dart.setLibraryUri(story.Story, "package:destini_challenge_starting/story.dart");
  dart.setFieldSignature(story.Story, () => ({
    __proto__: dart.getFields(story.Story.__proto__),
    storyTitle: dart.fieldType(core.String),
    choice1: dart.fieldType(core.String),
    choice2: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/destini_challenge_starting/story", {
    "package:destini_challenge_starting/story.dart": story
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["story.dart"],"names":[],"mappings":";;;;;;;;;;;IACS;;;;;;IACA;;;;;;IACA;;;;;;;;QAEK;QAAiB;QAAc;IAA/B;IAAiB;IAAc;;EAAS","file":"story.ddc.js"}');
  // Exports:
  return {
    story: story
  };
});

//# sourceMappingURL=story.ddc.js.map
