import { useLocation } from "react-router-dom";
import DashMenu from "./DashMenu";

function Dash()
{
    const location=useLocation()
    return(
        <div className="container d-md-flex mt-4">
            <DashMenu></DashMenu>
<div className="w-100">
    {
        (location.state=='order'?<div><h3 className="text-center" style={{fontFamily:''}}> Order History</h3></div> :
    <div> 
        <h3 className="text-center">Account Settings</h3>
    </div>
    )
    }

</div>
        </div>
    )
}
export default Dash;