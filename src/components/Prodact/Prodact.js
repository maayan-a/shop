import "./Prodact.css";

function Prodact() {
    return(
    <div className="prodact-card">
        <div className="prodact-image">
            <img 
            src="https://www.photofamilia.com/wp-content/uploads/2017/09/%D7%97%D7%95%D7%9C%D7%A6%D7%94-%D7%91%D7%9C%D7%95%D7%A0%D7%99%D7%9D-%D7%AA%D7%9E%D7%95%D7%A0%D7%94.jpg"
            alt="prodact img"
            />
        </div>
        <div className="prodact-info">
        <h5>shirt</h5>
        <h5>5$</h5>
        </div>

    </div>
    );
}

export default Prodact;