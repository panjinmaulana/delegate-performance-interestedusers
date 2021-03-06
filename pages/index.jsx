import Head from "next/head";
import Router from "next/router";
import styles from "../styles/Home.module.css";

import { useState, useEffect } from "react";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import Sidebar from "../components/Sidebar";

export default function Home({ data }) {
  const [input, setInput] = useState("");
  const [filtered, setFiltered] = useState([]);

  function handleOnchange(e) {
    setInput(e.target.value);
  }

  useEffect(() => {
    const result = data.data.filter((el) => {
      return el.first_name.toLowerCase().includes(input.toLowerCase());
    });

    setFiltered([...result]);
  }, [input]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossorigin="anonymous"
        ></script>
      </Head>

      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col">
          <div className="d-flex mt-3">
            <img
              src="../assets/pencil.svg"
              alt=""
              className="align-self-center me-2"
            />
            <div className="mt-3">
              <p
                className="mt-2"
                style={{
                  fontFamily: "Gotham",
                  fontSize: "11px",
                  fontWeight: "550",
                }}
              >
                PERFORMANCE
              </p>
              <p
                style={{
                  fontFamily: "Gotham",
                  fontSize: "25px",
                  fontWeight: "550",
                  marginTop: "-15px",
                }}
              >
                Interested Users
              </p>
            </div>
          </div>

          <form style={{ textAlign: "right" }}>
            <input
              onChange={(e) => handleOnchange(e)}
              type="text"
              name="search"
              placeholder="Search by email or name"
              style={{
                fontSize: "11px",
                fontWeight: "400",
              }}
            />
          </form>

          <p
            style={{
              fontFamily: "Gotham",
              fontSize: "15px",
              fontWeight: "550",
              paddingLeft: "15px",
            }}
          >
            INTERESTED USERS
          </p>

          <div
            className="d-flex justify-content-between bd-highlight my-2"
            style={{
              width: "100%",
            }}
          >
            <div
              className="bd-highlight"
              style={{
                marginLeft: "15px",
                marginRight: "205px",
                color: "#7983A5",
                fontSize: "12px",
                fontWeight: "700",
              }}
            >
              ID
            </div>
            <div
              className="bd-highlight"
              style={{
                marginRight: "205px",
                color: "#7983A5",
                fontSize: "12px",
                fontWeight: "700",
              }}
            >
              EMAIL
            </div>
            <div
              className="flex-grow-1 bd-highlight"
              style={{ color: "#7983A5", fontSize: "12px", fontWeight: "700" }}
            >
              NAME
            </div>
          </div>

          {filtered.length
            ? filtered.map((el) => {
                return (
                  <div
                    key={el.id}
                    className="d-flex justify-content-between bd-highlight my-2"
                    style={{
                      width: "100%",
                      height: "50px",
                      backgroundColor: "#FFFFFF",
                      boxShadow:
                        "-12px -12px 20px rgba(255, 255, 255, 0.2), 10px 10px 24px rgba(166, 180, 200, 0.15)",
                      borderRadius: "12px",
                    }}
                  >
                    <div
                      className="flex-grow-1 bd-highlight"
                      style={{
                        marginLeft: "15px",
                        padding: "17px 0",
                        fontSize: "12px",
                        fontWeight: "600",
                      }}
                    >
                      {el.id}
                    </div>
                    <div
                      className="flex-grow-1 bd-highlight"
                      style={{
                        padding: "17px 0",
                        fontSize: "12px",
                        fontWeight: "600",
                        marginLeft: "-200px",
                      }}
                    >
                      {el.email}
                    </div>
                    <div
                      className="flex-grow-1 bd-highlight"
                      style={{
                        padding: "17px 0",
                        fontFamily: "Gotham",
                        fontSize: "12px",
                        fontWeight: "600",
                        marginLeft: "-230px",
                      }}
                    >
                      {`${el.first_name} ${el.last_name}`}
                    </div>
                  </div>
                );
              })
            : data.data &&
              data.data.map((el) => {
                return (
                  <div
                    key={el.id}
                    className="d-flex justify-content-between bd-highlight my-2"
                    style={{
                      width: "100%",
                      height: "50px",
                      backgroundColor: "#FFFFFF",
                      boxShadow:
                        "-12px -12px 20px rgba(255, 255, 255, 0.2), 10px 10px 24px rgba(166, 180, 200, 0.15)",
                      borderRadius: "12px",
                    }}
                  >
                    <div
                      className="flex-grow-1 bd-highlight"
                      style={{
                        marginLeft: "15px",
                        padding: "17px 0",
                        fontSize: "12px",
                        fontWeight: "600",
                      }}
                    >
                      {el.id}
                    </div>
                    <div
                      className="flex-grow-1 bd-highlight"
                      style={{
                        padding: "17px 0",
                        fontSize: "12px",
                        fontWeight: "600",
                        marginLeft: "-200px",
                      }}
                    >
                      {el.email}
                    </div>
                    <div
                      className="flex-grow-1 bd-highlight"
                      style={{
                        padding: "17px 0",
                        fontFamily: "Gotham",
                        fontSize: "12px",
                        fontWeight: "600",
                        marginLeft: "-230px",
                      }}
                    >
                      {`${el.first_name} ${el.last_name}`}
                    </div>
                  </div>
                );
              })}

          <div className="pagination">
            <a onClick={() => Router.push("/?page=prev")}>
              <img src="./assets/arrow_left.svg" alt="" />
            </a>
            <a onClick={() => Router.push("/?page=1")} className="active">
              1
            </a>
            <a onClick={() => Router.push("/?page=2")}>2</a>
            <a onClick={() => Router.push("/?page=next")}>
              <img src="./assets/arrow_right.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  let { page } = query;
  let currentPage = 1;

  if (page === "prev") {
    page = currentPage - 1;
  } else if (page === "next") {
    page = currentPage + 1;
  } else {
    page;
  }
  // Fetch data from external API
  const res = await fetch(`https://reqres.in/api/users?page=${page}`);
  const data = await res.json();

  currentPage = data.page;

  // Pass data to the page via props
  return { props: { data } };
}
