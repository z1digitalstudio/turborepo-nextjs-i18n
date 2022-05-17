import { Button } from "ui";
import useTranslation from "next-translate/useTranslation";

export default function Page() {
  const { t, lang } = useTranslation("common");

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{lang}</p>
      <Button />
    </div>
  );
}
