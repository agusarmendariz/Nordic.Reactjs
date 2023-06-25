import error from './images/clouderror.png'

const Error404= () =>{
    return (
        <div className="container my-5">
             <div className="d-flex justify-content-center">
             <div className="row">
                <div className="col text-center p-5">
                    <img src={error} alt="" />
                    <h1>Error 404</h1>
                </div>
            </div>
             </div>
            
        </div>

    )

}
export default Error404; 