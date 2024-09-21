import StockList from '@/components/StockList';
import MostImpactedList from '@/components/MostImpactedList';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import './index.css';
import fetchNews from './scripts/fetchNews';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    fetchNews();
  }, [])

  return (
    <div className="flex justify-center pt-5">
      <Tabs defaultValue="top-news" className="w-10/12">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="top-news">Top News</TabsTrigger>
          <TabsTrigger value="most-impacted-stocks">Most Impacted Stocks</TabsTrigger>
        </TabsList>
        <TabsContent value="top-news"><StockList /></TabsContent>
        <TabsContent value="most-impacted-stocks"><MostImpactedList /></TabsContent>
      </Tabs>
    </div>
  )
}

export default App
