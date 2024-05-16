export function showItalicWordsOnText(text: string) {
  const regex = /_([^_]+)_/g;

  const replacedText = text.replace(regex, (match, p1, offset, original) => {
    let newtext = match.split("_").join("");
    return `<span style="font-style: italic;">${newtext}</span>`;
  });

  return replacedText;
}