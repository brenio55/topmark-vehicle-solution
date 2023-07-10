import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Dashboard() {
  return (
    <>
      <Header onLandingPage={false} onAdmin={true} />
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
          <h2>Recent posts</h2>
        </div>

        <div className="dashboardActions">
          <a href="/newPost">
            <article className="dashboardAction createPost">
              <h2>Create new post</h2>
            </article>
          </a>
          {/* <article className="dashboardAction">
                        <h2>Edit post</h2>
                    </article> */}
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
}

export default Dashboard;
