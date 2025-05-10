import Image from "next/image";

const page = async ({ params }) => {
    // const { productid } = await params;
    let response;
    try {
        response = await fetch('https://dummyjson.com/products');
        response = await response.json()
        console.log(response.products);
    } catch (error) {
        console.log(error);
    }


    return (
        <div className="w-full p-5">
            {response.products ? (
                <div className="flex flex-wrap gap-4 justify-center">
                    {response.products.map((item) => (
                        <div
                            key={item.id}
                            className="w-[300px] border-2 rounded-2xl p-4"
                        >
                            <h1 className="font-bold text-lg">{item.title}</h1>
                            <p className="text-gray-600">{item.description}</p>
                            <Image
                                src={item.thumbnail}
                                width={300}
                                height={200}
                                alt={item.title}
                                className="rounded-lg"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );

}

export default page