function Header(){
    return (
        <header>
            <img src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png" width="40px"></img>
             <ul>
            <li>
                Javascript
            </li>
            <li>React js</li>
            <li>
                HTML
            </li>
        </ul>
        </header>
       
    )
}

function Footer(){
    return(
        <p>This is the paragraph</p>
    )
}

const New = (
    <div>
        <Header/>
        <Footer/>
    </div>
)
ReactDOM.render(New,document.getElementById("root"))