

import {Outlet} from 'react-router-dom'
import {NavBar} from './components/Navbar/Navbar'
function RootLayout(){
    return(
<>
    <NavBar/>
    <Outlet/>

</>
    )
 }

 export default RootLayout;