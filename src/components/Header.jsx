export default function Header() {
    return (
        <div className="header">
            <img src={`${process.env.PUBLIC_URL}/images/react-logo.png`} alt="React Logo" />
            <h2 className="facts-heading">ReactFacts</h2>
        </div>
    );
}
