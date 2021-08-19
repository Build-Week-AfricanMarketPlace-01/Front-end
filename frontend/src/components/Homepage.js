import React from "react";
import "../African Marketplace/assets/css/main.css";
import pic01 from "../African Marketplace/images/pic01.jpeg";
import pic02 from "../African Marketplace/images/pic02.jpeg";
import pic03 from "../African Marketplace/images/pic03.jpeg";
import styled from "styled-components";
import { useHistory } from "react-router";

//added vercel needed dependency
const A = styled.button`
  justify-content: flex-end;
  flex-direction: column;
  margin-right: 10px;
  margin-left: 20px;

  :hover {
    background-color: #ed4933;
    border-radius: 10px;
  }
`;

export default function Homepage() {
  const { push } = useHistory();

  const loginHandler = () => {
    push("/login");
  };
  const signupHandler = () => {
    push("/register");
  };
  const additemsHandler = () => {
    push("/additems");
  };
  const listHandler = () => {
    push("/list");
  };

  return (
    <div>
      <div id="page-wrapper">
        <header id="header" className="alt">
          <A onClick={loginHandler}>Login</A>
          <A onClick={signupHandler}>Signup</A>
          <A onClick={additemsHandler}>Add Items</A>
          <A onClick={listHandler}>List</A>
        </header>

        <section id="banner">
          <div className="inner">
            <h2>African Marketplace</h2>
            <p>
              Sauti Africa empowers small business owners, particularly women,{" "}
              <br />
              to improve their business and economic opportunities
              <br /> to grow out of poverty.{" "}
            </p>
            <ul className="actions special">
              <li>
                <a
                  href="/register"
                  onClick={signupHandler}
                  className="button primary"
                >
                  Activate
                </a>
              </li>
            </ul>
          </div>
          <a href="/#" className="more scrolly">
            Learn More
          </a>
        </section>

        <section id="one" className="wrapper style1 special">
          <div className="inner">
            <header className="major">
              <h2>
                Arcu aliquet vel lobortis ata nisl
                <br />
                eget augue amet aliquet nisl cep donec
              </h2>
              <p>
                Aliquam ut ex ut augue consectetur interdum. Donec amet
                imperdiet eleifend
                <br />
                fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
                ullamcorper.
              </p>
            </header>
            <ul className="icons major">
              <li>
                <span className="icon fa-gem major style1">
                  <span className="label">Lorem</span>
                </span>
              </li>
              <li>
                <span className="icon fa-heart major style2">
                  <span className="label">Ipsum</span>
                </span>
              </li>
              <li>
                <span className="icon solid fa-code major style3">
                  <span className="label">Dolor</span>
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section id="two" className="wrapper alt style2">
          <section className="spotlight">
            <div className="image">
              <img src={pic01} alt="" />
            </div>
            <div className="content">
              <h2>
                Magna primis lobortis
                <br />
                sed ullamcorper
              </h2>
              <p>
                Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
                imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
              </p>
            </div>
          </section>
          <section className="spotlight">
            <div className="image">
              <img src={pic02} alt="" />
            </div>
            <div className="content">
              <h2>
                Tortor dolore feugiat
                <br />
                elementum magna
              </h2>
              <p>
                Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
                imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
              </p>
            </div>
          </section>
          <section className="spotlight">
            <div className="image">
              <img src={pic03} alt="" />
            </div>
            <div className="content">
              <h2>
                Augue eleifend aliquet
                <br />
                sed condimentum
              </h2>
              <p>
                Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
                imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
              </p>
            </div>
          </section>
        </section>

        <section id="three" className="wrapper style3 special">
          <div className="inner">
            <header className="major">
              <h2>Accumsan mus tortor nunc aliquet</h2>
              <p>
                Aliquam ut ex ut augue consectetur interdum. Donec amet
                imperdiet eleifend
                <br />
                fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
                ullamcorper.
              </p>
            </header>
            <ul className="features">
              <li className="icon fa-paper-plane">
                <h3>Arcu accumsan</h3>
                <p>
                  Augue consectetur sed interdum imperdiet et ipsum. Mauris
                  lorem tincidunt nullam amet leo Aenean ligula consequat
                  consequat.
                </p>
              </li>
              <li className="icon solid fa-laptop">
                <h3>Ac Augue Eget</h3>
                <p>
                  Augue consectetur sed interdum imperdiet et ipsum. Mauris
                  lorem tincidunt nullam amet leo Aenean ligula consequat
                  consequat.
                </p>
              </li>
              <li className="icon solid fa-code">
                <h3>Mus Scelerisque</h3>
                <p>
                  Augue consectetur sed interdum imperdiet et ipsum. Mauris
                  lorem tincidunt nullam amet leo Aenean ligula consequat
                  consequat.
                </p>
              </li>
              <li className="icon solid fa-headphones-alt">
                <h3>Mauris Imperdiet</h3>
                <p>
                  Augue consectetur sed interdum imperdiet et ipsum. Mauris
                  lorem tincidunt nullam amet leo Aenean ligula consequat
                  consequat.
                </p>
              </li>
              <li className="icon fa-heart">
                <h3>Aenean Primis</h3>
                <p>
                  Augue consectetur sed interdum imperdiet et ipsum. Mauris
                  lorem tincidunt nullam amet leo Aenean ligula consequat
                  consequat.
                </p>
              </li>
              <li className="icon fa-flag">
                <h3>Tortor Ut</h3>
                <p>
                  Augue consectetur sed interdum imperdiet et ipsum. Mauris
                  lorem tincidunt nullam amet leo Aenean ligula consequat
                  consequat.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section id="cta" className="wrapper style4">
          <div className="inner">
            <header>
              <h2>Arcue ut vel commodo</h2>
              <p>
                Aliquam ut ex ut augue consectetur interdum endrerit imperdiet
                amet eleifend fringilla.
              </p>
            </header>
            <ul className="actions stacked">
              <li>
                <a
                  href="/register"
                  onClick={signupHandler}
                  className="button fit primary"
                >
                  Activate
                </a>
              </li>
              <li>
                <a href="/#" className="button fit">
                  Learn More
                </a>
              </li>
            </ul>
          </div>
        </section>

        <footer id="footer">
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/?lang=en"
                className="icon brands fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                className="icon brands fa-facebook-f"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/?hl=en"
                className="icon brands fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://dribbble.com/"
                className="icon brands fa-dribbble"
              >
                <span className="label">Dribbble</span>
              </a>
            </li>
            <li>
              <a href="/#" className="icon solid fa-envelope">
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
        </footer>
      </div>

      <script src="../African Marketplace/assets/js/jquery.min.js"></script>
      <script src="../African Marketplace/assets/js/jquery.scrollex.min.js"></script>
      <script src="../African Marketplace/assets/js/jquery.scrolly.min.js"></script>
      <script src="../African Marketplace/assets/js/browser.min.js"></script>
      <script src="../African Marketplace/assets/js/breakpoints.min.js"></script>
      <script src="../African Marketplace/assets/js/util.js"></script>
      <script src="../African Marketplace/assets/js/main.js"></script>
    </div>
  );
}
