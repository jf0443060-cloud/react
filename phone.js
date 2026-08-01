import { useState } from "react"

export default function Contact() {
    const [user, setUser] = useState([])
    const [filterItem, setFilter] = useState([])
    const [search, setSearch] = useState("")

    function handleChange(e) {
        let searchText = e.target.value
        setSearch(searchText)
        let ss = user.filter(m => m.name === searchText)
        setFilter(ss)

    }

    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [img, setImg] = useState("")

    function handleName(e) {
        let set = e.target.value;
        setName(set)
    }

    function handleNumber(e) {
        let set2 = e.target.value;
        setNumber(set2)
    }

    function handleImage(e) {
        let set3 = e.target.files[0];
        setImg(set3)
    }

    function save() {
        let arr = [...user]
        arr.push({
            name: name,
            number: number,
            image: img
        }
        )
        setUser(arr)
    }
    return (
        <div className="parent">

            < div className="left" >

                <input type="text" placeholder="search..." className="formInput" onChange={handleChange} />

                {search.length === 0 ? (
                    user.map((n, index) =>
                        <div className="user">
                            <div> <img src={URL.createObjectURL(n.image)} style={{ width: "50px", height: "50px", borderRadius: "50%", border: "2px solid red" }} /> </div>
                            <div className="userDetails">
                                <div>{n.name} </div>
                                <div>{n.number} </div>
                            </div>

                        </div>
                    )) : (
                    filterItem.map((n, index) =>
                        <div className="user">
                            <div> <img src={URL.createObjectURL(n.image)} style={{ width: "50px", height: "50px", borderRadius: "50%", border: "2px solid red" }} /> </div>
                            <div className="userDetails">
                                <div>{n.name} </div>
                                <div>{n.number} </div>
                            </div>

                        </div>
                    )


                )

                }


            </div >

            <div>
                <div> <input type="text" placeholder="name" className="formInput" value={name} onChange={handleName} /> </div>
                <div> <input type="number" placeholder="number" className="formInput" value={number} onChange={handleNumber} /> </div>
                <div className="file"> <input type="file" className="formInput" onChange={handleImage} /></div>
                <div className="nbutton" onClick={save}><button className="button"> SAVE </button></div>
            </div>
        </div >
    )
}
