import Welcome from "./Welcome";
import Products from "./products/Products";


export default function Pages({page}){

    function renderPage(){
        switch (page) {
             
            case "Welcome":
                return <Welcome/>
            case "Products":
                return <Products/>
            case "Cart":
                return 'cart'
            default:
                break;
        }
    }

    return <div>{renderPage()}</div>
 
}