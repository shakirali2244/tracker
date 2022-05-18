import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { Ticker, TCard } from "../components/TCard";

const Home: NextPage = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    const f = async () => {
      await fetch("http://localhost:3001")
        .then((response) => response.json())
        .then((data) => setData(data));
    };
    f();

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, [data]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Tracker</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="relative w-full h-full ">
          <div className="fixed top-0 left-0 right-0 navbar bg-base-100">
            <div className="flex-1">
              <a className="btn btn-ghost normal-case text-xl">Tracker</a>
            </div>
            <div className="flex-none gap-2">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered"
                />
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://api.lorem.space/image/face?hash=33791" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-8 gap-4">
            {data.map((obj: Ticker) => {
              return (
                <>
                  <TCard obj={obj}></TCard>
                </>
              );
            })}
          </div>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
