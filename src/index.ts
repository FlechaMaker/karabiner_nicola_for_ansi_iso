import * as k from "karabiner.ts";

const japaneseInputSources: k.InputSource[] = [
  { language: "^ja$" },
  { input_mode_id: "com.apple.inputmethod.Japanese" },
  { input_mode_id: "com.apple.inputmethod.Japanese.Hiragana" },
  { input_mode_id: "com.apple.inputmethod.Japanese.Katakana" },
  { input_mode_id: "com.apple.inputmethod.Japanese.HalfWidthKana" },
];

k.writeToProfile("UK NICOLA", [nicolaUKBasic(), commandKeyRemap()], {
  "basic.simultaneous_threshold_milliseconds": 100,
});

function nicolaUKBasic() {
  return k
    .rule(
      "NICOLAの基本設定 (rev 3)",
      k.ifInputSource(japaneseInputSources),
      k.ifApp("^com\\.apple\\.loginwindow$").unless()
    )
    .manipulators([
      k.mapSimultaneous(["spacebar", "1"]).to("slash", "left_shift"),
      k.mapSimultaneous(["spacebar", "2"]).to("slash"),
      k
        .mapSimultaneous(["spacebar", "3"])
        .to("grave_accent_and_tilde", "left_shift"),
      k.mapSimultaneous(["spacebar", "4"]).to("open_bracket"),
      k.mapSimultaneous(["spacebar", "5"]).to("close_bracket"),
      k.mapSimultaneous(["spacebar", "6"]).to("open_bracket", "left_option"),
      k.mapSimultaneous(["spacebar", "7"]).to("close_bracket", "left_option"),
      k.mapSimultaneous(["spacebar", "8"]).to("9", "left_shift"),
      k.mapSimultaneous(["spacebar", "9"]).to("0", "left_shift"),
      k.mapSimultaneous(["spacebar", "q"]).to("l").to("a"),
      k.mapSimultaneous(["left_command", "q"]).to("fn"),
      k.mapSimultaneous(["right_command", "q"]).to("fn"),
      k.map("q").to("period"),
      k.mapSimultaneous(["spacebar", "w"]).to("e"),
      k.mapSimultaneous(["left_command", "w"]).to("fn"),
      k.mapSimultaneous(["right_command", "w"]).to("g").to("a"),
      k.map("w").to("k").to("a"),
      k.mapSimultaneous(["spacebar", "e"]).to("r").to("i"),
      k.mapSimultaneous(["left_command", "e"]).to("fn"),
      k.mapSimultaneous(["right_command", "e"]).to("d").to("a"),
      k.map("e").to("t").to("a"),
      k.mapSimultaneous(["spacebar", "r"]).to("l").to("y").to("a"),
      k.mapSimultaneous(["left_command", "r"]).to("fn"),
      k.mapSimultaneous(["right_command", "r"]).to("g").to("o"),
      k.map("r").to("k").to("o"),
      k.mapSimultaneous(["spacebar", "t"]).to("r").to("e"),
      k.mapSimultaneous(["left_command", "t"]).to("fn"),
      k.mapSimultaneous(["right_command", "t"]).to("z").to("a"),
      k.map("t").to("s").to("a"),
      k.mapSimultaneous(["spacebar", "y"]).to("y").to("o"),
      k.mapSimultaneous(["left_command", "y"]).to("p").to("a"),
      k.mapSimultaneous(["right_command", "y"]).to("fn"),
      k.map("y").to("r").to("a"),
      k.mapSimultaneous(["spacebar", "u"]).to("n").to("i"),
      k.mapSimultaneous(["left_command", "u"]).to("d").to("i"),
      k.mapSimultaneous(["right_command", "u"]).to("b").to("u"),
      k.map("u").to("c").to("h").to("i"),
      k.mapSimultaneous(["spacebar", "i"]).to("r").to("u"),
      k.mapSimultaneous(["left_command", "i"]).to("g").to("u"),
      k.mapSimultaneous(["right_command", "i"]).to("fn"),
      k.map("i").to("k").to("u"),
      k.mapSimultaneous(["spacebar", "o"]).to("m").to("a"),
      k.mapSimultaneous(["left_command", "o"]).to("d").to("u"),
      k.mapSimultaneous(["right_command", "o"]).to("fn"),
      k.map("o").to("t").to("u"),
      k.mapSimultaneous(["spacebar", "p"]).to("l").to("e"),
      k.mapSimultaneous(["left_command", "p"]).to("p").to("i"),
      k.mapSimultaneous(["right_command", "p"]).to("fn"),
      k.map("p").to("comma"),
      k.mapSimultaneous(["spacebar", "a"]).to("w").to("o"),
      k.mapSimultaneous(["left_command", "a"]).to("fn"),
      k.mapSimultaneous(["right_command", "a"]).to("v").to("u"),
      k.map("a").to("u"),
      k.mapSimultaneous(["spacebar", "s"]).to("a"),
      k.mapSimultaneous(["left_command", "s"]).to("fn"),
      k.mapSimultaneous(["right_command", "s"]).to("z").to("i"),
      k.map("s").to("s").to("i"),
      k.mapSimultaneous(["spacebar", "d"]).to("n").to("a"),
      k.mapSimultaneous(["left_command", "d"]).to("fn"),
      k.mapSimultaneous(["right_command", "d"]).to("d").to("e"),
      k.map("d").to("t").to("e"),
      k.mapSimultaneous(["spacebar", "f"]).to("l").to("y").to("u"),
      k.mapSimultaneous(["left_command", "f"]).to("fn"),
      k.mapSimultaneous(["right_command", "f"]).to("g").to("e"),
      k.map("f").to("k").to("e"),
      k.mapSimultaneous(["spacebar", "g"]).to("m").to("o"),
      k.mapSimultaneous(["left_command", "g"]).to("fn"),
      k.mapSimultaneous(["right_command", "g"]).to("z").to("e"),
      k.map("g").to("s").to("e"),
      k.mapSimultaneous(["spacebar", "h"]).to("m").to("i"),
      k.mapSimultaneous(["left_command", "h"]).to("b").to("a"),
      k.mapSimultaneous(["right_command", "h"]).to("z").to("h"),
      k.map("h").to("h").to("a"),
      k.mapSimultaneous(["spacebar", "j"]).to("o"),
      k.mapSimultaneous(["left_command", "j"]).to("d").to("o"),
      k.mapSimultaneous(["right_command", "j"]).to("z").to("j"),
      k.map("j").to("t").to("o"),
      k.mapSimultaneous(["spacebar", "k"]).to("n").to("o"),
      k.mapSimultaneous(["left_command", "k"]).to("g").to("i"),
      k.mapSimultaneous(["right_command", "k"]).to("z").to("k"),
      k.map("k").to("k").to("i"),
      k.mapSimultaneous(["spacebar", "l"]).to("l").to("y").to("o"),
      k.mapSimultaneous(["left_command", "l"]).to("p").to("o"),
      k.mapSimultaneous(["right_command", "l"]).to("z").to("l"),
      k.map("l").to("i"),
      k.mapSimultaneous(["spacebar", "semicolon"]).to("l").to("t").to("u"),
      k.mapSimultaneous(["left_command", "semicolon"]).to("semicolon"),
      k.mapSimultaneous(["right_command", "semicolon"]).to("fn"),
      k.map("semicolon").to("n").to("n"),
      k.mapSimultaneous(["spacebar", "quote"]).to("l").to("w").to("a"),
      k.mapSimultaneous(["spacebar", "z"]).to("l").to("u"),
      k.mapSimultaneous(["left_command", "z"]).to("fn"),
      k.mapSimultaneous(["right_command", "z"]).to("fn"),
      k.map("z").to("spacebar"),
      k.mapSimultaneous(["spacebar", "x"]).to("hyphen"),
      k.mapSimultaneous(["left_command", "x"]).to("fn"),
      k.mapSimultaneous(["right_command", "x"]).to("b").to("i"),
      k.map("x").to("h").to("i"),
      k.mapSimultaneous(["spacebar", "c"]).to("r").to("o"),
      k.mapSimultaneous(["left_command", "c"]).to("fn"),
      k.mapSimultaneous(["right_command", "c"]).to("z").to("u"),
      k.map("c").to("s").to("u"),
      k.mapSimultaneous(["spacebar", "v"]).to("y").to("a"),
      k.mapSimultaneous(["left_command", "v"]).to("fn"),
      k.mapSimultaneous(["right_command", "v"]).to("b").to("u"),
      k.map("v").to("f").to("u"),
      k.mapSimultaneous(["spacebar", "b"]).to("l").to("i"),
      k.mapSimultaneous(["left_command", "b"]).to("b").to("e"),
      k.mapSimultaneous(["right_command", "b"]).to("b").to("e"),
      k.map("b").to("h").to("e"),
      k.mapSimultaneous(["spacebar", "n"]).to("n").to("u"),
      k.mapSimultaneous(["left_command", "n"]).to("p").to("u"),
      k.mapSimultaneous(["right_command", "n"]).to("fn"),
      k.map("n").to("m").to("e"),
      k.mapSimultaneous(["spacebar", "m"]).to("y").to("u"),
      k.mapSimultaneous(["left_command", "m"]).to("z").to("o"),
      k.mapSimultaneous(["right_command", "m"]).to("fn"),
      k.map("m").to("s").to("o"),
      k.mapSimultaneous(["spacebar", "comma"]).to("m").to("u"),
      k.mapSimultaneous(["left_command", "comma"]).to("p").to("e"),
      k.mapSimultaneous(["right_command", "comma"]).to("comma", "left_option"),
      k.map("comma").to("n").to("e"),
      k.mapSimultaneous(["spacebar", "period"]).to("w").to("a"),
      k.mapSimultaneous(["left_command", "period"]).to("b").to("o"),
      k
        .mapSimultaneous(["right_command", "period"])
        .to("period", "left_option"),
      k.map("period").to("h").to("o"),
      k.mapSimultaneous(["spacebar", "slash"]).to("l").to("o"),
      k.mapSimultaneous(["left_command", "slash"]).to("fn"),
      k.mapSimultaneous(["right_command", "slash"]).to("slash", "left_option"),
    ]);
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

function escapeKeyRemap() {
  return k
    .rule("escキーを押したときに、英数キーも送信する（vim用）")
    .manipulators([
      {
        from: { key_code: "escape" },
        to: [{ key_code: "escape" }, { key_code: "japanese_eisuu" }],
        type: "basic",
      },
    ]);
}

function controlBracketRemap() {
  return k
    .rule("Ctrl+[を押したときに、英数キーも送信する（vim用） (rev 2)")
    .manipulators([
      {
        conditions: [
          { keyboard_types: ["ansi", "iso"], type: "keyboard_type_if" },
        ],
        from: {
          key_code: "open_bracket",
          modifiers: { mandatory: ["control"] },
        },
        to: [
          { key_code: "open_bracket", modifiers: ["control"] },
          { key_code: "japanese_eisuu" },
        ],
        type: "basic",
      },
      {
        conditions: [{ keyboard_types: ["jis"], type: "keyboard_type_if" }],
        from: {
          key_code: "close_bracket",
          modifiers: { mandatory: ["control"] },
        },
        to: [
          { key_code: "close_bracket", modifiers: ["control"] },
          { key_code: "japanese_eisuu" },
        ],
        type: "basic",
      },
    ]);
}

function simultaneousRemap() {
  return k
    .rule("simultaneousRemap", k.ifInputSource(japaneseInputSources))
    .manipulators([]);
}

function specialRemap() {
  return k
    .rule("specialRemap", k.ifInputSource(japaneseInputSources))
    .manipulators([]);
}
