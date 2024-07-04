export type incomeprop= {
    category: string,
    amount: number,
    date: string,
    description: string
}

export default function IncomeCard(params: incomeprop) {
    return (
        <div className="income-card">
                <p>
                    Catagory: {params.category}
                </p>
                <p>
                    Amount of income: {params.amount}
                </p>


                <p>
                    Date: {params.date}
                </p>
                <p>
                    Description: {params.description}
                </p>
           
        </div>
    )
}
