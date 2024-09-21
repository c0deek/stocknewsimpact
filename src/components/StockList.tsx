import React from 'react';
import NewsItemAnalysis from './NewsItemAnalysis';
import NewsCard from './NewsCard';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

const NEWS_LIST = [
    {
        id: 1,
        title: 'Stock 1',
        description: 'Stock 1 description',
        url: 'https://www.google.com',
        dateTime: Date.parse('2024-09-01T11:20:00.000Z')
    }, {
        id: 2,
        title: 'Stock 2',
        description: 'Stock 2 description',
        url: 'https://www.google.com',
        dateTime: Date.parse('2024-09-01T11:22:00.000Z')
    }, {
        id: 3,
        title: 'Stock 3',
        description: 'Stock 3 description',
        url: 'https://www.google.com',
        dateTime: Date.parse('2024-09-01T11:24:00.000Z')
    }, {
        id: 4,
        title: 'Stock 4',
        description: 'Stock 4 description',
        url: 'https://www.google.com',
        dateTime: Date.parse('2024-09-01T11:26:00.000Z')
    }, {
        id: 5,
        title: 'Stock 5',
        description: 'Stock 5 description',
        url: 'https://www.google.com',
        dateTime: Date.parse('2024-09-01T11:28:00.000Z')
    }, {
        id: 6,
        title: 'Stock 6',
        description: 'Stock 6 description',
        url: 'https://www.google.com',
        dateTime: Date.parse('2024-09-01T11:30:00.000Z')
    }, {
        id: 7,
        title: 'Stock 7',
        description: 'Stock 7 description',
        url: 'https://www.google.com',
        dateTime: Date.parse('2024-09-01T11:32:00.000Z')
    }, {
        id: 8,
        title: 'Stock 8',
        description: 'Stock 8 description',
        url: 'https://www.google.com',
        dateTime: Date.parse('2024-09-01T11:34:00.000Z')
    }, {
        id: 9,
        title: 'Stock 9',
        description: 'Stock 9 description',
        url: 'https://www.google.com',
        dateTime: Date.parse('2024-09-01T11:36:00.000Z')
    }, {
        id: 10,
        title: 'Stock 10',
        description: 'Stock 10 description',
        url: 'https://www.google.com',
        dateTime: Date.parse('2024-09-01T11:38:00.000Z')
    }
]

const StockList: React.FC = () => {
    const [selected, setSelected] = React.useState(0);

    const handleNewsclick = (id: number) => {
        setSelected(id);
    }

    return (
        <>
            <ResizablePanelGroup direction="horizontal" className='gap-1'>
                <ResizablePanel>
                    <div>
                        {NEWS_LIST.map(({ id, title, description, url, dateTime }) => (
                            <div className="flex flex-col" onClick={() => handleNewsclick(id)}>
                                <NewsCard key={id} id={id} title={title} description={description} url={url} dateTime={dateTime} />
                            </div>
                        ))}
                    </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel>
                    <div>
                        <NewsItemAnalysis selected={selected}/>
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </>
    )
}

export default StockList;