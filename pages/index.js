import Head from "next/head";
import HeroSection from "../components/hero-section";
import AboutSection from "../components/about-section";
import AchievementSection from "../components/achievement-section";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import { CMS_NAME } from "../lib/constants";

export default function Index({ preview, allSections }) {
  const heroPost = allSections.find((section) => section.id === "hero");
  const aboutPost = allSections.find((section) => section.id === "about");
  const achievementPost = allSections.find(
    (section) => section.id === "achievement"
  );

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
        </Head>
        {heroPost && (
          <HeroSection
            title={heroPost.title}
            subtitle={heroPost.subtitle}
            tag={heroPost.tag}
            image={heroPost.imagesCollection.items[0].url}
          />
        )}
        {aboutPost && (
          <AboutSection
            title={aboutPost.title}
            subtitle={aboutPost.subtitle}
            tag={aboutPost.tag}
            list={aboutPost.list}
            images={aboutPost.imagesCollection.items.map((item) => item.url)}
          />
        )}
        {achievementPost && (
          <AchievementSection
            title={achievementPost.title}
            subtitle={achievementPost.subtitle}
            tag={achievementPost.tag}
            images={achievementPost.imagesCollection.items.map(
              (item) => item.url
            )}
          />
        )}
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allSections = (await getAllPostsForHome(preview)) ?? [];
  return {
    props: { preview, allSections },
  };
}
