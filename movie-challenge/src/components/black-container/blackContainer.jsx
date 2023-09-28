import './blackContainer.css'

// eslint-disable-next-line react/prop-types
export default function BlackContainer({ children }) {
    return <div className="black-container">
        { children }
    </div>
}