import { Button } from "ui";
import useTranslation from "next-translate/useTranslation";
import { GetStaticPropsContext, GetStaticPaths } from "next";
import { useRouter } from "next/router";

export default function Post({ title }: { title: string }) {
  const { t, lang } = useTranslation("common");
  const router = useRouter();

  const handleLang = (lang: string) =>
    router.push(router.asPath, router.asPath, { locale: lang });

  return (
    <div>
      <h1>{title}</h1>
      <button>{t("button")}</button>
      <p>{lang}</p>
      <button onClick={() => handleLang("en")}>en</button>
      <button onClick={() => handleLang("es")}>es</button>
      <Button />
    </div>
  );
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const lang = context.locale as "en" | "es";

  // api request CMS with lang https://api.contentful/bring-my-posts-in-${lang}
  // mocked response
  const data = {
    en: { title: "Hello world!" },
    es: { title: "Hola mundo!" },
  };

  return {
    props: data[lang],
  };
};

export const getStaticPaths: GetStaticPaths<{
  slug: string;
}> = async (props) => {
  // api request CMS asking for post lists slugs (for language??)
  return {
    paths: [{ params: { slug: "my-awesome-post-🚀" } }], // indicates that no page needs be created at build time
    fallback: "blocking", // indicates the type of fallback
  };
};
