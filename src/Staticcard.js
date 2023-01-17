import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiStarSFill } from "react-icons/ri";

const Subcard = () =>
{

    var card= [
        {video:'vid1',course:'Development Course', rate :'5'},
        {video:'vid1',course:'Development Course', rate :'5'},
        {video:'vid1',course:'Development Course', rate :'5'},
    ]

    return(
        <>
        {
            card.map((product) =>
            {
        <div className='container'>
            <div className='row d-flex'>
                <div className="col-4 p-2 mt-4 main rounded-4">
                    <div className="image my-2 p-0">
                        <video key={product.video} src={require(`./image${product.video}.mp4`)} className='w-100 rounded-3 border'autoPlay muted loop></video>
                    </div>
                    <div className="p-3 ps-3 fs-4 fw-bolder corse border-top">
                        <a href ="#" className='text-dark text-center text-decoration-none'>{product.course}</a>
                    </div>
                    <div className="border-top p-2 rating d-flex justify-content-between">
                        <div className="rats ps-2 fs-3 text-warning">
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSFill/>
                        </div>
                    <div className='btn my-2'>
                        <a href = "#" className='fs-6 text-decoration-none bg-primary p-2 text-dark rounded-3'>Know More</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
          })
        }
        </>
    )
}

export default Subcard;