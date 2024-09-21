import React from "react";

type NewsCardProps = {
    id: number
    title: string
    description: string
    url: string
    dateTime: number
}

const NewsCard: React.FC<NewsCardProps> = ({ id, title, description, url, dateTime }) => {
    return (
        <div key={id} className="bg-zinc-50 p-2 my-1 rounded">
            <div className="flex justify-between">
                <h3 className="font-semibold"><a href={url} target="_blank">{title}</a></h3>
                <p className="text-xs">{new Date(dateTime).toLocaleString('en-US', {
                    day: '2-digit',
                    month: 'short',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false,
                }).split(',').join(' - ')}</p>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default NewsCard;