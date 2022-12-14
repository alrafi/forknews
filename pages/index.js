import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import Link from "next/link";
// import { useLink } from "../lib/LinkProvider";
import { useRouter } from "next/router";
import { HashLoader } from "react-spinners";

const NEWS = [
  {
    link: " https://jakpost-fork.vercel.app/api/detailpost/indonesia/2022/10/23/indonesia-asks-netherlands-to-send-home-java-man-bones-old-quran",
    title:
      "Indonesia asks Netherlands to send home 'Java Man' bones, old Qu'ran",
    image:
      "https://img.jakpost.net/c/2019/04/07/2019_04_07_69348_1554606403._thumbnail.jpg",
    headline:
      " Bonnie Triyana, a historian and a member of the Indonesian repatriation team, said the pieces include statues from Java's Singosari, or the Islamic holy book Koran owned by an Indonesian national hero, and bones excavated in Java in the 19th century by Dutch paleoanthropologist Eugène Dubois, which became known as Java Man.",
    category: "Society",
    pusblised_at: "1 day ago",
    premium_badge: "not premium",
    slug: "/indonesia/2022/10/23/indonesia-asks-netherlands-to-send-home-java-man-bones-old-quran",
  },
  {
    link: "https://jakpost-fork.vercel.app/api/detailpost/indonesia/2022/10/23/child-deaths-blamed-on-syrups-in-indonesia-rise-to-133",
    title: "Child deaths blamed on syrups in Indonesia rise to 133",
    image:
      "https://img.jakpost.net/c/2022/10/19/2022_10_19_131139_1666148061._thumbnail.jpg",
    headline:
      "Indonesia saw a spike in acute kidney injury (AKI) cases this year, prompting a probe and ban on all syrup and liquid medicine prescriptions and sales.",
    category: "Society",
    pusblised_at: "1 day ago",
    premium_badge: "not premium",
    slug: "/indonesia/2022/10/23/child-deaths-blamed-on-syrups-in-indonesia-rise-to-133",
  },
  {
    link: "https://jakpost-fork.vercel.app/api/detailpost/indonesia/2022/10/22/calls-to-oust-nasdems-from-ruling-coalition-intensify",
    title: "Calls to oust NasDem from ruling coalition intensify",
    image:
      "https://img.jakpost.net/c/2019/07/25/2019_07_25_76931_1564029192._thumbnail.jpg",
    headline:
      "Calls to oust the NasDem Party from the ruling government coalition have intensified after it officially backed Anies Baswedan – who ended his Jakarta governor term on Oct. 16 – in the 2024 presidential race.",
    category: "Politics",
    pusblised_at: "2 days ago",
    premium_badge: "premium",
    slug: "/indonesia/2022/10/22/calls-to-oust-nasdems-from-ruling-coalition-intensify",
  },
  {
    link: "https://jakpost-fork.vercel.app/api/detailpost/indonesia/2022/10/22/govt-blames-kidney-failures-on-big-pharma",
    title: "Govt blames kidney failures on big pharma",
    image:
      "https://img.jakpost.net/c/2022/10/20/2022_10_20_131172_1666225770._thumbnail.jpg",
    headline:
      "The Health Ministry said it has “75 percent confidence” that the poor production quality of a solvent widely used in medicinal syrups was the cause of a string of acute kidney injury (AKI) cases that has resulted in nearly a hundred child deaths.",
    category: "Society",
    pusblised_at: "2 days ago",
    premium_badge: "premium",
    slug: "/indonesia/2022/10/22/govt-blames-kidney-failures-on-big-pharma",
  },
  {
    link: "https://jakpost-fork.vercel.app/api/detailpost/indonesia/2022/10/21/norway-to-provide-56m-to-support-indonesias-carbon-sink-goal",
    title: "Norway to provide $56m to support Indonesia’s carbon sink goal",
    image:
      "https://img.jakpost.net/c/2018/10/22/2018_10_22_56789_1540182747._thumbnail.jpg",
    headline:
      "Indonesia and Norway have signed a contribution agreement (CA) following the bilateral Memorandum of Understanding (MoU) on emission reduction in the forestry sector, kickstarting the delivery of Norway’s first contribution worth US$56 million to support Jakarta’s effort in reaching its carbon sink goal.",
    category: "Society",
    pusblised_at: "2 days ago",
    premium_badge: "premium",
    slug: "/indonesia/2022/10/21/norway-to-provide-56m-to-support-indonesias-carbon-sink-goal",
  },
];

export default function Home() {
  const [news, setNews] = useState([]);
  const [featuredPost, setFeaturedPost] = useState({});
  // const { link, setLink } = useLink();
  // const router = useRouter();

  useEffect(() => {
    axios
      .get("https://jakpost-fork.vercel.app/api/category/indonesia")
      .then((res) => {
        console.log("RES", res);
        setNews(res.data.posts);

        const { slug, category, date } = getSlug(res.data.featured_post.slug);
        setFeaturedPost({
          ...res.data.featured_post,
          slugPost: slug,
          categoryPost: category,
          date,
        });
      });
  }, []);

  const getSlug = (slug) => {
    const slugItem = slug.split("/");
    const date = slugItem[2] + slugItem[3] + slugItem[4];

    return {
      slug: slugItem[5],
      category: slugItem[1],
      date: date,
    };
  };

  if (news.length === 0)
    return (
      <div className="h-screen flex justify-center items-center">
        <HashLoader
          color="#da2127"
          cssOverride={{
            display: "block",
            margin: "0 auto",
            borderColor: "red",
          }}
          loading={true}
          size={70}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );

  return (
    <div className="bg-whitedarker">
      <Head>
        <title>Fork News</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="h-16 w-full bg-white flex items-center px-8">
        <h1 className="text-2xl">forknews</h1>
      </header>

      <main className="p-4 min-h-screen w-full flex">
        <section className="w-3/12">
          <div className="bg-white rounded-lg p-4 min-h-screen">
            <p className="text-xl mb-4">Category</p>
            <ul className="text-sm flex flex-col space-y-2">
              <li>Politics</li>
              <li>National</li>
              <li>International</li>
              <li>Business</li>
              <li>Finance</li>
              <li>Technology</li>
            </ul>
          </div>
        </section>
        <section className="w-9/12 px-4">
          <p className="text-xl mb-2">Headline News</p>
          <div className="rounded-xl bg-white p-1">
            <img src={featuredPost.image} alt="" className="rounded-xl" />
            <div className="flex justify-between px-4 mt-2">
              <div className="text-red-500 bg-red-100 rounded-full text-sm px-2">
                {featuredPost.category}
              </div>
            </div>
            <Link
              href={{
                pathname: `news/${featuredPost.slugPost}`,
                query: {
                  date: featuredPost.date,
                  category: featuredPost.categoryPost,
                },
              }}
            >
              <p className="mx-4 mt-2 text-lg cursor-pointer">
                {featuredPost.title}
              </p>
            </Link>
          </div>

          <div className="mt-8">
            <p className="font-bold mb-2">Latest News</p>
            <ul>
              {news.length > 0 &&
                news.map((item) => {
                  const { slug, category, date } = getSlug(item.slug);

                  return (
                    <Link
                      href={{
                        pathname: `news/${slug}`,
                        query: {
                          date: date,
                          category: category,
                        },
                      }}
                      key={item.slug}
                    >
                      <div className="cursor-pointer bg-white rounded-xl flex p-1 mb-2">
                        <img
                          src={item.image}
                          alt=""
                          className="h-24 w-24 object-cover rounded-xl mr-2"
                        />
                        <div className="">
                          <div className="text-yellow-700 bg-yellow-100 rounded-full text-sm px-2 inline-flex">
                            {item.category}
                          </div>
                          <p>{item.title}</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
