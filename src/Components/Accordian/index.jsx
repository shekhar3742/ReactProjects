import { useState } from "react"
import datass from "./data"
import "./index.css"

function Accordian() {
    const [selected, setSelected] = useState(null);

    function handlesingleselection(id) {
        setSelected(id === selected ? null : id);

    }
    return (
        <div className="wrapper">
            <div className="accordian">
                {
                    datass && datass.length > 0 ? (datass.map(dataitem => <div className="item">
                        <div onClick={() => handlesingleselection(dataitem.id)} className="title">
                            <h2>{dataitem.question}</h2>
                            <span>+</span>
                        </div>
                        {
                            selected === dataitem.id ? <div className="content">
                                <h4>{dataitem.answer}</h4>

                            </div> : null
                        }
                    </div>
                    )) : (
                        <div>No Data Found!</div>
                    )
                }

            </div>

        </div>
    )
}

export default Accordian