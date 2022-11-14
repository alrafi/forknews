import axios from "axios";
import Head from "next/head";
// import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { HashLoader } from "react-spinners";
import ReactMarkdown from "react-markdown";

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
  const [news, setNews] = useState(null);
  const { query } = useRouter();

  const baseUrl = "https://jakpost-fork.vercel.app/api/detailpost";

  useEffect(() => {
    if (Object.keys(query).length !== 0) {
      const category = query.category;
      const _date = query.date;
      let date =
        _date.substr(0, 4) +
        "/" +
        _date.substr(4, 2) +
        "/" +
        _date.substr(6, 2);
      const slug = query.slug;

      axios.get(`${baseUrl}/${category}/${date}/${slug}`).then((res) => {
        console.log("NEWS", res.data);
        setNews(res.data.detail_post);
      });
    }
  }, [query]);

  if (!news)
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
    <div className="">
      <Head>
        <title>Fork News | {news.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {news && (
        <main className="p-8">
          <Link href="/">
            <h1 className="text-2xl mb-4 cursor-pointer">forknews</h1>
          </Link>
          <p className="text-xl font-bold mb-4">{news.title}</p>
          <img src={news.image} className="object-cover w-2/3 mb-4"></img>
          {/* <p>{news.post_content}</p> */}
          <ReactMarkdown children={news.post_content} />
        </main>
      )}
    </div>
  );
}
