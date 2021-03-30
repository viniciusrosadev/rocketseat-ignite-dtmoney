import { useContext } from "react";
import { useTransactions } from '../../hooks/useTransactions';
import { Container } from "./styles";

export function TransactionsTable() {
    const { transactions } = useTransactions();

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
                        <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}</td>
                    </tr>
                ))}
                <tbody>

                </tbody>
            </table>
        </Container>
    )
}