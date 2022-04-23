import {ReactSVG} from 'react-svg';
import { AppContext } from '../../context/appContext';
import { useContext } from 'react';

const Sidebar = () => {
    const {cartProducts} = useContext(AppContext)
    return (
        <div className="sidebar-options fixed top-1/4 left-auto right-0">
        <ul className="pl-0 mb-0 list-none flex flex-col gap-3">
            <li>
                <button className="inline-block h-10 w-10 border-0 text-center p-2">
                    <ReactSVG
                    className="fill-current "
                    src="/icons/search.svg"
                    beforeInjection={(svg) => {
                        svg.setAttribute("height", "auto");
                        svg.setAttribute("width", "auto");
                    }}
                />  
                </button>
            </li>
            <li>
                <button className="inline-block h-10 w-10 border-0 text-center p-2">
                    <ReactSVG
                    className="fill-current "
                    src="/icons/shopping-cart.svg"
                    beforeInjection={(svg) => {
                        svg.setAttribute("height", "auto");
                        svg.setAttribute("width", "auto");
                    }}
                /> 
                <span className="absolute w-5 h-5 left-auto right-0 rounded-full leading-[20px] top-0 bg-primary">
                    {cartProducts.length}
                </span> 
                </button>
            </li>
            <li>
                <button className="inline-block h-10 w-10 border-0 text-center p-2">
                    <ReactSVG
                    className="fill-current "
                    src="/icons/user.svg"
                    beforeInjection={(svg) => {
                        svg.setAttribute("height", "auto");
                        svg.setAttribute("width", "auto");
                    }}
                />  
                </button>
            </li>
            <li>
                <button className="inline-block h-10 w-10 border-0 text-center p-2">
                    <ReactSVG
                    className="fill-current "
                    src="/icons/heart.svg"
                    beforeInjection={(svg) => {
                        svg.setAttribute("height", "auto");
                        svg.setAttribute("width", "auto");
                    }}
                />  
                </button>
            </li>
        </ul>
        </div>
    );
}

export default Sidebar;