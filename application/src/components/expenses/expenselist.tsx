export type expenseprop= {
    category: string,
    title: string
    amount: number,
    date: string,
    
}

export default function expenseCard(params: expenseprop) {
    return (
        <div className="expense-card">
                <p>
                    Catagory: {params.category}
                </p>
                <p>
                    Title: {params.title}
                </p>
                <p>
                    Amount of income: {params.amount}
                </p>


                <p>
                    Date: {params.date}
                </p>
                
           
        </div>
    )
}

