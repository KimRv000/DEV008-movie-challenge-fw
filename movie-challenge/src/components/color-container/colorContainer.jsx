/* eslint-disable react/prop-types */
import './colorContainer.css'

export default function ColorContainer({ child }) {
    return <div className="color-container">
        { child }
    </div>
}