import Footer from "../../components/Footer"
import Header from "../../components/Header"

function Dashboard(){
    return (
        <>
        <Header />
            <section className="dashboard">
                <aside>
                    <li>
                        <ul>Posts</ul>
                        <ul>Users</ul>
                    </li>
                </aside>
                
                <div className="dashboardActions">
                    <article className="dashboardAction">
                        <h2>Create new post</h2>
                    </article>
                    <article className="dashboardAction">
                        <h2>Edit post</h2>
                    </article>
                </div>
            </section>
        {/* <Footer /> */}
        </>
    )
}

export default Dashboard