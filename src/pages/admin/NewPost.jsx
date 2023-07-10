import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import axios from "axios";

function NewPost() {
  const [selectedFile, setSelectedFile] = useState(null);
  const uploadApiSrc = import.meta.env.VITE_UPLOADAPI;

  function sendCarApi(event) {
    event.preventDefault();
    let carsName = event.target[0].value;
    let carsPrice = event.target[1].value;

    if (selectedFile) {
      const carsImage = new FormData();
      carsImage.append("image", selectedFile);

      axios.defaults.headers.post["Content-Type"] = "application/json";
      axios
        .post(uploadApiSrc, {
          user: "admin",
          password: "admin",
          carsName: carsName,
          carsPrice: carsPrice,
          carsImage: carsImage,
        })
        .then((response) => {
          console.log("Upload bem-sucedido!", response.data);
        })
        .catch((error) => {
          console.log("Upload mal-sucedido!", error);
        });
    }
  }

  const fileSet = function (event) {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <>
      <Header onAdmin={true} />
      <section className="dashboard">
        <aside>
          <li>
            <ul>
              <a href="/dashboard">Posts</a>
            </ul>
            <ul>Users</ul>
          </li>
        </aside>

        <div className="posts">
          <h2>New Post</h2>
        </div>

        <div className="dashboardActions">
          <article className="dashboardAction">
            <h2>Information</h2>
          </article>
          <article className="infoAddPost">
            <form onSubmit={sendCarApi}>
              <label htmlFor="carsName">Car's Name</label>
              <br />
              <input type="text" name="carsName" id="" placeholder="" />
              <br />

              <label htmlFor="carsPrice">Car's Price</label>
              <br />
              <input type="number" name="carsPrice" id="" placeholder="" />
              <br />

              <label htmlFor="carsImage">Car's Image</label>
              <br />
              <input
                type="file"
                name="carsImage"
                id=""
                placeholder=""
                onChange={fileSet}
              />
              <br />

              <button type="submit">Enviar</button>
            </form>
          </article>
          {/* <article className="dashboardAction">
                        <h2>Edit post</h2>
                    </article> */}
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
}

export default NewPost;
