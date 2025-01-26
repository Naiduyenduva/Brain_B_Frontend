interface featureProps {
    title: string,
    description: string
}

export function Feature ({title,description}:featureProps) {
    return (
        <div className="w-fit h-fit shadow-md border border-slate-50 p-5 bg-purple-200 rounded-lg">
            <h1 className="font-bold text-2xl bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">{title}</h1>
            <p className="text-gray-700">{description}</p>
        </div>
    )
}