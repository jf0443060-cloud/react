import { useState } from "react"
let searchd = [
    { name: 'akram', number: 8101946420 },
    { name: 'somashree', number: 9091065647 },
    { name: 'ali', number: 8391823976 }
]
export default function Contact() {
    const [user, setUser] = useState([])

    function handleChange(e) {
        let search = e.target.value
       let ss =  searchd.filter(m => m.name === search)
        setUser(ss)

    }
    return (
        <div className="parent">

            < div className="left" >

                <input type="text" placeholder="search..." className="formInput" onChange={handleChange} />

                {user.map((n, index) =>
                    <div className="user">
                        <div> <img src="pt.png" style={{ width: "50px", height: "50px", borderRadius: "50%", border: "2px solid red" }} /> </div>
                        <div className="userDetails">
                            <div>{n.name} </div>
                            <div>{n.number} </div>
                        </div>
                    </div>
                )

                }
            </div >

            <div>
                <div> <input type="text" placeholder="name" className="formInput" /> </div>
                <div> <input type="number" placeholder="number" className="formInput" /> </div>
                <div className="file"> <input type="file" className="formInput" /></div>
                <div className="nbutton"><button className="button"> SAVE </button></div>
            </div>
        </div >
    )
}
