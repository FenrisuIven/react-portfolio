const targetLanguages = [
  "js",
  "ts",
  "node",
  "html",
  "css",
  "react",
  "c_sharp",
  "c_plus",
  "c",
  "git",
  "github",
];
const targetScheme = "color";
const imagesExtension = "svg";

function LanguagesDisplay() {
  return (
    <>
      {targetLanguages.map((lang, idx) => {
        return (
          <div
            key={idx}
            style={{
              gridRow: "1",
              gridColumn: `${idx + 1}`,
              lineHeight: 0,
              padding: "0.5rem 0",
            }}
          >
            <img
              width="50px"
              height="50px"
              src={`/languages/${lang}_${targetScheme}.${imagesExtension}`}
            />
          </div>
        );
      })}
    </>
  );
}

export default LanguagesDisplay;
