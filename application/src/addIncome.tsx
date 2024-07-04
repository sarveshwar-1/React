
export default function addIncome(props:{onSubmit: any}) {
    return (
        <>
        <div className="addIncome">   
        <form onSubmit={props.onSubmit}>
            <div className="catagory">
            <label htmlFor="category">Category</label>
            <input type="text" name="category" id="category" />
            </div>
            <div className="amount">
            <label htmlFor="amount">Amount</label>
            <input type="number" name="amount" id="amount" />
            </div>
            <div className="date">
            <label htmlFor="date">Date</label>
            <input type="date" name="date" id="date" />
            </div>
            <div className="description">
            <label htmlFor="description">Description</label>
            <input type="text" name="description" id="description" />
            </div>
            
            <button type = "submit" >
             <span className="add">+</span> <span className="add-income">Add Income</span>
            </button>
        </form>
        </div>
        </>
    )
}