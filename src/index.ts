import * as k from "karabiner.ts";

const japaneseInputSources: k.InputSource[] = [
  { language: "^ja$" },
  { input_mode_id: "com.apple.inputmethod.Japanese" },
  { input_mode_id: "com.apple.inputmethod.Japanese.Hiragana" },
  { input_mode_id: "com.apple.inputmethod.Japanese.Katakana" },
  { input_mode_id: "com.apple.inputmethod.Japanese.HalfWidthKana" },
];

interface KeyMappings {
  [key: string]: k.ToKeyCode[];
}

// Number key mappings with spacebar
const numberKeyMaps: KeyMappings = {
  "1": ["slash", "left_shift"],
  "2": ["slash"],
  "3": ["grave_accent_and_tilde", "left_shift"],
  "4": ["open_bracket"],
  "5": ["close_bracket"],
  "6": ["open_bracket", "left_option"],
  "7": ["close_bracket", "left_option"],
  "8": ["9", "left_shift"],
  "9": ["0", "left_shift"],
};

// Spacebar combinations
const spacebarMaps: KeyMappings = {
  q: ["l", "a"],
  w: ["e"],
  e: ["r", "i"],
  r: ["l", "y", "a"],
  t: ["r", "e"],
  y: ["y", "o"],
  u: ["n", "i"],
  i: ["r", "u"],
  o: ["m", "a"],
  p: ["l", "e"],
  a: ["w", "o"],
  s: ["a"],
  d: ["n", "a"],
  f: ["l", "y", "u"],
  g: ["m", "o"],
  h: ["m", "i"],
  j: ["o"],
  k: ["n", "o"],
  l: ["l", "y", "o"],
  semicolon: ["l", "t", "u"],
  quote: ["l", "w", "a"],
  z: ["l", "u"],
  x: ["hyphen"],
  c: ["r", "o"],
  v: ["y", "a"],
  b: ["l", "i"],
  n: ["n", "u"],
  m: ["y", "u"],
  comma: ["m", "u"],
  period: ["w", "a"],
  slash: ["l", "o"],
};

// Left command combinations
const leftCommandMaps: KeyMappings = {
  q: ["period", "left_option"],
  w: ["fn"],
  e: ["fn"],
  r: ["fn"],
  t: ["fn"],
  y: ["p", "a"],
  u: ["d", "i"],
  i: ["g", "u"],
  o: ["d", "u"],
  p: ["p", "i"],
  a: ["fn"],
  s: ["fn"],
  d: ["fn"],
  f: ["fn"],
  g: ["fn"],
  h: ["b", "a"],
  j: ["d", "o"],
  k: ["g", "i"],
  l: ["p", "o"],
  semicolon: ["semicolon"],
  z: ["fn"],
  x: ["fn"],
  c: ["fn"],
  v: ["fn"],
  b: ["b", "e"],
  n: ["p", "u"],
  m: ["z", "o"],
  comma: ["p", "e"],
  period: ["b", "o"],
  slash: ["fn"],
};

// Right command combinations
const rightCommandMaps: KeyMappings = {
  q: ["fn"],
  w: ["g", "a"],
  e: ["d", "a"],
  r: ["g", "o"],
  t: ["z", "a"],
  y: ["fn"],
  u: ["b", "u"],
  i: ["fn"],
  o: ["fn"],
  p: ["comma", "left_option"],
  a: ["v", "u"],
  s: ["z", "i"],
  d: ["d", "e"],
  f: ["g", "e"],
  g: ["z", "e"],
  h: ["z", "h"],
  j: ["z", "j"],
  k: ["z", "k"],
  l: ["z", "l"],
  semicolon: ["fn"],
  z: ["fn"],
  x: ["b", "i"],
  c: ["z", "u"],
  v: ["b", "u"],
  b: ["b", "e"],
  n: ["fn"],
  m: ["fn"],
  comma: ["comma", "left_option"],
  period: ["period", "left_option"],
  slash: ["slash", "left_option"],
};

// Single key mappings
const singleKeyMaps: KeyMappings = {
  q: ["period"],
  w: ["k", "a"],
  e: ["t", "a"],
  r: ["k", "o"],
  t: ["s", "a"],
  y: ["r", "a"],
  u: ["c", "h", "i"],
  i: ["k", "u"],
  o: ["t", "u"],
  p: ["comma"],
  a: ["u"],
  s: ["s", "i"],
  d: ["t", "e"],
  f: ["k", "e"],
  g: ["s", "e"],
  h: ["h", "a"],
  j: ["t", "o"],
  k: ["k", "i"],
  l: ["i"],
  semicolon: ["n", "n"],
  z: ["spacebar"],
  x: ["h", "i"],
  c: ["s", "u"],
  v: ["f", "u"],
  b: ["h", "e"],
  n: ["m", "e"],
  m: ["s", "o"],
  comma: ["n", "e"],
  period: ["h", "o"],
};

// Generate manipulators
const nicolaManipulators = [
  // Number keys with spacebar
  k.withMapper(numberKeyMaps)((key, value) =>
    k
      .mapSimultaneous(["spacebar", key.toString() as k.FromKeyParam])
      .to(value.map((v) => ({ key_code: v })))
  ),

  // Spacebar combinations
  k.withMapper(spacebarMaps)((key, value) =>
    k
      .mapSimultaneous(["spacebar", key as k.FromKeyParam])
      .to(value.map((v) => ({ key_code: v })))
  ),
  // Left command combinations
  k.withMapper(leftCommandMaps)((key, value) =>
    k
      .mapSimultaneous(["left_command", key as k.FromKeyParam])
      .to(value.map((v) => ({ key_code: v })))
  ),

  // Right command combinations
  k.withMapper(rightCommandMaps)((key, value) =>
    k
      .mapSimultaneous(["right_command", key as k.FromKeyParam])
      .to(value.map((v) => ({ key_code: v })))
  ),

  // Single key mappings
  k.withMapper(singleKeyMaps)((key, value) =>
    k.map(key as k.FromKeyParam).to(value.map((v) => ({ key_code: v })))
  ),
];

function nicolaBasic() {
  return k
    .rule(
      "NICOLAの基本設定 (rev 3)",
      k.ifInputSource(japaneseInputSources),
      k.ifApp("^com\\.apple\\.loginwindow$").unless()
    )
    .manipulators(nicolaManipulators);
}

function commandKeyRemap() {
  return k
    .rule(
      "コマンドキーを単体で押したときに、英数・かなキーを送信する。（左コマンドキーは英数、右コマンドキーはかな） (rev 3)"
    )
    .manipulators([
      {
        from: { key_code: "left_command", modifiers: { optional: ["any"] } },
        parameters: { "basic.to_if_held_down_threshold_milliseconds": 100 },
        to: [{ key_code: "left_command", lazy: true }],
        to_if_alone: [{ key_code: "japanese_eisuu" }],
        to_if_held_down: [{ key_code: "left_command" }],
        type: "basic",
      },
      {
        from: { key_code: "right_command", modifiers: { optional: ["any"] } },
        parameters: { "basic.to_if_held_down_threshold_milliseconds": 100 },
        to: [{ key_code: "right_command", lazy: true }],
        to_if_alone: [{ key_code: "japanese_kana" }],
        to_if_held_down: [{ key_code: "right_command" }],
        type: "basic",
      },
    ]);
}

function sendEisuuOnEscape() {
  return k.rule("ESCキーを押したときに英数キーを送信する。").manipulators([
    {
      from: { key_code: "escape" },
      to: [{ key_code: "escape" }, { key_code: "japanese_eisuu" }],
      type: "basic",
    },
  ]);
}

// Write to profile
k.writeToProfile(
  "ANSI/ISO NICOLA",
  [nicolaBasic(), commandKeyRemap(), sendEisuuOnEscape()],
  {
    "basic.simultaneous_threshold_milliseconds": 100,
  }
);
