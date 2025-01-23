
export function Modal ({open,onClose}) {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 text-center">
                <h2 className="text-2xl font-bold mb-4">Welcome to Brain B</h2>
                <p className="text-gray-700">Store and manage your digital inspirations effortlessly!</p>
            </div>
        </div>
    )
}