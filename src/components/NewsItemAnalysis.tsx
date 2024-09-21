import React from "react";
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from "@/components/ui/table";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type NewsItemAnalysisProps = {
    selected: number
}

const NewsItemAnalysis: React.FC<NewsItemAnalysisProps> = ({ selected }) => {
    return (
        <>
            {selected === 0 ? <NotSelected /> : <MostImpactedCard selected={selected}/>}
        </>
    )
}

const NotSelected: React.FC = () => {
    return (
        <div className="flex border rounded h-full min-h-40 items-center justify-center">
            <h3 className="">Please click on a news item to see the analysis</h3>
        </div>
    )
}

const NEWSANALYSIS = [
    {
        id: 1,
        companyName: 'Zomato Ltd',
        ticker: 'ZOMATO',
        impact: 'Positive',
        impactIntensity: '4',
        explanation: 'The news analysis for Zomato directly relies on the impact of the news article on the stock price. The news article is positive and the stock price is rising. The stock price is expected to increase by 1% within 3 months.'
    }, {
        id: 2,
        companyName: 'Sequoia Capital',
        ticker: 'SQ',
        impact: 'Negative',
        impactIntensity: '3',
        explanation: 'The impact of the news article on the stock price is negative and the stock price is falling. The stock price is expected to decrease by 1% within 3 months.'
    }, {
        id: 3,
        companyName: 'Tata Consultancy Services',
        ticker: 'TCS',
        impact: 'Positive',
        impactIntensity: '5',
        explanation: 'The impact of the news article on the stock price is positive and the stock price is rising. The stock price is expected to increase by 1% within 3 months.'
    }, {
        id: 4,
        companyName: 'Amazon',
        ticker: 'AMZN',
        impact: 'Negative',
        impactIntensity: '2',
        explanation: 'The impact of the news article on the stock price is negative and the stock price is falling. The stock price is expected to decrease by 1% within 3 months.'
    }, {
        id: 5,
        companyName: 'Flipkart',
        ticker: 'FLIPKART',
        impact: 'Positive',
        impactIntensity: '4',
        explanation: 'The impact of the news article on the stock price is positive and the stock price is rising. The stock price is expected to increase by 1% within 3 months.'
    }, {
        id: 6,
        companyName: 'Reliance Industries',
        ticker: 'RELIANCE',
        impact: 'Negative',
        impactIntensity: '3',
        explanation: 'The impact of the news article on the stock price is negative and the stock price is falling. The stock price is expected to decrease by 1% within 3 months.'
    }, {
        id: 7,
        companyName: 'Google',
        ticker: 'GOOGLE',
        impact: 'Positive',
        impactIntensity: '5',
        explanation: 'The impact of the news article on the stock price is positive and the stock price is rising. The stock price is expected to increase by 1% within 3 months.'
    }, {
        id: 8,
        companyName: 'Facebook',
        ticker: 'FACEBOOK',
        impact: 'Negative',
        impactIntensity: '2',
        explanation: 'The impact of the news article on the stock price is negative and the stock price is falling. The stock price is expected to decrease by 1% within 3 months.'
    }, {
        id: 9,
        companyName: 'Paytm',
        ticker: 'PAYTM',
        impact: 'Negative',
        impactIntensity: '4',
        explanation: 'The impact of the news article on the stock price is positive and the stock price is rising. The stock price is expected to increase by 1% within 3 months.'
    }, {
        id: 10,
        companyName: 'HDFC Bank',
        ticker: 'HDFCBANK',
        impact: 'Negative',
        impactIntensity: '3',
        explanation: 'The impact of the news article on the stock price is negative and the stock price is falling. The stock price is expected to decrease by 1% within 3 months.'
    }
]

const MostImpactedCard: React.FC<NewsItemAnalysisProps> = ({ selected }) => {
    return (
        <div className="flex border rounded h-fit items-center justify-center">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Ticker</TableHead>
                        <TableHead>Impact</TableHead>
                        <TableHead className="text-center">Intensity (1 - 5)</TableHead>
                        <TableHead>Explanation</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {NEWSANALYSIS.map(({ id, companyName, ticker, impact, impactIntensity, explanation }) => (
                        <TableRow key={id}
                            className={impact === 'Positive' ? 'bg-green-50 hover:bg-green-200'
                                                             : 'bg-red-50 hover:bg-red-200'}
                        >
                            <TableCell>{companyName}</TableCell>
                            <TableCell>{ticker}</TableCell>
                            <TableCell>{impact}</TableCell>
                            <TableCell className="text-center">{impactIntensity}</TableCell>
                            <TableCell>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger><div className="truncate max-w-28">{explanation}</div></TooltipTrigger>
                                    <TooltipContent>
                                        <div className="max-w-48">{explanation}</div>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default NewsItemAnalysis;