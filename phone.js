import { useRef, useState } from "react"

export default function () {
    const [user, setUser] = useState([])
    const [search, setSearch] = useState("")
    const [filterText, setfilterText] = useState([])

    function searcht(e) {
        let searchtext = e.target.value
        setSearch(searchtext)
        let filter = user.filter(m => m.name === searchtext)
        setfilterText(filter)


    }
    const fileRef = useRef()
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [file, setFile] = useState("")
    function handleName(e) {
        let nn = e.target.value
        setName(nn)


    }

    function handleNumber(e) {
        let phoneNumber = e.target.value;
        setPhone(phoneNumber)
    }
    function handleFile(e) {
        let fileImage = e.target.files[0]
        setFile(fileImage)
    }
    function save() {
        let arr = [...user]
        arr.push({
            name: name,
            phone: phone,
            file: file
        })
        setUser(arr)
        setName("")
        setPhone("")
        fileRef.current.value = ""


    }
    function deletContact(index) {

        let arr2 = [...user]
        let result = window.confirm(' are you sure delete this user')
        if (result) {
            arr2.splice(index, 1)
            setUser(arr2)
            alert('user delete ')
        } else {
            alert('delet cancel')
        }
        


    }

    return (

        <div className="user">
            <div className="left">

                <h1> {user.length}</h1> <input type="text" className="formInput" placeholder="search..." onChange={searcht} />


                {search.length === 0 ? (
                    user.sort((a, b) => a.name.localeCompare(b.name)).map((n, index) =>
                        <div className="user2">
                            <div> <img src={n.file ? URL.createObjectURL(n.file) : "data:image/png;base64,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"} style={{ width: "50px", height: "50px", borderRadius: "50%", border: "2px solid red" }} /> </div>
                            <div className="userDetails">
                                <div>{n.name} </div>
                                <div>{n.phone} </div>
                                <button className="deletButton" onClick={() => deletContact(index)}> delet </button>
                            </div>

                        </div>

                    )
                ) : filterText.map((n, index) =>
                    <div className="user2">
                        <div> <img src={URL.createObjectURL(n.file)} style={{ width: "50px", height: "50px", borderRadius: "50%", border: "2px solid red" }} /> </div>
                        <div className="userDetails">
                            <div>{n.name}  </div>
                            <div>{n.phone} </div>

                        </div>

                    </div>

                )
                }

            </div>

            <div className="right">
                <div> <input type="text" placeholder="name" className="formInput" value={name} onChange={handleName} /> </div>
                <div> <input type="number" placeholder="number" className="formInput" value={phone} onChange={handleNumber} /> </div>
                <div className="file"> <input type="file" ref={fileRef} className="formInput" onChange={handleFile} /></div>
                <div className="nbutton" onClick={save} ><button className="button"> SAVE </button></div>
            </div>
        </div>

    )
}
