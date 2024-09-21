import React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, TableHeader } from "@/components/ui/table";

const MOST_IMPACTED = [
    {
        id: 1,
        companyName: 'Zomato Ltd',
        ticker: 'ZOMATO',
        positiveCount: 8,
        negativeCount: 3,
    },
    {
        id: 2,
        companyName: 'Tata Consultancy Services Ltd',
        ticker: 'TCS',
        positiveCount: 8,
        negativeCount: 3,
    },
]

const MostImpactedList: React.FC = () => {
    return (
        <div className="flex border rounded h-fit items-center justify-center">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Company Name</TableHead>
                        <TableHead className="">Ticker</TableHead>
                        <TableHead className="text-center bg-green-50">Positive Count</TableHead>
                        <TableHead className="text-center bg-red-50">Negative Count</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {MOST_IMPACTED.map(({ id, companyName, ticker, positiveCount, negativeCount }) => (
                        <TableRow key={id}>
                            <TableCell>{companyName}</TableCell>
                            <TableCell>{ticker}</TableCell>
                            <TableCell className="text-center bg-green-100">{positiveCount}</TableCell>
                            <TableCell className="text-center bg-red-100">{negativeCount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default MostImpactedList;