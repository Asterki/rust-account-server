use warp::Filter;

// Import the accounts controller
use crate::controllers::accounts::{hello, register};

pub fn accounts_routes() -> impl Filter<Extract = impl warp::Reply, Error = warp::Rejection> + Clone
{
    // Define the API routes for accounts
    warp::path("api")
        .and(warp::path("accounts"))
        .and(hello_route().or(register_route()))
}

fn hello_route() -> impl Filter<Extract = impl warp::Reply, Error = warp::Rejection> + Clone {
    return warp::path("hello")
        .and(warp::path::param::<String>())
        .and_then(hello::hello_account);
}

fn register_route() -> impl Filter<Extract = impl warp::Reply, Error = warp::Rejection> + Clone {
    return warp::path("register")
        .and(warp::path::param::<String>())
        .and_then(register::register_account);
}
