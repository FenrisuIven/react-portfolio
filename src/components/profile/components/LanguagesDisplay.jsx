const rawLanguages = import.meta.glob(
  "../../../assets/svg/languages/*_color.svg"
);
const importLanguages = async () => {
  const promises = Object.values(rawLanguages).map((dynamicImport) =>
    dynamicImport()
  );

  const awaitedPromises = await Promise.all(promises);
  return awaitedPromises.map((module) => module.default);
};
const languages = await importLanguages();

function LanguagesDisplay() {
  return (
    <>
      {languages.map((lang, idx) => {
        return (
          <div
            key={lang}
            style={{
              gridRow: "1",
              gridColumn: `${idx + 1}`,
              lineHeight: 0,
              padding: "0.5rem 0",
            }}
          >
            <img width="50px" height="50px" src={lang} />
          </div>
        );
      })}
    </>
  );
}

export default LanguagesDisplay;
