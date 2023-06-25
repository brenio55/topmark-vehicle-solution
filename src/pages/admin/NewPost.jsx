import Footer from "../../components/Footer"
import Header from "../../components/Header"

function NewPost(){
    return (
        <>
        <Header onAdmin={true} />
            <section className="dashboard">
                <aside>
                    <li>
                        <ul><a href="/dashboard">Posts</a></ul>
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
                        <form action="">
                            <label htmlFor="carsName">Car's Name</label><br/>
                            <input type="text" name="carsName" id="" placeholder=""/><br/>

                            <label htmlFor="carsPrice">Car's Price</label><br/>
                            <input type="number" name="carsPrice" id="" placeholder=""/><br/>

                            <label htmlFor="carsImage">Car's Image</label><br/>
                            <input type="file" name="carsImage" id="" placeholder=""/><br/>

                            
                        </form>
                    </article>
                    {/* <article className="dashboardAction">
                        <h2>Edit post</h2>
                    </article> */}
                </div>

                
            </section>
        {/* <Footer /> */}
        </>
    )
}

export default NewPost