import { useState } from "react"

export default function Contact() {
    let searchd = [
        { name: 'akram', phone: 8100154584 },
        { name: 'somashree', phone: 987484454 },
        { name: 'rahul', phone: 65846859485 }
    ]
    const [phone, setPhone] = useState([])

    function handleChange(e) {
        let search = e.target.value;

        let ss = searchd.filter(m => m.name === search)
        setPhone(ss)


    }
    return (
        <div className="phone">


            <div className="left">

                <input type="text" placeholder="search" onChange={handleChange} />

                {
                    phone.map((n, index) => <p>
                        {n.name} <div> {n.phone} </div></p>)
                }

                {
                    searchd.map(( n, index) => 
                    <p> {n.name} <div> {n.phone} </div></p>)
                }
            </div>
            <div className="right">
                <div><input type="file" /></div>
                <input type="text" placeholder="name" />
                <input type="number" />
                <button>  SAVE </button>
            </div>

        </div>
    )
}
