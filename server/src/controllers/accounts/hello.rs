use warp::http::StatusCode;

// Controller function for the `/api/accounts/hello/{name}` route
pub async fn hello_account(name: String) -> Result<impl warp::Reply, warp::Rejection> {
    Ok(format!("Hello, {}!", name))
}

