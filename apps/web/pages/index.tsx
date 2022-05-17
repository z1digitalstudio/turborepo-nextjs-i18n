import { Button } from "ui";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

export default function Page() {
  const { t, lang } = useTranslation("common");
  const router = useRouter();

  const handleLang = (lang: string) =>
    router.push(router.asPath, router.asPath, { locale: lang });

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{lang}</p>
      <a href={`http://localhost:3001/${lang}`}>Go to docs</a>
      <br></br>
      <br></br>
      <button onClick={() => handleLang("en")}>en</button>
      <button onClick={() => handleLang("es")}>es</button>
      <Button />
    </div>
  );
}
