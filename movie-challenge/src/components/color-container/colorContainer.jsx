/* eslint-disable react/prop-types */
import './colorContainer.css'

export default function ColorContainer({ children }) {
    return <div className="color-container">
        { children }
    </div>
}