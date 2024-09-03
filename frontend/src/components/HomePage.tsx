import React from 'react';
import Navbar from './Navbar';

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className="banner_wrapper">
          <div className="banner">
            <div className="banner_content">
              <h1>Welcome to the Chamber of Honeybees!</h1>
              <hr className="custom-hr" />
              <p>We are a club which likes Honeybees a lot!</p>
              <h3>661-644-7333</h3>
              <button id="specialbtn1">Get Involved</button>
            </div>
          </div>
        </div>
      </section>

      <section id="sectabout">
        <div id="about">
          <div id="flexabout">
            {["Member Directory", "Calendar", "Gallery", "Join The Club", "About The Club", "Contact Info"].map((title, index) => (
              <div key={index} className="card">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <button type="button" className="btn btn-outline-info">
                  More Info
                </button>
              </div>
            ))}
          </div>
          <div id="abouthistory">
            <img src="images/oldcity.jpg" id="aboutimage" alt="Old City" />
            <h1>A Brief History</h1>
            <p className="px-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis rem
              tempore explicabo, tempora quam itaque ab ut delectus assumenda
              laborum. Dolores nulla, sequi corrupti a laboriosam in asperiores
              eos suscipit dolore repellat totam illo ipsa. Explicabo, doloribus?
              Reiciendis necessitatibus tempore rem itaque hic ipsum esse nobis
              iusto distinctio sed dignissimos est perspiciatis, nam molestiae
              recusandae veniam quas iure? Magni vel omnis perspiciatis?
              Accusantium cumque amet modi, obcaecati odit quas error deserunt!
              Quam repellat magni quo culpa id reprehenderit perferendis atque
              veniam nisi aliquam, optio amet provident iure excepturi! Sequi
              labore neque sit architecto minus, cupiditate ab obcaecati earum
              animi voluptatibus veritatis reiciendis officia. Natus modi
              necessitatibus quaerat consequuntur quos quas suscipit, non veniam
              et? Id eligendi sint sed dignissimos delectus modi corrupti
              molestias culpa sit iure, amet eius omnis. Aperiam incidunt autem
              culpa quas at quam maiores? Voluptas consectetur cupiditate
              assumenda architecto alias? Quos, cum iusto dignissimos porro
              consequatur eum quibusdam hic necessitatibus enim iste
              exercitationem quam nobis qui incidunt modi totam! Sequi sint, eos
              culpa dolore, alias cupiditate nostrum quibusdam reprehenderit
              labore suscipit consectetur sed perspiciatis ab molestias
              recusandae ullam tempora voluptatem. Perspiciatis consequatur,
              totam beatae illo esse qui vero ut magni, ad error aperiam neque!
              Corporis esse id eaque blanditiis odio nam atque minima corrupti
              praesentium. Blanditiis vitae temporibus aperiam ullam, quasi enim
              autem. Veritatis est ipsa totam aliquid voluptatum? Aspernatur eos
              veniam dignissimos, perferendis quasi id nobis voluptates unde
              repellat enim? Soluta, aliquid necessitatibus harum neque
              assumenda explicabo cupiditate, ullam iure sit recusandae sunt
              laborum nisi dolores!
            </p>
            <button type="button" className="btn btn-outline-secondary">
              More Info
            </button>
          </div>
        </div>
      </section>
      <hr className="custom-hr" />
      <footer>&copy; September 2, 2024 Club of the Honeybees</footer>
    </>
  );
};

export default HomePage;
