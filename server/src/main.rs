mod routes;
mod controllers;

#[tokio::main]
async fn main() {
// Import the routes from the routes module
    let accounts_routes = routes::accounts::accounts_routes();

    // Start the Warp server
    warp::serve(accounts_routes)
        .run(([127, 0, 0, 1], 3030));

}
