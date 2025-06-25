import Link from "next/link";
import Image from "next/image";

export default function BoardCard({ idx, total, id, name, image, title, content, like, comment, createdAt}) {
    // 4의 배수(4, 8, 12, ...)는 오른쪽 border를 빼기 위함
    const itemsPerRow = 4; // 한 줄에 몇 개의 아이템이 있는지
    const isMultipleOfFive = (idx + 1) % itemsPerRow === 0;

    const lastRowCount = total % itemsPerRow === 0 ? itemsPerRow : total % itemsPerRow;
    const lastRowStart = total - lastRowCount;

    return (
        <li className="w-1/4 min-h-[calc((100dvh-55px)/4)] text-surface">
            <Link
                href={`/board/${id}`}
                className={`h-full p-8 flex flex-col cursor-pointer 
                    ${idx < lastRowStart ? "border-b-base" : ''}
                    ${isMultipleOfFive ? "" : 'border-r-base'} 
                `}
            >
                <h3 className="text-2xl font-light font-eulyoo">방문했어요</h3>
                <p className="flex-1">
                    엔트리급 위스키 소개가 좋은 것 같아요
                </p>
                <div className="text-sm fcb">
                    <span>by {name}</span>
                    <span>{comment}</span>
                </div>
                {/*<div className="w-full pb-3 flex gap-4">*/}
                {/*    <div className="w-12 h-12 rounded-full bg-black">*/}
                {/*        <Image src={image} width={48} height={48} className="rounded-full object-cover" />*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <p>{name}</p>*/}
                {/*        <p>{createdAt}</p>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="flex flex-col gap-3 flex-1">*/}
                {/*    <h1>{title}</h1>*/}
                {/*    <p>{content}</p>*/}
                {/*</div>*/}
                {/*<div className="flex gap-6">*/}
                {/*    <button type="button">*/}
                {/*        <span>{like}</span>*/}
                {/*    </button>*/}
                {/*    <button type="button">*/}
                {/*        <span>{comment}</span>*/}
                {/*    </button>*/}
                {/*</div>*/}
            </Link>
        </li>
    )
}