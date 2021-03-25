import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Container } from "./styles"

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createAt: string;
}

export function TransactionsTable() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                {transactions.map(transaction => (
                    <tr>
                        <td>{transaction.title}</td>
                        <td className="deposit">{transaction.amount}</td>
                        <td>{new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(transaction.amount)}</td>
                        <td>{transaction.category}</td>
                        <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createAt))}</td>
                    </tr>
                ))}
                <tbody>

                </tbody>
            </table>
        </Container>
    )
}