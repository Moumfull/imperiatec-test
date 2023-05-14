import React from 'react'
import {FaRegTrashAlt} from 'react-icons'

const style = {

}

const todo = ({todo}) => {
    return (
        <li className={style.li}>
            <div className={style.row}>
                <input type="checkbox" />
                <p className={style.text}>{todo}</p>
            </div>
            <button>{<FaRegTrashAlt />}</button>
        </li>
    )
}

export default todo