import Link from "next/link";
import Image from "next/image";

export default function BoardCard({ id, name, image, title, content, like, comment, createdAt}) {
    return (
        <li className="w-[calc(100%/2-20px)] h-[32 0px]">
            <Link href={`/board/${id}`} className="h-full p-8 rounded-2xl shadow bg-white flex flex-col gap-6 items-start justify-between">
                <div className="w-full pb-3 border-b-[1px] border-gray-200 flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-black">
                        <Image src={image} width={48} height={48} className="rounded-full object-cover" />
                    </div>
                    <div>
                        <p>{name}</p>
                        <p>{createdAt}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3 flex-1">
                    <h1>{title}</h1>
                    <p>{content}</p>
                </div>
                <div className="flex gap-6">
                    <button type="button">
                        <span>{like}</span>
                    </button>
                    <button type="button">
                        <span>{comment}</span>
                    </button>
                </div>
            </Link>
        </li>
    )
}