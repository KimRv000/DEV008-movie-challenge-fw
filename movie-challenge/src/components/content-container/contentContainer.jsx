import './contentContainer.css'

// eslint-disable-next-line react/prop-types
export default function ContentConatainer({ children }) {
    return <div className="content-container">
        { children }
    </div>
}